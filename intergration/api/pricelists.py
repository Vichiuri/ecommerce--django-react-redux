from django.shortcuts import get_object_or_404
from django.core.paginator import Paginator
from ..authMixin import IntegratedAuthMixin
from rest_framework.response import Response
from rest_framework import viewsets
from distributor.models.distributor import PriceList
from distributor.models.netbot import DistUsers, Distributor
from retailer.serializers import PriceListSerializer, ProductPriceListSeriazer


class IntergratedProductPriceList(IntegratedAuthMixin, viewsets.ViewSet):
    """
    get price lists
    """
    serializer_class = PriceListSerializer
    permission_classes = [
        # permissions.IsAuthenticated
    ]

    def list(self, request):
        
        _request_header = self.request.headers
        id = _request_header['Distributor'] 
        user = get_object_or_404(Distributor, id=id)
        distUser = DistUsers.objects.filter(distributor=user).first()
        distributor = distUser.distributor

        price_lists = PriceList.objects.filter(distributor=distributor).order_by('-id')

        paginator = Paginator(price_lists, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "message":"Price Lists Fetched Succeessfully",
            "Price Lists": PriceListSerializer(pageList, many=True).data,
            "last_page": last_page
        })