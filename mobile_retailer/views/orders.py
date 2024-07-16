"""
Mobile View Endpoints For Orders
"""
import datetime
import traceback

from rest_framework.permissions import AllowAny

import distributor.commons as cm
from rest_framework import generics, permissions
from rest_framework.response import Response

from distributor import commons
from distributor.models import SalesMan, RetailOrders, Delivery, Retailer, Product, DistOrder
from distributor.models.distributor import RetailerProfile
from mobile_retailer.m_serializers.retailer_data import RetailOrdersSerializer
from mobile_retailer.m_serializers.salesman_data import SalesCartSerializer
from mobile_retailer.models import RetailerCart, MobileOrder, SalesManCart
from mobile_retailer.notification import order_notification
from mobile_retailer.views.paginator import CustomPaginator
from retailer.serializers import RetailerCartSerializer


class RetailOrderHistory(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):

        user = request.user
        salesman = user.salesman
        retailer = user.retailer
        ret_orders = RetailOrders.objects.filter(id=0).all()

        if salesman is not None:
            retailer_id = request.GET['retailer_id']
            # retailer = Retailer.objects.filter(id=retailer_id).first()
            ret_orders = RetailOrders.objects.filter(salesman=salesman).order_by(
                '-id')
        elif retailer is not None:
            ret_orders = RetailOrders.objects.filter(retailer=retailer).order_by(
                '-id')
        else:
            return Response({
                "message": ""
            }, status=403)

        c_page = CustomPaginator(request, ret_orders, 10)
        return Response(
            {
                "retail_orders": RetailOrdersSerializer(c_page.pageList, many=True).data,
                "current_page": c_page.page,
                "last_page": c_page.last_page,
                "next_page": c_page.next_page,
            }
        )

    def delete(self, request):

        try:
            order_id = request.GET['order_id']
            ret_order = RetailOrders.objects.filter(
                id=order_id, status="Pending").first()
            if ret_order is None:
                return Response({"message": "Could Not Find The Order Status Might Have Changed"})
            # ret_order.delete()
            ret_order.status = "CANCELED"
            ret_order.save()
            order_notification(ret_order, ret_order.status)
            print("Deleted Order Retailer ", ret_order.retailer.pin_no)
            return Response({"message": "Order Cancellation Success"}, status=200)
        except Exception as e:
            return Response({"message": "Order Cancel Request Error " + str(e)})

    def post(self, request):
        try:
            data = request.data
            ret_order_id = int(data['ret_order_id'])
            action = data['action']
            user = request.user
            salesman = user.salesman
            retailer = user.retailer
            if action == 'confirm':
                if salesman is not None:
                    return Response({"message": "Un Authorized to Confirm"}, status=401)
                ret_order = RetailOrders.objects.filter(
                    id=ret_order_id).first()
                ret_order.confirmed_delivery = True
                ret_order.save()
                delivery = Delivery.objects.filter(order=ret_order).first()

                delivery.confirmed = True
                delivery.save()
                return Response(
                    {
                        "message": "Order Confirmation Success"
                    }, status=200
                )
            elif action == 're_order':
                ret_order = RetailOrders.objects.get(id=ret_order_id)
                retailer = ret_order.retailer
                if salesman:
                    cart = salesman.cart
                else:
                    cart = retailer.cart
                orders = ret_order.ret_orders.all()
                for order in orders:
                    mobile_order = MobileOrder()
                    mobile_order_ = cart.orders.filter(product=order.product, retailer=order.retailer,
                                                       placed=False, offer_id=0).first()
                    if mobile_order_ is not None:
                        mobile_order = mobile_order_
                        cart.orders.remove(order)
                    mobile_order.retailer = order.retailer
                    mobile_order.product = order.product
                    mobile_order.salesman = ret_order.salesman
                    mobile_order.qty = order.qty
                    price = cm.retailer_price_list_product_price(product=mobile_order.product,
                                                                 distributor=mobile_order.product.distributor,
                                                                 retailer=order.retailer,
                                                                 qty=mobile_order.qty
                                                                 ) * mobile_order.qty
                    mobile_order.order_price = price
                    mobile_order.distributor = order.distributor
                    mobile_order.per_price = float(price.amount)
                    mobile_order.total_qty = order.total_qty
                    mobile_order.placed = False
                    mobile_order.save()
                    cart.orders.add(mobile_order)

                return Response({
                    "message": "Re Order Success, Items Placed In Cart"
                })

        except Exception as e:
            return Response({
                "message": "Order  Error " + str(e),
            }, status=500)


class FilterOrders(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        try:
            user = request.user
            orders = RetailOrders.objects.filter()
            salesman = SalesMan.objects.filter(email=user.email).first()
            if salesman is not None:
                distributor = salesman.distributor
                orders = orders.filter(
                    salesman=salesman, distributor=distributor)
                if 'retailer_id' in request.GET.keys():
                    retailer_id = request.GET['retailer_id']
                    if retailer_id:
                        orders = orders.filter(retailer_id=int(retailer_id))
            else:
                retailer = user.user_retailer.retailer
                if 'distributor_id' in request.GET.keys():
                    dist_id = request.GET['distributor_id']
                    if dist_id:
                        orders = orders.filter(distributor_id=int(dist_id))
                orders = orders.filter(retailer=retailer)
            if 'status' in request.GET.keys():
                status = str(request.GET['status'])
                if status:
                    if status.upper() not in ['PENDING', 'APPROVED', 'DISPATCHED', 'DECLINED', 'ON HOLD', 'CANCELED']:
                        ...
                    else:
                        orders = orders.filter(status__icontains=status)

            if 'from' in request.GET.keys():
                from_ = request.GET['from']
                if from_:
                    try:
                        print("\nDate We Go", from_, "\n")
                        time_s = datetime.datetime.fromtimestamp(
                            int(from_) / 1000.0)
                        orders = orders.filter(when_placed__gte=time_s)
                    except Exception as e:
                        print("\n\nError On Sorting By From Date", str(e), "\n\n")
            if 'to' in request.GET.keys():
                to = request.GET['to']
                if to:
                    try:
                        time_s = datetime.datetime.fromtimestamp(
                            int(to) / 1000.0)
                        orders = orders.filter(when_placed__lte=time_s)
                    except Exception as e:
                        print("\n\nError On Sorting By To Date", str(e), "\n\n")

            if 'price_from' in request.GET.keys():
                price_from = request.GET['price_from']
                if price_from:
                    try:
                        orders = orders.filter(total_cost__gte=price_from)
                    except Exception as e:
                        print("Price From Sort Error", str(e))
            if 'price_to' in request.GET.keys():
                price_to = request.GET['price_to']
                if price_to:
                    try:
                        orders = orders.filter(total_cost__lte=price_to)
                    except Exception as e:
                        print("Price To Sort Error", str(e))
            c_page = CustomPaginator(request, orders, 20)
            return Response(
                {
                    "retail_orders": RetailOrdersSerializer(c_page.pageList, many=True).data,
                    "current_page": c_page.page,
                    "last_page": c_page.last_page,
                    "next_page": c_page.next_page,

                }, status=200)

        except Exception as e:
            return Response({
                "message": " Some Error Occurred " + str(e)
            }, status=500)


class TestData(generics.GenericAPIView):
    permission_classes = [AllowAny, ]

    def get(self, request):
        try:
            data = request.data
            return Response({"message": data}, status=200)
        except Exception as e:
            return Response({"message": "Error Here " + str(e)})


class CartApiActions(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request):
        user = request.user
        salesman = user.salesman
        retailer = user.retailer
        cart = ''
        if salesman:
            cart = salesman.cart
            if cart is None:
                cart = SalesManCart()
                cart.salesman = salesman
                cart.save()
            #
            retailer_id = request.GET['retailer_id']
            retailer = Retailer.objects.get(id=retailer_id)

        elif retailer:
            cart = retailer.retailer_cart
            if cart is None:
                cart = RetailerCart()
                cart.retailer = retailer
                cart.save()
        if cart == '':
            return Response({"message": "Un Authorised"}, status=403)
        if 'action' in request.GET.keys():
            action = request.GET['action']
            if action == 'cart_qty':
                if salesman:
                    cart_qty = cart.cart_qty(retailer)
                else:
                    cart_qty = cart.cart_qty
                return Response({
                    "cart_qty": cart_qty
                })
            elif action == "cart_items":
                if salesman:

                    cart_items = list()
                    for ret in cart.retailers:
                        retail = dict()
                        data_r = dict()
                        retail['id'] = ret.id
                        retail['name'] = ret.name
                        data_r['retailer'] = retail
                        data_r['cart'] = SalesCartSerializer(
                            cart, retailer_id=ret.id).data
                        cart_items.append(data_r)

                    return Response({
                        # "cart": SalesCartSerializer(cart, retailer_id=retailer.id).data
                        "carts": cart_items
                    })
                else:
                    return Response({"cart": RetailerCartSerializer(cart).data})

    def post(self, request):
        try:
            user = request.user
            salesman = user.salesman
            retailer = user.retailer
            cart = ''
            action = None
            qty = 1
            data = request.data
            if salesman:
                cart, _ = SalesManCart.objects.get_or_create(salesman=salesman)
                retailer_id = data['retailer_id']
                if retailer_id:
                    retailer = Retailer.objects.get(id=retailer_id)                
            elif retailer:
                cart, _ = RetailerCart.objects.get_or_create(retailer=retailer)

            if 'action' in request.data.keys():
                action = data['action']
                qty = data['qty']

            product_id = data['product_id']
            product = Product.objects.filter(
                id=product_id, active=True).first()
            if product is None:
                return Response({"message": "Product Not Found"}, status=404)
            mobile_order = MobileOrder()
            order_check = cart.orders.filter(product_id=product_id, retailer=retailer,
                                                offer_id=0, placed=False).first()
            if order_check is not None:
                mobile_order = order_check
                if not action:
                    qty = mobile_order.qty + 1

            mobile_order.retailer = retailer
            mobile_order.product = product
            mobile_order.salesman = salesman
            mobile_order.qty = qty
            mobile_order.placed = False
            mobile_order.distributor = product.distributor
            mobile_order.free_qty = 0
            mobile_order.total_qty = qty
            mobile_order.offer_id = 0

            product_price = commons.retailer_price_list_product_price(
                product.distributor, retailer, product, qty)

            mobile_order.per_price = float(product_price.amount)
            mobile_order.order_price = product_price * qty
            mobile_order.save()
            cart.orders.add(mobile_order)
            return Response({
                "message": "Cart Update Success"
            }, status=200)
        except Exception as e:
            print(traceback.format_exc())
            return Response({"message": "An Error Occurred " + str(e)}, status=500)

    def delete(self, request):
        user = request.user
        salesman = user.salesman
        retailer = user.retailer

        cart = None
        if salesman:
            cart = salesman.cart
        elif retailer:
            cart = retailer.cart
        else:
            return Response({"message": "Forbidden"}, status=403)
        if 'action' in request.GET.keys():
            action = request.GET['action']
            if action == 'all':
                orders = cart.orders.filter()
                if 'retailer_id' in request.GET.keys():
                    retailer_id = request.GET['retailer_id']
                    if retailer_id:
                        orders.exclude(retailer_id=retailer_id)
                print("Deleting The Orders\n",
                      orders.delete(), "\nFinished Deletion")
        order_id = request.GET['order_id']
        m_order = cart.orders.filter(id=order_id).first()
        if m_order:
            m_order.delete()
            return Response({"message": "Order Deletion Success"}, status=200)
        else:
            return Response({"message": "Order Not Found"}, status=404)

    def put(self, request):
        try:
            user = request.user
            salesman = user.salesman
            retailer = user.retailer
            data = request.data
            retailers = []
            distributors = []
            if salesman:
                cart = salesman.cart
                retailer_id = data['retailer_id']
                if retailer_id:
                    retailer_ = Retailer.objects.get(id=retailer_id)
                    retailers = [retailer_]
                    print("\n_________________________________\nThe Got Retailer\t", retailer_,
                          "\n\n________________________")
                else:
                    retailers = cart.retailers
                distributors = [salesman.distributor, ]
            else:
                cart = retailer.cart
                retailers = [retailer, ]
                distributors = cart.distributors
            if cart.orders.count() < 1:
                return Response({"message": "No Cart Item At The Moment"}, status=404)
            for retail in retailers:
                orders = cart.orders.filter(
                    retailer=retail, placed=False).all()
                if orders.count() < 1:
                    return Response({"message": "No  Products In Cart"}, status=404)
                for distributor in distributors:
                    orders = cart.orders.filter(
                        retailer=retail, placed=False, distributor=distributor)
                    # orders = MobileOrder.objects.filter(retailer=retail, placed=False,distributor=distributor).all()

                    retailer_order = RetailOrders()
                    dist_orders = list()
                    offers = list()
                    totals = 0
                    for order in orders.all():
                        totals = totals + order.order_price

                        dist_order = DistOrder()
                        dist_order.product = order.product
                        dist_order.retailer = order.retailer
                        dist_order.free_qty = order.free_qty
                        dist_order.placed = True
                        dist_order.qty = order.qty
                        dist_order.distributor = order.distributor
                        dist_order.per_price = order.per_price
                        dist_order.total_qty = order.total_qty
                        dist_order.order_price = order.order_price
                        dist_order.save()
                        for offer in order.price_offers.all():
                            offers.append(offer)
                        dist_orders.append(dist_order)
                        print("Order Delete After use on cart",
                              cart.orders.remove(order), order.delete())
                    retailer_order.retailer = retail
                    retailer_order.distributor = distributor

                    if salesman:
                        retailer_order.salesman = salesman
                    else:
                        check = RetailerProfile.objects.filter(
                            retailer=retail,
                            distributor=retailer_order.distributor
                            ).first().salesman
                        if check:
                            retailer_order.salesman = check
                        else:
                            retailer_order.salesman = SalesMan.objects.filter(
                            distributor=retailer_order.distributor).first()
                    retailer_order.status = "Pending"
                    retailer_order.note = request.data['notes']
                    retailer_order.total_cost = totals
                    retailer_order.altered_by = user
                    # retailer_order.status = "PENDING"
                    retailer_order.save()
                    retailer_order.ret_orders.add(*dist_orders)

            print("Clearing Orders", cart.orders.filter(
                retailer__in=retailers).delete())
            return Response({"message": "Order Placement Success"}, status=200)
        except Exception as e:
            print(traceback.format_exc())
            return Response({"message": "Order Placemen Error " + str(e)}, status=500)


class OrderTransportDetails(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request, order_id):
        try:
            user = request.user
            if user.salesman or user.retailer:
                retail_order = RetailOrders.objects.filter(id=order_id).first()
                return Response({"transport_details": retail_order.transport_details})
            else:
                return Response({"message": "Un Authorised"}, status=403)
        except Exception as e:
            print(traceback.format_exc())
            return Response({"message": "System Error " + str(e)}, status=500)
