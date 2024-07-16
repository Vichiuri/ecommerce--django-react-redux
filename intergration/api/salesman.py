import json
from django.forms.models import model_to_dict
from django.core import serializers

from distributor.models.distributor import SalesMan, SalesTargetGroup, SalesmanTask
from distributor.models.netbot import DistUsers, Distributor
from intergration.authMixin import IntegratedAuthMixin
from intergration.helpers import get_distributor
from intergration.serializers import SalesManAPISerializer
from retailer.serializers import RegisterSerializer, SalesTargetSerializer, SalesmanTaskSerializer
from distributor.commons import checkCurrentProgress, random_password, send_dist_email

from django.shortcuts import get_object_or_404
from django.db.models import Q
from django.core.paginator import Paginator

from rest_framework import generics, response, status, viewsets
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser


class IntergratedSalesManApi(IntegratedAuthMixin, generics.RetrieveAPIView):
    """
    Add and manage salesmen for a distributor
    """
    queryset = SalesMan.objects.all()
    serializer_class = SalesManAPISerializer
    permission_classes = [
        # permissions.IsAuthenticated
    ]
    parser_classes = [FormParser, MultiPartParser, JSONParser]

    def get(self, request):
        _request_header = self.request.headers
        id = _request_header['Distributor'] 
        user = get_object_or_404(Distributor, id=id)
        distUser = DistUsers.objects.filter(distributor=user).first()
        distributor = distUser.distributor
        offset = 25
        rows = self.request.query_params.get("rows")
        query = self.request.query_params.get("query")
        if query:
            sales_people = SalesMan.objects.filter(
                distributor=distributor).order_by('-id')
            querySet = sales_people.filter(Q(first_name__icontains=query) |
                                           Q(last_name__icontains=query) | Q(email__icontains=query) | Q(phone__icontains=query))
        else:
            querySet = SalesMan.objects.filter(
                distributor=distributor).order_by('-id')

        if rows:
            offset = rows

        paginator = Paginator(querySet, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return response.Response({
            "message":"Sales-persons Fetched successfully",
            "sales_people": SalesManAPISerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def post(self, request):
        distributor = get_distributor(self.request)
        serializer = SalesManAPISerializer(data=request.data)
        if serializer.is_valid():
            pass_word = random_password()
            email_context = {
                                "salesp": serializer.validated_data,
                                "password": pass_word, "url_host": request.get_host()
                            }

            email_sent = send_dist_email(distributor=distributor, template_name="emails/sales_person_creation.html", to_emails=[serializer.validated_data['email']],
                                        subject="Salesman Creation", context_dict=email_context)

            if not email_sent:
                pass_word = 'user123'
                message = "Email settings not configured well email was not sent to salesman password is user123"

            userData = {}

            userData['email'] = serializer.validated_data['email']
            userData['password'] = pass_word
            userSerilizer = RegisterSerializer(data=userData)
            userSerilizer.is_valid(raise_exception=True)
            user = userSerilizer.save()

            serializer.save()

            view_complete = checkCurrentProgress(distributor)
            saleperson = SalesManAPISerializer(serializer.validated_data).data
            return response.Response({
                "message": "Sale person has been added",
                "sale_person": saleperson,
                "view_complete": view_complete
            }, status=status.HTTP_201_CREATED)
            # return Response(serializer.data, status=status.HTTP_201_CREATED)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateIntergratedSalesManApi(IntegratedAuthMixin, generics.RetrieveUpdateDestroyAPIView):
    serializer_class = SalesManAPISerializer
    parser_classes = [FormParser, MultiPartParser, JSONParser]
    lookup_url_kwarg = 'id'

    def get_queryset(self):
        distributor = get_distributor(self.request)
        saleperson = SalesMan.objects.filter(distributor=distributor)
        return saleperson
    

    def put(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            self.perform_update(instance)
            return response.Response({'message':"Updated successfully"},status=status.HTTP_200_OK)
        except Exception as e:
            return response.Response({'message':"Update Failed"},status=status.HTTP_204_NO_CONTENT)


    def patch(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            self.perform_update(instance)
            return response.Response({'message':"Updated successfully"},status=status.HTTP_200_OK)
        except Exception as e:
            return response.Response({'message':"Update Failed"},status=status.HTTP_204_NO_CONTENT)

    
    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            self.perform_delete(instance)
            return response.Response({'message':"Deleted successfully"},status=status.HTTP_200_OK)
        except Exception as e:
            return response.Response({'message':"Deletion Failed"},status=status.HTTP_204_NO_CONTENT)


class IntergratedSalesTargetApi(IntegratedAuthMixin, generics.RetrieveAPIView):
    """
    Manage and view sales targets for salesmen and how they are achieved in relaltion to dist orders
    """
    serializer_class = SalesTargetSerializer
    permission_classes = [
        # permissions.IsAuthenticated
    ]
    parser_classes = [FormParser, MultiPartParser, JSONParser]

    def get(self, request):
        _request_header = self.request.headers
        id = _request_header['Distributor'] 
        user = get_object_or_404(Distributor, id=id)
        distUser = DistUsers.objects.filter(distributor=user).first()
        distributor = distUser.distributor

        offset = 25
        query = self.request.query_params.get("query")
        rows = self.request.query_params.get("rows")
        querySet = SalesTargetGroup.objects.filter(
            distributor=distributor).order_by('-id')

        if query:
            search_sales = querySet.filter(Q(name__icontains=query) |
                                           Q(period__icontains=query) | Q(target_sales__icontains=query))
            querySet = search_sales

        if rows:
            offset = rows

        paginator = Paginator(querySet, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return response.Response({
            "message":'Sales person targets retrieved',
            "sales_target": SalesTargetSerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def post(self, request):
        _request_header = self.request.headers
        id = _request_header['Distributor'] 
        user = get_object_or_404(Distributor, id=id)
        distUser = DistUsers.objects.filter(distributor=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        json_data['distributor'] = distributor.id

        sale_target = SalesTargetGroup(distributor=distributor,  name=json_data['name'],
                                       period=json_data['period'], target_sales=json_data['target_sales'])

        if json_data['reward_money']:
            sale_target.reward_money = json_data['reward_money']

        if json_data['reward_per']:
            sale_target.reward_per = json_data['reward_per']

        sale_target.save()

        sale_people = json.loads(json_data['sale_people'])

        for person in sale_people:
            salesman = SalesMan.objects.get(id=person)
            sale_target.salesmen.add(salesman)

        return response.Response({
            "message": "Sale target has been added",
            "sale_target": SalesTargetSerializer(sale_target).data
        }, status=status.HTTP_201_CREATED)


class UpdateIntergratedSalesTargetApi(IntegratedAuthMixin, generics.RetrieveUpdateDestroyAPIView):
    serializer_class = SalesTargetSerializer
    lookup_url_kwarg = 'id'
    parser_classes = [FormParser, MultiPartParser, JSONParser]

    def get_queryset(self):
        distributor = get_distributor(self.request)
        saleperson = SalesTargetGroup.objects.filter(distributor=distributor)
        return saleperson

    def put(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            self.perform_update(instance)
            return response.Response({'message':"Updated successfully"},status=status.HTTP_200_OK)
        except Exception as e:
            return response.Response({'message':"Update Failed"},status=status.HTTP_204_NO_CONTENT)


    def patch(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            self.perform_update(instance)
            return response.Response({'message':"Updated successfully"},status=status.HTTP_200_OK)
        except Exception as e:
            return response.Response({'message':"Update Failed"},status=status.HTTP_204_NO_CONTENT)

    
    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            self.perform_delete(instance)
            return response.Response({'message':"Deleted successfully"},status=status.HTTP_200_OK)
        except Exception as e:
            return response.Response({'message':"Deletion Failed"},status=status.HTTP_204_NO_CONTENT)


class IntergratedSalesManTasksApi(IntegratedAuthMixin, viewsets.ViewSet):
    """
    Manage and view sales tasks for salesmen and how they are achieved in relation to dist orders
    """
    serializer_class = SalesmanTaskSerializer
    permission_classes = [
        # permissions.IsAuthenticated
    ]
    parser_classes = [FormParser, MultiPartParser, JSONParser]

    def list(self, request):
        try:
            distributor = get_distributor(self.request)
            
            offset = 25
            query = self.request.query_params.get("query")
            rows = self.request.query_params.get("rows")
            querySet = SalesmanTask.objects.filter(
                distributor=distributor).order_by('-id')

            if rows:
                offset = rows

            paginator = Paginator(querySet, offset)  # Show 25 contacts per page.
            page = self.request.query_params.get("page")
            pageList = paginator.get_page(page)
            last_page = paginator.num_pages

            return response.Response({
                'message': "Sales-persons tasks fetched successfully",
                "sales_man": SalesmanTaskSerializer(pageList, many=True).data,
                "last_page": last_page
            }, status=status.HTTP_200_OK)

        except Exception as e:
            return response.Response({
                'message': "Sales-persons tasks fetch failed",
                "error_log": e
            }, status=status.HTTP_404_NOT_FOUND)

    def create(self, request):
        distributor = get_distributor(self.request)

        serializer = SalesmanTaskSerializer(data = request.data)
        if serializer.is_valid():
            # print('ssss', serializer.validated_data)
            # salesman_tasks = SalesmanTask(distributor=distributor,)
            # salesman_tasks.save()
            # SalesmanTask.save()
            serializer.save()
            return response.Response({
                "message": "Salesman tasks has been added",
                "salesman_tasks": SalesmanTaskSerializer(serializer.validated_data).data
            }, status=status.HTTP_201_CREATED)
        
        return response.Response({
            "message": "Salesman tasks failed to add",
            "error": serializer.errors,
        }, status=status.HTTP_400_BAD_REQUEST)


    def retrieve(self, request, pk=None):
        try:
            distributor = get_distributor(self.request)
            queryset = SalesmanTask.objects.filter(distributor=distributor)
            task = get_object_or_404(queryset, pk=pk)
            return response.Response({
                "message": "Sale target retrieved successfully",
                "sales_tasks": SalesmanTaskSerializer(task).data
            }, status=status.HTTP_201_CREATED)
        except Exception as e:
            return response.Response({
                "message": f"Salesperson task counld to be fetched..: {e}",
            }, status=status.HTTP_400_BAD_REQUEST)


    def update(self, request, pk=None):
        distributor = get_distributor(self.request)
        queryset = SalesmanTask.objects.filter(distributor=distributor)
        task = get_object_or_404(queryset, pk=pk)
        serializer = SalesmanTaskSerializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return response.Response({
                "message": "Sale target has been updated",
                "sales_tasks": SalesmanTaskSerializer(serializer.validated_data).data
            }, status=status.HTTP_201_CREATED)
        
        return response.Response({
            "message": "Salesperson task update failed",
        }, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk=None):
        distributor = get_distributor(self.request)
        queryset = SalesmanTask.objects.filter(distributor=distributor)
        task = get_object_or_404(queryset, pk=pk)
        serializer = SalesmanTaskSerializer(task, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return response.Response({
                "message": "Sale target has been updated",
                "sales_tasks": SalesmanTaskSerializer(serializer.validated_data).data
            }, status=status.HTTP_201_CREATED)
        
        return response.Response({
            "message": "Salesperson task update failed",
        }, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        distributor = get_distributor(self.request)
        queryset = SalesmanTask.objects.filter(distributor=distributor)
        task = get_object_or_404(queryset, pk=pk)
        task.delete()

        return response.Response({
            "message": "salesman task has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)
