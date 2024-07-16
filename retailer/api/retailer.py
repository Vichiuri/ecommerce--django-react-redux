from django.db.models import Q, query
from django.core.paginator import Paginator

from distributor.commons import random_password
from ..serializers import RetailerProfileSerializer, RetailerSerializer, RegisterSerializer, DistAreaSerializer, \
    DistRegionSerializer, DistCitySerializer
from distributor.models import Retailer, RetailerProfile, DistRegion, DistArea, DistCity, DistUsers, PriceLevel, \
    SalesMan, Distributor
from mobile_retailer.models import RetailerUser
from netbotAuth.models import User
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from distributor.commons import checkCurrentProgress, customEncrypt, generateRandomString, send_dist_email, send_html_email
import json
from distributor.models.distributor import DistEmailSettings
from distributor.threading import CreateRetailerNotifcation
from datetime import datetime, timedelta


class RetailerApi(generics.RetrieveAPIView):
    """
    Add Create and view retailer based on distributor
    """
    serializer_class = RetailerSerializer
    permissions_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
        offset = 25
        query = self.request.query_params.get("query")
        rows = self.request.query_params.get("rows")
        querySet = RetailerProfile.objects.filter(
            distributor=distributor).order_by('-id')

        if rows:
            offset = rows

        if query:
            retailer_query = querySet.filter(Q(contact_name__icontains=query) | Q(contact_phone__icontains=query) |
                                             Q(contact_email__icontains=query) | Q(region__name__icontains=query) | Q(
                city__name__icontains=query) |
                Q(area__name__icontains=query) | Q(salesman__first_name__icontains=query) | Q(
                salesman__last_name__icontains=query) |
                Q(retailer__name__icontains=query) | Q(retailer__email__icontains=query) | Q(
                retailer__phone__icontains=query))

            querySet = retailer_query

        paginator = Paginator(querySet, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "retailers": RetailerProfileSerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        formData = request.POST.copy()
        formData['pic'] = request.FILES.get('photo')

        ret_email = formData.get('email')

        if Retailer.objects.filter(email=ret_email).first():

            retailer = Retailer.objects.filter(email=ret_email).first()
            retailer.distributors.add(distributor)
            retailer.save()

            check_profile = RetailerProfile.objects.filter(
                distributor=distributor, retailer=retailer)

            if check_profile.first():
                return Response({
                    'message': "Retailer with this profile already exists",
                    "retailer": RetailerProfileSerializer(check_profile.first()).data,
                }, status=status.HTTP_201_CREATED)
            else:
                retailer_profile = createRetailProfile(
                    formData, distributor, retailer, user)
                view_complete = checkCurrentProgress(distributor)
                CreateRetailerNotifcation(retailer_profile, 'created').start()
                return Response({
                    "message": "Retailer has been added",
                    "retailer": RetailerProfileSerializer(retailer_profile).data,
                    "view_complete": view_complete
                }, status=status.HTTP_201_CREATED)
        else:
            ret_user = None
            distUser = DistUsers.objects.filter(user=user).first()
            distributor = distUser.distributor
            retailer = Retailer(pin_no=formData.get('pin_no'), name=formData.get('name'), email=formData.get('email'),
                                phone=formData.get('phone'))
            if request.FILES.get('photo'):
                retailer.pic = request.FILES.get('photo')

            check_user = User.objects.filter(email=retailer.email)
            check_distributor = Distributor.objects.filter(
                email=retailer.email, kra=retailer.pin_no)

            if check_user.first() and check_distributor.first():
                ret_user = check_user.first()

            elif check_user.first() and not check_distributor.first():
                return Response({
                    "error": "This email has already been used"
                }, status=status.HTTP_401_UNAUTHORIZED)
            else:
                pass_word = random_password()
                email_context = {
                    "retailer": retailer,
                    "password": pass_word,
                    "dist": distributor,
                    "url_host": request.get_host()
                }

                email_sent = send_dist_email(distributor=distributor, template_name="emails/retailer_creation.html",
                                             to_emails=[retailer.email],
                                             subject="Retailer Creation", context_dict=email_context)

                if not email_sent:
                    pass_word = "user123"
                    message = "Email settings not configured well email was not sent to salesman password is user123"

                userData = {}

                userData['email'] = retailer.email
                userData['password'] = pass_word

                userSerilizer = RegisterSerializer(data=userData)
                userSerilizer.is_valid(raise_exception=True)

                ret_user = userSerilizer.save()

            retailer.save()

            retailer_profile = createRetailProfile(
                formData, distributor, retailer, user)
            retailer.distributors.add(distributor)
            message = "Retailer has been added"

            retailerUser = RetailerUser(user=ret_user, retailer=retailer)
            retailerUser.save()

            view_complete = checkCurrentProgress(distributor)
            CreateRetailerNotifcation(retailer_profile, 'created').start()
            return Response({
                "message": message,
                "retailer": RetailerProfileSerializer(retailer_profile).data,
                "view_complete": view_complete
            }, status=status.HTTP_201_CREATED)

    def put(self, request):

        formData = request.POST.copy()
        retailer_profile = RetailerProfile.objects.get(id=formData['id'])

        if formData['region_id']:
            region = DistRegion.objects.get(id=formData['region_id'])
            retailer_profile.region = region
        else:
            retailer_profile.region = None
        if formData['area_id']:
            area = DistArea.objects.get(id=formData['area_id'])
            retailer_profile.area = area
        else:
            retailer_profile.area = None
        if formData['city_id']:
            city = DistCity.objects.get(id=formData['city_id'])
            retailer_profile.city = city
        else:
            retailer_profile.city = None
        if formData['level_id']:
            price_level = PriceLevel.objects.get(id=formData['level_id'])
            retailer_profile.price_level = price_level

        if formData['contact_person']:
            retailer_profile.contact_person = formData['contact_person']
        if formData['contact_details']:
            retailer_profile.contact_details = formData['contact_details']
        if formData['contact_person_position']:
            retailer_profile.contact_person_position = formData['contact_person_position']
        if formData['contact_city']:
            retailer_profile.contact_city = formData['contact_city']
        if formData['contact_person_phone']:
            retailer_profile.contact_person_phone = formData['contact_person_phone']

        if request.FILES.get('photo'):
            retailer_profile.contact_pic.delete(save=False)
            retailer_profile.contact_pic = request.FILES.get('photo')

        retailer_profile.contact_name = formData['name']
        retailer_profile.contact_phone = formData['phone']

        if formData['salesman_id']:
            salesMan = SalesMan.objects.get(id=formData['salesman_id'])
            retailer_profile.retailer.salesmen.add(salesMan)
            retailer_profile.salesman = salesMan

        retailer_profile.save()

        CreateRetailerNotifcation(retailer_profile, 'updated').start()
        return Response({
            "message": "Retailer has been updated",
            "retailer": RetailerProfileSerializer(retailer_profile).data
        }, status=status.HTTP_201_CREATED)

    def patch(self, request):
        try:
            json_data = json.loads(request.body)
            retailer = Retailer.objects.get(id=json_data.get('id'))
            querySet = User.objects.filter(email=retailer.email)

            if querySet.first():
                user = querySet.first()
                encoded_email = customEncrypt(user.email)
                token = generateRandomString(25)
                current_time = datetime.timestamp(
                    datetime.now() + timedelta(days=1))
                complete_token = str(token)+str(current_time)
                user.reset_token = complete_token
                user.save()

                reset_url = str(request.get_host(
                ))+'/retailer/api/auth/forgot/?u='+encoded_email+'&token='+complete_token

                email_context = {
                    'reset_url': reset_url,
                }

                email_sent = send_html_email([user.email, ], "Forgot Password",
                                             "emails/forgot_password_template.html", context=email_context
                                             )

                if email_sent:
                    return Response({
                        'message': "A link to reset was sent to the retailer"
                    })
                else:
                    return Response({
                        'error': "Something was not configured well try again"
                    }, status=status.HTTP_400_BAD_REQUEST)

            else:
                return Response({
                    'message': "Could not find retailer with that email"
                }, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(e)
            return Response({
                'error': "Could not set reset email"
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        retailer_id = self.request.query_params.get("retailer_id")
        retailer_profile = RetailerProfile.objects.get(id=retailer_id)
        retailer = retailer_profile.retailer
        retailer.distributors.remove(distributor)
        retailer.save()
        retailer_profile.delete()

        CreateRetailerNotifcation(retailer_profile, 'deleted').start()
        return Response({
            "message": "Retailer has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)


class UpdateRetailerApi(generics.RetrieveAPIView):
    serializer_class = RetailerSerializer
    permissions_classes = [
        permissions.IsAuthenticated
    ]

    def patch(self, request):
        try:
            json_data = request.data.copy()
            print(json_data)
            print(json_data.get('status'))
            retailer_profile = RetailerProfile.objects.get(
                id=json_data.get('ret_id'))
            retailer_profile.is_active = json_data.get('status')
            retailer_profile.save()

            return Response({
                'message': "Retailer profile has been updated",
                'retailer': RetailerProfileSerializer(retailer_profile, many=False).data,
            })
        except Exception as e:
            return Response({
                'error': "Something went wrong"
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class SearchRetailerApi(generics.RetrieveAPIView):
    """
    Search Api view for retailers
    """
    serializer_class = RetailerSerializer
    permissions_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        querySet = RetailerProfile.objects.filter(
            distributor=distributor).order_by('-id')
        query = self.request.query_params.get("query")

        if query:
            retailer = querySet.filter(Q(contact_name__icontains=query) | Q(contact_phone__icontains=query) |
                                       Q(contact_email__icontains=query) | Q(region__name__icontains=query) | Q(
                city__name__icontains=query) |
                Q(area__name__icontains=query) | Q(salesman__first_name__icontains=query) | Q(
                salesman__last_name__icontains=query) |
                Q(retailer__name__icontains=query) | Q(retailer__email__icontains=query) | Q(
                retailer__phone__icontains=query))

            querySet = retailer

        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "retailers": RetailerProfileSerializer(pageList, many=True).data,
            "last_page": last_page
        })


class DistRegionApi(generics.RetrieveAPIView):
    """
    Add Retailer based regions and location
    """
    serializer_class = DistRegionSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
        query = self.request.query_params.get("query")
        querySet = DistRegion.objects.filter(
            distributor=distributor).order_by('name')

        if query:
            regions = querySet.filter(Q(name__icontains=query))
            querySet = regions

        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            'retailer_regions': DistRegionSerializer(pageList, many=True).data,
            'last_page': last_page
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        name = json_data['region']
        cities = json_data['cities']

        region = DistRegion(distributor=distributor, name=name)
        region.save()
        for viewCity in cities:
            city = DistCity(distributor=distributor,
                            name=viewCity, region=region)
            city.save()

        view_complete = checkCurrentProgress(distributor)

        return Response({
            "message": "Region has been added",
            "retailer_region": DistRegionSerializer(region).data,
            "view_complete": view_complete
        }, status=status.HTTP_201_CREATED)

    def put(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        region = DistRegion.objects.get(id=json_data['id'])
        region.name = json_data['name']

        if json_data['delete_cities']:
            del_cities = json_data['delete_cities']
            for del_city in del_cities:
                city = DistCity.objects.get(id=del_city)
                city.delete()

        if json_data['add_cities']:
            add_cities = json_data['add_cities']
            for add_city in add_cities:
                city = DistCity(distributor=distributor,
                                name=add_city, region=region)
                city.save()

        region.save()

        return Response({
            "message": "Region has been updated",
            "retailer_region": DistRegionSerializer(region).data
        }, status=status.HTTP_201_CREATED)

    def delete(self, request):
        region_id = self.request.query_params.get("region_id")
        region = DistRegion.objects.get(id=region_id)
        region.delete()

        return Response({
            "message": "Region has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)


class DistCityViewSet(viewsets.ModelViewSet):
    """
    Fetch retailer based city based on their region
    """
    serializer_class = DistCitySerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        region_id = self.request.query_params.get("region")
        if region_id:
            region = DistRegion.objects.get(id=region_id)
            querySet = DistCity.objects.filter(
                distributor=distributor, region=region)
        else:
            querySet = DistCity.objects.filter(distributor=distributor)
        return querySet


class DistCityApi(generics.RetrieveAPIView):
    """
    Add and fetch individual retailer cities
    """
    serializer_class = DistCitySerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        region_id = self.request.query_params.get("region")
        if region_id:
            region = DistRegion.objects.get(id=region_id)
            querySet = DistCity.objects.filter(
                distributor=distributor, region=region)
        else:
            querySet = DistCity.objects.filter(distributor=distributor)

        return Response({
            'cities': DistCitySerializer(querySet, many=True).data
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        region = DistRegion.objects.get(id=json_data['region_id'])
        city = DistCity(distributor=distributor,
                        name=json_data['name'], region=region)
        city.save()

        return Response({
            "message": "City has been added",
            "dist_city": DistCitySerializer(city).data
        })

    def put(self, request):
        json_data = json.loads(request.body)
        city = DistCity.objects.get(id=json_data['id'])
        city.region = DistRegion.objects.get(id=json_data['region_id'])
        city.name = json_data['name']

        city.save()

        return Response({
            "message": "City has been updated",
            "dist_city": DistCitySerializer(city).data
        })

    def delete(self, request):
        city_id = self.request.query_params.get("city_id")
        city = DistCity.objects.get(id=city_id)
        city.delete()

        return Response({
            "message": "City has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)


class DistAreaApi(generics.RetrieveAPIView):
    """
    View to control and add retailer locations 
    """
    serializer_class = DistAreaSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        city_id = self.request.query_params.get("city")
        if (city_id):
            city = DistCity.objects.get(id=city_id)
            querySet = DistArea.objects.filter(
                distributor=distributor, city=city)
        else:
            querySet = DistArea.objects.filter(distributor=distributor)

        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            'areas': DistAreaSerializer(pageList, many=True).data,
            'last_page': last_page
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        name = json_data['area']
        city = DistCity.objects.get(id=json_data['city'])

        area = DistArea(distributor=distributor, name=name, city=city)
        area.save()

        return Response({
            "message": "Area has been added",
            "area": DistAreaSerializer(area).data
        }, status=status.HTTP_201_CREATED)

    def put(self, request):
        json_data = json.loads(request.body)
        area = DistArea.objects.get(id=json_data['id'])
        area.name = json_data['area']
        area.city = DistCity.objects.get(id=json_data['city'])

        area.save()

        return Response({
            "message": "Area has been updated",
            "area": DistAreaSerializer(area).data
        }, status=status.HTTP_201_CREATED)

    def delete(self, request):
        area_id = self.request.query_params.get("area_id")
        area = DistArea.objects.get(id=area_id)
        area.delete()

        return Response({
            "message": "Area has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)


def createRetailProfile(formData, distributor, retailer, dist_user):
    retailer_profile = RetailerProfile(distributor=distributor, retailer=retailer,
                                       contact_name=formData.get('name'), contact_email=formData.get('email'),
                                       contact_phone=formData.get('phone')
                                       )

    if formData.get('region_id'):
        retailer_profile.region = DistRegion.objects.get(
            id=formData.get('region_id'))
    if formData.get('area_id'):
        retailer_profile.area = DistArea.objects.get(
            id=formData.get('area_id'))
    if formData.get('city_id'):
        retailer_profile.city = DistCity.objects.get(
            id=formData.get('city_id'))
    if formData.get('level_id'):
        retailer_profile.price_level = PriceLevel.objects.get(
            id=formData.get('level_id'))

    if formData.get('contact_person'):
        retailer_profile.contact_person = formData.get('contact_person')
    if formData.get('contact_details'):
        retailer_profile.contact_details = formData.get('contact_details')
    if formData.get('contact_person_position'):
        retailer_profile.contact_person_position = formData.get(
            'contact_person_position')
    if formData.get('contact_city'):
        retailer_profile.contact_city = formData.get('contact_city')
    if formData.get('contact_person_phone'):
        retailer_profile.contact_person_phone = formData.get(
            'contact_person_phone')

    if formData.get('pic'):
        retailer_profile.contact_pic = formData.get('pic')

    if formData.get('salesman_id'):
        salesMan = SalesMan.objects.get(id=formData.get('salesman_id'))
        retailer.salesmen.add(salesMan)
        retailer_profile.salesman = salesMan

    retailer_profile.created_by = dist_user
    retailer_profile.save()
    return retailer_profile
