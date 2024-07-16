"""
Dashboard For Mobile
"""
from django.utils import timezone
from rest_framework import generics, permissions
from rest_framework.response import Response

from distributor.models import Distributor, MobileBanner, PriceOffer
from mobile_retailer.m_serializers.retailer_data import MobileBannerSerializer, OffersSerializer
from mobile_retailer.views.paginator import CustomPaginator


class BannersView(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        salesman = user.salesman
        retailer = user.retailer
        distributor = None
        if salesman is not None:
            distributor = salesman.distributor
        elif retailer is not None:
            distributor_id = request.GET['distributor_id']
            distributor = Distributor.objects.get(id=distributor_id)
        else:
            return Response({
                "message": ""
            }, status=403)
        today = timezone.now().today()
        banners = MobileBanner.objects.filter(distributor=distributor) \
            .exclude(offer__date_from__lte=today,
                     offer__date_to__gte=today).order_by('-position')
        return Response({
            "banners": MobileBannerSerializer(banners, many=True).data
        }, status=200)


class OffersView(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        salesman = user.salesman
        retailer = user.retailer
        if salesman is not None:
            distributor = salesman.distributor
        elif retailer is not None:
            distributor_id = int(request.GET['distributor_id'])
            distributor = Distributor.objects.get(id=distributor_id)
        else:
            return Response({
                "message": ""
            }, status=403)
        today = timezone.now().today()
        offers = PriceOffer.objects.filter(distributor=distributor, date_from__lte=today, date_to__gte=today).order_by(
            '-date_to')
        c_page = CustomPaginator(request, offers, 10)
        return Response({
            "offers": OffersSerializer(c_page.pageList, many=True).data,
            "current_page": c_page.page,
            "next_page": c_page.next_page,
            "last_page": c_page.last_page
        })

