from distributor.models.distributor import DistOrder
from re import L
from django.db.models import Sum
from django.core.paginator import Paginator
from django.db.models.query import QuerySet
from django.http import HttpResponse

from ..serializers import RetailOrdersSerializer, RetailOrdersStatsSeriliazer, SalesGroupReportSerializer, \
    SalesMenReportSerializer
from distributor.models import DistUsers, RetailOrders, Retailer, SalesTargetGroup
from datetime import datetime, timedelta
from rest_framework import permissions, generics, status
from rest_framework.response import Response
import json


class OrderStaticsApi(generics.RetrieveAPIView):
    """
    Calculate periodically defined order statics based on given difference in period
    """
    serializer_class = RetailOrdersStatsSeriliazer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        from_date = datetime.strptime(self.request.query_params.get("from_date"), "%Y-%m-%d")
        to_date = datetime.strptime(self.request.query_params.get("to_date"), "%Y-%m-%d")
        day_count = (to_date.date() - from_date.date()).days + 1

        count_array = []
        if day_count < 14:
            start_date = from_date.date()

            for single_date in (start_date + timedelta(n) for n in range(day_count)):
                view_order_count = RetailOrders.objects.filter(distributor=distributor, when_approved__range=(
                    single_date, single_date + timedelta(1))).count()
                view_orders = RetailOrders.objects.filter(distributor=distributor, when_approved__range=(
                    single_date, single_date + timedelta(1)))
                total_count = 0
                revenue_count = 0
                for order in view_orders:
                    calculate_total = order.ret_orders.aggregate(total=Sum('qty'))
                    calculate_revenue = order.ret_orders.aggregate(currency=Sum('order_price'))
                    if calculate_total['total']:
                        total_count += calculate_total['total']
                    if calculate_revenue['currency']:
                        revenue_count += calculate_revenue['currency']

                count_array.append({
                    'date': single_date,
                    'count': view_order_count,
                    'product_count': total_count,
                    'revenue_count': revenue_count
                })
        elif day_count <= 31:
            start_week = from_date.date() - timedelta(from_date.date().weekday())
            end_week = start_week + timedelta(to_date.date().weekday())

            new_count = (to_date.date() - end_week).days / 7

            for single_week in range(int(new_count + 1)):
                view_order_count = RetailOrders.objects.filter(distributor=distributor, when_approved__range=(
                    start_week, start_week + timedelta(7))).count()
                view_orders = RetailOrders.objects.filter(distributor=distributor, when_approved__range=(
                    start_week, start_week + timedelta(7)))
                total_count = 0
                revenue_count = 0
                for order in view_orders:
                    calculate_total = order.ret_orders.aggregate(total=Sum('qty'))
                    calculate_revenue = order.ret_orders.aggregate(currency=Sum('order_price'))
                    if calculate_total['total']:
                        total_count += calculate_total['total']
                    if calculate_revenue['currency']:
                        revenue_count += calculate_revenue['currency']

                count_array.append({
                    'date': start_week,
                    # str(start_week) + '=>' +str(start_week + timedelta(7)),
                    'count': view_order_count,
                    'product_count': total_count,
                    'revenue_count': revenue_count
                })

                start_week += timedelta(7)

        elif day_count < 365:
            start_month = from_date.month
            end_month = to_date.month

            monthly_count = (end_month - start_month) + 1

            for single_month in range(int(monthly_count)):
                view_order_count = RetailOrders.objects.filter(distributor=distributor,
                                                               when_approved__year=from_date.year,
                                                               when_approved__month=start_month).count()
                view_orders = RetailOrders.objects.filter(distributor=distributor, when_approved__year=from_date.year,
                                                          when_approved__month=start_month)
                total_count = 0
                revenue_count = 0
                for order in view_orders:
                    calculate_total = order.ret_orders.aggregate(total=Sum('qty'))
                    calculate_revenue = order.ret_orders.aggregate(currency=Sum('order_price'))
                    if calculate_total['total']:
                        total_count += calculate_total['total']
                    if calculate_revenue['currency']:
                        revenue_count += calculate_revenue['currency']

                count_array.append({
                    'date': start_month,
                    'count': view_order_count,
                    'product_count': total_count,
                    'revenue_count': revenue_count
                })

                start_month += 1
        else:
            start_year = from_date.year
            end_year = to_date.year

            yearly_count = (end_year - start_year) + 1

            for single_year in range(int(yearly_count)):
                view_order_count = RetailOrders.objects.filter(distributor=distributor,
                                                               when_approved__year=start_year).count()
                view_orders = RetailOrders.objects.filter(distributor=distributor, when_approved__year=start_year)
                total_count = 0
                revenue_count = 0
                for order in view_orders:
                    calculate_total = order.ret_orders.aggregate(total=Sum('qty'))
                    calculate_revenue = order.ret_orders.aggregate(currency=Sum('order_price'))
                    if calculate_total['total']:
                        total_count += calculate_total['total']
                    if calculate_revenue['currency']:
                        revenue_count += calculate_revenue['currency']

                count_array.append({
                    'date': start_year,
                    'count': view_order_count,
                    'product_count': total_count,
                    'revenue_count': revenue_count
                })

                start_year += 1

        return HttpResponse(json.dumps(count_array, indent=4, sort_keys=True, default=str),
                            content_type="application/json")


class RetailersStaticsApi(generics.RetrieveAPIView):
    """
    Calculate periodically defined top retailers stats based on given difference in period
    """
    serializer_class = RetailOrdersStatsSeriliazer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        from_date = datetime.strptime(self.request.query_params.get("from_date"), "%Y-%m-%d").date()
        to_date = datetime.strptime(self.request.query_params.get("to_date"), "%Y-%m-%d").date()
        day_count = (to_date - from_date).days + 1
        count_array = []
        for single_date in (from_date + timedelta(n) for n in range(day_count)):
            view_order_count = Retailer.objects.filter(distributors__in=[distributor], when_created__range=(
                single_date, single_date + timedelta(1))).count()
            count_array.append({
                'date': single_date,
                'count': view_order_count
            })

        return HttpResponse(json.dumps(count_array, indent=4, sort_keys=True, default=str),
                            content_type="application/json")


class DistOrderStaticsApi(generics.RetrieveAPIView):
    """
    Calculate periodically defined product statics based on given difference in period
    """
    serializer_class = RetailOrdersStatsSeriliazer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        from_date = datetime.strptime(self.request.query_params.get("from_date"), "%Y-%m-%d").date()
        to_date = datetime.strptime(self.request.query_params.get("to_date"), "%Y-%m-%d").date()
        day_count = (to_date - from_date).days + 1
        count_array = []

        for single_date in (from_date + timedelta(n) for n in range(day_count)):
            view_order = RetailOrders.objects.filter(distributor=distributor,
                                                     when_approved__range=(single_date, single_date + timedelta(1)))
            if view_order.count() > 0:
                for m_order in view_order:
                    view_product_count = m_order.ret_orders.aggregate(Sum("qty"))['qty__sum']
                count_array.append({
                    'date': single_date,
                    'count': view_product_count
                })
            else:
                count_array.append({
                    'date': single_date,
                    'count': 0
                })

        return HttpResponse(json.dumps(count_array, indent=4, sort_keys=True, default=str),
                            content_type="application/json")


class SalesTargetReportApi(generics.RetrieveAPIView):
    """
    Calculate periodically defined sales target stats based on given difference in period for graphs
    """
    serializer_class = SalesGroupReportSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        period = self.request.query_params.get("period")
        from_date = datetime.strptime(self.request.query_params.get("from_date"), "%Y-%m-%d").date()

        querySet = SalesTargetGroup.objects.filter(distributor=distributor)
        if period:
            sales_group = querySet.filter(period=period)
            querySet = sales_group

        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            'sales_report': SalesGroupReportSerializer(pageList, many=True, context={'from_date': from_date}).data,
            'last_page': last_page
        })


class SalesManTargetReportApi(generics.RetrieveAPIView):
    serializer_class = SalesGroupReportSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        salegroup_id = self.request.query_params.get("salegroup_id")
        from_date = datetime.strptime(self.request.query_params.get("from_date"), "%Y-%m-%d").date()
        salesGroup = SalesTargetGroup.objects.get(id=salegroup_id)
        querySet = salesGroup.salesmen.all()

        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            'sales_people_report': SalesMenReportSerializer(pageList, many=True, context={'from_date': from_date,
                                                                                          'period': salesGroup.period,
                                                                                          'target': salesGroup.target_sales}).data,
            'last_page': last_page
        })
