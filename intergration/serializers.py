from distributor.models.distributor import DistOrder, PCategory, PartialDelivery, PriceOffer, Product, RetailOrders, Retailer, RetailerProfile, SalesMan
from intergration.models import DistributorSalt, DistributorToken
from rest_framework import serializers
from retailer.api import Delivery
from retailer.serializers import BrandSerializer, CustomColorsSerializer, DistAreaSerializer, DistCitySerializer, DistRegionSerializer, DistributorSerializer, MUnitSerializer, PartialOrdersSeriliazer, PriceLevelSerializer, PriceOfferSerializer, PriceProductSerializer, ProductCategorySerializer, ProductImageSerializer, ProductSerializer, RetOrderProfileSerializer, RetailOrderDispatchOrderSerializer, RetailOrdersSerializer


class DistributorTokenSerializer(serializers.ModelSerializer):

    distributor = DistributorSerializer(many=False, read_only=True)
    class Meta:
        model = DistributorToken
        fields = '__all__'
        # exclude = ['salt','distributor']

class DistributorSaltSerailizer(serializers.ModelSerializer):
    class Meta:
        model = DistributorSalt
        fields = '__all__'



class IntergratedProductSerializer(serializers.ModelSerializer):
    product_images = ProductImageSerializer(many=True, read_only=True)
    category = ProductCategorySerializer(many=False, read_only=True)
    branding = BrandSerializer(many=False, read_only=True)
    units = MUnitSerializer(many=False, read_only=True)
    colors = CustomColorsSerializer(many=True, read_only=True)
    class Meta:
        model = Product
        exclude = ['distributor', 'created_by']
        # fields = ['name', 'product_code', 'price',
        #             'stock_qty','size','created_by','brief_description', 
        #             'category','product_images','branding','units','colors']
        # read_only_fields = ['distributor']


class PriceOfferAPISerializer(serializers.ModelSerializer):
    x_item = PriceProductSerializer(many=False, read_only=True)
    y_item = PriceProductSerializer(many=False, read_only=True)

    class Meta:
        model = PriceOffer
        exclude = ['distributor']



class DeliveryAPISerializer(serializers.ModelSerializer):
    order = RetailOrderDispatchOrderSerializer(many=False, read_only=True)

    class Meta:
        model = Delivery
        exclude = ['distributor']


class PartialDeliveryAPISerializer(serializers.ModelSerializer):
    current_orders = PartialOrdersSeriliazer(many=True, read_only=True)
    previous_order = RetailOrdersSerializer(many=False, read_only=True)

    class Meta:
        model = PartialDelivery
        fields = '__all__'


class PCategoryAPISerializer(serializers.ModelSerializer):
    productcount = serializers.SerializerMethodField(read_only=True, default=0)
    sub_categories = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = PCategory
        fields = '__all__'
        read_only_fields = ['distributor']

    def get_productcount(self, obj):
        product_count = Product.objects.filter(category_id=obj.id).count()
        return product_count

    def get_sub_categories(self, obj):
        return []

class DistOrderAPISerializer(serializers.ModelSerializer):
    price_offers = PriceOfferSerializer(many=True, read_only=True)
    product = ProductSerializer(many=False, read_only=True)

    class Meta:
        model = DistOrder
        exclude = ['distributor', 'submitted_by']
        read_only_fields = ['per_price', 'order_price']


class RetailOrderSalesManAPISerializer(serializers.ModelSerializer):
    class Meta:
        model = SalesMan
        fields = ['first_name', 'last_name', 'phone', 'email']



class RetailerAPISerializer(serializers.ModelSerializer):
    distributors = DistributorSerializer(many=True, read_only=True)

    class Meta:
        model = Retailer
        fields = '__all__'
        
class SalesManAPISerializer(serializers.ModelSerializer):
    retailers = RetailerAPISerializer(many=True, read_only=True)

    class Meta:
        model = SalesMan
        fields = '__all__'


class RetailerProfileAPISerializer(serializers.ModelSerializer):
    region = DistRegionSerializer(many=False, read_only=True)
    city = DistCitySerializer(many=False, read_only=True)
    area = DistAreaSerializer(many=False, read_only=True)
    price_level = PriceLevelSerializer(read_only=True, many=False)
    retailer = RetailerAPISerializer(many=False, read_only=True)
    salesman = SalesManAPISerializer(many=False, read_only=True)

    class Meta:
        model = RetailerProfile
        fields = '__all__'
        read_only_fields = ['distributor', 'created_by', 'retailer', 'id']


class RetailOrdersAPISerializer(serializers.ModelSerializer):
    retailer = serializers.SerializerMethodField()
    salesman = serializers.SerializerMethodField()
    price_level = serializers.SerializerMethodField()
    ref_number = serializers.SerializerMethodField()

    def get_salesman(self, obj):
        salesman = obj.salesman
        if salesman is None:
            salesman = SalesMan.objects.filter(
                distributor=obj.distributor).first()
        return {
            'id': salesman.id,
            'first_name': salesman.first_name,
            'last_name': salesman.last_name,
        }

    def get_retailer(self, obj):
        retail_profile = RetailerProfile.objects.filter(
            distributor=obj.distributor, retailer=obj.retailer).first()
        profile = RetOrderProfileSerializer(retail_profile, many=False).data
        return profile

    def get_price_level(self, obj):
        if obj.price_level:
            return {
                'id': obj.price_level.id,
                'level_name': obj.price_level.level_name
            }
        else:
            return None

    def get_ref_number(self, obj):
        distributor_name = obj.distributor.name
        v_ref = "NET" + "00" + str(obj.ref_number)
        if len(distributor_name) > 1:
            split_word = distributor_name.split(' ')

            if len(split_word) > 1:
                first_character = split_word[0][:1]
                second_character = split_word[1][:1]
                v_ref = str(first_character) + \
                    str(second_character) + "00" + str(obj.ref_number)
            else:
                v_ref = str(
                    distributor_name[:1]) + str(distributor_name[:2]) + "00" + str(obj.ref_number)
        else:
            v_ref = str(distributor_name) + "00" + str(obj.ref_number)

        return v_ref.upper()

    class Meta:
        model = RetailOrders
        fields = '__all__'
        read_only_fields = ['distributor', 'created_by', 'altered_by']
