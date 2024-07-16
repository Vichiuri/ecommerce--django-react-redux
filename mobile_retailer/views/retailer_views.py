"""
Retailer Mobile Endpoint Views
"""
import datetime
import os

from django.http import HttpResponse, Http404
from django.views import View
from rest_framework import viewsets, generics, permissions
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from distributor import commons
from distributor.models import RetailerProfile, ApkStorage
from mobile_retailer.m_serializers.retailer_data import *
from mobile_retailer.models import MobileOrder, RetailerCart, RetailerUser
from mobile_retailer.views.paginator import CustomPaginator
from retailer.serializers import DistributorSerializer


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100


class ProductViewSet(viewsets.ModelViewSet):
    # define queryset
    queryset = Product.objects.all()

    # specify serializer to be used
    serializer_class = V1ProductSerializer


class DistributorViewSet(viewsets.ModelViewSet):
    queryset = Distributor.objects.all()

    serializer_class = V1DistributorSerializer


class WorldCountryViewSet(viewsets.ModelViewSet):
    queryset = WorldCountry.objects.all()
    serializer_class = V1CountrySerializer
    pagination_class = StandardResultsSetPagination


class WorldCityViewSet(viewsets.ModelViewSet):
    queryset = WorldCity.objects.all()
    serializer_class = V1CitySerializer
    pagination_class = StandardResultsSetPagination


class PCategoryViewSet(viewsets.ModelViewSet):
    queryset = PCategory.objects.all()
    serializer_class = V1ProductCategorySerializer
    pagination_class = StandardResultsSetPagination


class CartApiView(generics.GenericAPIView):
    # serializer_class = SalesTargetSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = request.user
        salesman = SalesMan.objects.filter(email=user.email).first()
        if salesman is not None:
            retailer_id = request.GET['retailer_id']
            retailer = Retailer.objects.get(id=retailer_id)
            distributors = [salesman.distributor, ]
        else:
            retailer_user = user.user_retailer
            retailer = retailer_user.retailer
            distributors = retailer.distributors.all()
        cart = RetailerCart.objects.filter(retailer=retailer).first()
        cart_qty = 0
        if cart is None:
            cart = RetailerCart(retailer=retailer)
            cart.save()
            return Response({"cart_qty": cart_qty})
        products = []
        orders = cart.orders.filter(distributor__in=distributors)
        if salesman is None:
            orders = cart.orders.filter(distributor__in=distributors)
        # print("Cart Quantity Query", orders.query)
        for order in orders.all():
            if order.product not in products:
                cart_qty += 1
                products.append(order.product)
        print("Cart Quantity Query", cart_qty)

        return Response({
            "cart_qty": cart_qty
        })

    def post(self, request):
        data = request.data
        message = "Product Added To Cart Successfully"
        product_id = data['id']
        print("\n\nData Received ", data, "\n\n")
        qty = 1
        action = "q"
        try:
            qty = data['qty']
            action = ['action']
        except Exception as e:
            qty = 1
            action = "q"
            print("Error Occurred ", str(e))
        print("Quantity", qty, "Action", action)

        if int(qty) < 1:
            return Response({"message": "Invalid Qty"}, status=400)
        product = Product.objects.get(id=product_id)
        user = request.user
        salesman = SalesMan.objects.filter(email=user.email).first()
        if salesman is not None:
            retailer_id = request.GET['retailer_id']
            retailer = Retailer.objects.filter(id=retailer_id).first()
        else:
            retailer_user = request.user.user_retailer
            retailer = retailer_user.retailer

        mobile_order = MobileOrder.objects.filter(retailer=retailer, product=product, placed=False,
                                                  applied_offer__isnull=True).first()
        retailer_cart = RetailerCart.objects.filter(retailer=retailer).first()
        product_price = commons.retailer_price_list_product_price(
            product.distributor, retailer, product, qty)
        if mobile_order is None:
            mobile_order = MobileOrder()
            mobile_order.retailer = retailer
            mobile_order.product = product
            mobile_order.distributor = product.distributor
            mobile_order.salesman = salesman
            if action == "q":
                mobile_order.qty = 1
            else:
                mobile_order.qty = qty
            mobile_order.order_price = product_price * mobile_order.qty
            mobile_order.placed = False
            mobile_order.per_price = float(product_price.amount)
            mobile_order.save()
            retailer_cart.orders.add(mobile_order)
            retailer_cart.save()
        else:
            if action == "q":
                print("Current Cart Product Qty ", mobile_order.qty)
                mobile_order.qty = mobile_order.qty + 1
                mobile_order.salesman = salesman
                print("Add 1 To Ordered Product ", mobile_order.qty)
                message = "Product Cart Update Success"
            else:
                mobile_order.qty = qty
            product_price = commons.retailer_price_list_product_price(product.distributor, retailer,
                                                                      product, mobile_order.qty)
            mobile_order.order_price = mobile_order.qty * product_price
            mobile_order.per_price = float(f"{product_price.amount}")
            print(mobile_order)
            print("Salesman Placing An Order", mobile_order.salesman)
            mobile_order.save()
        print("qty received", qty)

        return Response({"message": message}, status=200)

    def put(self, request):
        user = request.user
        salesman = SalesMan.objects.filter(email=user.email).first()
        if salesman is not None:
            distributors = [salesman.distributor, ]
            retailer_id = request.GET['retailer_id']
            retailer = Retailer.objects.filter(id=retailer_id).first()
        else:
            retailer_user = request.user.user_retailer
            retailer = retailer_user.retailer
            distributors = retailer.distributors.all()
        retailer_cart = RetailerCart.objects.filter(retailer=retailer).first()
        if retailer_cart is None:
            return Response({"message": "No Products In Cart"}, status=404)
        elif retailer_cart.orders.count() < 1:
            return Response({"message": "No Products In Cart"}, status=404)

        for dist in distributors:
            mobile_orders = retailer_cart.orders.filter(distributor=dist).all()
            if mobile_orders.count() >= 1:
                retail_order = RetailOrders()
                retail_order.distributor = dist
                retail_order.retailer = retailer
                retail_order.status = "Pending"

                order_no = 1
                prev_orders = RetailOrders.objects.filter(
                    distributor=dist).order_by('-id')
                if prev_orders.first():
                    order_no = prev_orders.first().ref_number + 1

                retail_order.ref_number = order_no
                retail_order.salesman = SalesMan.objects.filter(
                    distributor=dist).first()
                retail_order.save()
                for mobile_order in mobile_orders:
                    dist_order = DistOrder()
                    dist_order.order_price = mobile_order.order_price
                    dist_order.qty = mobile_order.qty
                    dist_order.distributor = mobile_order.distributor
                    dist_order.product = mobile_order.product
                    dist_order.retailer = mobile_order.retailer
                    dist_order.per_price = mobile_order.per_price
                    dist_order.placed = True

                    dist_order.free_qty = mobile_order.free_qty
                    dist_order.total_qty = mobile_order.total_qty

                    dist_order.save()
                    for price_offer in mobile_order.price_offers.all():
                        dist_order.price_offers.add(price_offer)
                    retail_order.ret_orders.add(dist_order)
                    retail_order.total_cost = retail_order.total_cost + dist_order.order_price
                    mobile_order.delete()
                retail_order.when_placed = timezone.now()
                if salesman is not None:
                    retail_order.salesman = salesman
                else:
                    retail_order.salesman = RetailerProfile.objects.filter(retailer=retailer,
                                                                           distributor=dist).first().salesman
                retail_order.note = request.data['notes']
                retail_order.save()

        retailer_cart.orders.clear()
        # mobile_orders = MobileOrder.objects.all().delete()
        # print(mobile_orders)
        return Response(
            {"message": "Order Placement Success"}, status=200
        )

    def delete(self, request):
        order_id = request.GET["order_id"]
        print("Got order Id", order_id)
        user = request.user
        salesman = SalesMan.objects.filter(email=user.email).first()
        mobile_order = MobileOrder.objects.filter(id=order_id).first()

        if salesman is not None:
            mobile_order = MobileOrder.objects.filter(
                id=order_id, salesman=salesman)
            print(mobile_order.query)
            mobile_order = mobile_order.first()
            if mobile_order is None:
                return Response({"message": " You are UnAuthorised To delete the Order"}, status=404)
            if mobile_order.offer_id:
                if mobile_order.offer_id > 0:
                    MobileOrder.objects.filter(offer_id=mobile_order.offer_id).exclude(
                        id=mobile_order.id, order_price=0).all().delete()
            mobile_order.delete()

        else:
            mobile_order = MobileOrder.objects.filter(
                id=order_id, retailer=request.user.user_retailer.retailer).first()
            if mobile_order is None:
                return Response({"message": " You are UnAuthorised To delete the Order"}, status=404)
            if mobile_order.offer_id:
                if mobile_order.offer_id > 0:
                    MobileOrder.objects.filter(offer_id=mobile_order.offer_id).exclude(
                        id=mobile_order.id).all().delete()
            mobile_order.delete()

        if mobile_order is None:
            return Response({"message": "Order Does Not Exist"}, status=404)

        # mobile_order.delete()
        print("deleted Order", mobile_order.id)
        return Response({"message": "Order Deletion Success"}, status=200)


class ProductsByCategory(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request, category_id):
        user = request.user
        salesman = SalesMan.objects.filter(email=user.email).first()
        if salesman is not None:
            retailer_id = request.GET['retailer_id']
            retailer = Retailer.objects.filter(id=retailer_id).first()
            retailer_id = retailer.id
        else:
            retailer = user.user_retailer.retailer
            retailer_id = retailer.id

        products = Product.objects.filter(
            category_id=category_id, active=True).order_by('name')
        c_page = CustomPaginator(request, products, 20)
        if user.salesman:
            prs = ProductSerializerSa(c_page.pageList, many=True, retailer_id=retailer_id,
                                      salesman_id=user.salesman.id).data
        else:
            prs = ProductSerializerM(
                c_page.pageList, many=True, retailer_id=retailer_id).data
        return Response({
            "products": prs,
            "current_page": c_page.page,
            "next_page": c_page.next_page,
            "last_page": c_page.last_page

        })


class FavoriteProduct(generics.GenericAPIView):
    """
    Retailer Favorite Products
    """
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = request.user
        salesman = SalesMan.objects.filter(email=user.email).first()
        if salesman is not None:
            retailer_id = request.GET['retailer_id']
            retailer = Retailer.objects.filter(id=retailer_id).first()
            favourite_products = RetailerUser.objects.filter(retailer=retailer).first().favorite_products.filter(
                distributor=salesman.distributor, active=True)
        else:
            retailer = RetailerUser.objects.filter(user=user).first()
            favourite_products = retailer.favorite_products.filter(active=True)
            retailer = retailer.retailer
        c_page = CustomPaginator(request, favourite_products, 20)
        if user.salesman:
            prs = ProductSerializerSa(c_page.pageList, many=True, retailer_id=retailer.id,
                                      salesman_id=user.salesman.id).data
        else:
            prs = ProductSerializerM(
                c_page.pageList, many=True, retailer_id=retailer.id).data
        return Response(

            {
                "products": prs,
                "next_page": c_page.next_page,
                "last_page": c_page.last_page,
                "current_page": c_page.page,
            }
        )

    def post(self, request):
        data = request.data
        user = request.user
        retailer = RetailerUser.objects.filter(user=user).first()
        product_id = data['product_id']
        product = Product.objects.get(id=product_id)
        favorites = retailer.favorite_products
        message = "Product Added To Favorites Successfully"
        if product in favorites.all():
            favorites.remove(product)
            message = " Product Removed From Favorites "
        else:
            favorites.add(product)
        return Response({
            "message": message
        })


class PurchaseOnOffer(generics.GenericAPIView):
    """
    For Offer Purchases From Mobile

    """
    permission_classes = [

        permissions.IsAuthenticated
    ]  # Ensure The user is authenticated

    def post(self, request):
        data = request.data
        user = request.user
        salesman = user.salesman
        if salesman is not None:
            retailer_id = data['retailer_id']
            retailer = Retailer.objects.filter(id=retailer_id).first()
            # _cart = SalesManCart.objects.filter(salesman=salesman).first()
            _cart = RetailerCart.objects.filter(retailer=retailer).first()
            if _cart is None:
                # _cart = SalesManCart()
                _cart = RetailerCart()
                _cart.retailer = retailer
                _cart.save()
        else:
            retailer_user = RetailerUser.objects.filter(user=user).first()
            retailer = retailer_user.retailer
            _cart = RetailerCart.objects.filter(retailer=retailer).first()
            if _cart is None:
                _cart = RetailerCart()
                _cart.retailer = retailer
                _cart.save()
        offer_id = data['offer_id']
        qty = int(data['qty'])
        offer = PriceOffer.objects.get(id=offer_id)
        if qty < offer.x_amt:
            return Response({"message": "You Dont Qualify For The Offer With" + str(qty)}, status=400)
        mobile_order = MobileOrder()
        x_item = offer.x_item
        mobile_order_check = MobileOrder.objects.filter(
            product=x_item, applied_offer__isnull=False).first()

        if mobile_order_check is not None:
            mobile_order = mobile_order_check
            mobile_order.retailer = retailer

        product_price = commons.retailer_price_list_product_price(
            x_item.distributor, retailer, x_item, qty)
        x_qty = offer.x_amt

        y_qty = offer.y_amt
        mobile_order.product = x_item

        mobile_order.qty = qty
        mobile_order.retailer = retailer
        mobile_order.placed = False
        mobile_order.applied_offer = str(offer)
        mobile_order.qty = qty
        mobile_order.distributor = offer.distributor
        mobile_order.offer_id = offer_id
        mobile_order.applied_offer = str(offer)
        mobile_order.order_price = product_price * qty
        mobile_order.per_price = float(product_price.amount)
        print(offer)

        print("X Item:", x_item, "X Qty:", x_qty, "Ordered Quantity:", qty)

        if offer.scheme == 'BnXEX':
            mobile_qty = qty + int(qty / x_qty) * y_qty
            mobile_order.qty = mobile_qty
            mobile_order.order_price = qty * product_price
            mobile_order.free_qty = int(qty / x_qty) * y_qty
            mobile_order.total_qty = mobile_qty

        #
        elif offer.scheme == 'BnXYF':
            mobile_order.order_price = product_price * qty
        #     m2_qty = int(qty / x_qty) * y_qty
        #     y_item = offer.y_item
        #     m2 = MobileOrder()
        #     m2_check = MobileOrder.objects.filter(retailer=retailer, product=y_item, applied_offer=str(offer),
        #                                           placed=False).first()
        #
        #     if m2_check is not None:
        #         m2 = m2_check
        #     m2.retailer = retailer
        #
        #     m2.product = y_item
        #     m2.salesman = retailer.retailer_salesmen.filter(distributor=x_item.distributor).first()
        #     m2.qty = m2_qty
        #     m2.per_price = 0.0
        #     m2.applied_offer = str(offer)
        #     m2.offer_id = offer_id
        #     m2.free_qty = m2_qty
        #     m2.total_qty = m2_qty
        #     m2.distributor = offer.distributor
        #     m2.order_price = 0
        #     m2.save()
        #     m2.price_offers.add(offer)
        #     _cart.orders.add(m2)
        #     print(y_item)
        #
        elif offer.scheme == 'BnXy%O':
            mobile_order.order_price = product_price * \
                qty * (100 - y_qty) / 100
        mobile_order.save()
        _cart.orders.add(mobile_order)
        return Response({"message": "Offer Add Success"})


class DistributorsView(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        """
        Fetch All Distributors Related To the Retailer
        """
        user = request.user

        retailer_user = RetailerUser.objects.filter(user=user).first()
        retailer = retailer_user.retailer
        distributors = retailer.distributors
        if 'search' in request.GET.keys():

            search = request.GET['search']
            if search:
                search = str(search)
                distributors = distributors.filter(name__icontains=str(search))
        print("Searched Distributors\n", distributors.count(), "\nFound\n\n")
        return Response({
            "distributors": DistributorSerializer(distributors, many=True).data
        })

    def post(self, request):
        """
        Set the default Distributor
        """
        data = request.data
        distributor_id = data['distributor_id']
        distributor = Distributor.objects.get(id=distributor_id)
        if distributor is None:
            return Response({"message": "Expected A Valid distributor_d In Request Body"})
        user = request.user
        retailer_user = RetailerUser.objects.filter(user=user).first()
        retailer_user.default_distributor = distributor
        retailer_user.save()
        return Response(
            {
                "message": "Default Distributor Change Success",
                "distributor": DistributorSerializer(distributor).data
            }
        )


class MobileNotificationsView(generics.GenericAPIView):
    """
    For Fetching Mobile  Notifications
    """
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        if 'notification_id' in request.GET.keys():
            notif_id = request.GET['notification_id']
            notif = MNotification.objects.filter(id=notif_id).first()
            if notif is None:
                return Response({
                    "message": "No Notifications For You"
                }, status=404)
            return Response({
                "notification": PushNotificationSerializer(notif).data
            })
        user = request.user
        # saleman = SalesMan.objects.filter(email=user.email).first()
        # if saleman is not None:
        #     return Response({"notifications": []})
        # if not user.user_retailer:
        #     return Response({
        #         "message": "No Notifications For You"
        #     }, status=404)
        #
        # retailer_user = RetailerUser.objects.filter(user=user).first()

        # notifications = MNotification.objects.filter(users).all()[:5]
        today = timezone.now()
        notifications = MNotification.objects.filter(
            users=user).order_by('-id')
        # notifications = user.user_notifications.filter(
        #     show_from__lte=today, show_to__gte=today).order_by('-id').all()
        return Response({
            "notifications": PushNotificationSerializer(notifications, many=True).data
        }, status=200)


class SingleOffer(generics.GenericAPIView):
    """
    Fetch Single Offer Plus Its Other Related Offers
    """
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        offer_id = request.GET['offer_id']
        offer = PriceOffer.objects.filter(id=offer_id).first()
        today = timezone.now().today()

        if offer is None:
            return Response({
                "message": "Offer Not Found"
            }, status=404)
        offers = PriceOffer.objects.filter(distributor=offer.distributor, date_from__lte=today,
                                           date_to__gte=today).all()
        return Response({
            "offer": OffersSerializer(offer).data,
            "other_offers": OffersSerializer(offers, many=True).data
        }, status=200)


class DownloadApk(View):
    """
    For Downloading Updated Apks
    Hit When A User Clicks On Upgrade From Their Installed Application
    """

    def get(self, request):
        print(request.get_host())
        path = ApkStorage.objects.get(id=1).apk.path
        file_path = os.path.join(path)
        if os.path.exists(file_path):
            with open(file_path, 'rb') as fh:
                response = HttpResponse(
                    fh.read(), content_type="application/vnd.android.package-archive")
                response['Content-Disposition'] = 'inline; filename=' + \
                    "netbot_app.apk"
                return response
        raise Http404
