"""
* Serializers for retailers and distributor views

"""
from django.db.models import fields, Sum
from distributor.commons import retailer_price_list_product_price as retp

from rest_framework import serializers
from distributor.models.distributor import *
from django.contrib.auth import authenticate
from distributor.models.netbot import *
from netbotAuth.models.users import User
from distributor.models.netbot import DistUsers
from mobile_retailer.models import RetailerCart, MobileOrder, RetailerUser


# from NetbotAuth

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['email'], validated_data['password']
        )
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")


class DistOptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DistributorOptions
        fields = '__all__'


class RetailerDistributorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Distributor
        fields = ['id', 'name', 'kra', 'email', 'logo']


class DistriButorUserSerializer(serializers.ModelSerializer):
    dist_options = serializers.SerializerMethodField()
    distributor = RetailerDistributorSerializer(many=False, read_only=True)

    def get_dist_options(self, obj):
        dist_settings = DistributorOptions.objects.filter(
            distributor=obj.distributor)
        if dist_settings.first():
            view_options = DistOptionsSerializer(dist_settings.first()).data
        else:
            save_settings = DistributorOptions(distributor=obj.distributor)
            save_settings.save()
            view_options = DistOptionsSerializer(save_settings).data
        return view_options

    class Meta:
        model = DistUsers
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email']


class StateSeriliazer(serializers.ModelSerializer):
    class Meta:
        model = WorldCity
        fields = '__all__'


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = WorldCountry
        fields = '__all__'


# from netbot.py
class DistributorSerializer(serializers.ModelSerializer):
    country = CountrySerializer(many=False, read_only=True)
    state = StateSeriliazer(many=False, read_only=True)
    about_company = serializers.SerializerMethodField(read_only=True)

    def get_about_company(self, obj):
        return obj.dist_details

    class Meta:
        model = Distributor
        fields = ['id', 'name', 'email', 'email2', 'phone', 'phone2', 'website', 'country', 'state', 'address',
                  'description', 'category', 'logo', 'kra', 'about_company']


class EmailSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DistEmailSettings
        fields = '__all__'


class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = '__all__'


class SubscriptionHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubscriptionHistory
        fields = '__all__'


class DistPermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DistPermission
        fields = '__all__'


class PermissionGroupSerializer(serializers.ModelSerializer):
    permission = DistPermissionSerializer(many=False, read_only=True)
    view_users = serializers.SerializerMethodField()

    def get_view_users(self, obj):
        return DistUsers.objects.filter(permission_group=obj).count()

    class Meta:
        model = PermissionGroup
        fields = '__all__'


class DistUserSerializer(serializers.ModelSerializer):
    permission_group = PermissionGroupSerializer(many=False, read_only=True)
    user = UserSerializer(many=False, read_only=True)

    class Meta:
        model = DistUsers
        fields = '__all__'


class NetbotPermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = NetBotPermission
        fields = '__all__'


class NetbotPermissionGroupSerializer(serializers.ModelSerializer):
    permission_group = PermissionGroupSerializer(many=False, read_only=True)

    class Meta:
        model = NetBotPermissionGroup
        fields = '__all__'


class NetbotUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NetBotUser
        fields = '__all__'


# from distributor.py
class PCategorySerializer(serializers.ModelSerializer):
    productcount = serializers.SerializerMethodField(read_only=True, default=0)
    sub_categories = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = PCategory
        fields = '__all__'

    def get_productcount(self, obj):
        product_count = Product.objects.filter(category_id=obj.id).count()
        return product_count

    def get_sub_categories(self, obj):
        return []


class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = '__all__'


class DistCitySerializer(serializers.ModelSerializer):
    class Meta:
        model = DistCity
        fields = '__all__'


class DistRegionSerializer(serializers.ModelSerializer):
    region_cities = DistCitySerializer(many=True, read_only=True)

    class Meta:
        model = DistRegion
        fields = '__all__'


class DistAreaSerializer(serializers.ModelSerializer):
    city = DistCitySerializer(many=False, read_only=True)

    class Meta:
        model = DistArea
        fields = '__all__'


class PriceLevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceLevel
        fields = '__all__'


class RetailerStaticsViewSerializer(serializers.ModelSerializer):
    order_count = serializers.SerializerMethodField()
    retailer_profile = serializers.SerializerMethodField()

    def get_order_count(self, obj):
        retail_orders = RetailOrders.objects.filter(
            retailer=obj, when_approved__isnull=False)
        orders_count = retail_orders.count()
        revenue_count = retail_orders.aggregate(Sum('total_cost'))
        total_count = 0
        if revenue_count['total_cost__sum']:
            total_count += revenue_count['total_cost__sum']
        return {
            'orders_count': orders_count,
            'revenue_count': total_count
        }

    def get_retailer_profile(self, obj):
        profile_view = RetailerProfile.objects.filter(retailer=obj).first()
        return RetailerProfileSerializer(profile_view, many=False).data

    class Meta:
        model = Retailer
        fields = '__all__'


class RetailerSerializer(serializers.ModelSerializer):
    distributors = DistributorSerializer(many=True, read_only=True)

    class Meta:
        model = Retailer
        fields = '__all__'


class RetailerUserSerializer(serializers.ModelSerializer):
    retail_profile = serializers.SerializerMethodField()
    default_distributor = serializers.SerializerMethodField()

    def get_retail_profile(self, obj):
        v_retailer = RetailerProfile.objects.filter(
            retailer=obj.retailer).first()

        if v_retailer:
            return RetailerProfileSerializer(v_retailer).data
        else:
            return None

    def get_default_distributor(self, obj):
        if obj.default_distributor:
            return RetailerDistributorSerializer(obj.default_distributor).data
        elif obj.retailer.distributors.count() > 0:
            return RetailerDistributorSerializer(obj.retailer.distributors.all().first()).data
        else:
            return None

    class Meta:
        model = RetailerUser
        fields = '__all__'


class SalesManSerializer(serializers.ModelSerializer):
    retailers = RetailerSerializer(many=True, read_only=True)

    class Meta:
        model = SalesMan
        fields = '__all__'


class RetailerProfileSerializer(serializers.ModelSerializer):
    region = DistRegionSerializer(many=False, read_only=True)
    city = DistCitySerializer(many=False, read_only=True)
    area = DistAreaSerializer(many=False, read_only=True)
    price_level = PriceLevelSerializer(read_only=True, many=False)
    retailer = RetailerSerializer(many=False, read_only=True)
    salesman = SalesManSerializer(many=False, read_only=True)

    class Meta:
        model = RetailerProfile
        fields = '__all__'


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = '__all__'


class MUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = MUnit
        fields = '__all__'


class CustomColorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomColors
        fields = '__all__'


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PCategory
        fields = ['id', 'name']


class P_CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PCategory
        fields = ['id']


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    product_images = ProductImageSerializer(many=True, read_only=True)
    category = ProductCategorySerializer(many=False, read_only=True)
    branding = BrandSerializer(many=False, read_only=True)
    units = MUnitSerializer(many=False, read_only=True)
    colors = CustomColorsSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = '__all__'


class ProductPriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductPrice
        fields = '__all__'


class PriceProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'units', 'price',
                  'stock_qty', 'colors', 'brand', 'size']


class PriceOfferSerializer(serializers.ModelSerializer):
    x_item = PriceProductSerializer(many=False, read_only=True)
    y_item = PriceProductSerializer(many=False, read_only=True)

    class Meta:
        model = PriceOffer
        fields = '__all__'


class DistOrderSerializer(serializers.ModelSerializer):
    price_offers = PriceOfferSerializer(many=True, read_only=True)
    product = ProductSerializer(many=False, read_only=True)

    class Meta:
        model = DistOrder
        fields = '__all__'


class RetailOrderSalesManSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalesMan
        fields = ['first_name', 'last_name', 'phone', 'email']


class DistForRetOrderSerializer(serializers.ModelSerializer):
    price_offers = PriceOfferSerializer(many=True, read_only=True)
    product = PriceProductSerializer(many=False, read_only=True)

    class Meta:
        model = DistOrder
        fields = '__all__'


class RetOrderSalesmanSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalesMan
        fields = ['id', 'first_name', 'last_name']


class RetOrderProfileSerializer(serializers.ModelSerializer):
    retailer = serializers.SerializerMethodField()
    salesman = RetOrderSalesmanSerializer(many=False, read_only=True)
    price_level = PriceLevelSerializer(many=False, read_only=True)
    city = serializers.SerializerMethodField()

    def get_retailer(self, obj):
        return {
            'id': obj.retailer.id,
            'name': obj.retailer.name
        }

    def get_city(self, obj):
        if obj.city is not None:
            return {
                'id': obj.city.id,
                'name': obj.city.name,
            }
        else:
            return None

    class Meta:
        model = RetailerProfile
        fields = ['id', 'contact_name', 'contact_phone',
                  'contact_email', 'city', 'salesman', 'retailer', 'price_level']


class RetailOrdersSerializer(serializers.ModelSerializer):
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


class RetailOrderDispatchOrderSerializer(serializers.ModelSerializer):
    ret_orders = DistForRetOrderSerializer(many=True, read_only=True)
    retailer = serializers.SerializerMethodField()
    salesman = serializers.SerializerMethodField()
    price_level = serializers.SerializerMethodField()
    ref_number = serializers.SerializerMethodField()

    def get_salesman(self, obj):
        return {
            'id': obj.salesman.id,
            'first_name': obj.salesman.first_name,
            'last_name': obj.salesman.last_name,
            'email': obj.salesman.email,
            'phone': obj.salesman.phone
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


class RetailOrdersStatsSeriliazer(serializers.ModelSerializer):
    ret_orders = DistOrderSerializer(many=True, read_only=True)

    class Meta:
        model = RetailOrders
        fields = ['id', 'ret_orders', 'total_cost', 'when_placed',
                  'when_approved', 'when_declined', 'when_dispatched']


class DeliverySerializer(serializers.ModelSerializer):
    order = RetailOrderDispatchOrderSerializer(many=False, read_only=True)

    class Meta:
        model = Delivery
        fields = '__all__'


class PartialOrdersSeriliazer(serializers.ModelSerializer):
    product = ProductSerializer(many=False, read_only=True)
    free_qty = serializers.SerializerMethodField()
    delivered_qty = serializers.SerializerMethodField()
    view_qty = serializers.SerializerMethodField()

    def get_free_qty(self, obj):
        return obj.dist_order.free_qty

    def get_delivered_qty(self, obj):
        return obj.dist_order.delivered_qty

    def get_view_qty(self, obj):
        return obj.dist_order.qty

    class Meta:
        model = PartialOrders
        fields = '__all__'


class PartialDeliverySerializer(serializers.ModelSerializer):
    current_orders = PartialOrdersSeriliazer(many=True, read_only=True)
    previous_order = RetailOrdersSerializer(many=False, read_only=True)

    class Meta:
        model = PartialDelivery
        fields = '__all__'


class MThemesSerializer(serializers.ModelSerializer):
    class Meta:
        model = MThemes
        fields = '__all__'


class ViewDistRegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DistRegion
        fields = '__all__'


class MNotificationSerializer(serializers.ModelSerializer):
    product = ProductSerializer(many=False, read_only=True)
    offer = PriceOfferSerializer(many=False, read_only=True)
    region = ViewDistRegionSerializer(many=False, read_only=True)
    city = DistCitySerializer(many=False, read_only=True)
    area = DistAreaSerializer(many=False, read_only=False)

    class Meta:
        model = MNotification
        fields = '__all__'


class DistUserNotificationSeriliazer(serializers.ModelSerializer):
    class Meta:
        model = DistUsers
        fields = ['id', 'first_name', 'last_name', 'phone', 'pic']


class DistNotificationsSeriliazer(serializers.ModelSerializer):
    action_by = DistUserNotificationSeriliazer(many=False, read_only=False)
    seen = serializers.SerializerMethodField()

    def get_seen(self, obj):
        viewed = False
        dist_id = self.context.get("dist_id")
        dist_user = obj.seen_by.filter(id=dist_id).first()
        if dist_user:
            viewed = True
        else:
            viewed = False

        return viewed

    class Meta:
        model = DistNotifications
        fields = '__all__'


class ViewDistNotificationsSeriliazer(serializers.ModelSerializer):
    action_by = DistUserNotificationSeriliazer(many=False, read_only=False)
    seen = serializers.SerializerMethodField()

    def get_seen(self, obj):
        viewed = False
        dist_id = self.context.get("dist_id")
        dist_user = obj.seen_by.filter(id=dist_id).first()
        if dist_user:
            viewed = True
        else:
            viewed = False

        return viewed

    class Meta:
        model = DistNotifications
        exclude = ['seen_by', 'un_seen_by']


class ProductPackageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductPackage
        fields = '__all__'


class RetailerTypeSerializer(serializers.ModelSerializer):
    retailers = RetailerSerializer(many=True, read_only=True)

    class Meta:
        model = RetailerType
        fields = '__all__'


class CompoundUnitSerializer(serializers.ModelSerializer):
    first_unit = MUnitSerializer(many=False, read_only=True)
    second_unit = MUnitSerializer(many=False, read_only=True)

    class Meta:
        model = CompoundUnit
        fields = '__all__'


class PriceListSerializer(serializers.ModelSerializer):
    product = ProductSerializer(many=False, read_only=True)

    class Meta:
        model = PriceList
        fields = '__all__'


class PriceListProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceList
        fields = '__all__'


class ProductPriceListSeriazer(serializers.ModelSerializer):
    price_list = serializers.SerializerMethodField()

    def get_price_list(self, obj):
        period = self.context.get("period")
        price_level = self.context.get("price_level")
        price_list_query = PriceList.objects.filter(product=obj)

        if period:
            viewItems = price_list_query.filter(date_from__gte=period)
            price_list_query = viewItems
        if price_level:
            viewItems2 = price_list_query.filter(price_level_id=price_level)
            price_list_query = viewItems2

        final_item = price_list_query.order_by('-max_amount').first()
        return PriceListProductSerializer(final_item, many=False).data

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'category', 'price_list']


# class ProductPriceListSerializer(serializers.ModelSerializer):
#     prod_prices = PriceListSerializer(many=True, read_only=True)

#     class Meta:
#         model = Product
#         fields = '__all__'

class ViewSalesMenOnTargetSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalesMan
        fields = '__all__'


class SalesTargetSerializer(serializers.ModelSerializer):
    salesmen = ViewSalesMenOnTargetSerializer(many=True, read_only=True)

    class Meta:
        model = SalesTargetGroup
        fields = '__all__'


class RetailerContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = RetailerContacts
        fields = '__all__'


class MobileOrderSerializer(serializers.ModelSerializer):
    product = serializers.SerializerMethodField(allow_null=True)
    # distributor = DistributorSerializer(many=False, read_only=True)
    order_price = serializers.SerializerMethodField()
    per_price = serializers.SerializerMethodField(allow_null=True)
    retailer_name = serializers.SerializerMethodField()

    def get_order_price(self, obj):
        return str(obj.order_price)

    def get_per_price(self, obj):
        return str(Money(f"{obj.per_price}", obj.product.price.currency))

    def get_product(self, obj):
        from mobile_retailer.m_serializers.retailer_data import ProductSerializerM
        return ProductSerializerM(obj.product).data

    def get_retailer_name(self, obj):
        return f"{obj.retailer.name} ({obj.retailer.phone})"

    class Meta:
        model = MobileOrder
        fields = '__all__'


class RetailerCartSerializer(serializers.ModelSerializer):
    orders = serializers.SerializerMethodField()
    total = serializers.SerializerMethodField()

    def __init__(self, *args, **kwargs):
        salesman_id = kwargs.pop('salesman_id', None)
        super(RetailerCartSerializer, self).__init__(*args, **kwargs)
        self.salesman_id = salesman_id

    def get_total(self, obj):
        viewTotal = 0
        for order in obj.orders.all():
            viewTotal += order.order_price
        return str(viewTotal)

    def get_orders(self, obj):
        if self.salesman_id is not None:
            salesman = SalesMan.objects.filter(id=self.salesman_id).first()
            if salesman is None:
                ...
                # print("No salesman With Id", self.salesman_id)
            else:
                # print("Got salesman", salesman)
                orders_ = obj.orders.filter(distributor=salesman.distributor)
                return MobileOrderSerializer(orders_, many=True).data

        return MobileOrderSerializer(obj.orders, many=True).data

    class Meta:
        model = RetailerCart
        fields = '__all__'


class SalesMenReportSerializer(serializers.ModelSerializer):
    statics = serializers.SerializerMethodField()
    target_currency = serializers.SerializerMethodField()
    target = serializers.SerializerMethodField()

    def get_statics(self, obj):
        from_date = self.context.get("from_date")
        period = self.context.get("period")
        total_count = 0
        if period == "Daily":
            order_count = RetailOrders.objects.filter(salesman=obj, when_approved=from_date).aggregate(
                Sum('total_cost'))
        elif period == "Weekly":
            start_week = from_date - datetime.timedelta(from_date.weekday())
            end_week = start_week + datetime.timedelta(7)
            order_count = RetailOrders.objects.filter(salesman=obj,
                                                      when_approved__range=[start_week, end_week]).aggregate(
                Sum('total_cost'))
        elif period == "Monthly":
            order_count = RetailOrders.objects.filter(salesman=obj, when_approved__year=from_date.year,
                                                      when_approved__month=from_date.month).aggregate(Sum('total_cost'))
        else:
            order_count = RetailOrders.objects.filter(salesman=obj, when_approved__year=from_date.year).aggregate(
                Sum('total_cost'))

        if order_count['total_cost__sum'] is not None:
            total_count += float(order_count['total_cost__sum'])

        return total_count

    def get_target(self, obj):
        target = self.context.get("target")
        return target.amount

    def get_target_currency(self, obj):
        target = self.context.get("target")
        return str(target.currency)

    class Meta:
        model = SalesMan
        fields = '__all__'


class SalesGroupReportSerializer(serializers.ModelSerializer):
    statics = serializers.SerializerMethodField()

    def get_statics(self, obj):
        from_date = self.context.get("from_date")
        sales_count = 0
        for saleMan in obj.salesmen.all():
            if obj.period == "Daily":
                order_count = RetailOrders.objects.filter(salesman=saleMan, when_approved=from_date).aggregate(
                    Sum('total_cost'))
            elif obj.period == "Weekly":
                start_week = from_date - \
                    datetime.timedelta(from_date.weekday())
                end_week = start_week + datetime.timedelta(7)
                order_count = RetailOrders.objects.filter(salesman=saleMan,
                                                          when_approved__range=[start_week, end_week]).aggregate(
                    Sum('total_cost'))
            elif obj.period == "Monthly":
                order_count = RetailOrders.objects.filter(salesman=saleMan, when_approved__year=from_date.year,
                                                          when_approved__month=from_date.month).aggregate(
                    Sum('total_cost'))
            else:
                order_count = RetailOrders.objects.filter(salesman=saleMan,
                                                          when_approved__year=from_date.year).aggregate(
                    Sum('total_cost'))

            if order_count['total_cost__sum'] is not None:
                sales_count += float(order_count['total_cost__sum'])

        return sales_count

    class Meta:
        model = SalesTargetGroup
        fields = '__all__'


class BusinessSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessSettings
        fields = '__all__'


class DistTaxSerializer(serializers.ModelSerializer):
    class Meta:
        model = DistTax
        fields = '__all__'


class SalesmanTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalesmanTask
        fields = '__all__'


class VariationOptionsSerializer(serializers.ModelSerializer):

    class Meta:
        model = VariationOptions
        fields = '__all__'


class VariationSerializer(serializers.ModelSerializer):
    variation_variants = VariationOptionsSerializer(many=True, read_only=True)

    class Meta:
        model = Variation
        fields = '__all__'
