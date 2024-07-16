from django.shortcuts import render

from ..serializers import   RetailerUserSerializer, PriceOfferSerializer, PCategorySerializer, ProductSerializer
from mobile_retailer.m_serializers.retailer_data import  MobileBannerSerializer
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from mobile_retailer.models.retailerM import RetailerUser
from distributor.models import PCategory, PriceOffer, MobileBanner, Product
from django.utils import timezone
# Create your views here.
class RetailerDashBoardApi(generics.RetrieveAPIView):
    """
    Fetch Retailer website dahsboard data...
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request):
        user = self.request.user
        distributor_id = self.request.query_params.get("distributor_id")
        retailer_user = RetailerUser.objects.filter(user=user).first()

        today = timezone.now()
        categories = PCategory.objects.filter(distributor__id=distributor_id).order_by('-id')[:8]
        offers = PriceOffer.objects.filter(distributor__id=distributor_id, date_from__lte=today, date_to__gt=today).order_by('-id')[:8]
        banners = MobileBanner.objects.filter(distributor__id=distributor_id).order_by('-position')

        return Response({
            'categories': PCategorySerializer(categories, many=True).data,
            'offers': PriceOfferSerializer(offers, many=True).data,
            'banners': MobileBannerSerializer(banners, many=True).data
        })

class RetailerProductCategoryApi(generics.RetrieveAPIView):
    """
    Fetch view products for retailers based distributor
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request):
        category_id = self.request.query_params.get("category_id")

        products = Product.objects.filter(category__id=category_id, active=True).order_by('-is_new_arrival','-id')[:8]

        return Response({
            "products": ProductSerializer(products, many=True).data,
        })

class RetailerNewArriValProductsApi(generics.RetrieveAPIView):
    """
    Fetch New arrival products for retailer based on distributor
    """
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distributor_id = self.request.query_params.get("distributor_id")
        retailer_user = RetailerUser.objects.filter(user=user).first()

        products = Product.objects.filter(distributor__id=distributor_id, active=True).order_by('-when_created','-is_new_arrival','-id')[:8]

        return Response({
            "products": ProductSerializer(products, many=True).data,
        })