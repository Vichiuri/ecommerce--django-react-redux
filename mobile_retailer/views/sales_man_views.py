"""
Views Meant For Sales People
"""
import traceback

from rest_framework import permissions, generics
from rest_framework.response import Response

from distributor import commons
from distributor.commons import retailer_price_list_product_price as retp

from distributor.models import SalesMan, Retailer, Product, PCategory, PriceOffer
from mobile_retailer.m_serializers.retailer_data import ProductSerializerM
from mobile_retailer.m_serializers.salesman_data import SalesCartSerializer
from mobile_retailer.models import MobileOrder
from mobile_retailer.views.paginator import CustomPaginator
from retailer.serializers import RetailerSerializer


class SalesManRetailers(generics.GenericAPIView):
    """
    Fetch All Retailers Associated To The sales Person
    """
    permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request):
        user = request.user
        salesman = SalesMan.objects.filter(email=user.email).first()
        if 'search' in request.GET.keys():
            search = request.GET['search']
            if search:
                retailers = salesman.retailers_.filter(name__icontains=str(search))
                return Response({"retailers": RetailerSerializer(retailers.all(), many=True).data},
                                status=200)
        return Response({"retailers": RetailerSerializer(salesman.retailers_.all(), many=True).data}, status=200)

    def post(self, request):
        """
        Set Retailer As The Current Retailer
        request body:
            json data:
                retailer_id (int)
        returns:
            json serialized Model Of the Retailer
        """
        data = request.data
        retailer_id = data['retailer_id']
        retailer = Retailer.objects.filter(id=int(retailer_id)).first()
        return Response({
            "retailer": RetailerSerializer(retailer).data
        }, status=200)


class SalesManProducts(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request):
        user = request.user
        salesman = user.salesman
        distributor = ''
        if salesman:
            distributor = salesman.distributor
        elif not salesman:
            return Response({
                "message": " "
            }, status=403)
        products = Product.objects.filter(distributor=distributor)
        c_page = CustomPaginator(request, products, 20)
        return Response({
            "products": ProductSerializerM(c_page.pageList, many=True).data,
            "current_page": c_page.page,
            "next_page": c_page.next_page,
            "last_page": c_page.last_page,
        })


class SyncCart(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            user = request.user
            salesman = user.salesman
            retailer = user.retailer
            cart_items = request.data
            print("Received Data \t\t", cart_items, '\nThere They Go\n')
            cart = salesman.cart
            if salesman:
                mobile_orders = list()
                print("Deleting sync", cart.orders.filter(offer_id=0).delete())
                # print("Deleting sync", cart.orders.exclude(offer_id__isnull=False).delete())
                for cart_item in cart_items:
                    mobile_order = MobileOrder()
                    product_id = cart_item['product_id']
                    cart_qty = cart_item['cart_qty']
                    retailer_id = cart_item['retailer_id']
                    product = Product.objects.get(id=product_id)
                    retailer = Retailer.objects.get(id=retailer_id)

                    # print(cart.orders.filter(product=product, retailer=retailer, applied_offer__isnull=True).delete())
                    pr_price = retp(product.distributor, retailer, product, cart_qty)
                    mobile_order.retailer = retailer
                    mobile_order.salesman = salesman
                    mobile_order.product = product
                    mobile_order.qty = cart_qty
                    mobile_order.per_price = float(str(pr_price.amount))
                    mobile_order.distributor = product.distributor
                    mobile_order.total_qty = cart_qty
                    mobile_order.order_price = pr_price * cart_qty
                    mobile_order.placed = False
                    mobile_order.free_qty = 0
                    mobile_order.save()
                    mobile_orders.append(mobile_order)

                cart.orders.add(*mobile_orders)
                # cart1 = cart
                # for mobile_order in cart.orders.all():
                #     retailer = mobile_order.retailer
                #     retailer_cart = retailer.retailer_cart
                #     mobile_orde = mobile_order
                #     mobile_orde.id = None
                #     retailer_cart.orders.filter(product=mobile_order.product, applied_offer__isnull=True).delete()
                #     mobile_orde.save()
                #
                #     cart.orders.add(mobile_orde)
                # # cart.orders.clear()
                return Response({
                    "cart": SalesCartSerializer(cart).data
                })
            elif retailer:
                ...
        except Exception as ex:
            print(traceback.format_exc())
            return Response({
                "message": "Syncing Error " + str(ex)
            }, status=500)


class PurchaseOnOfferM(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def post(self, request):
        try:
            user = request.user
            salesman = user.salesman
            retailer = user.retailer
            data = request.data
            if salesman:
                cart = salesman.cart
                retailer_id = data['retailer_id']
                retailer = Retailer.objects.filter(id=retailer_id).first()
            else:
                cart = retailer.cart

            offer_id = data['offer_id']
            qty = int(data['qty'])
            offer = PriceOffer.objects.filter(id=offer_id).first()
            if offer and qty >= offer.x_amt and offer.is_active:
                pass
            else:
                return Response({"message": "Offer Expired"}, status=404)
            mobile_order = MobileOrder()
            product_price = commons.retailer_price_list_product_price(offer.x_item.distributor, retailer, offer.x_item,
                                                                      qty)
            mobile_order_check = cart.orders.filter(product=offer.x_item, offer_id=offer_id, retailer=retailer).first()

            x_qty = offer.x_amt
            y_qty = offer.y_amt

            if mobile_order_check:
                mobile_order = mobile_order_check
            mobile_order.product = offer.x_item
            mobile_order.placed = False
            mobile_order.qty = qty
            mobile_order.retailer = retailer
            mobile_order.offer_id = offer_id
            mobile_order.distributor = offer.distributor
            mobile_order.applied_offer = str(offer)
            mobile_order.order_price = product_price * qty
            mobile_order.per_price = float(product_price.amount)
            mobile_order.salesman = salesman

            if offer.scheme == 'BnXEX':
                mobile_qty = qty + int(qty / x_qty) * y_qty
                mobile_order.qty = mobile_qty
                mobile_order.order_price = qty * product_price
                mobile_order.free_qty = int(qty / x_qty) * y_qty
                mobile_order.total_qty = mobile_qty
            elif offer.scheme == 'BnXYF':
                mobile_order.order_price = product_price * qty
            elif offer.scheme == 'BnXy%O':
                mobile_order.order_price = product_price * qty * (100 - y_qty) / 100
            mobile_order.save()
            cart.orders.add(mobile_order)
            mobile_order.price_offers.add(offer)
            return Response({
                "message": "Offer Added To Cart Success"
            }, status=200)
        except Exception as e:
            traceback.print_exc()
            return Response({
                "message": "System Response Error " + str(e)
            }, status=500)
