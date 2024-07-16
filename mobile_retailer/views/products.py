"""
Mobile Serializer Views

"""
import traceback
from dateutil import relativedelta
from django.utils import timezone
from distributor import commons as cm
from django.db.models import Q, Count, When, F, Sum
from rest_framework import generics, permissions, pagination
from rest_framework.response import Response
from distributor.models import SalesMan, Retailer, Distributor, Product, RetailerProfile, PCategory
from mobile_retailer.m_serializers.retailer_data import ProductSerializerM, PCategorySerializerM, ProductSerializerSa
from mobile_retailer.views.paginator import CustomPaginator


class CustomPagination(pagination.PageNumberPagination):
    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'results': data
        })


class SearchProduct(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request):
        try:
            search = ''
            if 'search' in request.GET.keys():
                search = request.GET['search']
                if not search:
                    search = ''

            user = request.user
            salesman = user.salesman
            if salesman:
                distributor = salesman.distributor
                retailer_id = request.GET['retailer_id']
                retailer = Retailer.objects.filter(id=retailer_id).first()
            else:
                dist_id = request.GET['distributor_id']
                distributor = Distributor.objects.filter(id=dist_id).first()
                retailer = user.retailer

            if distributor.dist_products.count() < 1:
                return Response({"message": distributor.name + " Does Not Have Any Products Now"}, status=404)
            if distributor is None:
                return Response({
                    "message": "No selected Distributor"
                }, status=404)
            if 'top' in request.GET.keys() and request.GET['top'] and str(request.GET['top']) == 'top':
                products = Product.objects.filter(distributor=distributor).annotate(
                    count=Sum('order_product__qty')).order_by(
                    '-count')[:10]
            elif 'recent' in request.GET.keys() and request.GET['recent'] and str(request.GET['recent']) == 'recent':
                products = Product.objects.filter(distributor=distributor, order_product__retailer=retailer,
                                                  order_product__placed=True).annotate(
                    when_bought=F('order_product__order_date'), order_counts=Count('order_product__qty')).order_by(
                    '-when_bought', '-order_counts')[:10]
            else:
                product_query = (Q(name__icontains=search) |
                                 Q(category__name__icontains=search) |
                                 Q(brand__icontains=search)
                                 )

                products = Product.objects.filter(product_query)
                products = products.filter(distributor=distributor, active=True)
            if 'price_from' not in request.GET.keys():
                pass
            else:
                price_from = request.GET['price_from']
                if price_from:
                    try:
                        products = products.filter(price__gte=price_from)
                    except Exception as e:
                        print("Price From Sort Error", str(e))
            if 'price_to' in request.GET.keys():
                price_to = request.GET['price_to']
                if price_to:
                    try:
                        products = products.filter(price__lte=price_to)
                    except Exception as e:
                        print("Price To Sort Error", str(e))
            if 'category_id' in request.GET.keys():
                category_id = request.GET['category_id']
                if category_id:
                    try:
                        products = products.filter(category_id=category_id)
                    except Exception as e:
                        print("Search... Product By Category Id Error\t", str(e))
            if 'new_arrival' in request.GET.keys():
                new_arrival = request.GET['new_arrival']
                if new_arrival:
                    try:
                        today = timezone.now()
                        one_month_ago = today - relativedelta.relativedelta(months=1)
                        products = products.filter(Q(distributor=distributor),
                                                   Q(is_new_arrival=True) |
                                                   Q(when_created__gte=one_month_ago))
                    except Exception as e:
                        print("Error", str(e))
            print("Search Query:", products.query, "Product Count:", products.count())
            if products.count() < 1:
                return Response({"message": distributor.name + " Does Not Have A product Matching The Query"},
                                status=404)
            c_page = CustomPaginator(request, products, 20)
            if user.salesman:
                prs = ProductSerializerSa(c_page.pageList, many=True, retailer_id=retailer.id,
                                          salesman_id=user.salesman.id).data
            else:
                prs = ProductSerializerM(c_page.pageList, many=True, retailer_id=retailer.id).data
            return Response({
                "products": prs,
                "current_page": c_page.page,
                "next_page": c_page.next_page,
                "last_page": c_page.last_page
            }, status=200)
        except Exception as e:
            print(traceback.format_exc())
            return Response({
                "message": "Search Query Malformed " + str(e)
            }, status=500
            )


class FetchSingleProduct(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        try:
            user = request.user
            salesman = user.salesman
            retailer = user.retailer
            product_id = request.GET['product_id']
            product = Product.objects.filter(id=product_id, active=True).first()
            if product is None:
                return Response(
                    {
                        "message": "Product Does Not Exist"
                    }, status=404)
            if 'action' in request.GET.keys():
                if request.GET['action'] == 'description':
                    return Response({
                        "description": product.description
                    }, status=200)

            if salesman is not None:
                distributor_id = salesman.distributor.id
                retailer_id = request.GET['retailer_id']
                retailer = Retailer.objects.filter(id=retailer_id).first()

            if 'action' in request.GET.keys():
                action = request.GET['action']
                if action == 'related':
                    related_products = Product.objects.filter(Q(distributor=product.distributor),
                                                              Q(category_id=product.category.id) |
                                                              Q(brand__icontains=product.brand)
                                                              ).order_by('-price').exclude(id=product.id, active=False)
                    c_page = CustomPaginator(request, related_products, 5)
                    if user.salesman:
                        prs = ProductSerializerSa(c_page.pageList, many=True, retailer_id=retailer.id,
                                                  salesman_id=user.salesman.id).data
                    else:
                        prs = ProductSerializerM(c_page.pageList, many=True, retailer_id=retailer.id).data
                    return Response({
                        "related": prs,
                        "current_page": c_page.page,
                        "next_page": c_page.next_page,
                        "last_page": c_page.last_page
                    }, status=200)
                elif action == 'slabs':
                    retailer_profile = RetailerProfile.objects.filter(retailer=retailer,
                                                                      distributor=product.distributor).first()
                    return Response({
                        "slabs": product.slabs(retailer_profile.price_level)
                    }, status=200)

            if user.salesman:
                prs = ProductSerializerSa(product, many=True, retailer_id=retailer.id,
                                          salesman_id=user.salesman.id).data
            else:
                prs = ProductSerializerM(product, retailer_id=retailer.id).data
            return Response({
                "product": prs,
                "related": []
            }, status=200)
        except Exception as e:
            print(traceback.format_exc())
            return Response({"message": "Products Fetch Failure " + str(e)}, status=500)


class PaginatedProducts(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        salesman = SalesMan.objects.filter(email=user.email).first()
        if salesman is not None:
            distributor = salesman.distributor
            ret_id = int(request.GET['retailer_id'])

        else:
            dist_id = request.GET['distributor_id']
            distributor = Distributor.objects.get(id=dist_id)
            ret_id = user.user_retailer.retailer.id
        product_list = Product.objects.filter(distributor=distributor, active=True).order_by('-id')
        c_page = CustomPaginator(request, product_list, 20)
        if user.salesman:
            prs = ProductSerializerSa(c_page.pageList, many=True, retailer_id=ret_id,
                                      salesman_id=user.salesman.id).data
        else:
            prs = ProductSerializerM(c_page.pageList, many=True, retailer_id=ret_id).data
        return Response({
            "products": prs,
            "last_page": c_page.last_page,
            "current_page": c_page.page,
            "next_page": c_page.next_page,
        })


class ProductPriceBySlab(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        try:
            product_id = request.GET['product_id']
            qty = request.GET['qty']
            product = Product.objects.filter(id=int(product_id)).first()

            if product is None:
                return Response({
                    "message": "Product Not Found"
                }, status=404)
            user = request.user
            salesman = user.salesman
            retailer = user.retailer
            if salesman is not None:
                retailer_id = request.GET['retailer_id']
                retailer = Retailer.objects.filter(id=retailer_id).first()
            elif retailer is not None:
                retailer = retailer
            else:
                return Response({
                    "price": str(product.price)
                })

            retailer_profile = RetailerProfile.objects.filter(retailer=retailer,
                                                              distributor=product.distributor).first()
            if retailer_profile is None:
                return Response({
                    "price": str(product.price)
                })
            product_price = cm.retailer_price_list_product_price(product.distributor,
                                                                 retailer,
                                                                 product,
                                                                 int(qty))
            return Response({
                "price": str(product_price)
            })

        except Exception as e:
            print(traceback.format_exc())
            return Response({
                "message": "Server Error" + str(e)
            }, status=500)


class FetchSingleCategory(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        try:
            category_id = request.GET['category_id']
            category = PCategory.objects.filter(id=int(category_id)).first()
            if category:
                sub_categories =category.sub_categories.annotate(
            pr_counts=Count("categ_products")).order_by("-pr_counts")
                return Response(
                    {"category": PCategorySerializerM(category).data,
                     'sub_categories': PCategorySerializerM(sub_categories, many=True).data
                     }, status=200)
        except Exception as e:
            print(traceback.format_exc())
            return Response({
                "message": "Category Fetch Error" + str(e)
            }, status=500)


class NewArrivals(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        try:
            today = timezone.now()
            one_month_ago = today - relativedelta.relativedelta(months=1)
            user = request.user
            salesman = user.salesman
            retailer = user.retailer
            distributor = None
            if salesman is not None:
                retailer_id = int(request.GET['retailer_id'])
                retailer = Retailer.objects.filter(id=retailer_id).first()
                distributor = salesman.distributor
            elif retailer is not None:
                distributor_id = request.GET['distributor_id']
                distributor = Distributor.objects.filter(id=distributor_id).first()

            if salesman is None and retailer is None:
                return Response({
                    "message": "UnAuthorised"
                }, status=401)
            products = Product.objects.filter(Q(distributor=distributor),
                                              Q(is_new_arrival=True) | Q(when_created__gte=one_month_ago)). \
                exclude(active=False).order_by(
                '-when_created')
            c_page = CustomPaginator(request, products, 10)
            if user.salesman:
                prs = ProductSerializerSa(c_page.pageList, many=True, retailer_id=retailer.id,
                                          salesman_id=user.salesman.id).data
            else:
                prs = ProductSerializerM(c_page.pageList, many=True, retailer_id=retailer.id).data
            return Response({
                "products": prs,
                "last_page": c_page.last_page,
                "current_page": c_page.page,
                "next_page": c_page.next_page,
            }, status=200)
        except Exception as e:
            print("Exception Error\n", traceback.format_exc())
            return Response({
                "message": "Server Error" + str(e)
            }, status=500)


class SalesmanCategories(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request):
        user = request.user
        salesman = user.salesman
        if not salesman:
            return Response({
                "message": ""
            }, status=403)
        categories = PCategory.objects.filter(distributor=salesman.distributor)
        c_page = CustomPaginator(request, categories, 25)
        return Response({
            "categories": PCategorySerializerM
        })
