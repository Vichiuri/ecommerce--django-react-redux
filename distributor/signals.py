"""
Signals
For Intercepting Model Acions And Customizing Their Behaviours Before And After Object Collections
1.Deletions
2.Saving
3.Updates
"""
from django.db.models.signals import post_save, pre_save, post_delete, pre_delete
from django.dispatch import receiver
from distributor.models import *
from mobile_retailer.notification import NotifyRetailer, NotifyRetailerProduct
from netbotAuth.models import *


@receiver(post_save, sender=User)
def get_last_login(sender, instance, **kwargs):
    userName = instance.email
    lastLogin = instance.last_login
    logRecord = AuthLogs(userName=userName, lastLogin=lastLogin)
    logRecord.save()



# @receiver(post_save, sender=MNotification)
# def notify_retailer(sender, instance, **kwargs):
#     if instance.users.count() > 0:
#         if instance.status!="Order":
#             notify = NotifyRetailer(distributor_id=instance.distributor.id, push_notification_id=instance.id)
#             print("\nSending Notification Now\n", notify.notify_device(), "\n\n")


#     print("Failed TO Send Notification")


@receiver(post_save, sender=Product)
def notify_retailerPr(sender, instance, **kwargs):
    # print("\nSending Notification Now\n", notify.notify_device(), "\n\n")
    # notify = NotifyRetailerProduct(distributor_id=instance.distributor.id, product_id=instance.id)
    # print("\nSending Notification Now\n", notify.notify_device(), "\n\n")
    ...


# @receiver(post_save, sender=Product)
# def notify_distributor_product(sender, instance, **kwargs):
#     not_seen_by = DistUsers.objects.filter(permission_group__permission__can_view_products=True)

#     sub_name = instance.name
#     action_by = instance.created_by
#     text = str(action_by.first_name + ' ' + action_by.last_name) + ' Added "' + sub_name + '" Product'
#     details = str(
#         action_by.first_name + " " + action_by.last_name) + " Added " + sub_name + ' Product. Priced at ' + str(
#         instance.price) + ' with a stock of ' + str(instance.stock_qty) + ' from brand ' + str(instance.brand)

#     p = DistNotifications(distributor=action_by.distributor, display_text=text, details=details, action_by=action_by,
#                           when_created=timezone.now())
#     p.save()
#     for ns in not_seen_by:
#         p.un_seen_by.add(ns)
#         p.save()


# Delete Notifications

@receiver(post_save, sender=RetailOrders)
def notify_distributor_order(sender, instance, **kwargs):
    not_seen_by = DistUsers.objects.filter(permission_group__permission__can_view_products=True)

    sub_name = str(instance.id)
    action_by = instance.created_by
    if action_by is None:
        action_by = DistUsers.objects.filter(distributor=instance.distributor).first()
    text = str(action_by.first_name + ' ' + action_by.last_name) + ' Added Order #"' + sub_name
    details = str(
        action_by.first_name + " " + action_by.last_name) + " Added Order #" + sub_name + ' Order. Priced at ' + str(
        instance.total_cost) + ' with ' + str(instance.ret_orders.all().count()) + ' products ' + ' and ' + str(
        instance.offers.all().count()) + " offers"

    p = DistNotifications(distributor=action_by.distributor, display_text=text, details=details, action_by=action_by,
                          when_created=timezone.now())
    p.save()
    for ns in not_seen_by:
        p.un_seen_by.add(ns)
        p.save()


@receiver(post_delete, sender=Subscription)
def delete_subscription_notification(sender, instance, **kwargs):
    not_seen_by = User.objects.filter(is_superuser=True).all()

    sub_name = instance.name
    action_by = instance.created_by
    text = str(action_by) + ' Deleted "' + sub_name + '" subscription'
    details = str(action_by) + " deleted " + sub_name + ' subscription. Priced at ' + str(
        instance.price) + ' for a period of ' + str(instance.period_length) + ' ' + str(instance.period_time)

    p = NetBotNotification(display_text=text, details=details, action_by=action_by, when_created=timezone.now())
    p.save()
    for ns in not_seen_by:
        p.not_seen_by.add(ns)
        p.save()


# @receiver(post_delete, sender=Distributor)
# def delete_distributor_notification(sender, instance, **kwargs):
#     print("Deleting User Related To  Distributor", instance, User.objects.filter(email=instance.email).all().delete())
#     not_seen_by = User.objects.filter(is_superuser=True).all()
#
#     distName = instance.name
#     action_by = instance.created_by
#     text = str(action_by) + ' Deleted distributor ' + distName + '.'
#     details = 'Distributor ' + distName + ' was deleted by ' + str(
#         action_by) + '. \n Distributor Email: ' + instance.email + '. Description: \n' + instance.description
#
#     p = NetBotNotification(display_text=text, details=details, action_by=action_by, when_created=timezone.now())
#     p.save()
#     for ns in not_seen_by:
#         p.not_seen_by.add(ns)
#         p.save()


# @receiver(post_delete, sender=NetBotUser)
# def delete_distributor_notification(sender, instance, **kwargs):
#     not_seen_by = User.objects.filter(is_superuser=True).all()

#     netbotUserFName = instance.first_name
#     netbotUserLName = instance.last_name
#     action_by = instance.user
#     text = str(action_by) + ' was deleted as an admin user'
#     details = str(action_by) + ' deleted netbot Super user "' + netbotUserFName + ' ' + netbotUserLName + '" of phone number ' + str(instance.phone) + ' and permission group ' + str(instance.permission_group)

#     p = NetBotNotification(display_text=text, details=details, action_by=action_by, when_created=timezone.now())
#     p.save()
#     for ns in not_seen_by:
#         p.not_seen_by.add(ns)
#         p.save()

@receiver(post_delete, sender=SalesMan)
def delete_salesman(sender, instance, **kwarg):
    print("Deleting User Related To  Salesman", instance, User.objects.filter(email=instance.email).all().delete())


# @receiver(post_delete, sender=NetBotUser)
# def delete_netbot_user(sender, instance, **kwarg):
#     print("Deleting User Related To  Netbot User", instance, instance.user.delete())
