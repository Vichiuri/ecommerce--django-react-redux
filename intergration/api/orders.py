import datetime

from django.db.models import Q
from django.core.paginator import Paginator
from distributor.models.netbot import Distributor
from intergration.authMixin import IntegratedAuthMixin
from intergration.helpers import get_distributor
from intergration.serializers import DistOrderAPISerializer, RetailOrdersAPISerializer
from mobile_retailer.m_serializers.retailer_data import OffersSerializer

from mobile_retailer.notification import order_notification
from distributor.models import DistUsers, RetailOrders, Retailer, SalesMan, PriceLevel, PriceOffer, DistOrder, Product, \
    RetailerProfile
from netbotAuth.models.users import User
from rest_framework import permissions, generics, status, viewsets
from rest_framework.response import Response
from django.utils import timezone
from distributor.commons import distributor_price_list
import json
from retailer.serializers import DistForRetOrderSerializer, DistOrderSerializer, RetailOrderDispatchOrderSerializer, RetailOrdersSerializer
from django.shortcuts import get_object_or_404


class IntergratedRetailerOrderApi(IntegratedAuthMixin, viewsets.ViewSet):
    """
    Create and view Orders \n
    Also approve retailer orders sent
    """
    serializer_class = RetailOrdersAPISerializer
    permission_classes = [
        # permissions.IsAuthenticated
    ]

    def list(self, request):
        
        status = self.request.query_params.get("status")
        query = self.request.query_params.get("query")
        rows = self.request.query_params.get("rows")
        offset = 25

        _request_header = self.request.headers
        id = _request_header['Distributor']
        user = get_object_or_404(Distributor, id=id)
        distUser = DistUsers.objects.filter(distributor=user).first()
        distributor = distUser.distributor

        querySet = RetailOrders.objects.filter(distributor=distributor).order_by('-id')

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
            "message":"Retailer Orders Fetched successfully",
            "orders": RetailOrdersAPISerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def create(self, request):
        
        _request_header = self.request.headers
        id = _request_header['Distributor']
        user = get_object_or_404(Distributor, id=id)
        distUser = DistUsers.objects.filter(distributor=user).first()
        distributor = distUser.distributor

        status = self.request.query_params.get("status")

        serializer = RetailOrdersAPISerializer(data = request.data)

        retailer = Retailer.objects.get(id=request.data['retailer'])
        salesman = SalesMan.objects.get(id=request.data['salesman'])
        salesman.retailers.add(retailer)
        salesman.save()
        priceLevel = PriceLevel.objects.get(id=request.data['price_level'])

        order_no = 1
        prev_orders = RetailOrders.objects.filter(distributor=distributor).order_by('-id')
        if prev_orders.first():
            order_no = prev_orders.first().ref_number + 1

        if serializer.is_valid():
            order = RetailOrders(distributor=distributor, retailer=retailer, total_cost=serializer.validated_data['total_cost'],
                                salesman=salesman, payment_terms=serializer.validated_data['payment_terms'], price_level=priceLevel,
                                created_by=distUser, ref_number=order_no, note=serializer.validated_data['note'])
            order.altered_by = User.objects.get(id=distributor.id)
            order.save()

            if request.data['ret_orders']:
                viewOrders = request.data['ret_orders']
                for viewOrder in viewOrders:
                    vOrder = DistOrder.objects.get(id=viewOrder)
                    vOrder.placed = True
                    vOrder.save()
                    order.ret_orders.add(vOrder)

            if request.data['offers']:
                viewOffers = request.data['offers']
                for viewOffer in viewOffers:
                    offer = PriceOffer.objects.get(id=viewOffer)
                    order.offers.add(offer)

            return Response({
                "message": "Retail Order has been added",
                "order": RetailOrdersAPISerializer(order).data
            }, status=201)

        return Response({
            "message": "Retail Order has been added",
            "order": RetailOrdersAPISerializer(order).data
        }, status=201)


    def retrieve(self, request, pk=None):
        try:
            distributor = get_distributor(self.request)
            queryset = RetailOrders.objects.filter(distributor=distributor)
            ret_order = get_object_or_404(queryset, pk=pk)
            serializer = RetailOrdersAPISerializer(ret_order)
            return Response({
                'message':'Retailer order Retrieved',
                'Retailer Order':serializer.data,
                }, status=status.HTTP_200_OK)
        except Exception:
            return Response({
                'message':'Retailer order was not found',
                }, status=status.HTTP_204_NO_CONTENT)

    def update(self, request, pk=None):
        distributor = get_distributor(self.request)
        queryset = RetailOrders.objects.filter(distributor=distributor)
        ret_order = get_object_or_404(queryset, pk=pk)
        serializer = RetailOrdersAPISerializer(ret_order, data=request.data)

        # json_data = json.loads(request.body)
        if serializer.is_valid():
            order = RetailOrders.objects.get(id=request.data['id'])
            if request.data['retailer']:
                retailer = Retailer.objects.get(id=request.data['retailer'])
                order.retailer = retailer
            if request.data['salesman']:
                salesman = SalesMan.objects.get(id=request.data['salesman'])
                order.salesman = salesman

            order.total_cost = serializer.validated_data['total_cost']
            order.status = serializer.validated_data['status']
            order.note = serializer.validated_data['note']
            order.payment_terms = serializer.validated_data['payment_terms']

            if request.data['ret_orders']:
                order.ret_orders.clear()
                viewOrders = request.data['ret_orders']
                for viewOrder in viewOrders:
                    vOrder = DistOrder.objects.get(id=viewOrder)
                    vOrder.placed = True
                    vOrder.save()
                    order.ret_orders.add(vOrder)

            if request.data['offers']:
                viewOffers = request.data['offers']
                for viewOffer in viewOffers:
                    offer = PriceOffer.objects.get(id=viewOffer)
                    order.offers.add(offer)

            order.save()

            return Response({
                "message": "Retail Order has been updated",
                "order": RetailOrdersAPISerializer(order).data
            }, status=201)

        return Response({
            "message": "Retail Order Failed to update",
            "error log": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk=None):
        
        _request_header = self.request.headers
        id = _request_header['Distributor']
        user = get_object_or_404(Distributor, id=id)
        distUser = DistUsers.objects.filter(distributor=user).first()
        distributor = distUser.distributor

        queryset = RetailOrders.objects.filter(distributor=distributor)
        order = get_object_or_404(queryset, pk=pk)
        serializer = RetailOrdersAPISerializer(order, data=request.data)

        if serializer.is_valid():

            status = self.request.query_params.get("status")

            status = request.data['status']
            order.note = request.data['note']

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
                viewOffers = RetailOrdersAPISerializer(order).data['offers']

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
                "order": RetailOrdersAPISerializer(order).data
            }, status=200)

        return Response({
            "message": "Retail Order Failed to update",
            "error log": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST )

    def delete(self, request, pk):
        distributor = get_distributor(self.request)
        queryset = RetailOrders.objects.filter(distributor=distributor)
        ret_order = get_object_or_404(queryset, pk=pk)
        ret_order.delete()
        return Response({
            "message": "Retail Order has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)

class IntergratedDistOrderApi(IntegratedAuthMixin, viewsets.ViewSet):
    """
    Edit and create individual orders based on products
    """
    serializer_class = DistOrderAPISerializer
    permission_classes = [
        # permissions.IsAuthenticated
    ]

    def list(self, request):
        
        distributor = get_distributor(self.request)

        if self.request.query_params.get("retailer_id"):
            retailer_id = self.request.query_params.get("retailer_id")
            retailer = Retailer.objects.get(id=retailer_id)
            querySet = DistOrder.objects.filter(
                distributor=distributor, retailer=retailer, placed=False).order_by('-id')
        else:
            querySet = DistOrder.objects.filter(distributor=distributor).order_by('-id')

        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "message":"Orders Fetched successfully",
            "orders": DistOrderAPISerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def create(self, request):
        _request_header = self.request.headers
        id = _request_header['Distributor']
        user = get_object_or_404(Distributor, id=id)
        distUser = DistUsers.objects.filter(distributor=user).first()
        distributor = distUser.distributor

        # json_data = json.loads(request.body)
        json_data = DistOrderAPISerializer(data = request.data)
        print(request.data)

        product = Product.objects.get(id=request.data['product'])
        retailer = Retailer.objects.get(id=request.data['retailer'])
        level = PriceLevel.objects.get(id=request.data['level'])

        if json_data.is_valid():

            qty = json_data.validated_data['qty']
            per_price = distributor_price_list(distributor=distributor, level=level, product=product, qty=qty)
            # print (float(per_price.amount))
            per_price = float(per_price.amount)

            new_price = per_price * float(qty)
            order_price = new_price

            order = DistOrder(distributor=distributor, product=product, retailer=retailer, per_price=per_price, qty=qty,
                            order_price=order_price, free_qty=json_data.validated_data['free_qty'], submitted_by=distUser)
            order.save()

            if request.data['price_offers']:
                for offer in request.data['price_offers']:
                    price_offer = PriceOffer.objects.get(id=offer)
                    order.price_offers.add(price_offer)
                    if price_offer.scheme == "BnXy%O":
                        percDisc = 100 - price_offer.y_amt
                        order.order_price = float(order_price) * (percDisc / 100)
                order.save()

            return Response({
                "message": "Order has been added",
                "order": DistOrderAPISerializer(order).data
            })
        
        return Response({
            "message": "Order failed to add",
            "error": json_data.errors
        })    

    def retrieve(self, request, pk=None):
        try:
            distributor = get_distributor(self.request)
            queryset = DistOrder.objects.filter(distributor=distributor)
            order = get_object_or_404(queryset, pk=pk)
            serializer = DistOrderAPISerializer(order)
            return Response({
                'message':'Order Retrieved',
                'Order':serializer.data,
                }, status=status.HTTP_200_OK)
        except Exception:
            return Response({
                'message':'Order was not found',
                }, status=status.HTTP_204_NO_CONTENT)

    def update(self, request, pk=None):
        _request_header = self.request.headers
        id = _request_header['Distributor']
        user = get_object_or_404(Distributor, id=id)
        distUser = DistUsers.objects.filter(distributor=user).first()
        distributor = distUser.distributor

        queryset = DistOrder.objects.filter(distributor=distributor)
        order = get_object_or_404(queryset, pk=pk)
        json_data = DistOrderAPISerializer(order, request.data)

        # json_data = json.loads(request.body)
        product = Product.objects.get(id=request.data['product'])

        if request.data['level']:
            level = PriceLevel.objects.get(id=request.data['level'])
        else:
            retailer_profile = RetailerProfile.objects.filter(
                retailer=order.retailer, distributor=distributor).first()
            level = retailer_profile.price_level
        
        if json_data.is_valid():
            qty = json_data.validated_data['qty']

            per_price = distributor_price_list(
                distributor=distributor, level=level, product=product, qty=qty)
            per_price = float(per_price.amount)
            new_price = per_price * float(qty)
            order_price = new_price

            order.product = product
            order.qty = qty
            order.order_price = order_price
            order.free_qty = json_data.validated_data['free_qty']
            order.per_price = per_price
            # order.placed=request.data['placed']

            order.price_offers.clear()
            price_offers = request.data['price_offers']
            for offer in price_offers:
                viewOffer = PriceOffer.objects.get(id=offer)
                order.price_offers.add(viewOffer)
                if viewOffer.scheme == "BnXy%O":
                    percDisc = 100 - viewOffer.y_amt
                    order.order_price = float(order_price) * (percDisc / 100)

            order.save()

            return Response({
                "message": "Order has been updated",
                "order": DistOrderAPISerializer(order).data
            }, status=201)
        return Response({
            "message": "Order Failed to update",
            "error logs": json_data.errors
        }, status=status.HTTP_400_BAD_REQUEST_ )


    def partial_update(self, request, pk=None):
        _request_header = self.request.headers
        id = _request_header['Distributor']
        user = get_object_or_404(Distributor, id=id)
        distUser = DistUsers.objects.filter(distributor=user).first()
        distributor = distUser.distributor

        queryset = DistOrder.objects.filter(distributor=distributor)
        order = get_object_or_404(queryset, pk=pk)
        json_data = DistOrderAPISerializer(order, request.data, partial=True)

        # json_data = json.loads(request.body)
        product = Product.objects.get(id=request.data['product'])

        if request.data['level']:
            level = PriceLevel.objects.get(id=request.data['level'])
        else:
            retailer_profile = RetailerProfile.objects.filter(
                retailer=order.retailer, distributor=distributor).first()
            level = retailer_profile.price_level
        
        if json_data.is_valid():
            qty = json_data.validated_data['qty']

            per_price = distributor_price_list(
                distributor=distributor, level=level, product=product, qty=qty)

            per_price = float(per_price.amount)
            new_price = per_price * float(qty)
            order_price = new_price

            order.product = product
            order.qty = qty
            order.order_price = order_price
            order.free_qty = json_data.validated_data['free_qty']
            order.per_price = per_price

            order.price_offers.clear()
            price_offers = request.data['price_offers']
            for offer in price_offers:
                viewOffer = PriceOffer.objects.get(id=offer)
                order.price_offers.add(viewOffer)
                if viewOffer.scheme == "BnXy%O":
                    percDisc = 100 - viewOffer.y_amt
                    order.order_price = float(order_price) * (percDisc / 100)
            order.save()

            return Response({
                "message": "Order has been updated",
                "order": DistOrderAPISerializer(order).data
            }, status=201)
        return Response({
            "message": "Order Failed to update",
            "error logs": json_data.errors
        }, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request, pk=None):
        distributor = get_distributor(self.request)
        queryset = DistOrder.objects.filter(distributor=distributor)
        order = get_object_or_404(queryset, pk=pk)
        order.delete()

        return Response({
            "message": "Order has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)

