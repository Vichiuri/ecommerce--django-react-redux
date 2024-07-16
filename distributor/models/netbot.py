"""
All Models Concerning Netbot Management
"""
import datetime
import traceback

from django_quill.fields import QuillField
from django.urls import reverse
from dateutil.relativedelta import relativedelta
from django.db import models
from djmoney.models.fields import MoneyField
from ckeditor.fields import RichTextField

from distributor.models import validate_phone, DistributorOptions

subscriptions = (
    ("0", "Trial"),
    ("0.5", "6 Month"),
    ("1", "1 Year"),
    ("2", "2 Years"),
    ("3", "3 Years"),
)


class Subscription(models.Model):
    period_time = models.CharField(choices=(("month", "Month"), ("year", "Year")),
                                   max_length=100, default="month")
    period_length = models.PositiveIntegerField(
        verbose_name="Period Length", default=1)
    name = models.CharField(
        verbose_name="Subscription Name", max_length=50, unique=True)
    price = MoneyField(max_digits=14, decimal_places=2, default_currency='KES')
    created_by = models.ForeignKey("distributor.NetBotUser", verbose_name="Added by", on_delete=models.SET_NULL,
                                   null=True)

    def __str__(self):
        return str(self.period_length) + " " + self.period_time + " " + self.name

    class Meta:
        db_table = "subscriptions"
        verbose_name = "Subscription"
        verbose_name_plural = "Subscriptions"


class Distributor(models.Model):
    name = models.CharField(verbose_name="Name", max_length=100)
    company_code = models.CharField(verbose_name="Company Code", max_length=15, blank=True, null=True)
    kra = models.CharField(
        max_length=50, verbose_name="Distributor Tax Pin", null=True, blank=True)
    email = models.EmailField(verbose_name="Email",
                              max_length=100, unique=True)
    email2 = models.EmailField(
        verbose_name="Email 2", max_length=100, blank=True)
    phone = models.CharField(verbose_name="Phone 1",
                             max_length=15, validators=[validate_phone])
    phone2 = models.CharField(verbose_name="Phone 2", max_length=15,
                              blank=True, null=True, validators=[validate_phone])
    contact_person = models.CharField(verbose_name="Contact Person Name",
                                      max_length=100)
    contact_phone = models.CharField(verbose_name="Contact Person Phone",
                                     max_length=15, validators=[validate_phone])
    website = models.CharField(
        verbose_name="Website", blank=True, max_length=200)
    country = models.ForeignKey("distributor.WorldCountry", verbose_name="Country", on_delete=models.SET_NULL,
                                null=True)
    state = models.ForeignKey("distributor.WorldCity", verbose_name="State/City", on_delete=models.SET_NULL,
                              null=True)
    address = models.TextField(verbose_name="Address")
    description = RichTextField(blank=True, null=True)
    # description = models.TextField(verbose_name="Description")
    category = models.CharField(
        verbose_name="Specialized Goods", max_length=100)
    subscription = models.ForeignKey("distributor.Subscription", verbose_name="Product Subscription",
                                     related_name="sub_distributor", blank=False, null=True, default=None,
                                     on_delete=models.SET_NULL)
    current_subscription_date = models.DateTimeField(
        verbose_name="Current Subscription Date", null=True)
    logo = models.ImageField(verbose_name="Company Logo", blank=True)
    retailers = models.ManyToManyField(
        "distributor.Retailer", verbose_name="Retailers", blank=True)
    active = models.BooleanField(
        verbose_name="Is Active", editable=False, default=False)
    created_by = models.ForeignKey("distributor.NetbotUser", verbose_name="Added by", on_delete=models.SET_NULL,
                                   null=True, related_name='createdBy')
    when_created = models.DateTimeField(
        verbose_name="When Created", auto_now_add=True, null=True, editable=False)

    def __init__(self, *args, **kwargs):
        super(Distributor, self).__init__(*args, **kwargs)
        self.__original_sub = self.subscription

    def save(self, force_insert=False, force_update=False, *args, **kwargs):
        try:
            subscriptioHist = SubscriptionHistory()

            # tax = DistTax()
            # tax.tax_name = 'None'
            # tax.tax = 0
            # tax.distributor = self
            # is_active = True
            # tax.save()

            today = datetime.datetime.now()
            to_add_from = datetime.datetime(
                today.year, today.month, today.day, 0, 0, 0)
            if self._state.adding is True and self.subscription is not None:
                subscriptioHist.subscription = self.subscription
                subscriptioHist.distributor = self
                subscriptioHist.subscription_date = today
                subscriptioHist.subscription_status = 'active'
                subscriptioHist.price = self.subscription.price
                if self.subscription.period_time == 'month':
                    subscriptioHist.subscription_end_date = to_add_from + relativedelta(
                        months=self.subscription.period_length, days=1)
                elif self.subscription.period_time == 'year':
                    subscriptioHist.subscription_end_date = to_add_from + relativedelta(
                        years=self.subscription.period_length, days=1)
                self.current_subscription_date = today

            elif self.subscription != self.__original_sub and self.subscription is not None:

                subscriptioHist.subscription = self.subscription
                subscriptioHist.distributor = self
                subscriptioHist.subscription_date = today
                subscriptioHist.subscription_status = 'active'
                subscriptioHist.price = self.subscription.price
                if self.subscription.period_time == 'month':
                    subscriptioHist.subscription_end_date = to_add_from + relativedelta(
                        months=self.subscription.period_length, days=1)
                elif self.subscription.period_time == 'year':
                    subscriptioHist.subscription_end_date = to_add_from + relativedelta(
                        years=self.subscription.period_length, days=1)
                self.current_subscription_date = today

            super(Distributor, self).save(
                force_insert, force_update, *args, **kwargs)
            subscriptioHist.save()
            self.__original_sub = self.subscription
        except Exception as e:
            print(traceback.format_exc())
            print("\n\nStack Trace For Subs", str(e), "\n\n")

    def __str__(self):
        return self.name

    @property
    def dist_details(self):
        about = dict()
        dist_options = DistributorOptions.objects.filter(
            distributor_id=self.id).first()
        if dist_options:
            about['about'] = dist_options.about_company
            about['terms'] = dist_options.terms_company
            about['privacy'] = dist_options.privacy_company
            return about
        else:
            about['about'] = None
            about['terms'] = None
            about['privacy'] = None
            return about

    class Meta:
        db_table = "distributors"
        verbose_name = "Distributor"
        verbose_name_plural = "Distributors"


class SubscriptionHistory(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", on_delete=models.CASCADE, verbose_name="Distributor")
    subscription = models.ForeignKey("distributor.Subscription", null=True, blank=True, on_delete=models.PROTECT,
                                     verbose_name="Subscription Type", related_name='sub_hist')
    subscription_date = models.DateTimeField(
        auto_now_add=True, verbose_name="Date Subscribed")
    subscription_status = models.CharField(verbose_name="Subscription Status",
                                           choices=(("active", "active"), ("expired", "expired")), max_length=100)
    price = MoneyField(max_digits=14, decimal_places=2, default_currency='KES')
    subscription_end_date = models.DateTimeField(verbose_name="End Date")

    def __str__(self):
        return self.distributor.name + " : " + self.subscription.name

    class Meta:
        db_table = "subscription_history"
        verbose_name_plural = "Subscription Histories"
        verbose_name = "Subscription History"


class DistUsers(models.Model):
    user = models.OneToOneField("netbotAuth.User", verbose_name="User", on_delete=models.PROTECT,
                                related_name="dist_users")
    distributor = models.ForeignKey("distributor.Distributor", on_delete=models.CASCADE,
                                    verbose_name="User Distributor")
    permission_group = models.ForeignKey("distributor.PermissionGroup", on_delete=models.PROTECT, null=True,
                                         blank=True, related_name="perm_users", verbose_name="Permission Group")
    first_name = models.CharField(
        verbose_name="First Name", max_length=100, null=True)
    last_name = models.CharField(
        verbose_name="Last Name", max_length=100, null=True)
    phone = models.CharField(
        verbose_name="Phone", max_length=15, null=True, validators=[validate_phone])
    bio = models.TextField(verbose_name='Bio', null=True, blank=True)
    pic = models.ImageField(verbose_name="Profile Pic",
                            upload_to="pics/profiles/", blank=True, null=True)
    first_time = models.BooleanField(default=True)
    fcm_token = models.CharField(
        verbose_name='fcm_token', max_length=255, null=True, blank=True)

    def __str__(self):
        return self.user.email + " of " + self.distributor.name

    class Meta:
        db_table = "distributor_users"
        verbose_name = "Distributor User"
        verbose_name_plural = "Distributor Users"


class DistPermission(models.Model):
    distributor = models.ForeignKey("distributor.Distributor", verbose_name="Distributor", on_delete=models.CASCADE,
                                    related_name="dist_permissions", default=False)
    can_view_users = models.BooleanField(
        verbose_name="Can View Users", default=False)
    can_manage_users = models.BooleanField(
        verbose_name="Can Manage Users", default=False)

    can_view_salesmen = models.BooleanField(
        verbose_name="Can View Sales People", default=False)
    can_manage_salesmen = models.BooleanField(
        verbose_name="Can Add Sales People", default=False)

    can_view_orders = models.BooleanField(
        verbose_name="Can View  Orders", default=False)
    can_manage_orders = models.BooleanField(
        verbose_name="Can Manage  Orders", default=False)
    can_post_orders = models.BooleanField(
        verbose_name="Can Post Orders", default=False)

    can_view_retailer = models.BooleanField(
        verbose_name="Can View Retailers", default=False)
    can_manage_retailer = models.BooleanField(
        verbose_name="Can Manage Retailers", default=False)

    can_view_products = models.BooleanField(
        verbose_name="Can View Products", default=False)
    can_manage_product = models.BooleanField(
        verbose_name="Can Manage  Products", default=False)

    can_view_offers = models.BooleanField(
        verbose_name="Can View offers", default=False)
    can_manage_offers = models.BooleanField(
        verbose_name="Can Manage  offers", default=False)

    can_view_product_category = models.BooleanField(
        verbose_name="Can Manage Product Categories", default=False)
    can_manage_product_categories = models.BooleanField(
        verbose_name="Can Edit  Product", default=False)

    can_edit_company_details = models.BooleanField(
        verbose_name="Can Edit Company Details", default=False)
    can_view_dashboard = models.BooleanField(
        verbose_name="Can View Dashboard", default=False)
    can_view_deliveries = models.BooleanField(
        verbose_name="Can View Deliveries", default=False)
    can_view_reports = models.BooleanField(
        verbose_name="Can View Reports", default=False)
    can_view_settings = models.BooleanField(
        verbose_name="Can View Settings", default=False)
    can_manage_settings = models.BooleanField(
        verbose_name="Can Manage Settings", default=False)
    can_manage_mobile = models.BooleanField(
        verbose_name="Can Manage Mobile", default=False)

    def __str__(self):
        return self.distributor.name + " DistPermission " + str(self.id)

    class Meta:
        verbose_name_plural = "Permissions"
        verbose_name = "DistPermission"
        db_table = "net_permissions"
        unique_together = ["distributor", "can_view_users",
                           "can_manage_users", "can_view_salesmen", "can_view_orders",
                           "can_manage_orders", "can_post_orders",
                           "can_view_retailer", "can_manage_retailer",
                           "can_view_products", "can_manage_product",
                           "can_edit_company_details", "can_view_dashboard"]


class PermissionGroup(models.Model):
    distributor = models.ForeignKey("distributor.Distributor", verbose_name="Distributor", on_delete=models.CASCADE,
                                    related_name="dist_permission_grp")
    name = models.CharField(verbose_name=" Group Name", max_length=50)
    permission = models.ForeignKey("distributor.DistPermission", verbose_name="Permissions", on_delete=models.PROTECT,
                                   related_name="permission_group")
    dist_super = models.BooleanField(default=False, editable=False)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "DistPermission Groups"
        verbose_name = "DistPermission Group"
        db_table = "net_permission_groups"
        unique_together = ['distributor', 'name']


class NetBotPermission(models.Model):
    can_view_users = models.BooleanField(
        verbose_name="Can View Users", default=False)
    can_manage_users = models.BooleanField(
        verbose_name="Can Manage Users", default=False)
    can_view_user_groups = models.BooleanField(
        verbose_name="Can View User Groups", default=False)
    can_manage_user_groups = models.BooleanField(
        verbose_name="Can Manage User Groups", default=False)
    can_view_distributors = models.BooleanField(
        verbose_name="Can View Distributors", default=False)
    can_manage_distributors = models.BooleanField(
        verbose_name="Can Manage Distributors", default=False)
    can_view_subscriptions = models.BooleanField(
        verbose_name="Can View Subscriptions", default=False)
    can_manage_subscriptions = models.BooleanField(
        verbose_name="Can Manage Subscriptions", default=False)
    can_view_subsc_history = models.BooleanField(
        verbose_name="Can View Subscription History", default=False)
    can_view_dashboard = models.BooleanField(
        verbose_name="Can View Dashboard", default=False)

    class Meta:
        db_table = "net_B_permissions"
        verbose_name = "DistPermission"
        verbose_name_plural = "Permissions"
        unique_together = ['can_view_users', 'can_manage_users', 'can_view_user_groups', 'can_manage_user_groups',
                           'can_view_distributors', 'can_manage_distributors', 'can_view_subscriptions',
                           'can_manage_subscriptions', 'can_view_dashboard', 'can_view_subsc_history']


class NetBotPermissionGroup(models.Model):
    name = models.CharField(verbose_name="Group Name", max_length=20)
    permission = models.OneToOneField("distributor.NetBotPermission", verbose_name="DistPermission",
                                      on_delete=models.CASCADE, related_name="grp_permission")

    def __str__(self):
        return self.name

    class Meta:
        db_table = "net_B_permission_group"

        verbose_name = "DistPermission Group"
        verbose_name_plural = "DistPermission Groups"


class NetBotUser(models.Model):
    user = models.OneToOneField('netbotAuth.User', verbose_name="User", on_delete=models.PROTECT,
                                related_name='netbotuser')
    first_name = models.CharField(max_length=20, verbose_name="First Name")
    last_name = models.CharField(max_length=20, verbose_name="Last Name")
    phone = models.CharField(
        max_length=20, verbose_name="User Phone", validators=[validate_phone])
    permission_group = models.ForeignKey("distributor.NetBotPermissionGroup", verbose_name="Permission Group",
                                         null=True, blank=True, on_delete=models.SET_NULL, related_name="user_group")
    profile_pic = models.ImageField(
        verbose_name='Profile Pic', upload_to='net/users/pics', blank=True, null=True)

    def __str__(self):
        return self.first_name + " " + self.last_name

    class Meta:
        db_table = "net_B_user"
        verbose_name = "NetBot User"
        verbose_name_plural = "NetBot Users"


class NetBotNotification(models.Model):
    display_text = models.CharField(
        verbose_name="Display Text", max_length=100)
    seen_by = models.ManyToManyField(
        "netbotAuth.User", related_name="seen_notifications")
    not_seen_by = models.ManyToManyField(
        "netbotAuth.User", related_name="not_seen_notifications")
    details = models.TextField(verbose_name="Details")
    when_created = models.DateTimeField(auto_now_add=True)
    action_by = models.ForeignKey("distributor.NetBotUser", on_delete=models.SET_NULL, null=True,
                                  related_name="user_actions")

    def __str__(self):
        return self.display_text

    def get_absolute_url(self):
        return reverse('Notification', kwargs={'not_pk': self.pk})

    class Meta:
        ordering = ['-id']
        db_table = "netbot_notifs"
        verbose_name = "Notification"
        verbose_name_plural = "Notifications"


class AuthLogs(models.Model):
    userName = models.CharField(max_length=100, blank=True, null=True)
    lastLogin = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.userName


class WorldCountry(models.Model):
    code = models.CharField(max_length=10, unique=True,
                            verbose_name="Country Code")
    name = models.CharField(max_length=100, verbose_name="Country Name")
    cities = models.ManyToManyField(
        "distributor.WorldCity", verbose_name="Country Cities", blank=True, editable=False)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "world_countries"
        verbose_name = "World Countries"


class WorldCity(models.Model):
    country_name = models.CharField(verbose_name="Country", max_length=100)
    city_name = models.CharField(max_length=100, verbose_name="City ")

    def __str__(self):
        return self.city_name

    class Meta:
        db_table = "world_cities"
        verbose_name = "World City"
        verbose_name_plural = "World Cities"


class ApkStorage(models.Model):
    apk = models.FileField(upload_to="android/apk",
                           verbose_name="Android Apk", max_length=500, null=True)

    class Meta:
        db_table = "apk_file"
