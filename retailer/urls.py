from django.urls import path, include
from rest_framework import routers
from knox import views as knox_views

from .api import *
from .views import *
from .mobile import *
from retailer.views.retailer import RetailerDashBoardApi, RetailerNewArriValProductsApi, RetailerProductCategoryApi

router = routers.DefaultRouter()

app_name = 'retailer'
urlpatterns = [
    # path('', include(router.urls)),
    # ! Auth routes
    path('api/auth/register', RegisterApi.as_view()),
    path('api/auth/login', LoginApi.as_view()),
    path('api/auth/forgot/', ForgotPasswordApi.as_view()),
    path('api/auth/user/', UserApi.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),

    # !Dashboard routes
    path('api/dashboard/', DashBoardApi.as_view()),

    # !Product Routes
    path('api/products/', ProductsApi.as_view()),
    path('api/search_product/', ProductSearchApi.as_view()),

    # !Category Routes
    path('api/product_category/', PCategoryAPi.as_view()),

    # !Tax Category
    path('api/tax_category/', DistTaxAPi.as_view()),

    # !Brand Routes
    path('api/dist_brands/', ProductBrandApi.as_view()),

    # !Orders Routes
    path('api/distOrder/', DistOrderApi.as_view()),
    path('api/ret_dist_orders/', DistOrdersRetailOrdersApi.as_view()),
    path('api/retailer_dist_orders/', RetailerDistOrderApi.as_view()),
    path('api/retailer_search_orders/', RetailerSearchOrderApi.as_view()),
    path('api/order_statics/', OrderStaticsApi.as_view()),
    path('api/dist_statics/', DistOrderStaticsApi.as_view()),
    path('api/update_orders/', UpdateRetailOrderApi.as_view()),
    path('api/update_dispatch_retorder/', DispatchedRetOrderApi.as_view()),
    path('api/change_approved_order/', ChangeRetailerStatus.as_view()),

    # !Units Routes
    path('api/mUnit/', MUnitApi.as_view()),
    path('api/compoundUnit/', CompoundUnitApi.as_view()),

    # !Prices Routes
    path('api/priceLevel/', PriceLevelApi.as_view()),
    path('api/priceList/', PriceListApi.as_view()),
    path('api/view_price_list/', ViewPriceListApi.as_view()),

    # !Retailer Routes
    path('api/retailers/', RetailerApi.as_view()),
    path('api/update_retailer/', UpdateRetailerApi.as_view()),
    path('api/distributionRegion/', DistRegionApi.as_view()),
    path('api/distribution_city_api/', DistCityApi.as_view()),
    path('api/distribution_area/', DistAreaApi.as_view()),
    path('api/retailer_statics/', RetailersStaticsApi.as_view()),
    path('api/search_retailer/', SearchRetailerApi.as_view()),

    # !Sales Routes
    path('api/saleman/', SalesManApi.as_view()),
    path('api/sales_target/', SalesTargetApi.as_view()),
    path('api/sales_man_task/', SalesManTasksApi.as_view()),
    path('api/sales_group_statics/', SalesTargetReportApi.as_view()),
    path('api/sales_man_statics/', SalesManTargetReportApi.as_view()),

    # !Variation Routes
    path('api/variation/', VariationApi.as_view()),
    path('api/variation_option/', VariationOptionsApi.as_view()),

    # !Price Routes
    path('api/priceOffer/', PriceOfferApi.as_view()),
    path('api/view_price_offers/', ViewPriceOfferApi.as_view()),

    # !Deliveries Routes
    path('api/delivery/', DeliveryApi.as_view()),
    path('api/partial_delivery/', PartialDeliveryApi.as_view()),

    # ! Bannner Route
    path('api/dist_banners/', BannersApi.as_view()),

    # !Permission Route
    path('api/permission_management/', DistPermissionGroupApi.as_view()),
    path('api/user_management/', DistUsersApi.as_view()),

    # !Notification Route
    path('api/notifications/', MNotificationApi.as_view()),
    path('api/dist_notifications/', DistNotificationApi.as_view()),
    path('api/view_dist_notification/', ViewDistNotificationApi.as_view()),

    # !Settings Route
    path('api/dist_settings/', SettingApi.as_view()),
    path('api/email_settings/', EmailSettingsApi.as_view()),
    path('api/business_settings/', BusinessSettingsApi.as_view()),
    path('api/dist_options/', DistOptionsSettingsApi.as_view()),
    path('api/tax_settings/', DistTaxSettingsApi.as_view(),),

    # !Countries Route
    path('api/world_country/', WorldCountriesApi.as_view()),
    path('api/world_cities/', WorldCitiesApi.as_view()),

    # * Retailer Routes *#
    # !Mobile Banners
    path('api/retail_banners/', MobileBannersApi.as_view()),

    # !Mobile DashBoard
    path('api/retail_dashboard/', MobileDashBoardApi.as_view()),
    path('api/check_progress/', CheckDashboardProgressApi.as_view()),

    # !Mobile Products
    path('api/retail_products/', MobileProductsApi.as_view()),

    # !Mobile Cart
    path('api/retailer_cart/', MobileCartApi.as_view()),

    # !Mobile Categories
    path('api/retailer_categories/', MobileCategoriesApi.as_view()),

    # !Colors
    path('api/custom_colors/', CustomColorsApi.as_view()),

    # !Retailer route

    # !Auth
    path('api/auth/retailer_login/', RetailerLoginApi.as_view()),
    path('api/auth/retail_user/', RetailerUserApi.as_view()),

    # !DashBoard View
    path('api/retailer_dashboard_view/', RetailerDashBoardApi.as_view()),
    path('api/retailer_new_arrivals/', RetailerNewArriValProductsApi.as_view()),
    path('api/retailer_category_products/',
         RetailerProductCategoryApi.as_view()),
    path('api/retailer_map_view/', RetailerViewMapLocations.as_view()),

]
