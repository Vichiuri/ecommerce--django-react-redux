from distributor.models.distributor import DistTax, DistributorOptions
from django.core.paginator import Paginator
from django.db.models import Q
from django.shortcuts import redirect
from django.http import HttpResponse

from ..serializers import CustomColorsSerializer, CountrySerializer, DistOptionsSerializer, StateSeriliazer, DistributorSerializer, EmailSettingsSerializer, BusinessSettingsSerializer
from distributor.models import CustomColors, WorldCountry, WorldCity, DistUsers, DistEmailSettings, BusinessSettings
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
import json
from distributor.commons import calculateSubscription, checkCurrentProgress
from datetime import datetime
from retailer.serializers import DistTaxSerializer


class CustomColorsApi(generics.RetrieveAPIView):
    """
    Fetch custom css colors for products and variations
    """
    serializer_class = CustomColorsSerializer

    def get(self, request):
        query = self.request.query_params.get("query")
        if query:
            colors = CustomColors.objects.filter(
                Q(label__icontains=query))[:25]
        else:
            colors = CustomColors.objects.order_by('?').all()[:25]

        return Response({
            'colors': CustomColorsSerializer(colors, many=True).data
        })


class WorldCountriesApi(generics.RetrieveAPIView):
    serializer_class = CountrySerializer

    def get(self, request):
        query = self.request.query_params.get("query")
        if query:
            country = WorldCountry.objects.filter(Q(name__icontains=query))
        else:
            country = WorldCountry.objects.all()

        return Response({
            'countries': CountrySerializer(country, many=True).data,
        })


class WorldCitiesApi(generics.RetrieveAPIView):
    """
    Fetch Geograpical world cities based on countries
    """
    serializer_class = StateSeriliazer

    def get(self, request):
        query = self.request.query_params.get("query")
        country_id = self.request.query_params.get("country_id")
        if country_id:
            cities = WorldCountry.objects.get(id=country_id).cities
        elif query:
            cities = WorldCity.objects.filter(
                Q(country_name__icontains=query) | Q(city_name__icontains=query))
        else:
            cities = WorldCity.objects.order_by('?').all()[:25]

        return Response({
            'cities': StateSeriliazer(cities, many=True).data,
        })


class SettingApi(generics.RetrieveAPIView):
    """
    Settings View for viewing and editing distributor website settings
    """
    serializer_class = DistributorSerializer

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        final_date = calculateSubscription(distributor).replace(tzinfo=None)
        date_today = datetime.today().replace(tzinfo=None)
        days_remaining = final_date - date_today

        if date_today.replace(tzinfo=None) > final_date.replace(tzinfo=None):
            return Response({
                'message': "Subscription has expired",
            }, status=status.HTTP_402_PAYMENT_REQUIRED)
        else:
            return Response({
                'distributor': DistributorSerializer(distributor, many=False).data,
                'days_left': days_remaining
            })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        formData = request.POST.copy()
        distributor.name = formData['c_name']
        distributor.email2 = formData['email2']
        distributor.phone = formData['phone']
        distributor.phone2 = formData['phone2']
        distributor.category = formData['category']
        distributor.website = formData['website']
        distributor.address = formData['address']
        distributor.state = WorldCity.objects.get(id=formData['state'])
        distributor.country = WorldCountry.objects.get(id=formData['country'])
        distributor.description = formData['description']
        if request.FILES.get('photo'):
            distributor.logo.delete(save=False)
            distributor.logo = request.FILES.get('photo')

        distributor.save()

        return Response({
            'message': "Distributor has been updated",
            'distributor': DistributorSerializer(distributor, many=False).data
        })


class EmailSettingsApi(generics.RetrieveAPIView):
    """
    View for distributor to set and view distributor send email settings
    """
    serializer_class = EmailSettingsSerializer

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        email_settings = DistEmailSettings.objects.filter(
            distributor=distributor).first()

        return Response({
            'email_settings': EmailSettingsSerializer(email_settings, many=False).data,
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        try:
            json_data = json.loads(request.body)
            email_settings = DistEmailSettings(distributor=distributor, email_host=json_data['email_host'],
                                               email_port=json_data['email_port'], email_user=json_data['email_user'],
                                               email_password=json_data['email_password'],
                                               use_tls=json_data['use_tls'], test_receiver=json_data['test_receiver'])

            email_settings.save()

            view_complete = checkCurrentProgress(distributor)

            return Response({
                'message': "Email Settings have been added",
                'email_settings': EmailSettingsSerializer(email_settings, many=False).data,
                "view_complete": view_complete
            }, status=status.HTTP_201_CREATED)
        except Exception as e:
            content = {'error': 'Email configuration is wrong'}
            return Response(content, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request):

        try:
            json_data = json.loads(request.body)
            email_settings = DistEmailSettings.objects.get(id=json_data['id'])
            email_settings.email_host = json_data['email_host']
            email_settings.email_port = json_data['email_port']
            email_settings.email_user = json_data['email_user']
            email_settings.email_password = json_data['email_password']
            email_settings.use_tls = json_data['use_tls']
            email_settings.test_receiver = json_data['test_receiver']

            email_settings.save()

            return Response({
                'message': "Email Settings have been updated",
                'email_settings': EmailSettingsSerializer(email_settings, many=False).data,
            }, status=status.HTTP_201_CREATED)
        except Exception as e:
            content = {'error': 'Email configuration is wrong'}
            return Response(content, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class BusinessSettingsApi(generics.RetrieveAPIView):
    """
    Setting view for retailers
    """
    serializer_class = BusinessSettingsSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        businessSettings = BusinessSettings.objects.filter(
            distributor=distributor)

        return Response({
            'business_settings': BusinessSettingsSerializer(businessSettings, many=True).data
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        businessSettings = BusinessSettings(distributor=distributor, title=json_data['title'],
                                            value=json_data['value'])
        businessSettings.save()

        return Response({
            "message": "Setting has been added",
            'business_setting': BusinessSettingsSerializer(businessSettings).data
        }, status=status.HTTP_201_CREATED)

    def put(self, request):
        json_data = json.loads(request.body)
        businessSettings = BusinessSettings.objects.get(id=json_data['id'])
        businessSettings.title = json_data['title']
        businessSettings.value = json_data['value']

        businessSettings.save()

        return Response({
            "message": "Setting has been updated",
            'business_setting': BusinessSettingsSerializer(businessSettings).data
        }, status=status.HTTP_201_CREATED)

    def delete(self, request):
        setting_id = self.request.query_params.get("setting_id")
        businessSetting = BusinessSettings.objects.get(id=setting_id)
        businessSetting.delete()

        return Response({
            "message": "Business Setting has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)


class DistOptionsSettingsApi(generics.RetrieveAPIView):
    """
    Setting view for retailers
    Such as terms and about us
    """
    serializer_class = DistOptionsSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        distOption = DistributorOptions.objects.filter(distributor=distributor)
        if distOption.first():
            return Response({
                'dist_option': DistOptionsSerializer(distOption.first()).data
            })
        else:
            dist_settings = DistributorOptions(distributor=distributor)
            dist_settings.save()
            return Response({
                'dist_option': DistOptionsSerializer(dist_settings).data
            })

    def put(self, request):
        json_data = json.loads(request.body)

        distOption = DistributorOptions.objects.get(id=json_data['id'])
        distOption.use_price_list = json_data['use_price_list']
        distOption.use_sales_target = json_data['use_sales_target']
        distOption.use_offers = json_data['use_offers']

        distOption.save()

        return Response({
            'message': "Options have been updated",
            'dist_option': DistOptionsSerializer(distOption).data
        }, status=status.HTTP_201_CREATED)

    def patch(self, request):
        json_data = json.loads(request.body)

        distOption = DistributorOptions.objects.get(id=json_data['id'])
        distOption.about_company = json_data['about_company']
        distOption.terms_company = json_data['terms_company']
        distOption.privacy_company = json_data['privacy_company']

        distOption.save()

        return Response({
            'message': "Company status has been updated",
            'dist_option': DistOptionsSerializer(distOption).data
        }, status=status.HTTP_201_CREATED)


class DistTaxSettingsApi(generics.RetrieveAPIView):
    serializer_class = DistTaxSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        query = request.GET.get('query')
        page = request.GET.get("page")

        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        querySet = DistTax.objects.filter(distributor=distributor)
        

        if query:
            search_query = querySet.filter(
                Q(tax_name__icontains=query) | Q(tax__icontains=query)).distinct()
            querySet = search_query

        paginator = Paginator(querySet, 25)  # Show 25 per page.
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            'tax_list': DistTaxSerializer(pageList, many=True).data,
            'last_page': last_page
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        data = request.data.copy()
        tax_item = DistTax(distributor=distributor,
                           tax_name=data.get('name'), tax=data.get('rate'), tax_type=data.get('tax_type'))
        tax_item.save()

        return Response({
            'message': "Tax Settings has been added",
            "tax_item": DistTaxSerializer(tax_item, many=False).data,
        })

    def delete(self, request):
        tax_id = self.request.query_params.get("tax_id")
        tax = DistTax.objects.filter(id=tax_id).first()
        tax.delete()

        return Response({
            "message": "Tax Rate has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)
