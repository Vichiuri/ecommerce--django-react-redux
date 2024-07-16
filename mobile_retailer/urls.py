
"""
3urhd4ioljke
"""
from django.urls import include, path
# import routers
from rest_framework import routers

from mobile_retailer.views.auth_views import register_retailer, login_retailer
from .views import retailer_views, products, sales_man_views, auth_views, orders, mobile_dashboard

# define the router
router = routers.DefaultRouter()

# define the router path and view set to be used

router.register(r'distributors', retailer_views.DistributorViewSet)
router.register(r'products', retailer_views.ProductViewSet)
router.register(r'countries', retailer_views.WorldCountryViewSet)
router.register(r'states', retailer_views.WorldCityViewSet)
router.register(r'categories', retailer_views.PCategoryViewSet)

# specify URL Path for rest_framework

app_name = 'mobile_retailer'
urlpatterns = [

    path('apk/download', retailer_views.DownloadApk.as_view(), name="download-apk"),
    path('v1/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('register', register_retailer, name="retailer_register"),
    path('login', login_retailer, name="retailer_login"),
    path('profile', auth_views.ProfileManagement.as_view(), name="mobile_profile"),

    path('cart', retailer_views.CartApiView.as_view(), name="retailer_cart"),
    path('cart_', orders.CartApiActions.as_view(), name="retailer_cart_"),
    path('cart/sync', sales_man_views.SyncCart.as_view(), name="sync-cart"),
    # Product Urls
    path('products/search/', products.SearchProduct.as_view(), name="search_products"),
    path('products/new/', products.NewArrivals.as_view(), name="new_arrivals"),
    path('products/price/', products.ProductPriceBySlab.as_view(), name="product_price"),
    path('products/favorites/', retailer_views.FavoriteProduct.as_view(), name="favorite_products"),
    path('products/single/', products.FetchSingleProduct.as_view(), name="single_product"),
    path('products/paginated/', products.PaginatedProducts.as_view(), name="paginated_product"),

    # path('purchase/offer/', retailer_views.PurchaseOnOffer.as_view(), name="buy_offer"),
    path('purchase/offer/', sales_man_views.PurchaseOnOfferM.as_view(), name="buy_offer"),
    path('offers/', mobile_dashboard.OffersView.as_view(), name="offers-list"),

    path('banners/', mobile_dashboard.BannersView.as_view(), name="banners-list"),

    path('category/<int:category_id>/products/', retailer_views.ProductsByCategory.as_view(), name="category_products"),
    path('category/single/', products.FetchSingleCategory.as_view(), name="category_single"),

    path('retailer/distributors/', retailer_views.DistributorsView.as_view(), name="retailer_dist"),
    path('orders/history', orders.RetailOrderHistory.as_view(), name="order_history"),
    path('orders/history/details/<int:order_id>/', orders.OrderTransportDetails.as_view(), name="order_history_transport"),
    path('orders/filter', orders.FilterOrders.as_view(), name="order_filter"),

    path('retailer/notifications', retailer_views.MobileNotificationsView.as_view(), name="retailer_notifications"),
    path('retailer/offers', retailer_views.SingleOffer.as_view(), name="retailer_offer"),
    #
    path('salesman/retailers', sales_man_views.SalesManRetailers.as_view(), name="salesman_retailers"),
    path('salesman/products', sales_man_views.SalesManProducts.as_view(), name="salesman_products"),
    path('test/json', orders.TestData.as_view(), name="test_json"),

]
# ! Auth routes
