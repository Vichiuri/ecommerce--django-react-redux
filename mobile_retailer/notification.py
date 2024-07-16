"""

This file handles notifications to mobile devices.
It uses Firebase To fire notifications as soon as they are created

"""
import datetime

from dateutil.relativedelta import relativedelta

from distributor.models import Distributor, MNotification, Retailer, Product, RetailOrders
from mobile_retailer.m_serializers.retailer_data import PushNotificationSerializer
from mobile_retailer.models import RetailerUser
from pyfcm import FCMNotification

from netbotAuth.models import User
from distributor.models.distributor import DistNotifications

push_service = FCMNotification(
    api_key="AAAAIQdKsFI:APA91bGo1wDdDDdepIr5xTqmJU1n1MebJWrox"
            "-4Dwcjp5RzKZdC-DMTTDOa2Lq1REP3gBLD7hdN-4zieNf3_-k2VuZOI61L0ljbSenUexEqypM4IHQiih_HQDby2y6BQfSmrh_0_jMQG")


class NotifyRetailer:
    """
    For notifying the retailer about almost anything
    """

    def __init__(self, distributor_id, push_notification_id,
                 image_url="https://netbotgroup.com/wp-content/uploads/2021/03/cropped-cropped-Picture2.png"):
        self.distributor = Distributor.objects.get(id=distributor_id)
        self.notification = MNotification.objects.get(id=push_notification_id)
        if self.notification.pic:
            self.image_url = "https://scm.netbotapp.com" + self.notification.pic.url,
        else:
            self.image_url = image_url

    def notify_device(self):
        devices = self.notification.devices
        message_title = self.notification.display_text
        message_body = self.notification.detail
        extra_notification_kwargs = {
            'image': self.image_url,
        }
        print(extra_notification_kwargs)
        if len(self.notification.devices) < 0:
            return "Could Not Send Notification"
        result = push_service.notify_multiple_devices(registration_ids=devices, message_title=message_title,
                                                      message_body=message_body,
                                                      data_message=PushNotificationSerializer(
                                                          self.notification).data,
                                                      extra_notification_kwargs=extra_notification_kwargs)
        return result


class NotifyDistributor:
    """
    For notifying the retailer about almost anything
    """

    def __init__(self, distributor_id, push_notification_id, send_to=[],
                 data_message={}, image_url="https://netbotgroup.com/wp-content/uploads/2021/03/cropped-cropped-Picture2.png"):
        self.distributor = Distributor.objects.get(id=distributor_id)
        self.notification = DistNotifications.objects.get(
            id=push_notification_id)
        self.data_message = data_message
        self.devices = send_to
        if self.data_message.get('pic'):
            self.image_url = "https://scm.netbotapp.com" + \
                self.data_message.get('pic')
        else:
            self.image_url = image_url

    def notify_device(self):
        devices = self.devices
        message_title = self.notification.display_text
        message_body = self.notification.display_text
        extra_notification_kwargs = {
            'image': self.image_url,
        }

        if len(devices) < 0:
            return "Could Not Send Notification"
        result = push_service.notify_multiple_devices(registration_ids=devices, message_title=message_title,
                                                      message_body=message_body,
                                                      data_message=self.data_message,
                                                      extra_notification_kwargs=extra_notification_kwargs)
        return result


class NotifyRetailerProduct:

    def __init__(self, distributor_id, product_id):
        self.distributor = Distributor.objects.get(id=distributor_id)
        self.product = Product.objects.get(id=product_id)
        self.retailers = Retailer.objects.filter(
            distributors__in=[self.distributor]).all()
        self.retailer_users = RetailerUser.objects.filter(
            retailer__in=self.retailers, device_id__isnull=False).all()

    def notify_device(self):
        devices = []
        for retU in self.retailer_users:
            devices.append(retU.device_id)
            print(retU.device_id)
        message_title = self.distributor.name + " New Product Alert"
        message_body = "@ only " + str(
            self.product.price) + " Get Yourself The " + self.product.name + " " + self.product.description + " Latest In Store"
        extra_notification_kwargs = {
            'image': "https://scm.netbotapp.com"
        }

        result = push_service.notify_multiple_devices(registration_ids=devices, message_title=message_title,
                                                      message_body=message_body,
                                                      extra_notification_kwargs=extra_notification_kwargs)
        return result


def notify_device(devices=[], message_title=' ', message=' '):
    message_title = message_title
    message_body = message

    # print(extra_notification_kwargs)
    result = push_service.notify_multiple_devices(registration_ids=devices, message_title=message_title,
                                                  message_body=message_body)
    return result


def order_notification(order: RetailOrders, status: str):
    """
    Notifies sales people and retailers about their order status
    From Placement to To dispatch
    Parameters:
        order (RetailOrders) a retail order class
        status (str) Current status of the order
    Notifications are meant to show on the mobile only on the day of their creation
    """
    # print("Attempting To Send Notifications")
    notif = MNotification.objects.filter(
        status="Order", order_id=order.id).first()
    if notif is None:
        notif = MNotification()
    notif.status = "Order"
    notif.show_from = datetime.datetime.today()
    notif.show_to = notif.show_from+relativedelta(days=1)
    notif.distributor = order.distributor
    notif.order = order
    notif.pic = notif.distributor.logo
    notif.name = f"{order.distributor.name} Order Id {order.ref_number} {status}"
    notif.display_text = notif.name
    if status == 'Release':
        status = "Released"
    notif.detail = f"Your Order Of Id {order.ref_number} is now {status}"
    notif.save()
    salesman = order.salesman
    retailer = order.retailer
    users = []
    if retailer is not None:
        user = User.objects.filter(email=retailer.email).first()
        if user is not None:
            users.append(user)
    if salesman is not None:
        # Add salesman as user meant for the notification
        user = User.objects.filter(email=salesman.email).first()
        if user is not None:
            users.append(user)
    if len(users) > 0:
        if notif.id is None:
            notif.save()
            notif.users.add(*users)
            notif.save()
        else:
            notif.users.add(*users)
            notif.save()
    print(NotifyRetailer(distributor_id=notif.distributor.id,
          push_notification_id=notif.id).notify_device())  # Fire the notification
    print(" Notification Sending Attempt")
