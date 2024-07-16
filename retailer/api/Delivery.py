from django.core.paginator import Paginator

from ..serializers import DeliverySerializer, PartialDeliverySerializer, RetailOrdersSerializer
from distributor.models import DistUsers, Delivery, RetailOrders, PartialDelivery, PartialOrders, Product, DistOrder, \
    MNotification
from mobile_retailer import notification as m_notif
from mobile_retailer.models import RetailerUser
from mobile_retailer.notification import notify_device, order_notification
from rest_framework import permissions, generics, status
from rest_framework.response import Response
from django.utils import timezone
import json


class DeliveryApi(generics.RetrieveAPIView):
    """
    Delivery view for sending orders
    """
    serializer_class = DeliverySerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        querySet = Delivery.objects.filter(distributor=distributor).order_by('-id')

        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "deliveries": DeliverySerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        order = RetailOrders.objects.get(id=json_data['order_id'])

        delivery = Delivery(distributor=distributor, order=order, remarks=json_data['remarks'],
                            vehicle_no=json_data['vehicle_no'], transporter_name=json_data['transporter_name'],
                            transporter_phone=json_data['transporter_phone']);

        delivery.save()

        order.status = "Dispatched"
        order.when_dispatched = timezone.now()
        order.save()

        # ! Check whether retailer has logged into his mobile
        order_notification(order, "Dispatched")

        return Response({
            "message": "Delivery has been dispatched",
            "delivery": DeliverySerializer(delivery).data
        }, status=status.HTTP_201_CREATED)


class PartialDeliveryApi(generics.RetrieveAPIView):
    """
    Partial Delivery view for sending orders
    """
    serializer_class = PartialDeliverySerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        querySet = PartialDelivery.objects.filter(previous_order__distributor=distributor).order_by('-id')
        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "deliveries": PartialDeliverySerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        retailOrder = RetailOrders.objects.get(id=json_data['order_id'])
        part_items = json_data['orders']
        part_orders = json.loads(part_items)
        partialDelivery = PartialDelivery(when_dispatched=timezone.now(), previous_order=retailOrder,
                                          remarks=json_data['remarks'],
                                          vehicle_no=json_data['vehicle_no'],
                                          transporter_name=json_data['transporter_name'],
                                          transporter_phone=json_data['transporter_phone'])
        partialDelivery.save()
        for part_order in part_orders:
            order = DistOrder.objects.get(id=part_order['id'])
            if order.total_qty > part_order['total_qty']:
                new_qty = order.total_qty - part_order['total_qty']

                check_quantity = order.qty - order.delivered_qty
                cost_qty = check_quantity - part_order['total_qty']
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

                order.delivered_qty += part_order['total_qty']
                order.total_qty = new_qty
            elif order.total_qty == part_order['total_qty']:
                new_qty = order.total_qty - part_order['total_qty']
                order.total_qty = new_qty
                order.delivered = True
                order.delivered_qty += part_order['total_qty']
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
            "delivery": PartialDeliverySerializer(partialDelivery).data,
            "order": RetailOrdersSerializer(retailOrder).data
        }, status=status.HTTP_201_CREATED)

# def checkSaleGroupTarget(saleman):
