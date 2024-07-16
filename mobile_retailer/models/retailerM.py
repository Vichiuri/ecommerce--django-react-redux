"""
Retailer Mobile Data Models
"""
from django.db import models
from djmoney.models.fields import MoneyField


class RetailerUser(models.Model):
    """
    User Profile for retailer
    Mobile Data Fetching is based on this model for the retailers

    """
    user = models.OneToOneField("netbotAuth.User", verbose_name="User", on_delete=models.CASCADE,
                                related_name="user_retailer")
    retailer = models.OneToOneField("distributor.Retailer", verbose_name="Retailer", on_delete=models.CASCADE,
                                    related_name="retailer_user")
    # This is the firebase device id used for notification sending
    device_id = models.CharField(
        max_length=255, verbose_name="Device Id", null=True, blank=True)
    favorite_products = models.ManyToManyField("distributor.Product", verbose_name="Favorite Products", blank=True,
                                               editable=False)
    default_distributor = models.ForeignKey("distributor.Distributor", verbose_name="Default Distributor", null=True,
                                            blank=True, on_delete=models.SET_NULL)
    read_notifications = models.ManyToManyField("distributor.MNotification", blank=True, editable=False,
                                                related_name='read_notifications')
    unread_notifications = models.ManyToManyField("distributor.MNotification", blank=True, editable=False,
                                                  related_name='unrread_notifications')

    def __str__(self):
        return self.retailer.name + " Of  (" + self.retailer.pin_no + ")"

    class Meta:
        db_table = "retailer_profiles"
        verbose_name = "Retailer Profile"
        verbose_name_plural = "Retailer Profiles"
        unique_together = ['user', 'retailer']


class RetailerCart(models.Model):
    retailer = models.OneToOneField("distributor.Retailer", verbose_name="Retailer", on_delete=models.CASCADE,
                                    related_name="retailer_cart")
    orders = models.ManyToManyField(
        "mobile_retailer.MobileOrder", verbose_name="Ordered Items", blank=True)

    @property
    def cart_qty(self):
        try:
            return self.orders.count()
        except Exception as e:
            print(str(e))
            return 0

    @property
    def cart_total(self):
        total_price = sum(self.orders.values_list('order_price', flat=True))
        return total_price

    @property
    def distributors(self):
        distributors = []
        for order in self.orders.all():
            if not order.distributor in distributors:
                distributors.append(order.distributor)
        return distributors

    class Meta:
        db_table = "retailer_cart"
        verbose_name = "Retailer Cart"


class MobileOrder(models.Model):
    """
    Orders On Retailer And salesman Cart
    Saved To Enhance auto syncing in case of device change
    """
    distributor = models.ForeignKey("distributor.Distributor", verbose_name="Product Distributor",
                                    related_name="distributor_mobile_orders", on_delete=models.CASCADE)
    retailer = models.ForeignKey(
        "distributor.Retailer", verbose_name="Retailer", on_delete=models.CASCADE)
    product = models.ForeignKey(
        "distributor.Product", on_delete=models.CASCADE, related_name="mobile_order_product")
    price_offers = models.ManyToManyField("distributor.PriceOffer", blank=True)
    order_date = models.DateTimeField(
        auto_now_add=True, verbose_name="Ordering Date", editable=False)
    qty = models.PositiveIntegerField(verbose_name=" Quantity ")
    placed = models.BooleanField(editable=False, default=False)
    order_price = MoneyField(max_digits=14, decimal_places=2,
                             verbose_name="Order Price", default_currency='KES')
    applied_offer = models.CharField(
        verbose_name="Applied Offer", max_length=100, null=True, blank=True)
    variant = models.TextField(
        verbose_name="Product Variant", null=True, blank=True)
    per_price = models.FloatField(verbose_name='Price Per Unit', default=0)
    free_qty = models.PositiveIntegerField(verbose_name='free_qty', default=0)
    total_qty = models.PositiveIntegerField(
        verbose_name='total_qty', default=0)
    offer_id = models.PositiveIntegerField(
        verbose_name="Offer_id", null=True, blank=True)
    salesman = models.ForeignKey("distributor.SalesMan", on_delete=models.SET_NULL, verbose_name="Salesman", null=True,
                                 blank=True)

    def __str__(self):
        return "Order By " + self.retailer.name + " Product:" + self.product.name + " Quantity " + str(self.qty)

    def save(self, *args, **kwargs):
        if not self.offer_id:
            self.offer_id = 0
        super(MobileOrder, self).save(*args, **kwargs)

    class Meta:
        db_table = "mobile_orders"
        verbose_name = "Mobile Order"
        verbose_name_plural = "Mobile Orders"
        ordering = ['-order_price', ]


class MobileDevice(models.Model):
    """
    All mobile device data for both sales people and retailers
    """
    user = models.ForeignKey(
        "netbotAuth.User", on_delete=models.CASCADE, related_name="devices")
    device_id = models.CharField(max_length=255, verbose_name="Device Id")

    class Meta:
        db_table = "mobile_devices"
        verbose_name_plural = "Mobile Device"
        verbose_name = 'Mobile Device'
