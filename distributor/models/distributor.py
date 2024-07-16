"""
Most Models are Here
All Models Concerning the distributor data
"""

import datetime

from colorfield.fields import ColorField
from dateutil.relativedelta import relativedelta
from django.core.exceptions import ValidationError
from django.core.mail import get_connection, EmailMessage
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _lazy_t
from djmoney.models.fields import MoneyField
from djmoney.money import Money
from simple_history.models import HistoricalRecords
from mobile_retailer.models import SalesManCart, RetailerCart
from netbotAuth.models import User

m_units = \
    (
        ("Kg", "Kilograms"),
        ("M", "Meters"),
        ("L", "Litres"),
        ("inc", "Inches"),
        ("feet", "feet"),
    )


def validate_phone(value):
    val = str(value)
    if len(val) < 10 or len(val) > 15:
        raise ValidationError(
            _lazy_t(
                '%(value)s Length Must Be at least 12 and not more than 15 Characters'),
            params={'value': value},
        )


class PCategory(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", on_delete=models.CASCADE, verbose_name="Distributor")
    parent_category = models.ForeignKey('distributor.PCategory', verbose_name="Parent Category", null=True, blank=True,
                                        on_delete=models.PROTECT, related_name="p_sub_categories")
    name = models.CharField(verbose_name="Category Name", max_length=100)
    category_pic = models.ImageField(
        null=True, blank=True, verbose_name="Category Picture")
    brief_description = models.CharField(
        verbose_name='Brief Description', max_length=255, null=True, blank=True)
    description = models.TextField(
        verbose_name="Category Description", blank=True, null=True)
    history = HistoricalRecords()

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if self.id:
            if not self.can_be_saved():
                raise ValidationError(
                    "Could Not Save Category.... System Could Have Run Into Circular Category Trees")
            elif self.parent_category in self.sub_categories.all():
                raise ValidationError("Your Categories Might Be Jumbled Up")
            elif self.parent_category:
                if self.parent_category.id == self.id:
                    raise ValidationError(
                        "Your Categories Might Be Jumbled Up")

            else:
                super(PCategory, self).save(*args, **kwargs)
        else:
            super(PCategory, self).save(*args, **kwargs)

    def can_be_saved(self):
        parents = list()
        asi = True
        depth = 0
        parent = self.parent_category
        while (asi == True):
            if parent is None:
                asi = False
                return True
            else:
                depth += 1
            if parent in parents:
                asi = False
            parents.append(parent)
            parent = parent.parent_category
        return False

    @property
    def pr_count(self):
        return Product.objects.filter(category=self).count()

    # @property
    # def category_level(self):
    #     level = 0
    #     has_parent = True
    #     categ = self
    #     while has_parent:
    #         if categ.parent_category is not None:
    #             level += 1
    #             print("Level", level)
    #             categ = categ.parent_category
    #         else:
    #             has_parent = False
    #     return level

    @property
    def sub_categories(self):
        categories = PCategory.objects.filter(parent_category=self)
        return categories

    class Meta:
        db_table = "product_categories"
        verbose_name = "Product Category"
        verbose_name_plural = "Product Categories"


class SubCategory(models.Model):
    distributor = models.ForeignKey('distributor.Distributor', verbose_name="Distributor", on_delete=models.CASCADE,
                                    related_name="dist_subCs")
    category = models.ForeignKey(
        "distributor.PCategory", verbose_name="Category", on_delete=models.CASCADE)
    name = models.CharField(verbose_name="Sub Category", max_length=50)
    sub_category_pic = models.ImageField(
        verbose_name="SubCategory Pic", null=True, blank=True)
    description = models.TextField(
        blank=True, null=True, verbose_name="SubCategory Description")

    def __str__(self):
        return self.name

    class Meta:
        db_table = "product_subcategories"
        verbose_name_plural = "Product Sub Categories"
        verbose_name = "Product Sub Category"


class Retailer(models.Model):
    distributors = models.ManyToManyField("distributor.Distributor", verbose_name="Distributors",
                                          related_name="ret_distributors")
    pin_no = models.CharField(
        max_length=50,  verbose_name="Retailer Tax Pin", null=True, blank=True)
    name = models.CharField(verbose_name="Client Name", max_length=50)
    phone = models.CharField(
        max_length=15, verbose_name="Retailer Phone", validators=[validate_phone])
    email = models.EmailField(
        max_length=50, verbose_name="Retailer Email", unique=True)
    pic = models.ImageField(verbose_name='Retailer Image',
                            upload_to="retailer/profile/", blank=True, null=True)
    salesmen = models.ManyToManyField('distributor.SalesMan', verbose_name="Assigned Sales People",
                                      blank=True, editable=False)
    when_created = models.DateTimeField(verbose_name="When Created", auto_now_add=True, editable=False, null=True,
                                        blank=True)

    def __str__(self):
        return self.name + " (" + self.email + ") "

    @property
    def cart(self):
        cart = RetailerCart.objects.filter(retailer=self).first()
        return cart

    class Meta:
        db_table = "retailers"
        verbose_name = "Retailer"
        verbose_name_plural = "Retailers"


class Product(models.Model):
    product_code = models.CharField(max_length=50, blank=True, null=True)
    distributor = models.ForeignKey("distributor.Distributor", verbose_name="Distributor", on_delete=models.CASCADE,
                                    related_name="dist_products")
    category = models.ForeignKey("distributor.PCategory", verbose_name="Product Category",
                                 related_name="categ_products", blank=True, null=True, on_delete=models.PROTECT)
    # subcategory = models.ForeignKey("distributor.SubCategory", on_delete=models.DO_NOTHING,
    #    h                             verbose_name="Product Sub Category")
    #    h                             verbose_name="Product Sub Category")
    sku = models.CharField(verbose_name='Product Sku',
                           max_length=100, blank=True, null=True)
    active = models.BooleanField(default=True, verbose_name='Product Active')
    weight = models.CharField(
        verbose_name='Product Weight', max_length=100, null=True, blank=True)
    track_stock = models.BooleanField(
        default=True, verbose_name='Product Stock')
    name = models.CharField(verbose_name="Product Name", max_length=100)
    units = models.ForeignKey('distributor.MUnit', verbose_name="Measurement Unit", null=True, blank=True,
                              on_delete=models.DO_NOTHING)
    price = MoneyField(max_digits=14, decimal_places=2, default_currency='KES')
    brief_description = models.CharField(
        verbose_name='Brief Description', max_length=255, null=True, blank=True)
    description = models.TextField(verbose_name="Large Description")
    stock_qty = models.PositiveIntegerField(
        verbose_name="Quantity In Stock", default=0, blank=True)
    colors = models.ManyToManyField(
        'distributor.CustomColors', verbose_name='assign colors', blank=True)
    brand = models.TextField(
        verbose_name="Product Brand", null=True, blank=True)
    branding = models.ForeignKey("distributor.Brand",
                                 verbose_name="Product Brand", null=True, blank=True,
                                 on_delete=models.PROTECT)
    size = models.TextField(verbose_name="Size", null=True, blank=True)
    created_by = models.ForeignKey(
        "distributor.DistUsers", verbose_name="created by", on_delete=models.CASCADE)
    price_s = models.CharField(verbose_name="Price Text", default="KSH 0", max_length=100, null=True, blank=True,
                               editable=False)
    when_created = models.DateTimeField(auto_now_add=True, editable=False, )
    when_modified = models.DateTimeField(auto_now=True, editable=False)
    is_new_arrival = models.BooleanField(
        verbose_name="Is New Arrival", default=False)
    # variations = models.ManyToManyField(
    # "distributor.ProductVariations", verbose_name="Product Variations")

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.price_s = str(self.price)
        super(Product, self).save(*args, **kwargs)

    @property
    def price_slabs(self):
        today = datetime.datetime.today()
        date_today = datetime.date(today.year, today.month, today.day)
        price_list = PriceList.objects.filter(
            product=self, date_from__lte=date_today)
        return price_list

    def slabs(self, price_l):
        price_ls = self.price_slabs.filter(
            price_level=price_l).order_by('min_amount').all()
        prices = list()
        for price in price_ls:
            data = dict()
            data['min'] = price.min_amount
            data['max'] = price.max_amount
            data['rate'] = str(
                Money(str(price.rate), price.product.price.currency))
            data['discount_amount'] = str(
                Money(str(price.discount_amount), price.product.price.currency))
            data['discount_percent'] = str(price.discount_percent) + " %"
            prices.append(data)
        return prices

    class Meta:
        db_table = "products"
        verbose_name = "Product"
        verbose_name_plural = "Products"
        unique_together = ['distributor', 'category', 'name']


# class ProductVariations(models.Model):
#     code = models.CharField(verbose_name='variation code',
#                             max_length=250, null=True, blank=True)
#     label = models.CharField(
#         verbose_name='variation label', max_length=250, null=True, blank=True)
#     price = models.DecimalField(verbose_name='Variation Price',
#                                 max_digits=12, decimal_places=2, null=True, blank=True)
#     variations = models.TextField(
#         verbose_name='all variations', null=True, blank=True)

#     class Meta:
#         db_table = 'product_variations'
#         verbose_name = "Product Variation"
#         verbose_name_plural = "Product Variations"


class ProductImage(models.Model):
    product = models.ForeignKey("distributor.Product", verbose_name="Product", on_delete=models.CASCADE,
                                related_name="product_images")
    image = models.ImageField(upload_to="products/images/")

    class Meta:
        db_table = 'pr_photos'
        verbose_name = "Product Photo"
        verbose_name_plural = "Product Photos"


class DistOrder(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", verbose_name="Distributor", on_delete=models.CASCADE)
    retailer = models.ForeignKey(
        "distributor.Retailer", verbose_name="Retailer", on_delete=models.CASCADE)
    product = models.ForeignKey(
        "distributor.Product", on_delete=models.PROTECT, related_name="order_product")
    price_offers = models.ManyToManyField("distributor.PriceOffer", blank=True)
    order_date = models.DateTimeField(
        auto_now_add=True, verbose_name="Ordering Date", editable=False)
    qty = models.PositiveIntegerField(verbose_name=" Quantity ")
    per_price = models.FloatField(verbose_name='total_qty', default=0)
    delivered = models.BooleanField(editable=False, default=False)
    placed = models.BooleanField(editable=False, default=False)
    order_price = MoneyField(max_digits=14, decimal_places=2,
                             verbose_name="Order Price", default_currency='KES')
    remaining_amount = models.PositiveIntegerField(
        verbose_name='remaining price', default=0)
    submitted_by = models.ForeignKey("distributor.DistUsers", on_delete=models.SET_NULL, null=True, blank=True,
                                     verbose_name="Submitter", editable=False)
    free_qty = models.PositiveIntegerField(verbose_name='free_qty', default=0)
    total_qty = models.PositiveIntegerField(
        verbose_name='total_qty', default=0)
    delivered_qty = models.PositiveIntegerField(
        verbose_name='delivered_qty', default=0)
    applied_offer = models.CharField(
        verbose_name="Applied Offer", max_length=100, null=True, blank=True)
    variant = models.TextField(
        verbose_name="Product Variant", null=True, blank=True)

    def __str__(self):
        return self.product.name + " By " + self.retailer.name

    class Meta:
        db_table = "dist__orders"
        verbose_name_plural = "Orders"
        verbose_name = "Order"


class RetailOrders(models.Model):
    distributor = models.ForeignKey('distributor.Distributor', on_delete=models.CASCADE, verbose_name="Distributor",
                                    related_name="dist_ret_orders")
    ref_number = models.IntegerField(
        verbose_name="Order Reference number", default=0, editable=False)
    retailer = models.ForeignKey("distributor.Retailer", verbose_name="Retailer", on_delete=models.PROTECT,
                                 related_name="retailer_ord_view")
    ret_orders = models.ManyToManyField("distributor.DistOrder", verbose_name="Distributor Orders",
                                        related_name="ret_order_s")
    total_cost = MoneyField(max_digits=14, decimal_places=2, verbose_name="Order Price", default=Money("0", "KES"),
                            default_currency='KES')
    status = models.CharField(max_length=50,
                              choices=(("Pending", "Pending"), ("Dispatched", "Dispatched"), ("On Hold", "On Hold"),
                                       ("Declined", "Declined"), ("Approved",
                                                                  "Approved"), ("Partial", "Partial"),
                                       ("CANCELED", "CANCELED")),
                              default="Pending",
                              verbose_name="Order Status")
    when_placed = models.DateTimeField(
        verbose_name="Order Date", auto_now_add=True)
    when_approved = models.DateTimeField(
        verbose_name="When Approved", null=True, blank=True)
    when_declined = models.DateTimeField(
        verbose_name="When Declined", null=True, blank=True)
    when_dispatched = models.DateTimeField(
        verbose_name="When Dispatched", null=True, blank=True)
    when_cancelled = models.DateTimeField(
        verbose_name="When Cancelled", null=True, blank=True)
    when_held = models.DateTimeField(
        verbose_name="When Held", null=True, blank=True)
    note = models.TextField(
        verbose_name="Reasons For  Action", null=True, blank=True, default=" ")
    salesman = models.ForeignKey("distributor.SalesMan", on_delete=models.SET_NULL, null=True, blank=True,
                                 verbose_name="Assigned Sales Person", editable=False, )
    payment_terms = models.CharField(
        max_length=100, verbose_name="Payment Terms", default="Cash")
    offers = models.ManyToManyField(
        "distributor.PriceOffer", blank=True, editable=False)
    price_level = models.ForeignKey(
        "distributor.PriceLevel", on_delete=models.PROTECT, null=True, blank=True)
    confirmed_delivery = models.BooleanField(
        verbose_name="Delivery Confirmed", default=False)
    created_by = models.ForeignKey("distributor.DistUsers", verbose_name="created by", on_delete=models.CASCADE,
                                   null=True, blank=True)
    altered_by = models.ForeignKey(
        "netbotAuth.user", verbose_name="altered_by", on_delete=models.CASCADE, null=True, blank=True, related_name='ret_orders_alter')
    history = HistoricalRecords()

    def save(self, *args, **kwargs):
        from distributor.threading import MobileOrderStatusNotification, OrderStatusNotification
        self.ref_number = self.get_ref_number
        super().save(*args, **kwargs)
        OrderStatusNotification(self, 'created').start()
        MobileOrderStatusNotification(self, 'Order').start()

    @property
    def get_totals(self):
        totals = 0
        for order in self.ret_orders.all():
            totals += order.order_price
        self.total_cost = totals
        return totals

    @property
    def get_ref_number(self):
        order_no = 1
        prev_orders = RetailOrders.objects.filter(
            distributor=self.distributor).order_by('-id')
        if prev_orders.first():
            order_no = prev_orders.first().ref_number + 1
        # self.ref_number = order_no
        return order_no

    class Meta:
        db_table = 'retailer_orders'
        verbose_name = "Retailer Order"
        verbose_name_plural = "Retailer Orders"

    @property
    def transport_details(self):
        transports = list()
        partial_deliveries = PartialDelivery.objects.filter(
            previous_order_id=self.id).all()
        final_delivery = Delivery.objects.filter(order_id=self.id).first()
        for partial_delivery in partial_deliveries:
            tr_details = dict()
            tr_details['transporter_name'] = partial_delivery.transporter_name
            tr_details['vehicle_no'] = partial_delivery.vehicle_no
            tr_details['remarks'] = partial_delivery.remarks
            tr_details['transporter'] = partial_delivery.transporter
            tr_details['date'] = str(partial_delivery.when_dispatched)
            tr_details['transporter_phone'] = partial_delivery.transporter_phone

            orders = list()
            for order in partial_delivery.current_orders.all():
                order_ = dict()
                order_['id'] = order.product.id
                order_['name'] = order.product.name
                order_['quantity'] = order.qty
                order_['pic'] = None
                image = ProductImage.objects.filter(
                    product=order.product).first()
                if image:
                    if image.image:
                        order_['pic'] = image.image.url

                if order.qty > 0:
                    orders.append(order_)
            tr_details['items'] = orders
            transports.append(tr_details)
        if final_delivery:
            tr_details = dict()
            partial_delivery = final_delivery
            tr_details['transporter_name'] = partial_delivery.transporter_name
            tr_details['vehicle_no'] = partial_delivery.vehicle_no
            tr_details['remarks'] = partial_delivery.remarks
            tr_details['transporter'] = partial_delivery.transporter
            tr_details['transporter_phone'] = partial_delivery.transporter_phone
            tr_details['date'] = str(self.when_dispatched)
            orders = list()
            for order in self.ret_orders.all():
                order_ = dict()
                order_['id'] = order.product.id
                order_['name'] = order.product.name
                order_['quantity'] = order.qty
                order_['pic'] = None
                image = ProductImage.objects.filter(
                    product=order.product).first()
                if image:
                    if image.image:
                        order_['pic'] = image.image.url
                partial_deliveries = PartialDelivery.objects.filter(
                    previous_order_id=self.id).all()
                for partial in partial_deliveries:
                    for part in partial.current_orders.all():
                        if part.product.id == order.product.id:
                            order_['quantity'] = order_['quantity']-part.qty
                if order_['quantity'] > 0:
                    orders.append(order_)

            tr_details['items'] = orders
            transports.append(tr_details)

        return transports


class Delivery(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", verbose_name="Distributor", on_delete=models.CASCADE)
    order = models.ForeignKey("distributor.RetailOrders",
                              on_delete=models.DO_NOTHING, related_name="delivery_orders")
    delivery_time = models.DateTimeField(
        verbose_name="Date Delivered", null=True)
    confirmed = models.BooleanField(
        verbose_name="Was Confirmed", default=False)
    remarks = models.TextField(
        verbose_name="Reception Remarks", null=True, blank=True)
    transporter = models.CharField(
        max_length=100, verbose_name="Transporter Name", null=True, blank=True)
    vehicle_no = models.CharField(
        max_length=100, verbose_name="Vehicle No.", null=True, blank=True)
    transporter_name = models.CharField(
        max_length=100, verbose_name="Transporter Name", null=True, blank=True)
    transporter_phone = models.CharField(
        max_length=15, verbose_name="Transporter Phone", null=True, blank=True)
    history = HistoricalRecords()

    class Meta:
        db_table = "deliveries"
        verbose_name_plural = "Deliveries"
        verbose_name = "Delivery"


class DistTax(models.Model):
    """
    Distributor tax model
    """
    tax_name = models.CharField(verbose_name="Tax Name", max_length=50)
    tax = models.FloatField(verbose_name="Tax")
    tax_type = models.CharField(verbose_name='Tax Type', max_length=50, default='')
    is_active = models.BooleanField(verbose_name="Is Active", default=True)
    distributor = models.ForeignKey("distributor.Distributor", on_delete=models.CASCADE)

    def __str__(self):
        return '{}'.format(str(self.tax_name))

    class Meta:
        db_table = 'dist_tax'
        verbose_name = 'Dist Tax'
        verbose_name = 'Dist Taxes'
        ordering = ['-id']


class SalesmanTask(models.Model):
    """
    Assign Salesman Tasks
    """
    distributor = models.ForeignKey(
        "distributor.Distributor", verbose_name="Sales Distributor", on_delete=models.CASCADE)
    sales_man = models.ForeignKey("distributor.SalesMan", verbose_name="Sales Man Task",
                                  related_name='sales_man_task', on_delete=models.CASCADE)
    retailer = models.ForeignKey("distributor.Retailer", verbose_name="Retailer",
                                 related_name='retailer_mame_task', on_delete=models.CASCADE)
    start_date = models.DateField(
        verbose_name="Start Date", auto_now=False, auto_now_add=False)
    start_time = models.TimeField(
        verbose_name="Start Time", auto_now=False, auto_now_add=False, null=True, blank=True)
    end_date = models.DateField(
        verbose_name="End Date", auto_now=False, auto_now_add=False, null=True, blank=True)
    end_time = models.TimeField(
        verbose_name="End Time", auto_now=False, auto_now_add=False, null=True, blank=True)
    feed_back = models.JSONField(
        verbose_name='Retailer Feedback', null=True, blank=True)
    latitude = models.FloatField(
        verbose_name='Salesman Latitude', null=True, blank=True)
    longitude = models.FloatField(
        verbose_name='Salesman Longitude', null=True, blank=True)
    county = models.CharField(
        verbose_name="SalesMan County", max_length=100, null=True, blank=True)

    class Meta:
        db_table = 'saleman_task'
        verbose_name = 'SaleMan Task'
        verbose_name_plural = 'SaleMan Tasks'


class SalesMan(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", on_delete=models.CASCADE)
    first_name = models.CharField(verbose_name="First Name", max_length=50)
    last_name = models.CharField(verbose_name="Last Name", max_length=50)
    phone = models.CharField(verbose_name="Phone Number",
                             max_length=15, validators=[validate_phone])
    email = models.EmailField(verbose_name="Email", unique=True)
    pic = models.ImageField(verbose_name='Saleman Image',
                            upload_to="salesman/profile/", blank=True, null=True)
    retailers = models.ManyToManyField("distributor.Retailer", verbose_name="Assigned Retailers", blank=True,
                                       editable=False, related_name="retailer_salesmen")

    @property
    def retailers_(self):
        retailers_ = RetailerProfile.objects.filter(salesman=self).all()
        retailers = Retailer.objects.filter(
            ret_profile_for_dist__in=retailers_)
        return retailers

    @property
    def cart(self):
        cart = SalesManCart.objects.filter(salesman_id=self.id).first()
        if not cart:
            cart = SalesManCart()
            cart.salesman_id = self.id
            cart.save()
        return cart

    def __str__(self):
        return self.first_name + " " + self.last_name + " (" + self.phone + ")"

    @property
    def user(self):
        user = User.objects.filter(email=self.email).first()
        return user

    class Meta:
        db_table = "sales_people"
        verbose_name = "Sales Person"
        verbose_name_plural = "Sales People"


class MobileBanner(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", on_delete=models.CASCADE)
    name = models.CharField(max_length=100, verbose_name="Banner Name")
    text = models.TextField(verbose_name="Banner In text")
    pic = models.ImageField(null=True, max_length=255,
                            verbose_name="Banner Display Pic", upload_to='mobile/banners/')
    status = models.CharField(max_length=50,
                              choices=(("Banner", "Banner"), ("Product",
                                       "Product"), ("Offer", "Offer"),),
                              default="Banner",
                              verbose_name="Banner Status")
    product = models.ForeignKey(
        'distributor.Product', on_delete=models.PROTECT, blank=True, null=True)
    offer = models.ForeignKey('distributor.PriceOffer',
                              on_delete=models.PROTECT, blank=True, null=True)
    view = models.BooleanField(verbose_name='Is viewable', default=True)
    position = models.IntegerField(verbose_name='current position', default=0)

    def __str__(self):
        return self.name + " Id " + str(self.id) + " Position " + str(self.position)

    class Meta:
        db_table = 'mobile_banners'
        verbose_name = "Mobile Banner"
        verbose_name_plural = "Mobile Banners"


class MThemes(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", on_delete=models.CASCADE)
    name = models.CharField(max_length=100, verbose_name="Theme Name")
    color = ColorField(default='#FF0000', verbose_name="Theme Color")
    current_theme = models.BooleanField(verbose_name="Is Current Theme")

    def __str__(self):
        return self.name

    class Meta:
        db_table = "mobile_themes"
        verbose_name = "Mobile Theme"
        verbose_name_plural = "Mobile Themes"


class MNotification(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", on_delete=models.CASCADE)
    name = models.CharField(max_length=255, verbose_name="Notification Name")
    display_text = models.CharField(
        max_length=200, verbose_name="Display Message")
    detail = models.TextField(verbose_name="Detailed Message")
    show_from = models.DateTimeField(verbose_name="Show From")
    show_to = models.DateTimeField(verbose_name="Show To")
    pic = models.ImageField(upload_to='notifications/img/',
                            max_length=255, null=True, blank=True)
    status = models.CharField(max_length=50,
                              choices=(
                                  ("Notification", "Notification"),
                                  ("Product", "Product"),
                                  ("Order", "Order"),
                                  ("Offer", "Offer"),
                              ),
                              default="Notification",
                              verbose_name="Notification Status")
    product = models.ForeignKey(
        'distributor.Product', on_delete=models.PROTECT, blank=True, null=True)
    offer = models.ForeignKey('distributor.PriceOffer',
                              on_delete=models.PROTECT, blank=True, null=True)
    order = models.ForeignKey(
        "distributor.RetailOrders", blank=True, on_delete=models.PROTECT, null=True)
    region = models.ForeignKey("distributor.DistRegion", verbose_name="Notification Region",
                               related_name="ret_notification_region",
                               null=True, blank=True, on_delete=models.PROTECT)
    city = models.ForeignKey("distributor.DistCity", verbose_name="Notification City",
                             related_name="ret_notification_city",
                             null=True, blank=True, on_delete=models.PROTECT)
    area = models.ForeignKey("distributor.DistArea", verbose_name="Notification Area", null=True, blank=True,
                             on_delete=models.PROTECT)
    send_to = models.CharField(max_length=50,
                               choices=(
                                   ("All", "All"),
                                   ("Retailer", "Retailer"),
                                   ("SalesPeople", "SalesPeople"),
                               ),
                               default="All",
                               verbose_name="Notification Send to")
    users = models.ManyToManyField(
        "netbotAuth.User", blank=True, related_name="user_notifications")

    @property
    def devices(self):
        devices = []
        from mobile_retailer.models import MobileDevice

        for user in self.users.all():
            print("Found User", user.email)
            for device in MobileDevice.objects.filter(user=user, device_id__isnull=False).all():
                devices.append(device.device_id)
        return devices

    def __str__(self):
        return self.name

    class Meta:
        db_table = "mobile_notifications"
        verbose_name = "Mobile Notification"
        verbose_name_plural = "Mobile Notifications"


class DistNotifications(models.Model):
    distributor = models.ForeignKey(
        'distributor.Distributor', on_delete=models.CASCADE)
    seen_by = models.ManyToManyField("distributor.DistUsers", related_name='dist_seen_notifications',
                                     verbose_name='Seen Notifications')
    un_seen_by = models.ManyToManyField("distributor.DistUsers", related_name='dist_un_seen_notifications',
                                        verbose_name='UnSeen Notifications')
    details = models.TextField(verbose_name="Details")
    display_text = models.CharField(
        verbose_name="Display Text", max_length=100)
    when_created = models.DateTimeField(auto_now_add=True)
    action_by = models.ForeignKey("distributor.DistUsers", verbose_name="written by", related_name='written_by',
                                  on_delete=models.CASCADE, null=True)

    class Meta:
        db_table = 'dist_notifications'
        verbose_name = 'Distributor Notification'
        verbose_name_plural = "Distributor Notifications"


class ProductPackage(models.Model):
    distributor = models.ForeignKey(
        'distributor.Distributor', on_delete=models.CASCADE)
    product = models.ForeignKey(
        'distributor.Product', on_delete=models.CASCADE, verbose_name="Product")
    name = models.CharField(verbose_name="Package Name", max_length=100)
    description = models.TextField(verbose_name="Package Description")
    item_no = models.CharField(
        verbose_name="Items Size/Number", max_length=200, null=True, blank=True)
    price = MoneyField(max_digits=14, decimal_places=2, default_currency='USD')
    image = models.ImageField(
        upload_to='product/packages/img/', null=True, blank=True)

    def __str__(self):
        return self.name + " Of " + self.product.name

    class Meta:
        db_table = "pr_packages"
        verbose_name = "Product Package"
        verbose_name_plural = "Product Packages"
        unique_together = ['distributor', 'name', 'product']


class RetailerType(models.Model):
    distributor = models.ForeignKey(
        'distributor.Distributor', on_delete=models.CASCADE)
    name = models.CharField(verbose_name="Retailer Type Name", max_length=100)
    discount = models.PositiveIntegerField(
        verbose_name="Product Percent Discount")
    retailers = models.ManyToManyField(
        'distributor.Retailer', verbose_name="Retailers", blank=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'retailer_types'
        verbose_name = "Retailer Type"
        verbose_name_plural = "Retailer Types"
        unique_together = ['distributor', 'name']


class ProductPrice(models.Model):
    distributor = models.ForeignKey(
        'distributor.Distributor', on_delete=models.CASCADE)
    product = models.ForeignKey(
        'distributor.Product', on_delete=models.CASCADE)
    above = models.PositiveIntegerField(verbose_name="Min Quantity")
    below = models.PositiveIntegerField(verbose_name="Max Quantity")
    price = MoneyField(max_digits=14, decimal_places=2,
                       verbose_name="Level Price", default_currency='KES')

    def __str__(self):
        return str(self.above) + " - " + str(self.below)

    class Meta:
        db_table = 'product_price'
        verbose_name = " Product Price  "
        verbose_name_plural = " Product Prices "
        unique_together = ['distributor', 'product']


# class OfferSchemes(models.Model):
#     scheme_name = models.CharField(verbose_name="Scheme Name")
#
#
#     class Meta:
#         db_table = 'offer_schemes'
#         verbose_name = 'Offer Scheme'
#         verbose_name_plural = 'Offer Schemes'

class MUnit(models.Model):
    distributor = models.ForeignKey(
        'distributor.Distributor', verbose_name="Distributor", on_delete=models.CASCADE)
    name = models.CharField(verbose_name="Unit Name", max_length=100)
    symbol = models.CharField(verbose_name="Unit Symbol", max_length=100)

    def __str__(self):
        return self.name + "(" + self.symbol + ")"

    class Meta:
        db_table = "measurement_units"
        verbose_name = "Simple Measurement Unit"
        verbose_name_plural = "Simple Measurement Units"


class CompoundUnit(models.Model):
    distributor = models.ForeignKey(
        'distributor.Distributor', verbose_name="Distributor", on_delete=models.CASCADE)
    name = models.CharField(verbose_name="Unit Name", max_length=100)
    first_unit = models.ForeignKey("distributor.MUnit", verbose_name="First Unit", on_delete=models.PROTECT,
                                   related_name="f_unit")
    second_unit = models.ForeignKey("distributor.MUnit", verbose_name="Second Unit", on_delete=models.PROTECT,
                                    related_name="s_unit")
    f_to_s = models.FloatField(verbose_name="First to Second Unit Rate")

    def __str__(self):
        return self.second_unit.name + " Of " + str(self.f_to_s) + " " + self.first_unit.symbol

    class Meta:
        db_table = "complex_measurement_units"
        verbose_name = "Complex Measurement Unit"
        verbose_name_plural = "Complex Measurement Units"


class PriceLevel(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", verbose_name="Distributor", on_delete=models.CASCADE)
    level_name = models.CharField(max_length=50, verbose_name="Name")

    def __str__(self):
        return self.level_name

    class Meta:
        db_table = "dist_price_levels"
        verbose_name = "Price Level"
        verbose_name_plural = "Price Levels"
        unique_together = ['distributor', 'level_name']


class PriceList(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", verbose_name="Distributor", on_delete=models.CASCADE)
    price_level = models.ForeignKey("distributor.PriceLevel", on_delete=models.PROTECT, verbose_name="Price Level",
                                    null=True, blank=True, help_text="All")
    date_from = models.DateField(verbose_name="Applicable From")
    product = models.ForeignKey("distributor.Product", verbose_name="Product", on_delete=models.PROTECT,
                                related_name='prod_prices')
    min_amount = models.PositiveIntegerField(verbose_name="Min Amount")
    max_amount = models.PositiveIntegerField(verbose_name="Max Amount")
    rate = models.FloatField(verbose_name=" Rate ")
    discount_amount = models.FloatField(
        verbose_name="Discount Amount if Any", null=True, blank=True, default=0)
    discount_percent = models.FloatField(
        verbose_name="Discount Percent if Any", null=True, blank=True, default=0)

    def __str__(self):
        name = [self.distributor.name, " Applicable From ", self.date_from, "Pricing:", self.rate, " Between ",
                self.min_amount,
                " And ", self.max_amount, " Discount Amount ", self.discount_amount, "Discount Percenatge",
                self.discount_percent, "%"]
        return str(name)

    class Meta:
        db_table = 'price_list'
        verbose_name = "Price List"
        verbose_name_plural = "Price Lists"


class PriceOffer(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", verbose_name="Distributor", on_delete=models.CASCADE)

    name = models.CharField(verbose_name="Offer Name", max_length=100)
    scheme = models.CharField(max_length=100,
                              choices=(
                                  ("BnXEX", "Buy n of X GET Extra X"),
                                  ("BnXYF", "Buy n of X get Y free"),
                                  ("BnXy%O", "Buy n of X get y% off"),
                              ))
    x_item = models.ForeignKey("distributor.Product", on_delete=models.PROTECT, verbose_name="Item X",
                               related_name="x_items")
    y_item = models.ForeignKey("distributor.Product", on_delete=models.PROTECT, verbose_name="Item Y",
                               related_name="y_items", blank=True, null=True)
    x_amt = models.PositiveIntegerField(verbose_name="X Quantity")
    # x_amt = models.PositiveIntegerField(verbose_name="X Quantity")
    y_amt = models.PositiveIntegerField(
        verbose_name="Y Quantity", blank=True, null=True)
    date_from = models.DateField(verbose_name="Date From")
    date_to = models.DateField(verbose_name="Date To")
    pic = models.ImageField(verbose_name="Display Pic",
                            upload_to="pics/offers/", blank=True, null=True)
    detail_name = models.CharField(
        max_length=200, verbose_name="Detail Name", editable=True, null=True, blank=True)

    def save(self, *args, **kwargs):

        self.detail_name = str(self)
        super(PriceOffer, self).save(*args, **kwargs)

    @property
    def is_active(self):
        today = timezone.now().date()
        print(today)
        if self.date_from <= today <= self.date_to:
            return True
        return False

    def __str__(self):
        name = self.name
        if self.scheme == "BnXEX":
            name = self.name + " ( Buy " + str(self.x_amt) + " Of " + str(self.x_item.name) + " Get " + str(
                self.y_amt) + "  More )"
        elif self.scheme == "BnXYF":
            name = self.name + " ( Buy " + str(self.x_amt) + " Of " + str(self.x_item.name) + " Get " + str(
                self.y_amt) + " Of " + str(
                self.y_item) + "  Free)"
        elif self.scheme == "BnXy%O":
            name = self.name + " ( Buy Up to " + str(self.x_amt) + " Of " + str(self.x_item.name) + \
                " Get " + str(
                self.y_amt) + "%  Off )"
        return name

    class Meta:
        db_table = "price_offers"
        verbose_name = "Price Offer"
        verbose_name_plural = "Price Offers"
        unique_together = ['distributor', 'name']


class DistRegion(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", related_name="dist_regions", on_delete=models.CASCADE)
    name = models.CharField(max_length=100, verbose_name="Region Name")

    def __str__(self):
        return self.name

    class Meta:
        db_table = "dist_regions"
        verbose_name = "Region"
        verbose_name_plural = "Regions"
        unique_together = ['distributor', 'name']


class DistCity(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", related_name="dist_cities", on_delete=models.CASCADE)
    region = models.ForeignKey("distributor.DistRegion", related_name="region_cities", verbose_name="Region",
                               on_delete=models.PROTECT)
    name = models.CharField(verbose_name="City Name", max_length=100)

    def __str__(self):
        return self.name + " In " + self.region.name

    class Meta:
        db_table = "dist_cities"
        verbose_name = "City"
        verbose_name_plural = "Cities"
        unique_together = ['distributor', 'name', 'region']


class DistArea(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", verbose_name="Distributor", on_delete=models.CASCADE)
    name = models.CharField(verbose_name="Area Name", max_length=100)
    city = models.ForeignKey('distributor.DistCity', related_name="city_areas", verbose_name="Area City/Town",
                             on_delete=models.PROTECT)

    def __str__(self):
        return self.name + " in (" + str(self.city) + ")"

    class Meta:
        db_table = "dist_areas"
        verbose_name = " Retailer Area"
        verbose_name_plural = "Retailer Areas"
        unique_together = ['distributor', 'name', 'city']


class SalesTargetGroup(models.Model):
    distributor = models.ForeignKey("distributor.Distributor", related_name='dist_sales_target_group',
                                    on_delete=models.CASCADE)
    name = models.CharField(verbose_name="Target Group Name",
                            max_length=100, default="group 1")
    salesmen = models.ManyToManyField(
        "distributor.SalesMan", verbose_name="Grouped Saleman")
    period = models.CharField(max_length=20, choices=(("Daily", "Daily"),
                                                      ("Weekly", "Weekly"),
                                                      ("Monthly", "Monthly"),
                                                      ("Yearly", "Yearly")), default="Daily",
                              verbose_name="Target Period")
    target_sales = MoneyField(max_digits=14, decimal_places=2, verbose_name="Target Sales", default=Money("0", "KES"),
                              default_currency='KES')
    status = models.CharField(
        max_length=100, verbose_name="Target Status", editable=False, default="")
    end_date = models.DateField(
        verbose_name="To be Achieved Before", null=True, blank=True, editable=False)
    reward_money = MoneyField(max_digits=14, decimal_places=2, verbose_name="Monetary Reward",
                              default=Money("0", "KES"),
                              default_currency='KES')
    reward_per = models.PositiveIntegerField(
        verbose_name="Reward in Percentage", null=True, blank=True)

    class Meta:
        db_table = "sales_target_group"
        verbose_name = "Sales Target Group"
        verbose_name_plural = "Sales Target Groups"

    def __str__(self):
        return self.name + self.period + " Target "


class SalesTarget(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", on_delete=models.CASCADE)
    name = models.CharField(verbose_name="Target Name",
                            max_length=100, default="probation")
    salesman = models.ForeignKey(
        "distributor.SalesMan", on_delete=models.CASCADE, related_name="sales_targets")
    period = models.CharField(max_length=20, choices=(("Daily", "Daily"),
                                                      ("Weekly", "Weekly"),
                                                      ("Monthly", "Monthly"),
                                                      ("Yearly", "Yearly")), default="Daily",
                              verbose_name="Target Period")
    target_sales = MoneyField(max_digits=14, decimal_places=2, verbose_name="Target Sales", default=Money("0", "KES"),
                              default_currency='KES')
    status = models.CharField(
        max_length=100, verbose_name="Target Status", editable=False, default="")
    end_date = models.DateField(
        verbose_name="To be Achieved Before", null=True, blank=True, editable=False)
    reward_money = MoneyField(max_digits=14, decimal_places=2, verbose_name="Monetary Reward",
                              default=Money("0", "KES"),
                              default_currency='KES')
    reward_per = models.PositiveIntegerField(
        verbose_name="Reward in Percentage", null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "sales_targets"
        verbose_name = "Sales Target"
        verbose_name_plural = "Sales Targets"


class RetailerContacts(models.Model):
    retailer = models.ForeignKey(
        "distributor.Retailer", on_delete=models.CASCADE, related_name="retailer_contacts")
    position = models.CharField(
        verbose_name="Employee Position", max_length=50, null=True, blank=True)
    email = models.EmailField(verbose_name="Email", max_length=50)
    phone = models.CharField(verbose_name="Phone No",
                             max_length=13, validators=[validate_phone, ])

    class Meta:
        db_table = "retailer_contacts"
        verbose_name = "Retailer Contact"
        verbose_name_plural = "Retailer Contacts"


class CustomColors(models.Model):
    value = models.TextField(
        verbose_name='Color values', blank=True, null=True)
    label = models.CharField(verbose_name='Color Label',
                             max_length=100, null=True, blank=True)
    color = models.CharField(verbose_name='Color Hex',
                             max_length=100, null=True, blank=True)

    class Meta:
        db_table = "custom_colors"
        verbose_name = "Custom Color"
        verbose_name_plural = "Custom Colors"


class PartialOrders(models.Model):
    product = models.ForeignKey(
        "distributor.Product", verbose_name="Product", on_delete=models.PROTECT)
    qty = models.PositiveIntegerField(verbose_name="Quantity")
    order_price = MoneyField(max_digits=14, decimal_places=2,
                             verbose_name="Order Price", default_currency='KES')
    dist_order = models.ForeignKey(
        "distributor.DistOrder", verbose_name="Product", on_delete=models.PROTECT)

    class Meta:
        db_table = "partial_orders"


class PartialDelivery(models.Model):
    previous_order = models.ForeignKey("distributor.RetailOrders", on_delete=models.PROTECT,
                                       verbose_name="Previous Order", null=True)
    current_orders = models.ManyToManyField(
        "distributor.PartialOrders", verbose_name="Current Orders")
    confirmed = models.BooleanField(
        verbose_name="Was Confirmed", default=False)
    remarks = models.TextField(
        verbose_name="Reception Remarks", null=True, blank=True)
    transporter = models.CharField(
        max_length=100, verbose_name="Transporter Name", null=True, blank=True)
    vehicle_no = models.CharField(
        max_length=100, verbose_name="Vehicle No.", null=True, blank=True)
    transporter_name = models.CharField(
        max_length=100, verbose_name="Transporter Name", null=True, blank=True)
    transporter_phone = models.CharField(
        max_length=15, verbose_name="Transporter Phone", null=True, blank=True)
    when_dispatched = models.DateTimeField(
        auto_now_add=True, null=True, editable=False)


class RetailerProfile(models.Model):
    distributor = models.ForeignKey("distributor.Distributor", verbose_name="Distributor",
                                    related_name="dist_ret_profiles", null=True, blank=True, on_delete=models.SET_NULL)
    retailer = models.ForeignKey("distributor.Retailer", verbose_name="Retailer", related_name="ret_profile_for_dist",
                                 null=True, blank=True, on_delete=models.PROTECT)
    contact_name = models.CharField(
        verbose_name="CRetailer lient Name", max_length=100)
    contact_phone = models.CharField(
        max_length=15, verbose_name="Retailer Profile Phone", validators=[validate_phone])
    contact_email = models.EmailField(
        max_length=50, verbose_name="Retailer Email")
    contact_pic = models.ImageField(verbose_name='Retailer Contact Image', upload_to="retailer/dist/", blank=True,
                                    null=True)
    contact_person = models.CharField(
        verbose_name="Retailer contact person", max_length=100, null=True, blank=True)
    contact_details = models.CharField(
        verbose_name="Contact Person details", max_length=100, null=True, blank=True)
    contact_person_phone = models.CharField(max_length=15, verbose_name="Retailer Contact Phone",
                                            validators=[validate_phone], null=True, blank=True)
    contact_person_position = models.CharField(verbose_name="Contact person position", max_length=100, null=True,
                                               blank=True)
    contact_city = models.TextField(
        verbose_name="contact city", null=True, blank=True)
    price_level = models.ForeignKey("distributor.PriceLevel", verbose_name="Price Level",
                                    related_name="ret_dist_price_level", null=True, blank=True,
                                    on_delete=models.PROTECT)
    region = models.ForeignKey("distributor.DistRegion", verbose_name="Retailer Region", related_name="ret_dist_region",
                               null=True, blank=True, on_delete=models.PROTECT)
    city = models.ForeignKey("distributor.DistCity", verbose_name="Retailer City", related_name="ret_dist_city",
                             null=True, blank=True, on_delete=models.PROTECT)
    area = models.ForeignKey("distributor.DistArea", verbose_name="Retailer Area", null=True, blank=True,
                             on_delete=models.PROTECT)
    salesman = models.ForeignKey('distributor.SalesMan', verbose_name="Assigned Sales People",
                                 blank=True, null=True, on_delete=models.PROTECT, )
    favourite_products = models.ManyToManyField("distributor.Product", blank=True, verbose_name="Favourite Products",
                                                related_name="retailer_favorite_products")
    latitude = models.CharField(
        verbose_name='Retailer Latitude', max_length=100, null=True, blank=True)
    longitude = models.CharField(
        verbose_name='Retailer Longitude', max_length=100, null=True, blank=True)
    county = models.CharField(
        verbose_name='Retailer curent count', max_length=100, null=True, blank=True)
    world_country = models.CharField(
        verbose_name='Retailer current country', max_length=100, null=True, blank=True)
    is_active = models.BooleanField(
        verbose_name='Retailer Active', default=True)
    created_by = models.ForeignKey("netbotAuth.User", verbose_name="Added by", on_delete=models.SET_NULL,
                                   null=True, blank=True, related_name='createdBy')
    when_created = models.DateTimeField(
        verbose_name="When Created", auto_now_add=True, null=True, editable=False)

    def __str__(self):
        return self.contact_name + " " + self.contact_email + "{(" + self.contact_phone + ") of Pin No: (" + self.retailer.pin_no + ")}"

    class Meta:
        db_table = "dist_retailer_profiles"
        verbose_name_plural = "Retailer Profiles"
        verbose_name = "Retailer Profile"
        unique_together = ['distributor', 'retailer']


class DistEmailSettings(models.Model):
    distributor = models.OneToOneField("distributor.Distributor",
                                       related_name='dist_email_settings', on_delete=models.CASCADE,
                                       verbose_name="Distributor")
    email_host = models.CharField(max_length=100, verbose_name="Email Host")
    email_port = models.PositiveIntegerField(
        verbose_name="Email Port", default="465")
    email_user = models.EmailField(verbose_name="Email Username")
    email_password = models.CharField(
        verbose_name="Email Password", max_length=100)
    use_tls = models.BooleanField(verbose_name="Use TLS", default=False)
    test_receiver = models.EmailField(verbose_name="Test Receiver Email", )

    def save(self, *args, **kwargs):
        if self.can_send_email:
            super(DistEmailSettings, self).save(*args, **kwargs)
        else:
            raise ValidationError(
                "Your Email Configuration Might be Wrong, We could Not Send A test Email")

    @property
    def connection(self):
        use_tls = False
        use_ssl = True
        if self.use_tls:
            use_ssl = False

        connection = get_connection(host=self.email_host,
                                    port=self.email_port,
                                    username=self.email_user,
                                    password=self.email_password,
                                    use_tls=self.use_tls,
                                    use_ssl=use_ssl
                                    )
        return connection

    def __str__(self):
        return str(self.email_host) + " " + str(self.email_user)

    @property
    def can_send_email(self):
        try:
            EmailMessage(self.distributor.name + " Email Testing", 'Test Email Sending Success!!', self.email_user,
                         [self.test_receiver, ], connection=self.connection).send(fail_silently=False)
            return True
        except Exception as e:
            print(str(e))
            return False

    class Meta:
        verbose_name = "Email Setting"
        verbose_name_plural = "Email Settings"


class BusinessSettings(models.Model):
    distributor = models.ForeignKey("distributor.Distributor", verbose_name="Business Setting Distributor",
                                    related_name='dist_business_settings', on_delete=models.CASCADE)
    title = models.CharField(verbose_name='settings title', max_length=100)
    value = models.TextField(verbose_name="settings value")

    class Meta:
        db_table = 'business_settings'
        verbose_name = "Business Setting"
        verbose_name_plural = "Business Settings"

    def __str__(self):
        return self.title


class DistributorOptions(models.Model):
    distributor = models.OneToOneField("distributor.Distributor", verbose_name="Distributor",
                                       related_name='distributor_v_options', on_delete=models.CASCADE)
    use_price_list = models.BooleanField(
        verbose_name="Use Price List", default=True)
    use_sales_target = models.BooleanField(
        verbose_name="Use Sales Target", default=True)
    use_offers = models.BooleanField(verbose_name="Use Offers", default=True)

    about_company = models.TextField(
        verbose_name="About Company", null=True, blank=True)
    terms_company = models.TextField(
        verbose_name="Terms and conditions", null=True, blank=True)
    privacy_company = models.TextField(
        verbose_name="Privacy and Policy", null=True, blank=True)

    # TODO Add More Options

    def __str__(self):
        subscribed_options = dict()
        subscribed_options[' '] = "Subscription Options\n"
        count = 0
        if self.use_price_list:
            count += 1
            subscribed_options[count] = "Price List\n"
        if self.use_offers:
            count += 1
            subscribed_options[count] = "Offers\n"
        if self.use_sales_target:
            count += 1
            subscribed_options[count] = "Sales Targets\n"

        # TODO Add More
        #  Checks
        return str(subscribed_options)

    class Meta:
        db_table = "dist_options"
        verbose_name = " Distributor Option "
        verbose_name_plural = " Distributor Options "


class Brand(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", verbose_name="Distributor", on_delete=models.PROTECT)
    name = models.CharField(max_length=100, verbose_name="Brand Name")
    pic = models.ImageField(max_length=500, upload_to="pics/brand_pics/", verbose_name="Brand Pic", null=True,
                            blank=True)
    description = models.CharField(
        max_length=200, verbose_name="Brief Description")

    def __str__(self):
        return self.name

    class Meta:
        db_table = "pr_brands"
        verbose_name = "Product Brand"
        verbose_name_plural = "Product Brands"
        unique_together = ['distributor', 'name']


class Variation(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", related_name="dist_variations", on_delete=models.CASCADE)
    name = models.CharField(max_length=100, verbose_name="Variation Name")

    def __str__(self):
        return self.name

    class Meta:
        db_table = "dist_variations"
        verbose_name = "Variation"
        verbose_name_plural = "Variations"
        unique_together = ['distributor', 'name']


class VariationOptions(models.Model):
    distributor = models.ForeignKey(
        "distributor.Distributor", related_name="dist_variation_options", on_delete=models.CASCADE)
    variation = models.ForeignKey("distributor.Variation", related_name="variation_variants", verbose_name="Variation",
                                  on_delete=models.PROTECT, blank=True, null=True)
    name = models.CharField(verbose_name="Variant Name", max_length=100)

    def __str__(self):
        return self.name + " In " + self.variation.name
# variation_variants

    class Meta:
        db_table = "dist_variation_options"
        verbose_name = "Variant"
        verbose_name_plural = "Variants"
        unique_together = ['distributor', 'name', 'variation']
