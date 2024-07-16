
import json
from distributor.commons import checkCurrentProgress
from distributor.models import distributor
from distributor.models.distributor import Brand, CustomColors, MUnit, PCategory, Product, ProductImage
from distributor.models.netbot import DistUsers, Distributor
from distributor.threading import CreateDistributorProductNotification
from intergration.helpers import get_distributor
from retailer.serializers import PCategorySerializer, ProductSerializer
from ..serializers import IntergratedProductSerializer, PCategoryAPISerializer
from ..authMixin import IntegratedAuthMixin
# from retailer.serializers import ProductSerializer
from rest_framework.response import Response
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser
from rest_framework import status, generics, viewsets
from django.db.models import Q, ProtectedError

from django.shortcuts import get_object_or_404
from django.core.paginator import Paginator
from django.forms.models import model_to_dict


class DistributorProductsView(IntegratedAuthMixin, viewsets.ViewSet):
    """
    Api View for adding editing and searching for products
    """
    serializer_class = IntergratedProductSerializer
    permission_classes = [
        # permissions.IsAuthenticated
    ]
    parser_classes = [FormParser, MultiPartParser, JSONParser]

    def list(self, request):
        _request_header = self.request.headers
        id = _request_header['Distributor']
        user = get_object_or_404(Distributor, id=id)
        distUser = DistUsers.objects.filter(distributor=user).first()
        distributor = distUser.distributor

        offset = 25
        category_id = self.request.query_params.get("category_id")
        query = self.request.query_params.get("query")
        rows = self.request.query_params.get('rows')
        querySet = Product.objects.filter(distributor=distributor).order_by('-id')

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
            "message": "Products Fetched Successfully",
            "products": IntergratedProductSerializer(pageList, many=True ).data,
            "last_page": last_page
        })

    def create(self, request):
        # try:
        _request_header = self.request.headers
        id = _request_header['Distributor']
        user = get_object_or_404(Distributor, id=id)
        distUser = DistUsers.objects.filter(distributor=user).first()
        distributor = distUser.distributor

        formData = IntergratedProductSerializer(data=request.data)
        if formData.is_valid():
            product = Product(distributor=distributor, product_code=formData.validated_data.get('product_code'), name=formData.validated_data.get('name'), price=formData.validated_data.get('price'),
                            description=formData.validated_data.get('description'), sku=formData.validated_data.get('sku'), stock_qty=formData.validated_data.get('stock_qty'), size=formData.validated_data.get('size'),
                            brief_description=formData.validated_data.get('brief_description'), created_by=distUser)

            if formData.validated_data.get('category_id'):
                category = PCategory.objects.get(
                    id=formData.validated_data.get('category_id'))
                product.category = category
            if formData.validated_data.get('units_id'):
                units = MUnit.objects.get(id=formData.validated_data.get('units_id'))
                product.units = units

            if formData.validated_data.get('active') and formData.validated_data.get('active') == 'inactive':
                product.active = False

            if formData.validated_data.get('weight'):
                product.weight = formData.validated_data.get('weight')

            if formData.validated_data.get('type') and formData.validated_data.get('type') == 'New':
                product.is_new_arrival = True

            if formData.validated_data.get('brand'):
                brand = Brand.objects.get(id=formData.validated_data.get('brand'))
                product.branding = brand

            product.save()

            # if formData.get('variations'):
            #     variations = json.loads(formData.get('variations'))

            #     for variation in variations:
            #         view_variation = ProductVariations(code=variation.get('code'),
            #                                            label=variation.get('label'), price=variation.get('price'), variations=variation.get('variation'))
            #         view_variation.save()
            #         product.variations.add(view_variation)

            if formData.validated_data.get('colors'):
                colors = json.loads(formData.validated_data.get('colors'))
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

                CreateDistributorProductNotification(product, 'created').start()

                return Response({
                    "message": "Product has been added",
                    "product": IntergratedProductSerializer(product).data,
                    "view_complete": view_complete
                }, status=status.HTTP_201_CREATED)

            except Exception as e:
                product.delete()
                content = {'error': 'Please check image format'}
                return Response(content, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        # except Exception as e:
        # content = {'error': 'Something went wrong'}
        return Response(formData.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    def retrieve(self, request, pk=None):
        try:
            distributor = get_distributor(self.request)
            queryset = Product.objects.filter(distributor=distributor)
            product = get_object_or_404(queryset, pk=pk)
            serializer = IntergratedProductSerializer(product)
            return Response({
                'message':'product Retrieved',
                'product':serializer.data,
                }, status=status.HTTP_200_OK)
        except Exception:
            return Response({
                'message':'No product was found',
                }, status=status.HTTP_204_NO_CONTENT)


    def update(self, request, pk=None):
        distributor = get_distributor(self.request)
        queryset = Product.objects.filter(distributor=distributor)
        product = get_object_or_404(queryset, pk=pk)
        formData = IntergratedProductSerializer(product, data=request.data)

        if formData.is_valid():

            if formData.validated_data.get('category'):
                category = PCategory.objects.get(id=formData.validated_data.get('category'))
                product.category = category

            if formData.validated_data.get('units'):
                units = MUnit.objects.get(id=formData.validated_data.get('units'))
                product.units = units

            product.name = formData.validated_data.get('name')
            product.price = formData.validated_data.get('price')
            product.description = formData.validated_data.get('description')
            product.stock_qty = formData.validated_data.get('stock_qty')
            product.size = formData.validated_data.get('size')
            product.brief_description = formData.validated_data.get('brief_description')

            if formData.validated_data.get('active'):
                if formData.validated_data.get('active') == 'inactive':
                    product.active = False
                else:
                    product.active = True

            if formData.validated_data.get('weight'):
                product.weight = formData.validated_data.get('weight')

            if formData.validated_data.get('type'):
                print(formData.validated_data.get('type'))
                if formData.validated_data.get('type') == 'New':
                    product.is_new_arrival = True
                else:
                    product.is_new_arrival = False

            if formData.validated_data.get('brand'):
                brand = Brand.objects.get(id=formData.validated_data.get('brand'))
                product.branding = brand

            if formData.validated_data.get('colors'):
                colors = json.loads(formData.validated_data.get('colors'))
                product.colors.clear()
                for color in colors:
                    customColor = CustomColors.objects.get(id=color)
                    product.colors.add(customColor)
            product.save()

            # try:
            if request.FILES.get('photos0'):
                for n in ('0', '1', '2', '3', '4', '5'):
                    photos = 'photos'
                    photos += n
                    if (request.FILES.get(photos)):
                        photo = request.FILES.get(photos)
                        pr_image = ProductImage(
                            product=product, image=photo)
                        pr_image.save()

            if formData.validated_data.get('deletedImages'):
                del_images = json.loads(formData.get('deletedImages'))
                for del_image in del_images:
                    prod_image = ProductImage.objects.get(id=del_image)
                    prod_image.image.delete(save=False)
                    prod_image.delete()

            product.save()
            CreateDistributorProductNotification(product, 'updated').start()

            return Response({
                "message": "Product has been updated",
                "product": IntergratedProductSerializer(product).data,
            }, status=status.HTTP_201_CREATED)
        
        return Response({
            "message": "Product failed to update",
            "error log": formData.errors
        }, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk=None):
        distributor = get_distributor(self.request)
        queryset = Product.objects.filter(distributor=distributor)
        product = get_object_or_404(queryset, pk=pk)
        formData = IntergratedProductSerializer(product, data=request.data, partial=True)

        if formData.is_valid():

            if formData.validated_data.get('category'):
                category = PCategory.objects.get(id=formData.validated_data.get('category'))
                product.category = category

            if formData.validated_data.get('units'):
                units = MUnit.objects.get(id=formData.validated_data.get('units'))
                product.units = units

            product.name = formData.validated_data.get('name')
            product.price = formData.validated_data.get('price')
            product.description = formData.validated_data.get('description')
            product.stock_qty = formData.validated_data.get('stock_qty')
            product.size = formData.validated_data.get('size')
            product.brief_description = formData.validated_data.get('brief_description')

            if formData.validated_data.get('active'):
                if formData.validated_data.get('active') == 'inactive':
                    product.active = False
                else:
                    product.active = True

            if formData.validated_data.get('weight'):
                product.weight = formData.validated_data.get('weight')

            if formData.validated_data.get('type'):
                print(formData.validated_data.get('type'))
                if formData.validated_data.get('type') == 'New':
                    product.is_new_arrival = True
                else:
                    product.is_new_arrival = False

            if formData.validated_data.get('brand'):
                brand = Brand.objects.get(id=formData.validated_data.get('brand'))
                product.branding = brand

            if formData.validated_data.get('colors'):
                colors = json.loads(formData.validated_data.get('colors'))
                product.colors.clear()
                for color in colors:
                    customColor = CustomColors.objects.get(id=color)
                    product.colors.add(customColor)
            product.save()

            # try:
            if request.FILES.get('photos0'):
                for n in ('0', '1', '2', '3', '4', '5'):
                    photos = 'photos'
                    photos += n
                    if (request.FILES.get(photos)):
                        photo = request.FILES.get(photos)
                        pr_image = ProductImage(
                            product=product, image=photo)
                        pr_image.save()

            if formData.validated_data.get('deletedImages'):
                del_images = json.loads(formData.get('deletedImages'))
                for del_image in del_images:
                    prod_image = ProductImage.objects.get(id=del_image)
                    prod_image.image.delete(save=False)
                    prod_image.delete()

            product.save()
            CreateDistributorProductNotification(product, 'updated').start()

            return Response({
                "message": "Product has been updated",
                "product": IntergratedProductSerializer(product).data,
            }, status=status.HTTP_201_CREATED)
        
        return Response({
            "message": "Product failed to update",
            "error log": formData.errors
        }, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk):
        try:
            distributor = get_distributor(self.request)
            queryset = Product.objects.filter(distributor=distributor)
            product = get_object_or_404(queryset, pk=pk)
            product.delete()
            CreateDistributorProductNotification(product, 'deleted').start()

            return Response({
                "message": "Product has been deleted",
            }, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            if type(e) is ProtectedError:
                return Response({"error": "Deletion Error, Some Other Components Have In Some Way Referenced The Product"},  status=status.HTTP_406_NOT_ACCEPTABLE)
            return Response({
                'error': "No product was found"
            }, status=status.HTTP_400_BAD_REQUEST)


class IntegratedProductCategory(IntegratedAuthMixin, viewsets.ViewSet ):
    serializer_class = PCategoryAPISerializer
    permission_classes = [
        # permissions.IsAuthenticated
    ]
    parser_classes = [FormParser, MultiPartParser, JSONParser]

    def list(self, request):
        _request_header = self.request.headers
        id = _request_header['Distributor']
        user = get_object_or_404(Distributor, id=id)
        distUser = DistUsers.objects.filter(distributor=user).first()
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
            "message":"Product Categories Fetched Successfull",
            "categories": PCategoryAPISerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def create(self, request):
        # try:
        distributor = get_distributor(self.request)
        formData = PCategoryAPISerializer(data=request.data)
        if formData.is_valid():
            if (request.FILES.get('category_pic')):
                # formData = request.POST.copy()
                # formData['distributor'] = distributor.id
                category_pic = request.FILES.get('category_pic')
                pc = None

                if request.data.get('parent_category'):
                    category_id = request.data.get('parent_category')
                    pc = PCategory.objects.get(id=category_id).id

                # serializer = self.get_serializer(data=formData)
                # serializer.is_valid(raise_exception=True)
                category = PCategory(distributor=distributor, parent_category=pc, name=formData.validated_data['name'], category_pic=category_pic,
                brief_description=formData.validated_data['brief_description'], description=formData.validated_data['description'])
                category.save()
                view_complete = checkCurrentProgress(distributor)
                return Response({
                    "message": "Category has been added",
                    "category": PCategoryAPISerializer(category).data,
                    "view_complete": view_complete
                }, status=status.HTTP_201_CREATED)

            else:
                
                if formData.is_valid():
                # formData = request.POST.copy()
                    # formData['distributor'] = distributor.id
                    # category_pic = request.FILES.get('category_pic')
                    pc = None
                    if request.data.get('parent_category'):
                        category_id = request.data.get('parent_category')
                        pc = PCategory.objects.get(
                            id=category_id).id

                    # serializer = self.get_serializer(data=formData)
                    # serializer.is_valid(raise_exception=True)
                    category = PCategory(distributor=distributor, parent_category=pc,  name=formData.validated_data['name'],
                    brief_description=formData.validated_data['brief_description'], description=formData.validated_data['description'])
                    category.save()

                    view_complete = checkCurrentProgress(distributor)
                    return Response({
                        "message": "Category has been added",
                        "category": PCategoryAPISerializer(category).data,
                        "view_complete": view_complete
                    }, status=status.HTTP_201_CREATED)
        return Response({
            "message": "Category failed to add",
            'error log': formData.errors
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def retrieve(self, request, pk):
        try:
            distributor = get_distributor(self.request)
            queryset = PCategory.objects.filter(distributor=distributor)
            category = get_object_or_404(queryset, pk=pk)
            serializer = PCategoryAPISerializer(category)
            return Response({
                'message':'Retrieve Category successfully',
                'Category': serializer.data,
            },status=status.HTTP_200_OK)
        except Exception as e:
            return Response({
                'message':'Retrieve Category failed',
            },status=status.HTTP_204_NO_CONTENT)
            
    def update(self, request, pk):
        distributor = get_distributor(self.request)
        queryset = PCategory.objects.filter(distributor=distributor)
        category = get_object_or_404(queryset, pk=pk)
        serializer = PCategoryAPISerializer(category, data=request.data)

        if serializer.is_valid():
            if request.data['parent_category']:
                parent_category = PCategory.objects.get(id=request.data['parent_category'])
                category.parent_category = parent_category
            category.name = serializer.validated_data['name']
            category.description = serializer.validated_data['description']
            category.brief_description = serializer.validated_data['brief_description']
            if request.FILES.get('category_pic'):
                category.category_pic.delete(save=False)
                category.category_pic = request.FILES.get('category_pic')

            category.save()

            return Response({
                "message": "Category has been updated",
                "category": PCategoryAPISerializer(category).data,
            }, status=status.HTTP_201_CREATED)

    def partial_update(self, request, pk):
        distributor = get_distributor(self.request)
        queryset = PCategory.objects.filter(distributor=distributor)
        category = get_object_or_404(queryset, pk=pk)
        serializer = PCategoryAPISerializer(category, data=request.data, partial=True)

        if serializer.is_valid():
            if request.data['parent_category']:
                parent_category = PCategory.objects.get(id=request.data['parent_category'])
                category.parent_category = parent_category
            category.name = serializer.validated_data['name']
            category.description = serializer.validated_data['description']
            category.brief_description = serializer.validated_data['brief_description']
            if request.FILES.get('category_pic'):
                category.category_pic.delete(save=False)
                category.category_pic = request.FILES.get('category_pic')

            category.save()

            return Response({
                "message": "Category has been partially updated",
                "category": PCategoryAPISerializer(category).data,
            }, status=status.HTTP_201_CREATED)


    def destroy(self, request, pk):
        distributor = get_distributor(self.request)
        queryset = PCategory.objects.filter(distributor=distributor)
        category = get_object_or_404(queryset, pk=pk)
        category.delete()

        return Response({
            "message": "Category has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)








# class DistributorProductsView(IntegratedAuthMixin, APIView):    

#     def get(self, request, id):
#         distributor = get_object_or_404(Distributor, id=id)
#         products = Product.objects.filter(distributor=distributor)
        
#         return Response({
#             "message":"Products found",
#             "products": IntergratedProductSerializer(products, many=True).data,
#         }, status=status.HTTP_200_OK )

#     def post(self, request, id, format=None):
#         distributor = get_object_or_404(Distributor, id=id)
#         if distributor:
#             serializer = IntergratedProductSerializer(data=request.data)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response(serializer.data, status=status.HTTP_201_CREATED)
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#         return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)



# class DistributorProductsDetailView(IntegratedAuthMixin, APIView):
#     """
#     Retrieve, update or delete a product instance.
#     """
#     def get_object(self, request, id):        
#         try:            
#             return Product.objects.get(id=id)
#         except Product.DoesNotExist:
#             raise Http404

#     def get(self, request, id, format=None):
#         product = self.get_object(id)
#         serializer = IntergratedProductSerializer(product)
#         return Response(serializer.data)

#     def put(self, request, id, format=None):
#         product = self.get_object(id)
#         serializer = IntergratedProductSerializer(product, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def patch(self, request, id):
#         product = self.get_object(id)
#         serializer = IntergratedProductSerializer(product, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         return Response(status=status.HTTP_403_FORBIDDEN)

#     def delete(self, request, id, format=None):
#         product = self.get_object(id)
#         product.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


