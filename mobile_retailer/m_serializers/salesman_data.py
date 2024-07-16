"""
Salesman Models Serializers
"""
from djmoney.money import Money
from rest_framework import serializers
from mobile_retailer.m_serializers.retailer_data import RetailerMobileSerializer
from mobile_retailer.models import SalesManCart, SalesPersonOrder, MobileOrder


class SalesCartSerializer(serializers.ModelSerializer):
    orders = serializers.SerializerMethodField()
    total = serializers.SerializerMethodField()

    def __init__(self, *args, **kwargs):
        retailer_id = kwargs.pop('retailer_id', None)
        super(SalesCartSerializer, self).__init__(*args, **kwargs)
        self.retailer_id = retailer_id

    def get_orders(self, obj):
        orders = obj.orders.all()
        if obj.orders.count() < 1:
            return []
        if self.retailer_id is not None:
            orders = obj.orders.filter(retailer_id=self.retailer_id)
            # orders = obj.orders.filter().order_by('retailer')
        return MobileOrderSerializerM(orders, many=True).data

    def get_total(self, obj):
        totals = Money(f"{obj.cart_totals(self.retailer_id)}", "KES")
        return str(totals)

    class Meta:
        model = SalesManCart
        fields = '__all__'


class SalesPersonOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalesPersonOrder
        exclude = ['salesman', ]


class MobileOrderSerializerM(serializers.ModelSerializer):
    product = serializers.SerializerMethodField(allow_null=True)
    # distributor = DistributorSerializer(many=False, read_only=True)
    order_price = serializers.SerializerMethodField()
    per_price = serializers.SerializerMethodField(allow_null=True)
    retailerm = serializers.SerializerMethodField()

    def get_order_price(self, obj):
        return str(obj.order_price)

    def get_per_price(self, obj):
        return str(Money(f"{obj.per_price}", obj.product.price.currency))

    def get_product(self, obj):
        from mobile_retailer.m_serializers.retailer_data import ProductSerializerM
        return ProductSerializerM(obj.product).data

    def get_retailerm(self, obj):
        return RetailerMobileSerializer(obj.retailer).data
    class Meta:
        model = MobileOrder
        fields = '__all__'
