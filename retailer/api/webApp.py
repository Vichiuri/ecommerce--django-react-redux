from django.db.models import Count, Sum
from django.core.paginator import Paginator
from django.core import serializers
from django.utils import timezone
from django.http import HttpResponse

from ..serializers import P_CategorySerializer, ProductCategorySerializer, ProductSerializer, RetailerSerializer, DistNotificationsSeriliazer, \
    RetailerStaticsViewSerializer, SubCategorySerializer
from distributor.models import DistUsers, Product, Retailer, RetailOrders, DistNotifications, DistEmailSettings, \
    Product, SalesMan, DistRegion, Retailer, PriceLevel, PriceOffer
from rest_framework import permissions, generics, status
from rest_framework.response import Response
from distributor.commons import checkCurrentProgress, str_to_bool
from distributor.models.netbot import PermissionGroup
from distributor.models.distributor import Delivery, PCategory, RetailerProfile, SubCategory
import json


class DashBoardApi(generics.RetrieveAPIView):
    """
    Fetch statics for presenting on dashboard for both graphs and card views
    """
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
        today = timezone.now()

        product_count = Product.objects.filter(distributor=distributor).count()
        orders = RetailOrders.objects.filter(distributor=distributor)
        delivered =  orders.filter(status='Dispatched').count()
        total_orders = orders.count()
        pending_orders_count = orders.filter(status='Pending').count()
        orders_onHold_count = orders.filter(status='On Hold').count()
        orders_approve = orders.filter(status='Approved').count()
        orders_partial = orders.filter(status='Partial').count()
        orders_declined = orders.filter(status='Declined').count()
        orders_cancelled = orders.filter(status='CANCELED').count()
        complete_orders = orders.filter(when_approved__isnull=False)
        monthly_complete_count = complete_orders.filter(when_approved__month=today.month).count()
        complete_orders_count = complete_orders.count()
        retailers_count = Retailer.objects.filter(distributors__in=[distributor]).count()
        revenue = complete_orders.aggregate(Sum("total_cost")).get('total_cost__sum', 0)
        monthly_revenue = complete_orders.filter(when_approved__month=today.month).aggregate(Sum("total_cost")).get(
            'total_cost__sum', 0)
        retailers = Retailer.objects.filter(distributors__in=[distributor])
        monthly_retailer_count = retailers.filter(when_created__month=today.month).count()
        view_retailer = retailers.annotate(
            count=Count("retailer_ord_view__when_approved")).order_by('-count')[:5]
        products = Product.objects.filter(distributor=distributor).annotate(count=Sum('order_product__qty')).order_by(
            '-count')[:5]
        offers = PriceOffer.objects.filter(distributor=distributor, date_from__lte=today, date_to__gte=today).count()
        salesmen = SalesMan.objects.filter(distributor=distributor).count()
        employees = DistUsers.objects.filter(distributor=distributor).count()
        permission_groups = PermissionGroup.objects.filter(distributor=distributor).count() 
        categories = []
        v_categories = PCategory.objects.filter(parent_category__isnull=True).order_by('?')
        print(v_categories)
        for v_item in v_categories:
            cat_prod = Product.objects.filter(category=v_item).count()
            categories.append(dict(name=v_item.name, count=cat_prod))


        dashBoardCount = {
            "product_count": product_count,
            "total_orders": total_orders,
            "complete_orders": complete_orders_count,
            "retailers_count": retailers_count,
            "revenue": revenue,
            'pending_orders_count':pending_orders_count,
            'orders_onHold_count':orders_onHold_count,
            'offers': offers,
            'salesmen': salesmen,
            'monthly_revenue': monthly_revenue, 'monthly_retailer': monthly_retailer_count,
            'monthly_complete_order': monthly_complete_count,
            'employees': employees,
            'permission_groups': permission_groups,
            'delivered':delivered,
            'orders_approve':orders_approve,
            'orders_partial':orders_partial,
            'orders_declined':orders_declined,
            'orders_cancelled':orders_cancelled,
            'categories': categories,
        }

        return Response({
            "dashBoardCount": dashBoardCount,
            "view_retailers": RetailerStaticsViewSerializer(view_retailer, many=True).data,
            'view_products': ProductSerializer(products, many=True).data,
            # 'view_category':P_CategorySerializer(data__, many=True).data
        })

class RetailerViewMapLocations(generics.RetrieveAPIView):
    serializer_class = DistNotificationsSeriliazer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        country = self.request.query_params.get("country")
        region = self.request.query_params.get("region")
        regional_areas = []

        if country:
            view_in_regions = RetailerProfile.objects.filter(world_country=country, distributor=distributor)
            retailer_profile_by_region = view_in_regions.values_list('county', flat=True).distinct()
            # 
            for region in retailer_profile_by_region:
                regions_count = view_in_regions.filter(county=region).count()
                
                profile_region = {"name": region, "count":regions_count}
                regional_areas.append(profile_region)

        return HttpResponse(json.dumps(regional_areas, indent=4, sort_keys=True, default=str),
                            content_type="application/json")

class DistNotificationApi(generics.RetrieveAPIView):
    """
    Fetch distributor notifications and messsages
    """
    serializer_class = DistNotificationsSeriliazer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        querySet = DistNotifications.objects.filter(distributor=distributor, un_seen_by__in=[distUser]).order_by('-id')
        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            'notifications': DistNotificationsSeriliazer(pageList, many=True, context={'dist_id': distUser.id}).data,
            'last_page': last_page,
        })


class ViewDistNotificationApi(generics.RetrieveAPIView):
    """
    View individual distributor notifications
    """
    serializer_class = DistNotificationsSeriliazer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()

        notification_id = self.request.query_params.get("notification_id")
        dist_notification = DistNotifications.objects.get(id=notification_id)
        dist_notification.seen_by.add(distUser)
        dist_notification.save()

        return Response({
            'notification': DistNotificationsSeriliazer(dist_notification, many=False,
                                                        context={'dist_id': distUser.id}).data,
        })


class CheckDashboardProgressApi(generics.RetrieveAPIView):
    """
    Fetch distributor fill out progress
    """
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
        view_complete = checkCurrentProgress(distributor)

        return Response({
            "view_complete": view_complete
        })
