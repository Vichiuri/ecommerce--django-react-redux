from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .api.offers import IntergratedPriceOfferApi, ViewIntergratedPriceOfferApi
from .api.pricelists import IntergratedProductPriceList
from .api.retailer import IntegratedRetailerApi, IntergrateRetailerForgotPassword
from .api.salesman import IntergratedSalesManApi, IntergratedSalesManTasksApi, IntergratedSalesTargetApi, UpdateIntergratedSalesManApi, UpdateIntergratedSalesTargetApi
from .api.delivery import IntegratedDeliveryApi, IntergratedPartialDeliveryApi
from .api.orders import IntergratedDistOrderApi, IntergratedRetailerOrderApi
from .api.product import  DistributorProductsView, IntegratedProductCategory
from .api.tokens import DistributorTokenView, UserTokenView, renderDistributorToken

app_name = 'intergration'

router = DefaultRouter()

# products
router.register(r'api/v1/products', DistributorProductsView, basename='products')
router.register(r'api/v1/product-categories', IntegratedProductCategory, basename='product-categories')

# Deliveries API url
router.register(r'api/v1/deliveries', IntegratedDeliveryApi, basename='deliveries')
router.register(r'api/v1/partial-deliveries', IntergratedPartialDeliveryApi, basename='partial-deliveries')

# Offer
router.register(r'api/v1/offers', IntergratedPriceOfferApi, basename='offers')
router.register(r'api/v1/offers-detail', ViewIntergratedPriceOfferApi, basename='offers-details')

# Salesman 
router.register(r'api/v1/sales-people-tasks', IntergratedSalesManTasksApi, basename='sales-tasks')

# Orders
router.register(r'api/v1/orders', IntergratedDistOrderApi, basename='orders')
router.register(r'api/v1/retailer-orders', IntergratedRetailerOrderApi, basename='retailerOrder')

# pricelist
router.register(r'api/v1/pricelists', IntergratedProductPriceList, basename='pricelists')

# Retailers
router.register(r'api/v1/retailers', IntegratedRetailerApi, basename='retailers')

# Retailer forgot password
router.register(r'api/v1/retailer/forgot-password', IntergrateRetailerForgotPassword, basename='retailer-forgot-password')

urlpatterns = [
    # viewsets urls
    path('', include(router.urls)),

    # tokens 
    path('api/v1/<int:id>/', UserTokenView.as_view(), name='api-intergration'),
    path('api/v1/<int:id>/token', DistributorTokenView.as_view(), name='api-token'),
    path('api/v1/<int:id>/token-show', renderDistributorToken, name='api-token-render'),


    # Salesman Api urls
    path("api/v1/sales-people", IntergratedSalesManApi.as_view(), name="api-intergration-sales-people"),
    path("api/v1/sales-people/<int:id>/", UpdateIntergratedSalesManApi.as_view()),
    path("api/v1/sales-targets", IntergratedSalesTargetApi.as_view(), name="sales-target"),
    path("api/v1/sales-targets/<int:id>/", UpdateIntergratedSalesTargetApi.as_view(), name="sales-target-detail"),


]