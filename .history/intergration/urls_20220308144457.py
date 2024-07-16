from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .api.offers import IntergratedPriceOfferApi, ViewIntergratedPriceOfferApi
from .api.pricelists import IntergratedProductPriceList
from .api.retailer import IntegratedRetailerApi, UpdateIntergratedRetailerApi
from .api.salesman import IntergratedSalesManApi, IntergratedSalesManTasksApi, IntergratedSalesTargetApi, UpdateIntergratedSalesManApi
from .api.delivery import IntegratedDeliveryApi, IntergratedPartialDeliveryApi
from .api.orders import IntergratedDistOrderApi, IntergratedRetailerOrderApi
from .api.product import  DistributorProductsView, IntegratedProductCategory, UpdateDistributorProductsView
from .api.tokens import DistributorTokenView, UserTokenView, renderDistributorToken

app_name = 'intergration'

router = DefaultRouter()

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



urlpatterns = [
    # viewsets urls
    path('', include(router.urls)),

    # tokens 
    path('api/v1/<int:id>/', UserTokenView.as_view(), name='api-intergration'),
    path('api/v1/token', DistributorTokenView.as_view(), name='api-token'),
    path('api/v1/<int:id>/token-show', renderDistributorToken, name='api-token-render'),

    # products API urls
    path('api/v1/products', DistributorProductsView.as_view(), name='api-intergration-product'),
    path('api/v1/products/<int:id>/details', UpdateDistributorProductsView.as_view()),
    path('api/v1/products-categories', IntegratedProductCategory.as_view(), name='api-intergration-product-categories'),
    
    # Retailer API urls
    path('api/v1/retailers', IntegratedRetailerApi.as_view(), name='api-intergration-retailers'),
    path('api/v1/retailer/update', UpdateIntergratedRetailerApi.as_view(), name='api-intergartion-retailers-update'),

    # Salesman Api urls
    path("api/v1/sales-people", IntergratedSalesManApi.as_view(), name="api-intergration-sales-people"),
    path("api/v1/sales-people/<int:id>/", UpdateIntergratedSalesManApi.as_view()),
    path("api/v1/sales-targets", IntergratedSalesTargetApi.as_view(), name="api-intergration-sales-target"),


]