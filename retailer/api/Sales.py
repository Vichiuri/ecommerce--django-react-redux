from django.core.paginator import Paginator
from django.db.models import Q

from ..serializers import SalesManSerializer, SalesTargetSerializer, RegisterSerializer
from distributor.models import DistUsers, SalesMan, SalesTargetGroup
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from netbotAuth.models import User
from distributor.commons import checkCurrentProgress, send_dist_email, random_password
from netbot_biz import settings
import json
from retailer.serializers import SalesmanTaskSerializer
from distributor.models.distributor import SalesmanTask


class SalesManApi(generics.RetrieveAPIView):
    """
    Add and manage salesmen for a distributor
    """
    queryset = SalesMan.objects.all()
    serializer_class = SalesManSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
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

        return Response({
            "sales_people": SalesManSerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        formData = request.POST.copy()

        salesMan = SalesMan(distributor=distributor, first_name=formData['first_name'], last_name=formData['last_name'],
                            phone=formData['phone'], email=formData['email'])
        if request.FILES.get('photo'):
            salesMan.pic = request.FILES.get('photo')
        message = "Sale person has been added"

        pass_word = random_password()

        email_context = {"salesp": salesMan,
                         "password": pass_word, "url_host": request.get_host()
                         }

        email_sent = send_dist_email(distributor=distributor, template_name="emails/sales_person_creation.html", to_emails=[salesMan.email],
                                     subject="Salesman Creation", context_dict=email_context)

        if not email_sent:
            pass_word = 'user123'
            message = "Email settings not configured well email was not sent to salesman password is user123"

        userData = {}

        userData['email'] = salesMan.email
        userData['password'] = pass_word
        userSerilizer = RegisterSerializer(data=userData)
        userSerilizer.is_valid(raise_exception=True)
        user = userSerilizer.save()

        salesMan.save()

        view_complete = checkCurrentProgress(distributor)

        return Response({
            "message": message,
            "sale_person": SalesManSerializer(salesMan).data,
            "view_complete": view_complete
        }, status=status.HTTP_201_CREATED)

    def put(self, request):
        formData = request.POST.copy()
        salesman = SalesMan.objects.get(id=formData['id'])
        salesman.first_name = formData['first_name']
        salesman.last_name = formData['last_name']
        salesman.phone = formData['phone']
        salesman.email = formData['email']

        if request.FILES.get('photo'):
            salesman.pic.delete(save=False)
            salesman.pic = request.FILES.get('photo')

        salesman.save()

        return Response({
            "message": "Sale person has been updated",
            "sale_person": SalesManSerializer(salesman).data
        }, status=status.HTTP_201_CREATED)

    def delete(self, request):
        salesman_id = self.request.query_params.get("salesman_id")
        salesman = SalesMan.objects.get(id=salesman_id)
        salesman.delete()

        return Response({
            "message": "salesman has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)


class SalesTargetApi(generics.RetrieveAPIView):
    """
    Manage and view sales targets for salesmen and how they are achieved in relaltion to dist orders
    """
    serializer_class = SalesTargetSerializer
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

        return Response({
            "sales_target": SalesTargetSerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
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

        return Response({
            "message": "Sale target has been added",
            "sale_target": SalesTargetSerializer(sale_target).data
        }, status=status.HTTP_201_CREATED)

    def put(self, request):
        json_data = json.loads(request.body)
        sale_target = SalesTargetGroup.objects.get(id=json_data.get('id'))

        sale_target.name = json_data.get('name', '')
        sale_target.period = json_data.get('period', '')
        sale_target.target_sales = json_data.get('target_sales', 0)
        sale_target.reward_money = json_data.get('reward_money', 0)
        sale_target.reward_per = json_data.get('reward_per', 0)

        if json_data.get('sale_people'):
            sale_people = json.loads(json_data.get('sale_people', []))
            sale_target.salesmen.clear()
            for person in sale_people:
                salesman = SalesMan.objects.get(id=person)
                sale_target.salesmen.add(salesman)

        sale_target.save()

        return Response({
            "message": "Sale target has been updated",
            "sale_target": SalesTargetSerializer(sale_target).data
        }, status=status.HTTP_201_CREATED)

    def delete(self, request):
        salestarget_id = self.request.query_params.get("salestarget_id")
        sale_target = SalesTargetGroup.objects.get(id=salestarget_id)
        sale_target.delete()

        return Response({
            "message": "sale target has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)


class SalesManTasksApi(generics.RetrieveAPIView):
    """
    Manage and view sales tasks for salesmen and how they are achieved in relation to dist orders
    """
    serializer_class = SalesmanTaskSerializer
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
        querySet = SalesmanTask.objects.filter(
            distributor=distributor).order_by('-id')

        # if query:
        #     search_sales = querySet.filter(Q(name__icontains=query) |
        #                                    Q(period__icontains=query) | Q(target_sales__icontains=query))
        #     querySet = search_sales

        if rows:
            offset = rows

        paginator = Paginator(querySet, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "sales_man": SalesmanTaskSerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        json_data = json.loads(request.body)
        json_data['distributor'] = distributor.id

        salesman_tasks = SalesmanTask(distributor=distributor,  name=json_data['name'],
                                      period=json_data['period'], target_sales=json_data['target_sales'])

        # if json_data['reward_money']:
        #     sale_target.reward_money = json_data['reward_money']

        # if json_data['reward_per']:
        #     sale_target.reward_per = json_data['reward_per']

        SalesmanTask.save()

        # sale_people = json.loads(json_data['sale_people'])

        # for person in sale_people:
        #     salesman = SalesMan.objects.get(id=person)
        #     SalesmanTask.salesmen.add(salesman)

        return Response({
            "message": "Salesman tasks has been added",
            "salesman_tasks": SalesmanTaskSerializer(SalesmanTask).data
        }, status=status.HTTP_201_CREATED)

    def put(self, request):
        json_data = json.loads(request.body)
        sales_tasks = SalesmanTask.objects.get(id=json_data.get('id'))

        sales_tasks.name = json_data.get('name', '')
        sales_tasks.period = json_data.get('period', '')
        sales_tasks.target_sales = json_data.get('target_sales', 0)
        # sales_tasks.reward_money = json_data.get('reward_money', 0)
        # sales_tasks.reward_per = json_data.get('reward_per', 0)

        if json_data.get('sale_people'):
            sale_people = json.loads(json_data.get('sale_people', []))
            sales_tasks.salesmen.clear()
            for person in sale_people:
                salesman = SalesMan.objects.get(id=person)
                sales_tasks.salesmen.add(salesman)

        sales_tasks.save()

        return Response({
            "message": "Sale target has been updated",
            "sales_tasks": SalesmanTaskSerializer(sales_tasks).data
        }, status=status.HTTP_201_CREATED)

    def delete(self, request):
        sales_tasks_id = self.request.query_params.get("sales_tasks_id")
        sales_tasks = SalesmanTask.objects.get(id=sales_tasks_id)
        sales_tasks.delete()

        return Response({
            "message": "salesman task has been deleted",
        }, status=status.HTTP_204_NO_CONTENT)
