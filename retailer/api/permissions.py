from django.shortcuts import redirect
from django.http import HttpResponse

from ..serializers import PermissionGroupSerializer, DistUserSerializer
from distributor.models import DistUsers, PermissionGroup, DistPermission
from netbotAuth.models import User
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
import json
from distributor.commons import random_password, send_dist_email

class DistPermissionGroupApi(generics.RetrieveAPIView):
    """
    Create and view permission groups for dist users.
    """
    serializer_class = PermissionGroupSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        permission_group = distUser.permission_group
        if permission_group.dist_super:
            groups = PermissionGroup.objects.filter(distributor=distributor).order_by('-id')

            return Response({
                'groups': PermissionGroupSerializer(groups, many=True).data
            })

        else:
            return Response({'message': "Unauthorized access detected"}, status=status.HTTP_403_FORBIDDEN)

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        permission_group = distUser.permission_group

        if permission_group.dist_super:
            json_data = json.loads(request.body)

            permission = DistPermission(can_view_users=json_data['can_view_users'],
                                        can_manage_users=json_data['can_manage_users'],
                                        can_view_salesmen=json_data['can_view_salesmen'],
                                        can_manage_salesmen=json_data['can_manage_salesmen'],
                                        can_view_orders=json_data['can_view_orders'],
                                        can_manage_orders=json_data['can_manage_orders'],
                                        can_post_orders=json_data['can_post_orders'],
                                        can_view_retailer=json_data['can_view_retailer'],
                                        can_manage_retailer=json_data['can_manage_retailer'],
                                        can_view_products=json_data['can_view_products'],
                                        can_manage_product=json_data['can_manage_product'],
                                        can_view_product_category=json_data['can_view_product_category'],
                                        can_manage_product_categories=json_data['can_manage_product_categories'],
                                        can_edit_company_details=json_data['can_edit_company_details'],
                                        can_view_dashboard=json_data['can_view_dashboard'],
                                        can_view_deliveries=json_data['can_view_deliveries'],
                                        can_manage_mobile=json_data['can_manage_mobile'],
                                        can_view_offers=json_data['can_view_offers'],
                                        can_manage_offers=json_data['can_manage_offers'],
                                        can_view_settings=json_data['can_view_settings'],
                                        can_manage_settings=json_data['can_manage_settings'],
                                        distributor=distributor)
            permission.save()

            group = PermissionGroup(distributor=distributor, name=json_data['name'], permission=permission)
            group.save()

            return Response({
                'message': "Permission group has been added",
                'group': PermissionGroupSerializer(group).data
            }, status=status.HTTP_201_CREATED)

        else:
            return Response({'message': "Unauthorized access detected"}, status=status.HTTP_403_FORBIDDEN)

    def put(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        permission_group = distUser.permission_group
        if permission_group.dist_super:
            json_data = json.loads(request.body)
            group = PermissionGroup.objects.get(id=json_data['id'])
            group.name = json_data['name']

            permission = DistPermission.objects.get(id=group.permission.id)

            permission.can_view_users = json_data['can_view_users']
            permission.can_manage_users = json_data['can_manage_users']
            permission.can_view_salesmen = json_data['can_view_salesmen']
            permission.can_manage_salesmen = json_data['can_manage_salesmen']
            permission.can_view_orders = json_data['can_view_orders']
            permission.can_manage_orders = json_data['can_manage_orders']

            permission.can_post_orders = json_data['can_post_orders']
            permission.can_view_retailer = json_data['can_view_retailer']
            permission.can_manage_retailer = json_data['can_manage_retailer']
            permission.can_view_products = json_data['can_view_products']

            permission.can_manage_product = json_data['can_manage_product']
            permission.can_view_product_category = json_data['can_view_product_category']
            permission.can_manage_product_categories = json_data['can_manage_product_categories']
            permission.can_view_settings = json_data['can_view_settings']
            permission.can_manage_settings = json_data['can_manage_settings']

            permission.can_edit_company_details = json_data['can_edit_company_details']
            permission.can_view_dashboard = json_data['can_view_dashboard']
            permission.can_view_deliveries = json_data['can_view_deliveries']
            permission.can_manage_mobile = json_data['can_manage_mobile']
            permission.can_view_offers = json_data['can_view_offers']
            permission.can_manage_offers = json_data['can_manage_offers']

            permission.save()
            group.save()

            return Response({
                "message": "Permission group has been updated",
                'group': PermissionGroupSerializer(group).data
            }, status=status.HTTP_201_CREATED)

        else:
            return Response({'message': "Unauthorized access detected"}, status=status.HTTP_403_FORBIDDEN)

    def delete(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        permission_group = distUser.permission_group
        if permission_group.dist_super:
            group_id = self.request.query_params.get("group_id")
            group = PermissionGroup.objects.get(id=group_id)
            if permission_group.id != group.id:
                group.delete()

                return Response({
                    "message": "Permission group has been deleted",
                }, status=status.HTTP_204_NO_CONTENT)
            else:
                return Response({'message': "Delete of super admin is not authorized"},
                                status=status.HTTP_403_FORBIDDEN)

        else:
            return Response({'message': "Unauthorized access detected"}, status=status.HTTP_403_FORBIDDEN)


class DistUsersApi(generics.RetrieveAPIView):
    """
    Create dist users and add them to a permission group.
    Edit dist users based on permission groups
    """
    serializer_class = DistUserSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        permission_group = distUser.permission_group
        if permission_group.dist_super:
            dist_users = DistUsers.objects.filter(distributor=distributor).order_by('-id')

            return Response({
                'dist_users': DistUserSerializer(dist_users, many=True).data
            })
        else:
            return Response({'message': "Unauthorized access detected"}, status=status.HTTP_403_FORBIDDEN)

    def post(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        permission_group = distUser.permission_group
        if permission_group.dist_super:
            formData = request.POST.copy()
            pass_word = random_password()

            new_user = User(email=formData['email'])
            new_user.set_password(pass_word)
            new_user.save()

            group = PermissionGroup.objects.get(id=formData['group'])
            dist_user = DistUsers(user=new_user, distributor=distributor, permission_group=group,
                                  first_name=formData['first_name'], last_name=formData['last_name'],
                                  phone=formData['phone'])
            if request.FILES.get('photo'):
                dist_user.pic = request.FILES.get('photo')
            dist_user.save()

            email_context = {"dist_user": dist_user,
                "password": pass_word, "url_host":request.get_host()
                                 }
            email_sent = send_dist_email(distributor=distributor, template_name= "emails/dist_user_creation_email.html" , to_emails=[new_user.email],
            subject="Employee Creation", context_dict=email_context)
            message = 'User has been added'

            if not email_sent:
                pass_word = 'user123'
                new_user.set_password(pass_word)
                new_user.save()
                message = "Email settings not configured well email was not sent to the new employee password is user123"

                
            return Response({
                'message': message,
                'dist_user': DistUserSerializer(dist_user).data
            }, status=status.HTTP_201_CREATED)
        else:
            return Response({'message': "Unauthorized access detected"}, status=status.HTTP_403_FORBIDDEN)

    def put(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        permission_group = distUser.permission_group
        if permission_group.dist_super:
            formData = request.POST.copy()

            dist_user = DistUsers.objects.get(id=formData['id'])

            group = PermissionGroup.objects.get(id=formData['group'])
            dist_user.permission_group = group
            dist_user.first_name = formData['first_name']
            dist_user.last_name = formData['last_name']

            dist_user.phone = formData['phone']

            if request.FILES.get('photo'):
                dist_user.pic.delete(save=False)
                dist_user.pic = request.FILES.get('photo')
            dist_user.save()
            return Response({
                'message': "User has been updated",
                'dist_user': DistUserSerializer(dist_user).data
            }, status=status.HTTP_201_CREATED)
        else:
            return Response({'message': "Unauthorized access detected"}, status=status.HTTP_403_FORBIDDEN)

    def delete(self, request):
        user = self.request.user
        distUser = DistUsers.objects.filter(user=user).first()
        distributor = distUser.distributor

        permission_group = distUser.permission_group
        if permission_group.dist_super:
            view_user_id = self.request.query_params.get("user_id")
            view_user = DistUsers.objects.get(id=view_user_id)
            view_user.user.delete()
            view_user.delete()

            return Response({
                "message": "User has been deleted",
            }, status=status.HTTP_204_NO_CONTENT)
        else:
            return Response({'message': "Unauthorized access detected"}, status=status.HTTP_403_FORBIDDEN)
