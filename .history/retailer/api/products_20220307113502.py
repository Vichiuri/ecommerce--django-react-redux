from django.db.models import Q, ProtectedError
from django.core.paginator import Paginator
from django.http import HttpResponse

from ..serializers import ProductSerializer, PCategorySerializer, PriceListSerializer, PriceLevelSerializer, \
    MUnitSerializer, CompoundUnitSerializer, ProductPriceListSeriazer, BrandSerializer, DistTaxSerializer, VariationOptionsSerializer, VariationSerializer

from distributor.models import DistUsers, PCategory, Product, CustomColors, ProductImage, MUnit, CompoundUnit, \
    PriceLevel, PriceList, DistTax
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from distributor.commons import checkCurrentProgress
import json
from distributor.models.distributor import Brand, Variation, VariationOptions
from distributor.threading import CreateDistributorProductNotification


class ProductsApi(generics.RetrieveAPIView):
    """
    Api View for adding editing and searching for products
    """
    serializer_class = ProductSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        offset = 25
        category_id = self.request.query_params.get("category_id")
        query = self.request.query_params.get("query")
        rows = self.request.query_params.get('rows')
        querySet = Product.objects.filter(
            distributor=distributor).order_by('-id')

        if category_id:
            category_prod = querySet.filter(category__id=category_id)
            querySet = category_prod
        if query:
            query_prod = querySet.filter(Q(name__icontains=query) | Q(product_code__icontains=query) |
                                         Q(brand__icontains=query) | Q(size__icontains=query) |
                                         Q(category__name__icontains=query) |
                                         Q(units__name__icontains=query) | Q(units__symbol__icontains=query) |
                                         Q(colors__label__icontains=query) | Q(colors__color__icontains=query))
            querySet = query_prod

        if rows:
            offset = rows

        paginator = Paginator(querySet, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "products": ProductSerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def post(self, request):
        try:
            user = self.request.user
            distUser = DistUsers.objects.filter(user=user).first()
            distributor = distUser.distributor

            formData = request.POST.copy()

            product = Product(distributor=distributor, product_code=formData.get('product_code'), name=formData.get('name'), price=formData.get('price'),
                              description=formData.get('description'), stock_qty=formData.get('stock_qty'), size=formData.get('size'),
                              brief_description=formData.get('brief_description'), created_by=distUser)

            if formData.get('category_id'):
                category = PCategory.objects.get(
                    id=formData.get('category_id'))
                product.category = category
            if formData.get('units_id'):
                units = MUnit.objects.get(id=formData.get('units_id'))
                product.units = units

            if formData.get('active') and formData.get('active') == 'inactive':
                product.active = False

            if formData.get('weight'):
                product.weight = formData.get('weight')

            if formData.get('type') and formData.get('type') == 'New':
                product.is_new_arrival = True

            if formData.get('brand'):
                brand = Brand.objects.get(id=formData.get('brand'))
                product.branding = brand

            product.save()

            # if formData.get('variations'):
            #     variations = json.loads(formData.get('variations'))

            #     for variation in variations:
            #         view_variation = ProductVariations(code=variation.get('code'),
            #                                            label=variation.get('label'), price=variation.get('price'), variations=variation.get('variation'))
            #         view_variation.save()
            #         product.variations.add(view_variation)

            if formData.get('colors'):
                colors = json.loads(formData.get('colors'))
                for color in colors:
                    customColor = CustomColors.objects.get(id=color)
                    product.colors.add(customColor)

            view_complete = checkCurrentProgress(distributor)

            try:
                if request.FILES.get('photos0'):
                    for n in ('0', '1', '2', '3', '4', '5'):
                        photos = 'photos'
                        photos += n
                        if (request.FILES.get(photos)):
                            photo = request.FILES.get(photos)
                            pr_image = ProductImage(
                                product=product, image=photo)
                            pr_image.save()

                CreateDistributorProductNotification(
                    product, 'created').start()

                return Response({
                    "message": "Product has been added",
                    "product": ProductSerializer(product).data,
                    "view_complete": view_complete
                }, status=status.HTTP_201_CREATED)

            except Exception as e:
                product.delete()
                content = {'error': 'Please check image format'}
                return Response(content, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        except Exception as e:
            content = {'error': 'Something went wrong'}
            return Response(content, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request):
        try:
            formData = request.POST.copy()

            product = Product.objects.get(id=formData.get('id'))
            if formData.get('category_id'):
                category = PCategory.objects.get(
                    id=formData.get('category_id'))
                product.category = category

            if formData.get('unit_id'):
                units = MUnit.objects.get(id=formData.get('unit_id'))
                product.units = units

            product.name = formData.get('name')
            product.price = formData.get('price')
            product.description = formData.get('description')
            product.stock_qty = formData.get('qty')
            product.size = formData.get('size')
            product.brief_description = formData.get('brief_description')

            if formData.get('active'):
                if formData.get('active') == 'inactive':
                    product.active = False
                else:
                    product.active = True

            if formData.get('weight'):
                product.weight = formData.get('weight')

            if formData.get('type'):
                print(formData.get('type'))
                if formData.get('type') == 'New':
                    product.is_new_arrival = True
                else:
                    product.is_new_arrival = False

            if formData.get('brand'):
                brand = Brand.objects.get(id=formData.get('brand'))
                product.branding = brand

            if formData.get('colors'):
                colors = json.loads(formData.get('colors'))
                product.colors.clear()
                for color in colors:
                    customColor = CustomColors.objects.get(id=color)
                    product.colors.add(customColor)
            product.save()

            try:
                if request.FILES.get('photos0'):
                    for n in ('0', '1', '2', '3', '4', '5'):
                        photos = 'photos'
                        photos += n
                        if (request.FILES.get(photos)):
                            photo = request.FILES.get(photos)
                            pr_image = ProductImage(
                                product=product, image=photo)
                            pr_image.save()

                if formData.get('deletedImages'):
                    del_images = json.loads(formData.get('deletedImages'))
                    for del_image in del_images:
                        prod_image = ProductImage.objects.get(id=del_image)
                        prod_image.image.delete(save=False)
                        prod_image.delete()

                product.save()
                CreateDistributorProductNotification(
                    product, 'updated').start()

                return Response({
                    "message": "Product has been updated",
                    "product": ProductSerializer(product).data,
                }, status=status.HTTP_201_CREATED)

            except Exception as e:
                product.delete()
                content = {'error': 'Please check image format'}
                return Response(content, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except Exception as e:
            content = {'error': 'Something went wrong'}
            return Response(content, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def patch(self, request):
        try:
            json_data = json.loads(request.body)
            product = Product.objects.get(id=json_data['id'])

            product.active = json_data['active']
            product.save()
            CreateDistributorProductNotification(product, 'updated').start()

            return Response({
                "message": "Product status updated",
                "product": ProductSerializer(product).data
            })
        except Exception as e:
            content = {'error': 'Something went wrong'}
            return Response(content, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request):
        try:
            product_id = self.request.query_params.get("product_id")
            product = Product.objects.get(id=product_id)
            product.delete()
            CreateDistributorProductNotification(product, 'deleted').start()

            return Response({
                "message": "Product has been deleted",
            }, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            if type(e) is ProtectedError:
                return Response({"error": "Deletion Error, Some Other Components Have In Some Way Referenced The Product"},  status=status.HTTP_406_NOT_ACCEPTABLE)
            return Response({
                'error': "Something went wrong"
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ProductSearchApi(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        query = self.request.query_params.get("query")
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        products = Product.objects.filter(
            distributor=distributor).order_by('-id')
        if query:
            querySet = products.filter(Q(name__icontains=query) | Q(product_code__icontains=query) |
                                       Q(brand__icontains=query) | Q(size__icontains=query) |
                                       Q(category__name__icontains=query) |
                                       Q(units__name__icontains=query) | Q(units__symbol__icontains=query) |
                                       Q(colors__label__icontains=query) | Q(colors__color__icontains=query))
        else:
            querySet = products

        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "products": ProductSerializer(pageList, many=True).data,
            "last_page": last_page
        })


class PCategoryAPi(generics.RetrieveAPIView):
    serializer_class = PCategorySerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
        query = self.request.query_params.get("query")
        rows = self.request.query_params.get("rows")
        offset = 25
        categories = PCategory.objects.filter(
            distributor=distributor).order_by('-id')

        if query:
            querySet = categories.filter(Q(name__icontains=query) | Q(
                taxparent_category__name__icontains=query))
        else:
            querySet = categories

        if rows:
            offset = rows

        paginator = Paginator(querySet, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "categories": PCategorySerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def post(self, request):
        # try:
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        if (request.FILES.get('photo')):
            formData = request.POST.copy()
            formData['distributor'] = distributor.id
            formData['category_pic'] = request.FILES.get('photo')

            if request.POST.get('category_id'):
                category_id = request.POST.get('category_id')
                formData['parent_category'] = PCategory.objects.get(
                    id=category_id).id

            serializer = self.get_serializer(data=formData)
            serializer.is_valid(raise_exception=True)
            category = serializer.save()

        else:
            formData = request.POST.copy()
            formData['distributor'] = distributor.id

            if request.POST.get('category_id'):
                category_id = request.POST.get('category_id')
                formData['parent_category'] = PCategory.objects.get(
                    id=category_id).id

            serializer = self.get_serializer(data=formData)
            serializer.is_valid(raise_exception=True)
            category = serializer.save()

        view_complete = checkCurrentProgress(distributor)
        return Response({
            "message": "Category has been added",
            "category": PCategorySerializer(category).data,
            "view_complete": view_complete
        }, status=status.HTTP_201_CREATED)

    def put(self, request):

        formData = request.POST.copy()
        category = PCategory.objects.get(id=formData['id'])
        if formData['p_category']:
            parent_category = PCategory.objects.get(id=formData['p_category'])
            category.parent_category = parent_category
        category.name = formData['name']
        category.description = formData['description']
        category.brief_description = formData['brief_description']
        if request.FILES.get('photo'):
            category.category_pic.delete(save=False)
            category.category_pic = request.FILES.get('photo')

        category.save()

        return Response({
            "message": "Category has been updated",
            "category": PCategorySerializer(category).data,
        }, status=status.HTTP_201_CREATED)

    def delete(self, request):
        category_id = self.request.query_params.get("category_id")
        category = PCategory.objects.get(id=category_id)
        category.delete()

        return Response({
            "message": "Product has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)


class DistTaxAPi(generics.RetrieveAPIView):
    serializer_class = DistTaxSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        querySet = DistTax.objects.filter(distributor=distributor)
        return Response({
            'tax_list': DistTaxSerializer(querySet, many=True).data,
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        data = request.data.copy()
        tax_item = DistTax(distributor=distributor,
                           tax_name=data.get('name'), tax=data.get('rate'))
        tax_item.save()

        return Response({
            'message': "Tax Settings has been added",
            "tax_item": DistTaxSerializer(tax_item, many=False).data,
        })

    def put(self, request):

        formData = request.POST.copy()
        category = DistTax.objects.get(id=formData['id'])
        if formData['tax']:
            tax = DistTax.objects.get(id=formData['tax'])
            category.tax = tax
        category.name = formData['name']
        category.description = formData['description']
        category.brief_description = formData['brief_description']
        if request.FILES.get('photo'):
            category.category_pic.delete(save=False)
            category.category_pic = request.FILES.get('photo')

        category.save()

        return Response({
            "message": "Tax has been updated",
            "tax_list": DistTaxSerializer(category).data,
        }, status=status.HTTP_201_CREATED)

    def delete(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        return Response({
            "message": "Tax Rate has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)


class MUnitApi(generics.RetrieveAPIView):
    serializer_class = MUnitSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
        rows = self.request.query_params.get("rows")
        query = self.request.query_params.get("query")
        offset = 6
        querySet = MUnit.objects.filter(
            distributor=distributor).order_by('name')

        if rows:
            offset = rows

        if query:
            units = querySet.filter(
                Q(name__icontains=query) | Q(symbol__icontains=query))
            querySet = units

        paginator = Paginator(querySet, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "units": MUnitSerializer(pageList, many=True).data,
            'last_page': last_page
        })

    def post(self, request):
        try:
            user = self.request.user
            distUser = DistUsers.objects.filter(user=user).first()
            distributor = distUser.distributor

            json_data = json.loads(request.body)
            json_data['distributor'] = distributor.id

            prev_unt = MUnit.objects.filter(name=json_data['name'])
            if MUnit.objects.filter(name=json_data['name']).first() or MUnit.objects.filter(symbol=json_data['symbol']):
                return Response({
                    'error': "This unit exists in your records"
                }, status=status.HTTP_409_CONFLICT)
            serializer = self.get_serializer(data=json_data)
            serializer.is_valid(raise_exception=True)

            unit = serializer.save()

            view_complete = checkCurrentProgress(distributor)

            return Response({
                "message": "Unit has been added",
                "unit": MUnitSerializer(unit).data,
                "view_complete": view_complete
            }, status=status.HTTP_201_CREATED)
        except Exception as e:
            content = {'error': 'Something went wrong'}
            return Response(content, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request):
        json_data = json.loads(request.body)
        unit = MUnit.objects.get(id=json_data['id'])

        unit.name = json_data['name']
        unit.symbol = json_data['symbol']
        unit.save()

        return Response({
            "message": "Unit has been updated",
            "unit": MUnitSerializer(unit).data
        }, status=status.HTTP_201_CREATED)

    def delete(self, request):
        unit_id = self.request.query_params.get("unit_id")
        unit = MUnit.objects.get(id=unit_id)
        product_count = Product.objects.filter(units=unit).count()
        compound_count = CompoundUnit.objects.filter(
            Q(first_unit=unit) | Q(second_unit=unit)).count()
        if product_count > 0 or compound_count > 0:
            return Response({
                "error": "Unit is currently in use and can't be deleted",
            }, status=status.HTTP_409_CONFLICT)
        else:
            unit.delete()
            return Response({
                "message": "Unit has been deleted",
            }, status=status.HTTP_204_NO_CONTENT)


class CompoundUnitApi(generics.RetrieveAPIView):
    serializer_class = CompoundUnitSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
        rows = self.request.query_params.get("rows")
        offset = 10
        querySet = CompoundUnit.objects.filter(
            distributor=distributor).order_by('-id')

        if rows:
            offset = rows

        paginator = Paginator(querySet, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "c_units": CompoundUnitSerializer(pageList, many=True).data,
            'last_page': last_page
        })

    def post(self, request):
        try:
            user = self.request.user
            distUser = DistUsers.objects.filter(user=user).first()
            distributor = distUser.distributor

            json_data = json.loads(request.body)
            first_unit = MUnit.objects.get(id=json_data['f_unit'])
            second_unit = MUnit.objects.get(id=json_data['s_unit'])

            c_unit = CompoundUnit(name=json_data['name'], f_to_s=json_data['f_to_s'], distributor=distributor,
                                  first_unit=first_unit, second_unit=second_unit)
            c_unit.save()

            return Response({
                "message": "Compond unit has been added",
                "c_unit": CompoundUnitSerializer(c_unit).data
            }, status=status.HTTP_201_CREATED)
        except Exception as e:
            content = {'error': 'Something went wrong'}
            return Response(content, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request):
        json_data = json.loads(request.body)
        c_unit = CompoundUnit.objects.get(id=json_data['id'])

        c_unit.first_unit = MUnit.objects.get(id=json_data['f_unit'])
        c_unit.second_unit = MUnit.objects.get(id=json_data['s_unit'])
        c_unit.name = json_data['name']
        c_unit.f_to_s = json_data['f_to_s']

        c_unit.save()

        return Response({
            "message": "Compond unit has been updated",
            "c_unit": CompoundUnitSerializer(c_unit).data
        }, status=status.HTTP_201_CREATED)

    def delete(self, request):
        c_unit_id = self.request.query_params.get("c_unit_id")
        c_unit = CompoundUnit.objects.get(id=c_unit_id)

        c_unit.delete()

        return Response({
            "message": "Compound unit has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)


class PriceLevelApi(generics.RetrieveAPIView):
    serializer_class = PriceLevelSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
        query = self.request.query_params.get("query")
        querySet = PriceLevel.objects.filter(
            distributor=distributor).order_by('-id')

        if query:
            view_levels = querySet.filter(Q(level_name__icontains=query))
            querySet = view_levels

        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "price_levels": PriceLevelSerializer(pageList, many=True).data,
            'last_page': last_page,
        })

    def post(self, request):
        try:
            user = self.request.user
            distUser = DistUsers.objects.filter(user=user).first()
            distributor = distUser.distributor

            json_data = json.loads(request.body)
            json_data['distributor'] = distributor.id

            serializer = self.get_serializer(data=json_data)
            serializer.is_valid(raise_exception=True)
            price_level = serializer.save()
            view_complete = checkCurrentProgress(distributor)

            return Response({
                "message": "Price level has been added",
                "price_level": PriceLevelSerializer(price_level).data,
                "view_complete": view_complete
            }, status=status.HTTP_201_CREATED)
        except Exception as e:
            content = {'error': 'Something went wrong'}
            return Response(content, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request):
        json_data = json.loads(request.body)
        level = PriceLevel.objects.get(id=json_data['id'])

        level.level_name = json_data['level_name']
        level.save()

        return Response({
            "message": "Price level has been added",
            "price_level": PriceLevelSerializer(level).data
        }, status=status.HTTP_201_CREATED)

    def delete(self, request):
        level_id = self.request.query_params.get("level_id")
        level = PriceLevel.objects.get(id=level_id)

        level.delete()

        return Response({
            "message": "Price level has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)


class PriceListApi(generics.RetrieveAPIView):
    serializer_class = PriceListSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):

        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        period = self.request.query_params.get('applicable_from')
        price_level = self.request.query_params.get('price_level')
        # product_id = self.request.query_params.get("product_id")
        category_id = self.request.query_params.get('category_id')
        querySet = Product.objects.filter(
            distributor=distributor).order_by('-id')

        if category_id:
            viewItems = querySet.filter(category__id=category_id)
            querySet = viewItems

        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "price_lists": ProductPriceListSeriazer(pageList, context={'period': period, 'price_level': price_level},
                                                    many=True).data,
            "last_page": last_page
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        product = Product.objects.get(id=json_data['product_id'])
        level = PriceLevel.objects.get(id=json_data['level_id'])

        price_list = PriceList(distributor=distributor, price_level=level, product=product,
                               min_amount=json_data['min_amount'], max_amount=json_data['max_amount'],
                               rate=json_data['rate'], date_from=json_data['date_from'])
        if json_data['discount_amount']:
            price_list.discount_amount = json_data['discount_amount']
        if json_data['discount_percent']:
            price_list.discount_percent = json_data['discount_percent']

        price_list.save()

        return Response({
            "message": "Price level has been added",
            "price_list": PriceListSerializer(price_list).data
        }, status=status.HTTP_201_CREATED)

    def put(self, request):
        json_data = json.loads(request.body)
        price_list = PriceList.objects.get(id=json_data['id'])

        price_list.min_amount = json_data['min_amount']
        price_list.max_amount = json_data['max_amount']
        price_list.rate = json_data['rate']
        if json_data['discount_amount']:
            price_list.discount_amount = json_data['discount_amount']
        if json_data['discount_percent']:
            price_list.discount_percent = json_data['discount_percent']
        price_list.save()

        return Response({
            "message": "Price level has been updated",
            "price_list": PriceListSerializer(price_list).data
        }, status=status.HTTP_201_CREATED)

    def delete(self, request):
        price_id = self.request.query_params.get("price_id")
        list = PriceList.objects.get(id=price_id)

        list.delete()

        return Response({
            "message": "Price List has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)


class ViewPriceListApi(generics.RetrieveAPIView):
    serializer_class = PriceListSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
        querySet = PriceList.objects.filter(
            distributor=distributor).order_by('-max_amount').distinct()

        product_id = self.request.query_params.get("product_id")
        period = self.request.query_params.get('applicable_from')
        price_level = self.request.query_params.get('price_level')

        if product_id:
            product = Product.objects.get(id=product_id)
            viewItems = querySet.filter(product=product)
            querySet = viewItems

        if period:
            viewItems2 = querySet.filter(date_from__lte=period)
            querySet = viewItems2

        if price_level:
            priceLevel = PriceLevel.objects.get(id=price_level)
            viewItems3 = querySet.filter(price_level=priceLevel)
            querySet = viewItems3

        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            'price_lists': PriceListSerializer(pageList, many=True).data,
            'last_page': last_page
        })


class ProductBrandApi(generics.RetrieveAPIView):
    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
        offset = 25
        rows = self.request.query_params.get("rows")
        query = self.request.query_params.get("query")
        querySet = Brand.objects.filter(
            distributor=distributor).order_by('-id')

        if rows:
            offset = rows

        if query:
            search_brand = querySet.filter(Q(name__icontains=query))
            querySet = search_brand

        paginator = Paginator(querySet, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            'brands': BrandSerializer(pageList, many=True).data,
            'last_page': last_page
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        formData = request.POST.copy()
        brand = Brand(distributor=distributor, name=formData.get(
            'name'), description=formData.get('description'))
        if request.FILES.get('photo'):
            brand.pic = request.FILES.get('photo')

        brand.save()

        return Response({
            'message': "Brand has been added",
            'brand': BrandSerializer(brand).data,
        }, status=status.HTTP_201_CREATED)

    def put(self, request):

        formData = request.POST.copy()
        brand = Brand.objects.get(id=formData.get('id'))
        brand.name = formData.get('name')
        brand.description = formData.get('description')
        if request.FILES.get('photo'):
            brand.pic.delete(save=False)
            brand.pic = request.FILES.get('photo')

        brand.save()

        return Response({
            'message': "Brand has been updated",
            'brand': BrandSerializer(brand).data,
        }, status=status.HTTP_201_CREATED)

    def delete(self, request):
        brand_id = self.request.query_params.get("brand_id")
        brand = Brand.objects.filter(id=brand_id)

        brand.delete()

        return Response({
            "message": "Brand has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)


class VariationApi(generics.RetrieveAPIView):
    """
    Add Product Variations
    """
    serializer_class = VariationSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor
        query = self.request.query_params.get("query")
        querySet = Variation.objects.filter(
            distributor=distributor).order_by('name')

        if query:
            variations = querySet.filter(Q(name__icontains=query))
            querySet = variations

        paginator = Paginator(querySet, 25)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            'product_variations': VariationSerializer(pageList, many=True).data,
            'last_page': last_page
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        name = json_data['variation']
        variant = json_data['variant']

        variation = Variation(distributor=distributor, name=name)
        variation.save()
        for viewVariant in variant:
            variant = VariationOptions(distributor=distributor,
                                       name=viewVariant, variation=variation)
            variant.save()

        view_complete = checkCurrentProgress(distributor)

        return Response({
            "message": "Variation has been added",
            "product_variation": VariationSerializer(variation).data,
            "view_complete": view_complete
        }, status=status.HTTP_201_CREATED)

    def put(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        variation = Variation.objects.get(id=json_data['id'])
        variation.name = json_data['name']

        if json_data['delete_variant']:
            del_variants = json_data['delete_variant']
            for del_variant in del_variants:
                variant = VariationOptions.objects.get(id=del_variant)
                variant.delete()

        if json_data['add_variant']:
            add_variants = json_data['add_variant']
            for add_variant in add_variants:
                variant = VariationOptions(distributor=distributor,
                                           name=add_variant, variation=variation)
                variant.save()

        variation.save()

        return Response({
            "message": "Variation has been updated",
            "product_variation": VariationSerializer(variation).data
        }, status=status.HTTP_201_CREATED)

    def delete(self, request):
        variation_id = self.request.query_params.get("variation_id")
        variation = Variation.objects.get(id=variation_id)
        variation.delete()

        return Response({
            "message": "Variation has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)


class VariationOptionsViewSet(viewsets.ModelViewSet):
    """
    Fetch product based variant based on their variation
    """
    serializer_class = VariationOptionsSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        variation_id = self.request.query_params.get("variation")
        if variation_id:
            variation = Variation.objects.get(id=variation_id)
            querySet = VariationOptions.objects.filter(
                distributor=distributor, variation=variation)
        else:
            querySet = VariationOptions.objects.filter(distributor=distributor)
        return querySet


class VariationOptionsApi(generics.RetrieveAPIView):
    """
    Add and fetch individual product variation
    """
    serializer_class = VariationOptionsSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        variation_id = self.request.query_params.get("variation")
        if variation_id:
            variation = Variation.objects.get(id=variation_id)
            querySet = VariationOptions.objects.filter(
                distributor=distributor, variation=variation)
        else:
            querySet = VariationOptions.objects.filter(distributor=distributor)

        return Response({
            'variant': VariationOptionsSerializer(querySet, many=True).data
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        variation = Variation.objects.get(id=json_data['variation_id'])
        variant = VariationOptions(distributor=distributor,
                                   name=json_data['name'], variation=variation)
        variant.save()

        return Response({
            "message": "Variant has been added",
            "prod_variant": VariationOptionsSerializer(variant).data
        })

    def put(self, request):
        json_data = json.loads(request.body)
        variant = VariationOptions.objects.get(id=json_data['id'])
        variant.region = Variation.objects.get(id=json_data['variation_id'])
        variant.name = json_data['name']

        variant.save()

        return Response({
            "message": "variant has been updated",
            "prod_variant": VariationOptionsSerializer(variant).data
        })

    def delete(self, request):
        variant_id = self.request.query_params.get("variant_id")
        variant = VariationOptions.objects.get(id=variant_id)
        variant.delete()

        return Response({
            "message": "variant has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)
