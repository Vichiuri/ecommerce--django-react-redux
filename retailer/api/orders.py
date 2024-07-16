import datetime

from django.db.models import Q
from django.core.paginator import Paginator

from mobile_retailer.models import RetailerUser
from mobile_retailer.notification import notify_device, order_notification
from netbotAuth.models import User
from ..serializers import RetailOrdersSerializer, DistOrderSerializer, DistForRetOrderSerializer, \
    RetailOrderDispatchOrderSerializer
from distributor.models import DistUsers, RetailOrders, Retailer, SalesMan, PriceLevel, PriceOffer, DistOrder, Product, \
    RetailerProfile, MNotification
from rest_framework import permissions, generics, status
from rest_framework.response import Response
from django.utils import timezone
from distributor.commons import distributor_price_list
import json
from distributor.threading import MobileOrderStatusNotification, OrderStatusNotification


class RetailerDistOrderApi(generics.RetrieveAPIView):
    """
    Create and view Orders \n
    Also approve retailer orders sent
    """
    serializer_class = RetailOrdersSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        status = self.request.query_params.get("status")
        query = self.request.query_params.get("query")
        rows = self.request.query_params.get("rows")
        offset = 25
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
        querySet = RetailOrders.objects.filter(
            distributor=distributor).order_by('-id')

        if status:
            ret_order = querySet.filter(status=status)
            querySet = ret_order

        if query:
            search_order = querySet.filter(Q(id__icontains=query) | Q(retailer__name__icontains=query) |
                                           Q(status__icontains=query) |
                                           Q(price_level__level_name__icontains=query) | Q(
                salesman__first_name__icontains=query) |
                Q(salesman__last_name__icontains=query))
            querySet = search_order

        if rows:
            offset = rows

        paginator = Paginator(querySet, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "orders": RetailOrdersSerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def post(self, request):
        user = self.request.user
        status = self.request.query_params.get("status")
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
        json_data = json.loads(request.body)
        retailer = Retailer.objects.get(id=json_data['retailer_id'])
        salesman = SalesMan.objects.get(id=json_data['salesman_id'])
        salesman.retailers.add(retailer)
        salesman.save()
        priceLevel = PriceLevel.objects.get(id=json_data['level'])

        order_no = 1
        prev_orders = RetailOrders.objects.filter(
            distributor=distributor).order_by('-id')
        if prev_orders.first():
            order_no = prev_orders.first().ref_number + 1

        order = RetailOrders(distributor=distributor, retailer=retailer, total_cost=json_data['total_cost'],
                             salesman=salesman, payment_terms=json_data[
                                 'payment_terms'], price_level=priceLevel,
                             created_by=distUser, ref_number=order_no)
        order.altered_by = user
        order.save()

        if json_data['order_ids']:
            viewOrders = json_data['order_ids']
            for viewOrder in viewOrders:
                vOrder = DistOrder.objects.get(id=viewOrder)
                vOrder.placed = True
                vOrder.save()
                order.ret_orders.add(vOrder)

        if json_data['viewOffers']:
            viewOffers = json_data['viewOffers']
            for viewOffer in viewOffers:
                offer = PriceOffer.objects.get(id=viewOffer)
                order.offers.add(offer)

        return Response({
            "message": "Retail Order has been added",
            "order": RetailOrdersSerializer(order).data
        }, status=201)

    def put(self, request):

        json_data = json.loads(request.body)
        order = RetailOrders.objects.get(id=json_data['id'])
        if json_data['retailer_id']:
            retailer = Retailer.objects.get(id=json_data['retailer_id'])
            order.retailer = retailer
        if json_data['saleman_id']:
            salesman = SalesMan.objects.get(id=json_data['saleman_id'])
            order.salesman = salesman

        order.total_cost = json_data['total_cost']
        order.status = json_data['status']
        order.note = json_data['note']
        order.payment_terms = json_data['payment_terms']

        if json_data['order_ids']:
            order.ret_orders.clear()
            viewOrders = json_data['order_ids']
            for viewOrder in viewOrders:
                vOrder = DistOrder.objects.get(id=viewOrder)
                vOrder.placed = True
                vOrder.save()
                order.ret_orders.add(vOrder)

        if json_data['viewOffers']:
            viewOffers = json_data['viewOffers']
            for viewOffer in viewOffers:
                offer = PriceOffer.objects.get(id=viewOffer)
                order.offers.add(offer)

        order.save()

        return Response({
            "message": "Retail Order has been updated",
            "order": RetailOrdersSerializer(order).data
        }, status=201)

    def patch(self, request):
        user = self.request.user
        status = self.request.query_params.get("status")
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        order = RetailOrders.objects.get(id=json_data['id'])
        status = json_data['status']
        order.note = json_data['note']
        
        current_time = timezone.now()
        if status == "Dispatched":
            order.when_dispatched = current_time
            order.status = status
        elif status == "On Hold":
            order.when_held = current_time
            order.status = status
        elif status == "Declined":
            order.when_declined = current_time
            order.status = status
        elif status == "Approved":
            order.when_approved = current_time
            order.status = status
            print(status)
            viewOffers = RetailOrdersSerializer(order).data['offers']

            #  TODO Be Changed for create order
            for viewOffer in viewOffers:
                current_offer = PriceOffer.objects.get(id=viewOffer)

                if current_offer.scheme == "BnXYF":
                    product = current_offer.y_item
                    retailer = order.retailer
                    qty = current_offer.y_amt
                    total_qty = current_offer.y_amt
                    order_price = 0

                    dist_order = DistOrder(distributor=distributor, product=product, retailer=retailer, qty=qty,
                                           order_price=order_price, total_qty=total_qty,
                                           submitted_by=distUser, applied_offer=current_offer.name, placed=True)
                    dist_order.save()
                    order.ret_orders.add(dist_order)
            for dist_order in order.ret_orders.all():
                dist_order.total_qty = dist_order.qty + dist_order.free_qty
                dist_order.save()

        elif status == "Release":
            order.status = "Pending"

        order.save()
        order_notification(order, status)

        # ! Check whether retailer has logged into his mobile
        # if RetailerUser.objects.filter(retailer=order.retailer).first().device_id:
        #     order_id = f"#{order.id}"
        #     order_price = str(order.total_cost)
        #     retailer_name = order.retailer.name
        #     dist_name = order.distributor.name
        #     message_title = f"{dist_name} Order Id {order_id} {status}"
        #     message = f"Dear {retailer_name} Your Order {order_id} Of {order_price}"
        #     devices = [RetailerUser.objects.filter(retailer=order.retailer).first().device_id, ]
        #     notify_device(devices=devices, message_title=message_title, message=message)

        return Response({
            "message": "Retail Order has been updated",
            "order": RetailOrdersSerializer(order).data
        }, status=201)

    def delete(self, request):

        order_id = self.request.query_params.get("order_id")
        order = RetailOrders.objects.get(id=order_id)
        order.delete()

        return Response({
            "message": "Retail Order has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)


class UpdateRetailOrderApi(generics.RetrieveAPIView):
    """
    Update retailer order status from distributor and retailer
    """
    serializer_class = RetailOrdersSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        order_id = self.request.query_params.get("order_id")
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
        querySet = RetailOrders.objects.get(id=order_id)

        return Response({
            "order": RetailOrdersSerializer(querySet).data,
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        product = Product.objects.get(id=json_data['product_id'])
        retailer = Retailer.objects.get(id=json_data['retailer_id'])
        qty = json_data['qty']

        order_price = json_data['order_price']
        if json_data['level']:
            level = PriceLevel.objects.get(id=json_data['level'])
        else:
            retailer_profile = RetailerProfile.objects.filter(
                retailer=retailer, distributor=distributor).first()
            level = retailer_profile.price_level

        per_price = distributor_price_list(
            distributor=distributor, level=level, product=product, qty=qty)

        new_price = float(per_price) * float(qty)
        order_price = new_price

        order = DistOrder(distributor=distributor, product=product, retailer=retailer, free_qty=json_data['free_qty'],
                          qty=qty, order_price=order_price,
                          submitted_by=distUser, placed=True, per_price=per_price)
        order.save()
        if json_data['price_offers']:
            offers = json_data['price_offers']
            for offer in offers:
                price_offer = PriceOffer.objects.get(id=offer)
                order.price_offers.add(price_offer)
                if price_offer.scheme == "BnXy%O":
                    percDisc = 100 - price_offer.y_amt
                    order.order_price = float(order_price) * (percDisc / 100)

        retailOrder = RetailOrders.objects.get(id=json_data['ret_id'])
        total = retailOrder.total_cost + order.order_price
        retailOrder.total_cost = total
        retailOrder.ret_orders.add(order.id)
        retailOrder.save()

        return Response({
            "message": "Retail Order has been updated",
            "order": RetailOrdersSerializer(retailOrder).data,
            "dist_order": DistForRetOrderSerializer(order).data,
        })

    def put(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        product = Product.objects.get(id=json_data['product_id'])
        order = DistOrder.objects.get(id=json_data['id'])

        if json_data['level']:
            level = PriceLevel.objects.get(id=json_data['level'])
        else:
            retailer_profile = RetailerProfile.objects.filter(
                retailer=order.retailer, distributor=distributor).first()
            level = retailer_profile.price_level
        qty = json_data['qty']

        per_price = distributor_price_list(
            distributor=distributor, level=level, product=product, qty=qty)

        new_price = float(per_price) * float(qty)
        order_price = new_price

        order.product = product
        order.qty = qty
        order.free_qty = json_data['free_qty']
        order.per_price = per_price
        order.order_price = order_price

        order.price_offers.remove()
        price_offers = json_data['price_offers']
        for offer in price_offers:
            viewOffer = PriceOffer.objects.get(id=offer)
            order.price_offers.add(viewOffer)
            if viewOffer.scheme == "BnXy%O":
                percDisc = 100 - viewOffer.y_amt
                order.order_price = float(order_price) * (percDisc / 100)

        order.save()

        retailOrder = RetailOrders.objects.get(id=json_data['ret_id'])
        retailOrder.total_cost = json_data['total']

        if json_data['viewOffers']:
            retailOrder.offers.clear()
            viewOffers = json_data['viewOffers']
            for viewOffer in viewOffers:
                offer = PriceOffer.objects.get(id=viewOffer)
                retailOrder.offers.add(offer)

        retailOrder.save()

        return Response({
            "message": "Retail Order has been updated",
            "order": RetailOrdersSerializer(retailOrder).data,
            "dist_order": DistForRetOrderSerializer(order).data,
        })

    def patch(self, request):
        json_data = json.loads(request.body)
        order = DistOrder.objects.get(id=json_data['order_id'])
        retailOrder = RetailOrders.objects.get(id=json_data['ret_id'])

        total = retailOrder.total_cost - order.order_price
        retailOrder.total_cost = total
        retailOrder.ret_orders.remove(order)

        if json_data['viewOffers']:
            retailOrder.offers.clear()
            viewOffers = json_data['viewOffers']
            for viewOffer in viewOffers:
                offer = PriceOffer.objects.get(id=viewOffer)
                retailOrder.offers.add(offer)

        retailOrder.save()
        order.delete()

        return Response({
            "message": "Retail Order has been updated",
            "order": RetailOrdersSerializer(retailOrder).data,
            "order_id": json_data['order_id']
        })


class RetailerSearchOrderApi(generics.RetrieveAPIView):
    """
    Search function for distributor involving retailer dist orders
    """
    serializer_class = RetailOrdersSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        query = self.request.query_params.get("query")
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        orders = RetailOrders.objects.filter(
            distributor=distributor).order_by('-id')
        querySet = orders.filter(Q(retailer__name__icontains=query) |
                                 Q(status__icontains=query) |
                                 Q(price_level__level_name__icontains=query) | Q(
            salesman__first_name__icontains=query) |
            Q(salesman__last_name__icontains=query))

        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "orders": RetailOrdersSerializer(pageList, many=True).data,
            "last_page": last_page
        })


class DistOrderApi(generics.RetrieveAPIView):
    """
    Edit and create individual orders based on products
    """
    serializer_class = DistOrderSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        if self.request.query_params.get("retailer_id"):
            retailer_id = self.request.query_params.get("retailer_id")
            retailer = Retailer.objects.get(id=retailer_id)
            querySet = DistOrder.objects.filter(
                distributor=distributor, retailer=retailer, placed=False)
        else:
            querySet = DistOrder.objects.filter(distributor=distributor)

        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "orders": DistOrderSerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        product = Product.objects.get(id=json_data['product_id'])
        retailer = Retailer.objects.get(id=json_data['retailer_id'])
        level = PriceLevel.objects.get(id=json_data['level'])
        qty = json_data['qty']
        order_price = json_data['order_price']
        per_price = distributor_price_list(
            distributor=distributor, level=level, product=product, qty=qty)

        new_price = float(per_price) * float(qty)
        order_price = new_price

        order = DistOrder(distributor=distributor, product=product, retailer=retailer, per_price=per_price, qty=qty,
                          order_price=order_price,
                          free_qty=json_data['free_qty'], submitted_by=distUser)
        order.save()
        if json_data['price_offers']:
            offers = json_data['price_offers']
            for offer in offers:
                price_offer = PriceOffer.objects.get(id=offer)
                order.price_offers.add(price_offer)
                if price_offer.scheme == "BnXy%O":
                    percDisc = 100 - price_offer.y_amt
                    order.order_price = float(order_price) * (percDisc / 100)
            order.save()

        return Response({
            "message": "Order has been added",
            "order": DistOrderSerializer(order).data
        })

    def put(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        product = Product.objects.get(id=json_data['product_id'])
        order = DistOrder.objects.get(id=json_data['id'])

        if json_data['level']:
            level = PriceLevel.objects.get(id=json_data['level'])
        else:
            retailer_profile = RetailerProfile.objects.filter(
                retailer=order.retailer, distributor=distributor).first()
            level = retailer_profile.price_level
        qty = json_data['qty']

        per_price = distributor_price_list(
            distributor=distributor, level=level, product=product, qty=qty)

        new_price = float(per_price) * float(qty)
        order_price = new_price

        order.product = product
        order.qty = qty
        order.order_price = order_price
        order.free_qty = json_data['free_qty']
        order.per_price = per_price

        order.price_offers.clear()
        price_offers = json_data['price_offers']
        for offer in price_offers:
            viewOffer = PriceOffer.objects.get(id=offer)
            order.price_offers.add(viewOffer)
            if viewOffer.scheme == "BnXy%O":
                percDisc = 100 - viewOffer.y_amt
                order.order_price = float(order_price) * (percDisc / 100)

        order.save()

        return Response({
            "message": "Order has been updated",
            "order": DistOrderSerializer(order).data
        }, status=201)

    def delete(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        order_id = self.request.query_params.get("order_id")
        order = DistOrder.objects.get(id=order_id)
        order.delete()

        return Response({
            "message": "Order has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)


class DistOrdersRetailOrdersApi(generics.RetrieveAPIView):
    """
    Fetch Retailer orders based on individual orders
    """
    serializer_class = DistOrderSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        ret_id = self.request.query_params.get("id")
        order = RetailOrders.objects.get(id=ret_id)

        querySet = order.ret_orders.all()
        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            'dist_orders': DistForRetOrderSerializer(pageList, many=True).data,
            'last_page': last_page
        })


class DispatchedRetOrderApi(generics.RetrieveAPIView):
    """
    Fetch Dispatched retailer orders
    """
    serializer_class = RetailOrderDispatchOrderSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        ret_id = self.request.query_params.get("id")
        order = RetailOrders.objects.get(id=ret_id)

        return Response({
            'ret_order': RetailOrderDispatchOrderSerializer(order, many=False).data,
        })


class ChangeRetailerStatus(generics.RetrieveAPIView):
    """
    Adding cancel functionality and return to pending from completed
    """
    serializer_class = RetailOrdersSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def put(self, request):

        json_data = json.loads(request.body)
        retail_order = RetailOrders.objects.get(id=json_data['id'])
        dist_orders = retail_order.ret_orders.all()

        for offer in retail_order.offers.all():
            if offer.scheme == "BnXYF":
                current_order = dist_orders.filter(
                    product=offer.y_item, order_price=0)
                if current_order.first():
                    v_current = current_order.first()
                    v_current.delete()

        retail_order.when_approved = None
        retail_order.status = "Pending"
        retail_order.save()

        return Response({
            "message": "Retail Order has been updated",
            "order": RetailOrdersSerializer(retail_order).data,
        }, status=status.HTTP_201_CREATED)

    def patch(self, request):

        json_data = json.loads(request.body)
        retail_order = RetailOrders.objects.get(id=json_data['id'])

        retail_order.when_approved = None
        retail_order.when_cancelled = timezone.now()
        retail_order.status = "CANCELED"

        retail_order.save()

        return Response({
            "message": "Retail Order has been updated",
            "order": RetailOrdersSerializer(retail_order).data,
        }, status=status.HTTP_201_CREATED)
