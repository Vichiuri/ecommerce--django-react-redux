
"""
Mobile Data Models For Sales People
"""

from djmoney.models.fields import MoneyField
from django.db import models


class SalesManCart(models.Model):
    """
    Salesman Cart
    """
    salesman = models.OneToOneField("distributor.SalesMan", verbose_name="Retailer", on_delete=models.CASCADE,
                                    related_name="sales_person_cart")
    orders = models.ManyToManyField("mobile_retailer.MobileOrder", verbose_name="Ordered Items", blank=True)

    # @property
    def cart_totals(self, retailer_id):
        total_price = sum(self.orders.filter(retailer_id=retailer_id).values_list('order_price', flat=True))
        return total_price

    def cart_qty(self, retailer):
        try:
            return self.orders.filter(retailer=retailer).count()
        except Exception as e:
            print(str(e))
            return 0
    # def product_cart

    @property
    def retailers(self):
        """
        returns:
            Retailers attached to cart
        """
        retailers = list()
        for order in self.orders.all():
            if not order.retailer in retailers:
                retailers.append(order.retailer)
        return retailers

    class Meta:
        db_table = "sales_person_cart"
        verbose_name = "Sales Person Cart"
        verbose_name_plural = "Sales People Carts"


class SalesPersonOrder(models.Model):
    distributor = models.ForeignKey("distributor.Distributor", verbose_name="Product Distributor",
                                    related_name="distributor_sales_people_orders", on_delete=models.CASCADE)
    salesman = models.ForeignKey("distributor.SalesMan", verbose_name="Sales Person", on_delete=models.CASCADE)
    product = models.ForeignKey("distributor.Product", on_delete=models.CASCADE, related_name="salesP_order_product")
    price_offers = models.ManyToManyField("distributor.PriceOffer", blank=True)
    order_date = models.DateTimeField(auto_now_add=True, verbose_name="Ordering Date", editable=False)
    qty = models.PositiveIntegerField(verbose_name=" Quantity ")
    placed = models.BooleanField(editable=False, default=False)
    order_price = MoneyField(max_digits=14, decimal_places=2, verbose_name="Order Price", default_currency='KES')
    applied_offer = models.CharField(verbose_name="Applied Offer", max_length=100, null=True, blank=True)
    variant = models.TextField(verbose_name="Product Variant", null=True, blank=True)
    free_qty = models.PositiveIntegerField(verbose_name='free_qty', default=0)
    total_qty = models.PositiveIntegerField(verbose_name='total_qty', default=0)
    offer_id = models.PositiveIntegerField(verbose_name="Offer_id", null=True, blank=True)

    def __str__(self):
        return "Order By " + self.salesman.last_name + " Product:" + self.product.name + " Quantity " + str(self.qty)

    class Meta:
        db_table = "salesman_orders"
        verbose_name = "Order By Sales Person"
        verbose_name_plural = " Orders By Sales People"
        ordering = ['-order_price', ]
