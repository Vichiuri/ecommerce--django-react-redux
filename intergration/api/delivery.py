from email import message
from django.core.paginator import Paginator
from django.forms.models import model_to_dict

from distributor.models.netbot import Distributor

from distributor.models import DistUsers, Delivery, RetailOrders, PartialDelivery, PartialOrders, Product, DistOrder, \
    MNotification
from intergration.authMixin import IntegratedAuthMixin
from intergration.helpers import get_distributor
from intergration.serializers import DeliveryAPISerializer, PartialDeliveryAPISerializer
from mobile_retailer import notification as m_notif
from mobile_retailer.models import RetailerUser
from mobile_retailer.notification import order_notification
from rest_framework import permissions, generics, status, viewsets
from rest_framework.response import Response
from django.utils import timezone
import json
import pprint


from django.shortcuts import get_object_or_404
from retailer.serializers import DeliverySerializer, PartialDeliverySerializer, RetailOrdersSerializer

pp = pprint.PrettyPrinter(indent=4,)


class IntegratedDeliveryApi(IntegratedAuthMixin, viewsets.ViewSet):

    def list(self, request):
        try:
            distributor = get_distributor(self.request)
            queryset = Delivery.objects.filter(distributor=distributor)
            # serializer = DeliverySerializer(queryset, many=True)

            paginator = Paginator(queryset, 25)  # Show 25 contacts per page.
            page = self.request.query_params.get("page")
            pageList = paginator.get_page(page)
            last_page = paginator.num_pages

            return Response({
                'message':'Deliveries fetched successfully',
                'pages':last_page,
                'deliveries':DeliveryAPISerializer(pageList, many=True).data,
                }, status=status.HTTP_200_OK)

        except Exception:
            return Response({
                'message':'Deliveries fetch failed',
                }, status=status.HTTP_404_NOT_FOUND)


    def create(self, request):
        distributor = get_distributor(self.request)
        serializer = DeliveryAPISerializer(data=request.data)       
        order = RetailOrders.objects.get(id=request.data['order'])
        if serializer.is_valid():
            delivery = Delivery(
                    distributor=distributor, 
                    order=order, 
                    remarks=serializer.validated_data['remarks'],
                    vehicle_no=serializer.validated_data['vehicle_no'], 
                    transporter_name=serializer.validated_data['transporter_name'],
                    transporter_phone=serializer.validated_data['transporter_phone']
                );

            delivery.save()
            order.status = "Dispatched"
            order.when_dispatched = timezone.now()
            order.save()

            # ! Check whether retailer has logged into his mobile
            order_notification(order, "Dispatched")

            return Response({
                "message": "Delivery has been dispatched",
                "delivery": DeliveryAPISerializer(delivery).data
            }, status=status.HTTP_201_CREATED)
        return Response({
            "message": "Delivery dispatch Failed",
        }, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        try:
            distributor = get_distributor(self.request)
            queryset = Delivery.objects.filter(distributor=distributor)
            delivery = get_object_or_404(queryset, pk=pk)
            serializer = DeliveryAPISerializer(delivery)
            return Response({
                'message':'Delivery Retrieved',
                'deliveries':serializer.data,
                }, status=status.HTTP_200_OK)
        except Exception:
            return Response({
                'message':'No delivery was found',
                }, status=status.HTTP_204_NO_CONTENT)


class IntergratedPartialDeliveryApi(IntegratedAuthMixin, viewsets.ViewSet):
    """
    Partial Delivery view for sending orders
    """
    serializer_class = PartialDeliveryAPISerializer
    permission_classes = [
        # permissions.IsAuthenticated
    ]

    def list(self, request):        
        distributor = get_distributor(self.request)

        querySet = PartialDelivery.objects.filter(previous_order__distributor=distributor).order_by('-id')
        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "message":"Partial Deliveries Fetched successfully",
            "pages": last_page,
            "deliveries": PartialDeliveryAPISerializer(pageList, many=True).data,
        })

    def create(self, request):
        distributor = get_distributor(self.request)

        serializer = PartialDeliveryAPISerializer(data=request.data)
        retailOrder = RetailOrders.objects.get(id=request.data['previous_order'])
        part_items = request.data['current_orders']
        part_orders = part_items

        if serializer.is_valid():
            partialDelivery = PartialDelivery(when_dispatched=timezone.now(), previous_order=retailOrder,
                                            remarks=serializer.validated_data['remarks'],
                                            vehicle_no=serializer.validated_data['vehicle_no'],
                                            transporter_name=serializer.validated_data['transporter_name'],
                                            transporter_phone=serializer.validated_data['transporter_phone'])
            partialDelivery.save()
            for part_order in part_orders:
                print('order', part_order)
                order = DistOrder.objects.get(id=part_order['dist_order'])
                if order.total_qty > part_order['view_qty']:
                    new_qty = order.total_qty - part_order['view_qty']

                    check_quantity = order.qty - order.delivered_qty
                    cost_qty = check_quantity - part_order['view_qty']
                    if cost_qty > 0:
                        remainder = order.per_price * cost_qty
                        view_offers = order.price_offers.all().filter(scheme='BnXy%O')
                        for offer in view_offers:
                            view_final = remainder * (100 - offer.y_amt) / 100
                            remainder += view_final

                        if order.delivered_qty > 0:
                            retail_cost = float(retailOrder.total_cost.amount) - order.remaining_amount
                        else:
                            retail_cost = float(retailOrder.total_cost.amount) - float(order.order_price.amount)
                        view_cost = float(retail_cost) + remainder
                        # retailOrder.total_cost.amount = view_cost
                        # order.remaining_amount = remainder
                    elif check_quantity > 0:
                        remainder = check_quantity * cost_qty
                        view_offers = order.price_offers.all().filter(scheme='BnXy%O')
                        for offer in view_offers:
                            view_final = remainder * (100 - offer.y_amt) / 100
                            remainder += view_final

                        if order.delivered_qty > 0:
                            retail_cost = float(retailOrder.total_cost.amount) - order.remaining_amount
                        else:
                            retail_cost = float(retailOrder.total_cost.amount) - float(order.order_price.amount)

                        view_cost = float(retail_cost) + remainder
                        # retailOrder.total_cost.amount = view_cost
                        # order.remaining_amount = remainder

                    order.delivered_qty += part_order['view_qty']
                    order.total_qty = new_qty
                elif order.total_qty == part_order['view_qty']:
                    new_qty = order.total_qty - part_order['view_qty']
                    order.total_qty = new_qty
                    order.delivered = True
                    order.delivered_qty += part_order['view_qty']
                    # change_cost = retailOrder.total_cost 
                    cost = float(retailOrder.total_cost.amount) - float(order.order_price.amount)
                    # retailOrder.total_cost = cost

                product = Product.objects.get(id=order.product.id)
                part_cost = order.order_price.amount
                # int(order.order_price.amount) - int(order.remaining_amount)
                part_qty = order.delivered_qty
                part_order = PartialOrders(product=product, qty=part_qty, order_price=part_cost,
                                        dist_order=order)
                part_order.save()
                retailOrder.status = "Partial"
                retailOrder.save()
                order.save()
                partialDelivery.current_orders.add(part_order)

            # ! Check whether retailer has logged into his mobile
            order_notification(retailOrder, "Dispatched")
            # (devices=devices, message_title=message_title, message=message)

            return Response({
                "message": "Delivery has been dispatched",
                "Partial delivery": PartialDeliveryAPISerializer(partialDelivery).data,
                "order": RetailOrdersSerializer(retailOrder).data
            }, status=status.HTTP_201_CREATED)

        return Response({
            "message": "Delivery Failed to dispatch",
            "error logs": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST )


    def retrieve(self, request, pk=None):
        try:
            distributor = get_distributor(self.request)
            queryset = PartialDelivery.objects.all()
            partial_delivery = get_object_or_404(queryset, pk=pk)
            serializer = PartialDeliveryAPISerializer(partial_delivery)
            return Response({
                'message':'Partial delivery retrieved successfully',
                'offers':serializer.data,
                }, status=status.HTTP_200_OK)
        except Exception:
            return Response({
                'message':'No partial delivery was found',
                }, status=status.HTTP_204_NO_CONTENT)
# def checkSaleGroupTarget(saleman):
