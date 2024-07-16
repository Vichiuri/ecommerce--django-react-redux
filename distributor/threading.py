import threading
from netbotAuth.models.users import User
from distributor.models.netbot import DistUsers, Distributor, NetBotNotification, NetBotUser, Subscription
from django.utils import timezone
from distributor.models.distributor import DistNotifications, MNotification, SalesMan
from mobile_retailer.notification import NotifyDistributor, NotifyRetailer
from dateutil.relativedelta import relativedelta
from retailer.serializers import ViewDistNotificationsSeriliazer
from datetime import datetime
from distributor.commons import get_order_ref


class CreateDistributorNotificationThread(threading.Thread):
    def __init__(self, distributor, status):
        self.distributor = distributor
        self.status = status
        threading.Thread.__init__(self)

    def run(self):
        not_seen_by = User.objects.filter(is_superuser=True).all()

        if self.status == 'created':
            distName = self.distributor.name
            action_by = self.distributor.created_by
            text = str(action_by) + ' added distributor ' + \
                distName + ' state.'
            details = 'Distributor ' + distName + ' was added by ' + str(
                action_by) + '. \n\n Distributor Email: ' + self.distributor.email + '.'
            print(details)

            p = NetBotNotification(
                display_text=text, details=details, action_by=action_by, when_created=timezone.now())

            p.save()
            for ns in not_seen_by:
                p.not_seen_by.add(ns)
                p.save()

        else:
            previous = Distributor.objects.get(id=self.distributor.id)

            if previous != self.distributor:
                distName = self.distributor.name
                action_by = self.distributor.created_by
                text = str(action_by) + ' updated distributor ' + \
                    distName + ' '
                details = 'Distributor ' + distName + ' was updated by ' + str(
                    action_by) + '. \n Distributor Email: ' + self.distributor.email + '.'
                print(details)

                p = NetBotNotification(
                    display_text=text, details=details, action_by=action_by, when_created=timezone.now())

                p.save()
                for ns in not_seen_by:
                    p.not_seen_by.add(ns)
                    p.save()


class CreateSubscriptionNotification(threading.Thread):
    def __init__(self, subscription, status):
        self.subscription = subscription
        self.status = status
        threading.Thread.__init__(self)

    def run(self):
        not_seen_by = User.objects.filter(is_superuser=True).all()

        if self.status == 'created':
            subName = self.subscription.name
            action_by = self.subscription.created_by
            text = str(action_by) + ' added "' + subName + '" subscription'
            details = str(action_by) + " added " + subName + ' subscription to be priced at ' + str(
                self.subscription.price) + ' for a period of ' + str(self.subscription.period_length) + ' ' + str(self.subscription.period_time)

            p = NetBotNotification(
                display_text=text, details=details, action_by=action_by, when_created=timezone.now())
            p.save()
            for ns in not_seen_by:
                p.not_seen_by.add(ns)
                p.save()

        else:
            previous = Subscription.objects.get(id=self.subscription.id)
            if previous == self.subscription:
                subName = self.subscription.name
                action_by = self.subscription.created_by
                text = str(action_by) + ' updated "' + \
                    subName + '" subscription'
                details = str(action_by) + " updated " + subName + ' subscription. Priced at ' + str(
                    self.subscription.price) + ' for a period of ' + str(self.subscription.period_length) + ' ' + str(self.subscription.period_time)

                p = NetBotNotification(
                    display_text=text, details=details, action_by=action_by, when_created=timezone.now())
                p.save()
                for ns in not_seen_by:
                    p.not_seen_by.add(ns)
                    p.save()


class CreateUserNotification(threading.Thread):
    def __init__(self, net_user, status):
        self.net_user = net_user
        self.status = status
        threading.Thread.__init__(self)

    def run(self):
        not_seen_by = User.objects.filter(is_superuser=True).all()

        if self.status == 'created':
            netbotUserFName = self.net_user.first_name
            netbotUserLName = self.net_user.last_name
            action_by = self.net_user.user
            text = str(action_by) + ' was added as an admin user'
            details = str(
                action_by) + ' added netbot Super user "' + netbotUserFName + ' ' + netbotUserLName + '" of phone number ' + str(
                self.net_user.phone) + ' and permission group ' + str(self.net_user.permission_group)

            p = NetBotNotification(display_text=text, details=details,
                                   action_by=self.net_user, when_created=timezone.now())
            p.save()
            for ns in not_seen_by:
                p.not_seen_by.add(ns)
                p.save()

        else:
            previous = NetBotUser.objects.get(id=self.net_user.id)
            if previous == self.net_user:
                netbotUserFName = self.net_user.first_name
                netbotUserLName = self.net_user.last_name
                action_by = self.net_user.user
                text = str(action_by) + ' was Updated as an admin user'
                details = str(
                    action_by) + ' Updated netbot Super user to "' + netbotUserFName + ' ' + netbotUserLName + '" of phone number ' + str(
                    self.net_user.phone) + ' and permission group ' + str(self.net_user.permission_group)

                p = NetBotNotification(
                    display_text=text, details=details, action_by=self.net_user, when_created=timezone.now())
                p.save()
                for ns in not_seen_by:
                    p.not_seen_by.add(ns)
                    p.save()


class CreateDistributorProductNotification(threading.Thread):
    def __init__(self, product, status):
        self.product = product
        self.status = status
        threading.Thread.__init__(self)

    def run(self):
        not_seen_by = DistUsers.objects.filter(
            permission_group__permission__can_view_products=True)

        sub_name = self.product.name
        action_by = self.product.created_by
        text = ''
        details = ''
        if self.status == 'created':
            text = str(action_by.first_name + ' ' + action_by.last_name) + \
                ' Added "' + sub_name + '" Product'
            details = str(
                action_by.first_name + " " + action_by.last_name) + " Added " + sub_name + ' Product. Priced at ' + str(
                self.product.price) + ' with a stock of ' + str(self.product.stock_qty) + ' from brand ' + str(self.product.brand)
        elif self.status == 'deleted':
            text = str(action_by.first_name + ' ' + action_by.last_name) + \
                ' Deleted "' + sub_name + '" Product'
            details = str(
                action_by.first_name + " " + action_by.last_name) + " Deleted " + sub_name + ' Product. Priced at ' + str(
                self.product.price) + ' with a stock of ' + str(self.product.stock_qty) + ' from brand ' + str(self.product.brand)
        else:
            text = str(action_by.first_name + ' ' + action_by.last_name) + \
                ' Updated "' + sub_name + '" Product'
            details = str(
                action_by.first_name + " " + action_by.last_name) + " Updated " + sub_name + ' Product. Priced at ' + str(
                self.product.price) + ' with a stock of ' + str(self.product.stock_qty) + ' from brand ' + str(self.product.brand)

        p = DistNotifications(distributor=action_by.distributor, display_text=text, details=details, action_by=action_by,
                              when_created=timezone.now())
        p.save()
        for ns in not_seen_by:
            p.un_seen_by.add(ns)
            p.save()


class CreateRetailerNotifcation(threading.Thread):
    def __init__(self, retailer_profile, status):
        self.profile = retailer_profile
        self.status = status
        threading.Thread.__init__(self)

    def run(self):
        not_seen_by = DistUsers.objects.filter(
            distributor=self.profile.distributor, permission_group__permission__can_view_products=True)

        sub_name = self.profile.retailer.name
        action_by = None
        create_by = self.profile.created_by
        when_created = str(self.profile.when_created)

        if SalesMan.objects.filter(email=create_by.email).first():
            action_by = SalesMan.objects.filter(email=create_by.email).first()
        elif DistUsers.objects.filter(user=create_by).first():
            action_by = DistUsers.objects.filter(user=create_by).first()

        text = ''
        details = ''
        view_ids = []

        if self.status == 'created':
            name = str(action_by.first_name + ' ' +
                       action_by.last_name) if action_by else ''

            text = name + ' Added "' + sub_name
            details = name + " Added " + sub_name + ' at time of ' + when_created
        elif self.status == 'deleted':
            name = str(action_by.first_name + ' ' +
                       action_by.last_name) if action_by else ''
            text = name + ' Deleted "' + sub_name
            details = name + " Delete " + sub_name + ' at time of ' + when_created
        else:
            name = str(action_by.first_name + ' ' +
                       action_by.last_name) if action_by else ''
            text = name + ' Updated "' + sub_name
            details = name + " updated " + sub_name + ' at time of ' + when_created

        p = DistNotifications(distributor=self.profile.distributor, display_text=text, details=details,
                              when_created=timezone.now())
        p.save()

        for ns in not_seen_by:
            if ns.fcm_token:
                view_ids.append(ns.fcm_token)
            p.un_seen_by.add(ns)
            p.save()

        dist_notification = ViewDistNotificationsSeriliazer(p, many=False).data

        data_message = {'type': "notification",
                        'dist_notification': dist_notification}
        NotifyDistributor(self.profile.distributor.id, p.id,
                          view_ids, data_message).notify_device()


class OrderStatusNotification(threading.Thread):
    def __init__(self, order, status):
        self.order = order
        self.status = status

        threading.Thread.__init__(self)

    def run(self):
        not_seen_by = DistUsers.objects.filter(
            distributor=self.order.distributor, permission_group__permission__can_view_products=True)

        retailer = self.order.retailer.name
        action_by = None
        create_by = self.order.altered_by
        when_created = str(self.order.when_placed.strftime(
            "%B %d %A") if self.order.when_placed else '')
        sub_name = get_order_ref(self.order)

        if SalesMan.objects.filter(email=create_by.email).first():
            action_by = SalesMan.objects.filter(email=create_by.email).first()
        elif DistUsers.objects.filter(user=create_by).first():
            action_by = DistUsers.objects.filter(user=create_by).first()

        text = ''
        details = ''
        view_ids = []

        if self.order.status == 'pending':
            name = str(action_by.first_name + ' ' +
                       action_by.last_name) if action_by else ''

            text = name + ' Added "' + sub_name
            details = name + " Added " + sub_name + ' at time of ' + \
                when_created + ' for retaier ' + str(retailer)
        elif self.status == 'deleted':
            name = str(action_by.first_name + ' ' +
                       action_by.last_name) if action_by else ''
            text = name + ' Deleted "' + sub_name
            details = name + " Delete " + sub_name + ' at time of ' + \
                when_created + ' for retaier ' + str(retailer)
        else:
            name = str(action_by.first_name + ' ' +
                       action_by.last_name) if action_by else ''
            text = name + ' Updated "' + sub_name
            details = name + " updated " + sub_name + ' at time of ' + \
                when_created + ' for retaier ' + str(retailer)

        p = DistNotifications(distributor=self.order.distributor, display_text=text, details=details,
                              when_created=timezone.now())
        p.save()

        for ns in not_seen_by:
            if ns.fcm_token:
                view_ids.append(ns.fcm_token)
            p.un_seen_by.add(ns)
            p.save()

        dist_notification = ViewDistNotificationsSeriliazer(p, many=False).data

        data_message = {'type': "notification",
                        'dist_notification': dist_notification}
        NotifyDistributor(self.order.distributor.id, p.id,
                          view_ids, data_message).notify_device()


class MobileOrderStatusNotification(threading.Thread):
    def __init__(self, order, status):
        self.order = order
        self.status = status

        threading.Thread.__init__(self)

    def run(self):
        order = self.order
        notif = MNotification()
        # notif.status = "Order"
        notif.status = self.status
        notif.show_from = timezone.now()
        notif.show_to = notif.show_from + relativedelta(days=1)
        notif.distributor = order.distributor
        # notif.order = order
        notif.pic = notif.distributor.logo
        today = datetime.now().strftime("%B %d %A")
        order_ref = get_order_ref(order)
        notif.name = f"{order.distributor.name} Order Id #{order_ref} Placement Success"
        notif.display_text = notif.name
        notif.detail = f"Order {str(today)} Placement Success Order Id #{order_ref} "
        notif.save()
        salesman = order.salesman
        retailer = order.retailer
        users = []
        if retailer is not None:
            user = User.objects.filter(email=retailer.email).first()
            users.append(user)
        if salesman is not None:
            user = User.objects.filter(email=salesman.email).first()
            users.append(user)

        notif.order_id = self.order.id
        notif.name = f"{order.distributor.name} Order Id {order_ref} Placement Success"
        notif.display_text = notif.name
        notif.detail = f" Order {str(today)} Placement Success Order Id #{order_ref} "
        notif.users.add(*users)
        notif.save()

        NotifyRetailer(distributor_id=notif.distributor.id,
                       push_notification_id=notif.id).notify_device()


class MobileAutomatedThreading(threading.Thread):
    def __init__(self, notification):
        self.notification = notification
        threading.Thread.__init__(self)

    def run(self):
        NotifyRetailer(distributor_id=self.notification.distributor.id,
                       push_notification_id=self.notification.id).notify_device()
        print("sent notification")
