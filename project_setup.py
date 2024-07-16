# import os
#
# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'netbot_biz.settings')
from netbotAuth.models.users import User
from distributor.models import *

user_check = User.objects.filter(is_superuser=True)
net_user_check = NetBotUser.objects.filter(user=user_check)
user = User()
user.email = "admin@netbotgroup.com"
user.set_password('netbot123')
user.is_superuser = True
user.is_active = True
user.is_staff = True

net_user = NetBotUser()
net_user.user = user
net_user.first_name = "Super"
net_user.last_name = "Admin"
net_user.phone = "0795766211"

permission_group = NetBotPermissionGroup()

permissions = NetBotPermission()
permissions.can_view_users = True
permissions.can_manage_users = True
permissions.can_view_distributors = True
permissions.can_view_dashboard = True
permissions.can_manage_user_groups = True
permissions.can_view_user_groups = True
permissions.can_view_subscriptions = True
permissions.can_view_subsc_history = True
permissions.can_manage_distributors=True
permissions.can_manage_subscriptions=True


permission_group.name = "admins"
permission_group.permission = permissions

net_user.permission_group = permission_group

def saveAll():
    permissions.save()
    permission_group.save()
    user.save()
    net_user.save()
    print("we are done")

