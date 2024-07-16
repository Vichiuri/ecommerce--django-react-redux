import datetime

from django.core.paginator import Paginator
from django.db.models import Q, Count

from mobile_retailer.m_serializers.retailer_data import OffersSerializer, MobileBannerSerializer, PCategorySerializerM
from mobile_retailer.views.paginator import CustomPaginator
from .serializers import *
from distributor.models.distributor import *
from distributor.models.netbot import *
from mobile_retailer.models import *
from rest_framework import permissions, generics, status
from rest_framework.response import Response
from django.utils import timezone
import json


class MobileBannersApi(generics.RetrieveAPIView):
    serializer_class = MobileBannerSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        retailer = user.user_retailer.retailer
        distributor_id = self.request.query_params.get("distributor_id")
        distributor = Distributor.objects.get(id=distributor_id)
        banner = MobileBanner.objects.filter(distributor=distributor).order_by('-position')

        return Response({
            'banners': MobileBannerSerializer(banner, many=True).data
        })


class MobileDashBoardApi(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        print('Hitting Here')
        retailer = ""
        distributor_id = ""
        retailer_user = RetailerUser.objects.filter(user=user).first()
        if retailer_user is None:
            salesman = SalesMan.objects.filter(email=user.email).first()
            distributor_id = salesman.distributor_id
            retailer_id = request.GET['retailer_id']
            retailer = Retailer.objects.filter(id=retailer_id).first()
        else:
            retailer = retailer_user.retailer
            distributor_id = self.request.query_params.get("distributor_id")
        distributor = Distributor.objects.get(id=distributor_id)
        banner = MobileBanner.objects.filter(distributor=distributor)
        today = datetime.datetime.today()
        products = Product.objects.filter(distributor=distributor).order_by('-id')[:10]
        offers = PriceOffer.objects.filter(distributor=distributor, date_from__lte=today,
                                           date_to__gte=today).order_by('-date_to')
        return Response({
            'banners': MobileBannerSerializer(banner, many=True).data,
            "products": ProductSerializer(products, many=True, retailer_id=retailer.id).data,
            "offers": OffersSerializer(offers, many=True).data
        })


class MobileCategoriesApi(generics.RetrieveAPIView):
    serializer_class = PCategorySerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = request.user
        salesman = user.salesman
        retailer = user.retailer
        distributor_id = ""
        if salesman is not None:

            distributor_id = salesman.distributor.id
        elif retailer is not None:
            distributor_id = self.request.query_params.get("distributor_id")
        else:
            return Response({
                "message": ""
            }, status=403)

        categories = PCategory.objects.filter(distributor__id=distributor_id).annotate(
            pr_counts=Count("categ_products")
        ).order_by('-pr_counts')
        c_page = CustomPaginator(request, categories, 10)

        return Response({
            "categories": PCategorySerializerM(c_page.pageList, many=True).data,
            "last_page": c_page.last_page,
            "current_page": c_page.page,
            "next_page": c_page.next_page,
        })


class MobileOffersApi(generics.RetrieveAPIView):
    serializer_class = ProductSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        salesman = SalesMan.objects.filter(email=user.email).first()
        retailer = user.user_retailer.retailer
        distributor_id = self.request.query_params.get("distributor_id")
        distributor = Distributor.objects.get(id=distributor_id)
        today = timezone.now()
        offers = PriceOffer.objects.filter(distributor=distributor, date_from__lte=today, date_to__gt=today).order_by(
            '-to_date')

        paginator = Paginator(offers, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "price_offers": PriceOfferSerializer(pageList, many=True).data,
            "last_page": last_page
        })


class MobileProductsApi(generics.RetrieveAPIView):
    serializer_class = ProductSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        retailer = user.user_retailer.retailer

        distributor_id = self.request.query_params.get("distributor_id")
        distributor = Distributor.objects.get(id=distributor_id)

        if self.request.query_params.get("view_category_id"):
            category_id = self.request.query_params.get("view_category_id")
            category = PCategory.objects.get(id=category_id)
            products = Product.objects.filter(distributor=distributor, category=category).order_by('-id')[:4]
            last_page = 0
        elif self.request.query_params.get("category_id"):
            category_id = self.request.query_params.get("category_id")
            category = PCategory.objects.get(id=category_id)
            querySet = Product.objects.filter(distributor=distributor, category=category).order_by('-id')

            paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
            page = self.request.query_params.get("page")
            products = paginator.get_page(page)
            last_page = paginator.num_pages
        else:
            querySet = Product.objects.filter(distributor=distributor).order_by('-id')

            paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
            page = self.request.query_params.get("page")
            products = paginator.get_page(page)
            last_page = paginator.num_pages

        return Response({
            "products": ProductSerializer(products, many=True, retailer_id=retailer.id).data,
            "last_page": last_page
        })


class MobileCartApi(generics.GenericAPIView):
    serializer_class = ProductSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        print("\n\nRequesting Token\n", request.headers['Authorization'], "\n\n")
        user = request.user
        salesman = SalesMan.objects.filter(email=user.email).first()

        if salesman is not None:
            retailer_id = request.GET['retailer_id']
            retailer = Retailer.objects.filter(id=retailer_id).first()
            salesman_id = salesman.id
        else:
            retailer = user.user_retailer.retailer
            salesman_id = 0

        cart = RetailerCart.objects.filter(retailer=retailer).first()

        if cart:
            return Response({
                'cart': RetailerCartSerializer(cart, salesman_id=salesman_id).data
            })
        else:
            cart = RetailerCart(retailer=retailer)
            cart.save()

            return Response({
                'cart': RetailerCartSerializer(cart).data,
            })

    def post(self, request):
        print("\n\nRequesting Token\n", request.headers['Authorization'], "\n\n")
        user = self.request.user
        retailer = user.user_retailer.retailer

        cart = RetailerCart.objects.filter(retailer=retailer).first()
        # print(request.body)
        json_data = json.loads(request.body)
        distributor = Distributor.objects.get(id=json_data['distributor_id'])
        product = Product.objects.get(id=json_data['product_id'])
        qty = json_data['qty']
        order_price = json_data['order_price']
        variant = json_data['variant']
        order = MobileOrder(distributor=distributor, product=product, retailer=retailer, qty=qty,
                            order_price=order_price,
                            variant=variant)
        order.save()
        if json_data['price_offers']:
            offers = json_data['price_offers']
            for offer in offers:
                price_offer = PriceOffer.objects.get(id=offer)
                order.price_offers.add(price_offer)

        if cart:
            cart.orders.add(order)
        else:
            cart = RetailerCart(retailer=retailer)
            cart.save()
            cart.orders.add(order)

        return Response({
            'message': 'Product has been added to cart',
            'cart': RetailerCartSerializer(cart).data
        })

    def delete(self, request):
        user = self.request.user
        retailer = user.user_retailer.retailer

        cart = RetailerCart.objects.filter(retailer=retailer).first()
        order_id = self.request.query_params.get("order_id")
        order = MobileOrder.objects.get(id=order_id)
        order.delete()

        return Response({
            'message': "Product has been removed",
        }, status=status.HTTP_204_NO_CONTENT)
