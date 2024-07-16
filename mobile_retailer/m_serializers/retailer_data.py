"""
Retailer Data Serializers
"""
import datetime
import parser

from django.db.models import Sum, Q

from distributor.commons import retailer_price_list_product_price as retp
from dateutil.relativedelta import relativedelta
from django.utils import timezone
from djmoney.money import Money
from rest_framework import serializers

from distributor.models import Distributor, Product, WorldCountry, WorldCity, PCategory, PriceOffer, MobileBanner, \
    RetailOrders, DistOrder, SalesMan, MNotification, Retailer, RetailerProfile
from mobile_retailer.models import RetailerUser, RetailerCart
from retailer.serializers import ProductSerializer, RetailerSerializer, MUnitSerializer, \
    ProductCategorySerializer, ProductImageSerializer, CustomColorsSerializer


class V1CitySerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedModelSerializer(read_only=True)

    class Meta:
        model = WorldCity
        fields = '__all__'


class V1CountrySerializer(serializers.ModelSerializer):
    # url = serializers.HyperlinkedModelSerializer(read_only=False)
    cities = V1CitySerializer(read_only=True, many=True)

    class Meta:
        model = WorldCountry
        fields = '__all__'


class V1DistributorSerializer(serializers.HyperlinkedModelSerializer):
    country = V1CountrySerializer(many=False, read_only=True)
    state = V1CitySerializer(many=False, read_only=True)
    url = serializers.HyperlinkedModelSerializer(read_only=True)

    class Meta:
        model = Distributor
        fields = ['id', 'url', 'state', 'country']


class V1ProductSerializer(serializers.HyperlinkedModelSerializer):
    distributor = V1DistributorSerializer(read_only=True)
    url = serializers.HyperlinkedModelSerializer(read_only=True)

    class Meta:
        model = Product
        fields = '__all__'


class V1ProductCategorySerializer(serializers.HyperlinkedModelSerializer):
    distributor = V1DistributorSerializer(read_only=True)
    url = serializers.HyperlinkedModelSerializer(read_only=False)

    class Meta:
        model = PCategory
        fields = '__all__'


class OffersSerializer(serializers.ModelSerializer):
    x_item = serializers.SerializerMethodField(allow_null=True, read_only=True)
    y_item = serializers.SerializerMethodField(allow_null=True, read_only=True)
    date_to = serializers.SerializerMethodField(allow_null=True, read_only=True)

    def get_date_to(self, obj):
        today = obj.date_to
        to_add_from = datetime.datetime(today.year, today.month, today.day, 0, 0, 0)
        to_add_from = to_add_from + relativedelta(days=1)
        date_to = to_add_from.date()

        return date_to

    def get_x_item(self, obj):
        if not obj.x_item:
            return None
        return ProductSerializerM(obj.x_item).data

    def get_y_item(self, obj):
        if not obj.y_item:
            return None
        return ProductSerializerM(obj.y_item).data

    class Meta:
        model = PriceOffer
        fields = '__all__'


class MobileBannerSerializer(serializers.ModelSerializer):
    product = serializers.SerializerMethodField(allow_null=True, read_only=True)
    offer = OffersSerializer(many=False, read_only=True)

    class Meta:
        model = MobileBanner
        fields = '__all__'

    def get_product(self, obj):
        if not obj.status == 'Product':
            return None
        return ProductSerializerM(obj.product).data


class DistOrderSerializer(serializers.ModelSerializer):
    product = serializers.SerializerMethodField(read_only=True)
    order_price = serializers.SerializerMethodField()
    total_qty = serializers.SerializerMethodField()
    per_price = serializers.SerializerMethodField()

    def get_order_price(self, obj):
        return str(obj.order_price)

    def get_total_qty(self, obj):
        return obj.qty

    def get_per_price(self, obj):
        return str(Money(f"{obj.per_price}", obj.product.price.currency))

    def get_product(self, obj):
        return ProductSerializerM(obj.product).data

    class Meta:
        model = DistOrder
        fields = '__all__'


class DistributorSerializer(serializers.ModelSerializer):
    about = serializers.SerializerMethodField()
    terms = serializers.SerializerMethodField()
    privacy = serializers.SerializerMethodField()

    def get_about(self, obj):
        return obj.distributor_v_options.about_company

    def get_terms(self, obj):
        return obj.distributor_v_options.terms_company

    def get_privacy(self, obj):
        return obj.distributor_v_options.privacy_company

    class Meta:
        model = Distributor
        exclude = ['country', 'state']


class RetailOrdersSerializer(serializers.ModelSerializer):
    ret_orders = DistOrderSerializer(many=True, read_only=True)
    distributor = DistributorSerializer(read_only=True)
    total_cost = serializers.SerializerMethodField(read_only=True)
    when_placed = serializers.SerializerMethodField(read_only=True)
    salesman = serializers.SerializerMethodField(read_only=True)
    retailer = serializers.SerializerMethodField(read_only=True)
    ref_number = serializers.SerializerMethodField()
    # transports = serializers.SerializerMethodField()

    def get_total_cost(self, obj):
        return str(obj.total_cost)

    def get_when_placed(self, obj):
        return obj.when_placed.strftime("%B %d, %Y,%I:%M %p")

    def get_salesman(self, obj):
        if obj.salesman is not None:
            salesman = dict()
            salesman['id'] = obj.salesman.id
            salesman['name'] = f"{obj.salesman.first_name} {obj.salesman.last_name}"
            salesman['phone'] = f"{obj.salesman.phone}"
            # salesman = f"{obj.salesman.last_name}({obj.salesman.phone})"
            return salesman
        else:
            return None

    def get_retailer(self, obj):
        retailer = obj.retailer
        ret = dict()
        ret['id'] = retailer.id
        ret['name'] = retailer.name
        ret['phone'] = retailer.phone

        # return f"{retailer.name}"
        return ret

    def get_ref_number(self, obj):
        distributor_name = obj.distributor.name
        v_ref = "NET" + "00" + str(obj.ref_number)
        if len(distributor_name) > 1:
            split_word = distributor_name.split(' ')

            if len(split_word) > 1:
                first_character = split_word[0][:1]
                second_character = split_word[1][:1]
                v_ref = str(first_character) + str(second_character) + "00" + str(obj.ref_number)
            else:
                v_ref = str(distributor_name[:1]) + str(distributor_name[:2]) + "00" + str(obj.ref_number)
        else:
            v_ref = str(distributor_name) + "00" + str(obj.ref_number)

        return v_ref.upper()

    # def get_transports(self, obj):
    #     return obj.transport_details

    class Meta:
        model = RetailOrders
        fields = '__all__'


class SalesManSerializer(serializers.ModelSerializer):
    distributor = DistributorSerializer(read_only=True)
    retailers = serializers.SerializerMethodField()

    def get_retailers(self, obj):
        return RetailerMobileSerializer(obj.retailers_, many=True).data

    class Meta:
        model = SalesMan
        fields = '__all__'


class PushNotificationSerializer(serializers.ModelSerializer):
    # product = ProductSerializer(read_only=True)
    # offer = OffersSerializer(read_only=True)

    class Meta:
        model = MNotification
        fields = '__all__'


class RetailerMobileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Retailer
        exclude = ['distributors', 'salesmen']


class ProductSerializerM(serializers.ModelSerializer):
    product_images = ProductImageSerializer(many=True, read_only=True)
    units = MUnitSerializer(many=False, read_only=True)
    colors = CustomColorsSerializer(many=True, read_only=True)
    cart_qty = serializers.SerializerMethodField(required=False, allow_null=True)
    is_favorite = serializers.SerializerMethodField(default=False)
    price_s = serializers.SerializerMethodField(required=False, allow_null=True)
    slabs = serializers.SerializerMethodField(required=False, allow_null=True)
    description = serializers.SerializerMethodField(required=False, allow_null=True)
    is_new_arrival = serializers.SerializerMethodField(required=False)

    def __init__(self, *args, **kwargs):
        retailer_id = kwargs.pop('retailer_id', None)
        super(ProductSerializerM, self).__init__(*args, **kwargs)
        self.retailer_id = retailer_id

    def get_is_favorite(self, obj):
        retailer = RetailerUser.objects.filter(retailer_id=self.retailer_id).first()
        if retailer is None:
            return False
        if obj in retailer.favorite_products.all():
            return True
        return False

    def get_cart_qty(self, obj):
        cart_qty = 0
        ret_user = RetailerUser.objects.filter(retailer_id=self.retailer_id).first()
        if ret_user is None:
            return cart_qty
        cart = RetailerCart.objects.filter(retailer=ret_user.retailer).first()
        if cart is None:
            return cart_qty
        cart_qty = cart.orders.filter(product_id=obj.id).aggregate(Sum('qty')).get("qty__sum")
        if cart_qty is None:
            return 0
        print("Got Cart Quantity", cart_qty)
        return cart_qty

    def get_price_s(self, obj):
        try:
            retailer = Retailer.objects.filter(id=self.retailer_id).first()
            return str(retp(obj.distributor, retailer, obj, self.get_cart_qty(obj)))
        except Exception as e:
            print(e)
            return str(obj.price)

    def get_slabs(self, obj):
        return []

    def get_description(self, obj):
        return " "

    def get_is_new_arrival(self, obj):
        today = timezone.now()
        one_month_ago = today - relativedelta(months=1)
        if obj.when_created >= one_month_ago or obj.is_new_arrival:
            print("Found One")
            return True
        return False

    class Meta:
        model = Product
        fields = '__all__'


class PCategorySerializerM(serializers.ModelSerializer):
    productcount = serializers.SerializerMethodField(read_only=True, default=0)
    sub_categories = serializers.SerializerMethodField(read_only=True)
    description = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = PCategory
        fields = '__all__'

    def get_productcount(self, obj):
        product_count = Product.objects.filter(category_id=obj.id).count()
        return product_count

    def get_sub_categories(self, obj):
        return list(obj.sub_categories.order_by('id').values_list('id', flat=True))

    def get_description(self, obj):
        return " "


class ProductSerializerSa(serializers.ModelSerializer):
    product_images = ProductImageSerializer(many=True, read_only=True)
    units = MUnitSerializer(many=False, read_only=True)
    colors = CustomColorsSerializer(many=True, read_only=True)
    cart_qty = serializers.SerializerMethodField(required=False, allow_null=True)
    is_favorite = serializers.SerializerMethodField(default=False)
    price_s = serializers.SerializerMethodField(required=False, allow_null=True)
    slabs = serializers.SerializerMethodField(required=False, allow_null=True)
    description = serializers.SerializerMethodField(required=False, allow_null=True)
    is_new_arrival = serializers.SerializerMethodField(required=False)

    def __init__(self, *args, **kwargs):
        retailer_id = kwargs.pop('retailer_id', None)
        salesman_id = kwargs.pop('salesman_id', None)
        super(ProductSerializerSa, self).__init__(*args, **kwargs)
        self.retailer_id = retailer_id
        self.salesman_id = salesman_id

    def get_is_favorite(self, obj):
        retailer = RetailerUser.objects.filter(retailer_id=self.retailer_id).first()
        if retailer is None:
            return False
        if obj in retailer.favorite_products.all():
            return True
        return False

    def get_cart_qty(self, obj):
        cart_qty = 0
        salesman = SalesMan.objects.filter(id=self.salesman_id).first()
        retailer = Retailer.objects.filter(id=self.retailer_id).first()
        if not salesman or not retailer:
            return cart_qty
        cart = salesman.cart

        cart_qty = cart.orders.filter(product_id=obj.id, retailer=retailer).aggregate(Sum('qty')).get("qty__sum")
        if cart_qty is None:
            return 0
        print("Got Cart Quantity", cart_qty)
        return cart_qty

    def get_price_s(self, obj):
        try:
            retailer = Retailer.objects.filter(id=self.retailer_id).first()
            return str(retp(obj.distributor, retailer, obj, self.get_cart_qty(obj)))
        except Exception as e:
            print(e)
            return str(obj.price)

    def get_slabs(self, obj):
        return []

    def get_description(self, obj):
        return " "

    def get_is_new_arrival(self, obj):
        today = timezone.now()
        one_month_ago = today - relativedelta(months=1)
        if obj.when_created >= one_month_ago or obj.is_new_arrival:
            print("Found One")
            return True
        return False

    class Meta:
        model = Product
        fields = '__all__'
