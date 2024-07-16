from django.core.paginator import Paginator
from distributor.commons import str_to_bool
from distributor.models import DistUsers, MobileBanner, Product, PriceOffer, MNotification, RetailerProfile, SalesMan
from rest_framework import permissions, generics, status
from rest_framework.response import Response
import json
from distributor.threading import MobileAutomatedThreading

from mobile_retailer.m_serializers.retailer_data import MobileBannerSerializer
from retailer.serializers import MNotificationSerializer
from distributor.models.distributor import DistArea, DistCity, DistRegion
from netbotAuth.models.users import User
from datetime import datetime


class BannersApi(generics.RetrieveAPIView):
    """
    Set Banners for website and mobile
    """
    serializer_class = MobileBannerSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        banners = MobileBanner.objects.filter(
            distributor=distributor).order_by('-position')

        return Response({
            'banners': MobileBannerSerializer(banners, many=True).data
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        formData = request.POST.copy()
        banner = MobileBanner(distributor=distributor,
                              name=formData['name'], text=formData['text'])

        if request.FILES.get('photo'):
            banner.pic = request.FILES.get('photo')
        last_banner = MobileBanner.objects.all().order_by('-position').first()
        if last_banner:
            banner.position = last_banner.position + 1
        if formData['product_id']:
            product = Product.objects.get(id=formData['product_id'])
            banner.product = product
            banner.status = "Product"
        elif formData['offer_id']:
            offer = PriceOffer.objects.get(id=formData['offer_id'])
            banner.offer = offer
            banner.status = 'Offer'
        else:
            banner.status = 'Banner'

        banner.save()

        return Response({
            'messsage': "Banner has been added",
            'banner': MobileBannerSerializer(banner).data
        })

    def put(self, request):

        formData = request.POST.copy()
        banner = MobileBanner.objects.get(id=formData['id'])
        if request.FILES.get('photo'):
            banner.pic.delete(save=True)
            banner.pic = request.FILES.get('photo')
        banner.name = formData['name']
        banner.text = formData['text']
        if formData['product_id']:
            product = Product.objects.get(id=formData['product_id'])
            banner.product = product
            banner.offer = None
            banner.status = "Product"
        elif formData['offer_id']:
            offer = PriceOffer.objects.get(id=formData['offer_id'])
            banner.offer = offer
            banner.product = None
            banner.status = 'Offer'
        else:
            banner.status = 'Banner'
        banner.save()

        return Response({
            'messsage': "Banner has been updated",
            'banner': MobileBannerSerializer(banner).data
        })

    def patch(self, request):
        json_data = json.loads(request.body)
        initial = json_data['initial']
        final = json_data['final']
        if final > initial:
            banners = MobileBanner.objects.filter(
                position__range=(initial, final))

            for banner in banners:
                if banner.position != initial:
                    final_position = banner.position - 1
                    banner.position = final_position
                else:
                    banner.position = final
                banner.save()
        else:
            banners = MobileBanner.objects.filter(
                position__range=(final, initial))
            for banner in banners:
                if banner.position != initial:
                    final_position = banner.position + 1
                    banner.position = final_position
                else:
                    banner.position = final
                banner.save()

        return Response({
            "message": "Banner position was updated"
        })

    def delete(self, request):
        banner_id = self.request.query_params.get("banner_id")
        banner = MobileBanner.objects.get(id=banner_id)
        banner.delete()

        return Response({
            "message": "Banner has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)


class MNotificationApi(generics.RetrieveAPIView):
    """
    Send Scheduled notifications to retailers
    """
    serializer_class = MNotificationSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        querySet = MNotification.objects.filter(
            distributor=distributor).exclude(status="Order").order_by('-id')
        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "notifications": MNotificationSerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        formData = request.data
        is_automated = formData.get('is_automated')
        print(formData)
        notification = MNotification(distributor=distributor, name=formData.get('name'),
                                     display_text=formData.get('display_text'), detail=formData.get('detail'),
                                     send_to=formData.get('select_type'))

        if request.FILES.get('photo'):
            notification.pic = request.FILES.get('photo')

        if formData.get('product_id'):
            product = Product.objects.get(id=formData.get('product_id'))
            notification.product = product
            notification.status = 'Product'
        elif formData.get('offer_id'):
            offer = PriceOffer.objects.get(id=formData.get('offer_id'))
            notification.offer = offer
            notification.status = 'Offer'
        else:
            notification.status = 'Notification'

        if is_automated and str_to_bool(is_automated) == True:
            notification.is_automated = True
            notification.show_from = formData.get('show_from')
            notification.show_to = formData.get('show_to')

        else:
            today = datetime.now()
            date_formatted = f'{today.year}-{today.month}-{today.day}'
            notification.is_automated = False
            notification.show_from = date_formatted
            notification.show_to = date_formatted
            #

        notification.save()

        if formData.get('select_type') == "All" or formData.get('select_type') == "Retailer":
            retailer_profiles = RetailerProfile.objects.filter(
                distributor=distributor)
            if formData.get('region_id'):
                region = DistRegion.objects.get(id=formData.get('region_id'))
                querySet = retailer_profiles.filter(region=region)
                retailer_profiles = querySet
                notification.region = region

            if formData.get('city_id'):
                city = DistCity.objects.get(id=formData.get('city_id'))
                querySet2 = retailer_profiles.filter(city=city)
                retailer_profiles = querySet2
                notification.city = city

            if formData.get('area_id'):
                area = DistArea.objects.get(id=formData.get('area_id'))
                querySet3 = retailer_profiles.filter(area=area)
                retailer_profiles = querySet3
                notification.area = area

            for profile in retailer_profiles:
                notification.users.add(profile.retailer.retailer_user.user)

        if formData.get('select_type') == "All" or formData.get('select_type') == "SalesPeople":
            sales_people = SalesMan.objects.filter(distributor=distributor)
            for person in sales_people:
                sale_user = User.objects.filter(email=person.email)
                if sale_user.first():
                    notification.users.add(sale_user.first())

        notification.save()

        if is_automated is None or str_to_bool(is_automated) == False:
            MobileAutomatedThreading(notification).start()

        return Response({
            'message': "Notification has been added",
            'notification': MNotificationSerializer(notification).data,
        }, status=status.HTTP_201_CREATED)

    def put(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        formData = request.POST.copy()
        notification = MNotification.objects.get(id=formData['id'])
        notification.name = formData['name']
        notification.display_text = formData['display_text']
        notification.detail = formData['detail']
        notification.show_from = formData['show_from']
        notification.show_to = formData['show_to']
        notification.send_to = formData['select_type']
        if request.FILES.get('photo'):
            notification.pic.delete(save=False)
            notification.pic = request.FILES.get('photo')

        if formData['product_id']:
            product = Product.objects.get(id=formData['product_id'])
            notification.product = product
            notification.status = 'Product'
        elif formData['offer_id']:
            offer = PriceOffer.objects.get(id=formData['offer_id'])
            notification.offer = offer
            notification.status = 'Offer'
        else:
            notification.status = 'Notification'

        notification.users.clear()

        if formData.get('select_type') == "All" or formData.get('select_type') == "Retailer":
            retailer_profiles = RetailerProfile.objects.filter(
                distributor=distributor)
            if formData['region_id']:
                region = DistRegion.objects.get(id=formData['region_id'])
                querySet = retailer_profiles.filter(region=region)
                retailer_profiles = querySet
                notification.region = region

            if formData['city_id']:
                city = DistCity.objects.get(id=formData['city_id'])
                querySet2 = retailer_profiles.filter(city=city)
                retailer_profiles = querySet2
                notification.city = city

            if formData['area_id']:
                area = DistArea.objects.get(id=formData['area_id'])
                querySet3 = retailer_profiles.filter(area=area)
                retailer_profiles = querySet3
                notification.area = area

            for profile in retailer_profiles:
                notification.users.add(profile.retailer.retailer_user.user)

        if formData.get('select_type') == "All" or formData.get('select_type') == "SalesPeople":
            sales_people = SalesMan.objects.filter(distributor=distributor)
            for person in sales_people:
                sale_user = User.objects.filter(email=person.email)
                if sale_user.first():
                    notification.users.add(sale_user.first())

        notification.save()

        return Response({
            'message': "Notification has been updated",
            'notification': MNotificationSerializer(notification).data,
        }, status=status.HTTP_201_CREATED)

    def delete(self, request):
        notification_id = self.request.query_params.get("notification_id")
        notification = MNotification.objects.get(id=notification_id)
        notification.delete()

        return Response({
            "message": "Notification has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)
