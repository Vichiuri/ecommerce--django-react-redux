from email import header
from email.headerregistry import ContentTypeHeader
from django.db.models import Q
from django.core.paginator import Paginator
from django.shortcuts import get_object_or_404

from distributor.models import Product, PriceOffer, PriceLevel
from intergration.authMixin import IntegratedAuthMixin
from intergration.helpers import get_distributor
from rest_framework import viewsets, generics, status
from rest_framework.response import Response
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser
from distributor.commons import checkCurrentProgress, distributor_price_list
from django.utils import timezone
from intergration.serializers import PriceOfferAPISerializer

from retailer.serializers import PriceOfferSerializer


class IntergratedPriceOfferApi(IntegratedAuthMixin, viewsets.ViewSet):
    """
    Create distributor offers and view
    """  
    serializer_class = PriceOfferSerializer
    permission_classes = [
        # permissions.IsAuthenticated
    ]
    parser_classes = [FormParser, MultiPartParser, JSONParser]

    def list(self, request):
        distributor = get_distributor(self.request)
        
        offset = 25
        query = self.request.query_params.get("query")
        rows = self.request.query_params.get("rows")
        querySet = PriceOffer.objects.filter(distributor=distributor).order_by('-id')

        if self.request.query_params.get("product"):
            today = timezone.now()
            product_id = self.request.query_params.get("product")
            product = Product.objects.get(id=product_id)
            product_price = querySet.filter(x_item=product, date_from__lte=today, date_to__gte=today)
            querySet = product_price

        if query:
            searchQuerySet = querySet.filter(Q(name__icontains=query)|Q(detail_name__icontains=query)|Q(x_item__name__icontains=query)|Q(y_item__name__icontains=query))
            querySet = searchQuerySet

        if rows:
            offset = rows

        paginator = Paginator(querySet, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "message": "Price offers fetched successfully",
            "price_offers": PriceOfferSerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def create(self, request):
        distributor = get_distributor(self.request)

        formData = PriceOfferAPISerializer(data=request.data)
        x_item = Product.objects.get(id=request.data['x_item'])
        y_item = Product.objects.get(id=request.data['y_item'])

        if formData.is_valid():
            offer = PriceOffer(distributor=distributor , name=formData.validated_data['name'], scheme=formData.validated_data['scheme'], x_item = x_item, x_amt=formData.validated_data['x_amt'],
            y_amt=formData.validated_data['y_amt'], y_item=y_item, date_from=formData.validated_data['date_from'], date_to=formData.validated_data['date_to'],)

            if request.FILES.get('pic'):
                offer.pic = request.FILES.get('pic')

            # serializer = self.get_serializer(data=formData)
            # serializer.is_valid(raise_exception=True)
            offer.save()
            view_complete = checkCurrentProgress(distributor)

            return Response({
                "message": "Price offer has been added",
                "price_offer": PriceOfferSerializer(offer).data,
                "view_complete": view_complete,
            }, status=status.HTTP_201_CREATED)

        return Response({
                "message": "Price offer failed to add \n %s",
                "error":formData.errors,
            }, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        try:
            distributor = get_distributor(self.request)
            queryset = PriceOffer.objects.filter(distributor=distributor)
            offer = get_object_or_404(queryset, pk=pk)
            serializer = PriceOfferSerializer(offer)
            return Response({
                'message':'Offer Retrieved',
                'offers':serializer.data,
                }, status=status.HTTP_200_OK)
        except Exception:
            return Response({
                'message':'No offer was found',
                }, status=status.HTTP_204_NO_CONTENT)


    def update(self, request, pk=None):
        distributor = get_distributor(self.request)
        queryset = PriceOffer.objects.filter(distributor=distributor)
        offer = get_object_or_404(queryset, pk=pk)
        serializer = PriceOfferAPISerializer(offer, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({
                "message": "Price offer has been updated",
                "offer": PriceOfferAPISerializer(offer).data,
            }, status=status.HTTP_201_CREATED)

        return Response({
            "message": "Price offer Failed to Update",
        }, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk):
        distributor = get_distributor(self.request)
        queryset = PriceOffer.objects.filter(distributor=distributor)
        offer = get_object_or_404(queryset, pk=pk)
        offer.delete()

        return Response({
            "message": "Offer has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)

class ViewIntergratedPriceOfferApi(IntegratedAuthMixin, viewsets.ViewSet):
    """
    Fetch Retailer Product offers based on schedule
    """
    serializer_class = PriceOfferSerializer
    permission_classes = [
        # permissions.IsAuthenticated
    ]

    def list(self, request):
        distributor = get_distributor(self.request)

        query = self.request.query_params.get("query")
        product_id = self.request.query_params.get("product_id")
        qty = self.request.query_params.get('prod_qty')

        if product_id:
            today = timezone.now()
            querySet = PriceOffer.objects.filter(distributor=distributor, x_item__id=product_id, date_from__lte=today, date_to__gte=today).order_by('-id')
        else:                                         
            today = timezone.now()
            querySet = PriceOffer.objects.filter(distributor=distributor, date_from__lte=today, date_to__gte=today).order_by('-id')

        if query:
            searchQuerySet = querySet.filter(Q(name__icontains=query)|Q(detail_name__icontains=query)|Q(x_item__name__icontains=query)|Q(y_item__name__icontains=query))
            querySet = searchQuerySet

        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        if qty:
            level_id = self.request.query_params.get("level_id")
            product = Product.objects.get(id=product_id)
            level = PriceLevel.objects.get(id=level_id)
            per_price = distributor_price_list(distributor=distributor, level=level, product=product, qty=qty)

            return Response({
                "message":"Fetched Retailer Product offers based on schedule with price list",
                "price_offers": PriceOfferSerializer(pageList, many=True).data,
                "last_page": last_page,
                "per_price": per_price,
            })
        
        return Response({
            "message":"Fetched Retailer Product offers based on schedule without Price list",
            "price_offers": PriceOfferSerializer(pageList, many=True).data,
            "last_page": last_page
        })