from django.db.models import Q
from django.core.paginator import Paginator

from ..serializers import PriceOfferSerializer
from distributor.models import DistUsers, Product, PriceOffer, PriceLevel
from rest_framework import permissions, generics, status
from rest_framework.response import Response
from distributor.commons import checkCurrentProgress, distributor_price_list
from django.utils import timezone


class PriceOfferApi(generics.RetrieveAPIView):
    """
    Create distributor offers and view
    """  
    serializer_class = PriceOfferSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
        offset = 25
        query = self.request.query_params.get("query")
        rows = self.request.query_params.get("rows")
        querySet = PriceOffer.objects.filter(distributor=distributor).order_by('-id')

        if self.request.query_params.get("product_id"):
            today = timezone.now()
            product_id = self.request.query_params.get("product_id")
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
            "price_offers": PriceOfferSerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        formData = request.POST.copy()
        print(Product.objects.get(id=formData['x_id']).id)
        x_item = Product.objects.get(id=formData['x_id'])
        y_item = Product.objects.get(id=formData['y_id'])
       
        offer = PriceOffer(distributor=distributor , name=formData['name'], scheme=formData['scheme'], x_item = x_item, x_amt=formData['x_amt'],
        y_amt=formData['y_amt'], y_item=y_item, date_from=formData['date_from'], date_to=formData['date_to'],)

        if request.FILES.get('pic'):
            offer.pic = request.FILES.get('pic')

        # serializer = self.get_serializer(data=formData)
        # serializer.is_valid(raise_exception=True)
        offer.save()
        view_complete = checkCurrentProgress(distributor)

        return Response({
            "message": "Price offer has been added",
            "price_offer": PriceOfferSerializer(offer).data,
             "view_complete": view_complete
        }, status=status.HTTP_201_CREATED)

    def put(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        formData = request.POST.copy()
        offer = PriceOffer.objects.get(id=formData['id'])
        offer.name = formData['name']
        offer.scheme = formData['scheme']
        offer.x_item = Product.objects.get(id=formData['x_id'])
        offer.y_item = Product.objects.get(id=formData['y_id'])
        offer.x_amt = formData['x_amt']
        offer.y_amt = formData['y_amt']
        offer.date_from = formData['date_from']
        offer.date_to = formData['date_to']
        if request.FILES.get('pic'):
            offer.pic = request.FILES.get('pic')

        offer.save()

        return Response({
            "message": "Price offer has been updated",
            "offer": PriceOfferSerializer(offer).data,
        }, status=status.HTTP_201_CREATED)

    def delete(self, request):
        offer_id = self.request.query_params.get("offer_id")
        offer = PriceOffer.objects.get(id=offer_id)
        offer.delete()

        return Response({
            "message": "Offer has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)

class ViewPriceOfferApi(generics.RetrieveAPIView):
    """
    Fetch Retailer Product offers based on schedule
    """
    serializer_class = PriceOfferSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
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
                "price_offers": PriceOfferSerializer(pageList, many=True).data,
                "last_page": last_page,
                "per_price": per_price,
            })
        
        return Response({
            "price_offers": PriceOfferSerializer(pageList, many=True).data,
            "last_page": last_page
        })