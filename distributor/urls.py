"""
All endpoints For The package are defined Here
"""
from django import views
from django.urls import path, include

from . import views
from distributor.views.forms.netbot import NetBotProfileSettings
from distributor.views.netbot import *
from distributor.views.distributor import *
from distributor.views.forms import distr, others
from distributor.views.forms import netbot
from .views.prodV import SalesOrderPrint
from distributor.views.prodV import SalePartialOrderPrint

app_name = 'distributor'
urlpatterns = [

    # Net Bot Access Urls
    path("", Index.as_view(), name="index"),
    path("setup", Setup.as_view(), name="set-up"),
    path("upload/apk", UploadApk.as_view(), name="upload-apk"),
    path("distributors", DistributorsView.as_view(), name="distributor-list"),
    path("distributors/<int:dist_id>/distributor-details/",
         distributor_details, name="distributor_details"),
    path("add_distributor", netbot.AddDistributorView.as_view(), name="add-dist"),
    path("distributors/<int:d_id>/edit_distributor/",
         netbot.editDistributor, name="editDistributor"),
    path("distributors/distributor-Retailer-count/",
         dist_ret_count, name="dist_ret_count"),

    path("subscriptions", SubscriptionsView.as_view(), name="subscriptions-list"),
    path("subscriptions/<int:sub_id>/details/",
         activeSubscriptions, name="activeSubs"),
    path("add_subscription", netbot.AddSubscriptionView.as_view(),
         name="add-subscription"),
    path("users", NetUsersView.as_view(), name="user-list"),
    path("add_user", netbot.AddUserView.as_view(), name="add-user"),
    path("user_groups", PermissionGroupsView.as_view(), name="user-group-list"),
    path("add_user_group", netbot.AddPermissionGroupView.as_view(),
         name="add-user-groups"),
    path("user/<int:user_id>/user-actions/",
         user_actions, name='user_actions'),
    path("subscription_history", SubscriptionHistoryView.as_view(),
         name="subscription-history"),
    path("subscription_history/<int:shd_id>/distributor-subscription-details/", subscriptionHistoryDetails,
         name="subHistDetails"),

    path("profile", NetBotProfileSettings.as_view(), name="profile"),
    path('user-logs/', logs, name='logs'),
    path('Auth_logs/', authLogs, name='aLogs'),

    #     path('notifications/', NotificationList.as_view(), name='notifications'),
    path('notifications/', notificationList, name='notifications'),

    path('notifications/<int:not_pk>/details',
         notification, name='notification_details'),
    path('notifications/<int:pk>/delete',
         DeleteNotification.as_view(), name='delete_notification'),
    path("notifications/update", update_notification, name='notifs_update'),
    path("notifications/num", update_notif_count, name='notifs_num'),
    path("cities/change/<int:country_id>",
         ChangeCityOptions.as_view(), name='change_city_options'),
    # End of Net Bot Access Urls

    # charts urls
    path('api/chart/bar-chart/', Barchart.as_view(), name='Chart'),
    path('api/chart/doughnut-chart/',
         DoughnutChart.as_view(), name='doughnutChart'),

    # Table List Urls
    # path("_<int:dist_id>/<str:dist_name>/_/offers", OffersPage.as_view(), name="dist-offers"),
    path("_<int:dist_id>/<str:dist_name>/_/salesmen",
         SalesMenView.as_view(), name="dist-salesmen"),
    path("_<int:dist_id>/<str:dist_name>/_/c_details",
         distr.CompanyInfo.as_view(), name="dist-details-edit"),
    path("_<int:dist_id>/<str:dist_name>/_/themes",
         ThemesView.as_view(), name="dist-mobile-themes"),
    path("_<int:dist_id>/<str:dist_name>/_/notifications", NotificationsView.as_view(),
         name="dist-mobile-notifications"),
    path("_<int:dist_id>/<str:dist_name>/_/banners",
         BannersView.as_view(), name="dist-mobile-banners"),
    path("_<int:dist_id>/<str:dist_name>/_/products",
         ProductsView.as_view(), name="dist-products"),

    path("_<int:dist_id>/<str:dist_name>/_/deliveries",
         DeliveriesView.as_view(), name="dist-deliveries"),
    path("_<int:dist_id>/<str:dist_name>/_/clients",
         RetailersView.as_view(), name="dist-clients"),
    path("_<int:dist_id>/<str:dist_name>/_/users",
         UsersView.as_view(), name="dist-users"),
    path("_<int:dist_id>/<str:dist_name>/_/reports",
         ReportsView.as_view(), name="dist-reports"),

    path("_<int:dist_id>/<str:dist_name>/_/retailerTypes",
         RetailerTypesView.as_view(), name="dist-retailer-types"),
    path("_<int:dist_id>/<str:dist_name>/_/productPackages", ProductPackagesView.as_view(),
         name="dist-product-packages"),

    path("_<int:dist_id>/<str:dist_name>/_/",
         Home.as_view(), name="dist-home"),

    # Add/Edit Form Urls
    path("_<int:dist_id>/<str:dist_name>/_/salesmen/add_edit", distr.AddSalesManView.as_view(),
         name="dist-salesmen-add"),

    path("_<int:dist_id>/<str:dist_name>/_/deliveries/add_edit",
         DeliveriesView.as_view(), name="dist-deliveries-add"),
    path("_<int:dist_id>/<str:dist_name>/_/clients/add_edit",
         distr.AddRetailerView.as_view(), name="dist-clients-add"),
    path("_<int:dist_id>/<str:dist_name>/_/users/add_edit",
         distr.AddUserView.as_view(), name="dist-users-add"),
    path("_<int:dist_id>/<str:dist_name>/_/user_group/add_edit", distr.UserGroupFromView.as_view(),
         name="dist-user-group-add"),
    path("_<int:dist_id>/<str:dist_name>/_/user_groups",
         UserGroupView.as_view(), name="dist-user-groups"),
    path("_<int:dist_id>/<str:dist_name>/_/theme/add_edit", distr.AddThemeFormView.as_view(),
         name="dist-mobile-add-theme"),
    path("_<int:dist_id>/<str:dist_name>/_/notification/add_edit", distr.AddNotificationFormView.as_view(),
         name="dist-mobile-add-notif"),
    path("_<int:dist_id>/<str:dist_name>/_/banner/add_edit", distr.AddBannerFormView.as_view(),
         name="dist-mobile-add-banner"),
    path("_<int:dist_id>/<str:dist_name>/_/profile/settings",
         distr.ProfileSettings.as_view(), name="dist-profile"),
    path("_<int:dist_id>/<str:dist_name>/_/retailerT/add_edit", distr.AddRetailerTypeView.as_view(),
         name="dist-retailerT-add"),
    path("product/del/<int:im_id>/", DelProductImage.as_view(), name="dist-del-pr"),

    # Product Urls

    path("_<int:dist_id>/<str:dist_name>/_/products/category/add_edit", distr.AddProductCategoryView.as_view(),
         name="dist-prCat-add_edit"),
    path("_<int:dist_id>/<str:dist_name>/_/products/category/add_edit", distr.AddProductCategoryView.as_view(),
         name="dist-prCat-add_edit"),
    path("_<int:dist_id>/<str:dist_name>/_/products/sub_category/add_edit", distr.AddSubCategoryView.as_view(),
         name="dist-prSbCat-add_edit"),
    path("_<int:dist_id>/<str:dist_name>/_/prodcucts/Packages/add_edit", distr.AddProductPackageView.as_view(),
         name="dist-prPack-add"),
    path("_<int:dist_id>/<str:dist_name>/_/products/add_edit", distr.AddProductView.as_view(),
         name="dist-products-add"),
    path("_<int:dist_id>/<str:dist_name>/_/products/edit/<int:pr_id>/", distr.EditProduct.as_view(),
         name="dist-product-edit"),
    path("_<int:dist_id>/<str:dist_name>/_/products/Categories",
         ProductCategories.as_view(), name="dist-prCs"),
    path("_<int:dist_id>/<str:dist_name>/_/products/master/", others.ProductMaster.as_view(),
         name="dist-product-master"),
    path("_<int:dist_id>/<str:dist_name>/_/products/prece_lists/", others.PriceListView.as_view(),
         name="dist-price_lists"),
    path("_<int:dist_id>/<str:dist_name>/_/products/price_listF/", others.PriceListFormView.as_view(),
         name="dist-price_list-add"),

    # Offers

    path("_<int:dist_id>/<str:dist_name>/_/offers/list/", others.OffersListView.as_view(),
         name="dist-offers-list"),
    path("_<int:dist_id>/<str:dist_name>/_/offers/add/", others.OffersFormView.as_view(),
         name="dist-offers-add"),

    path("_<int:dist_id>/<str:dist_name>/_/salesmen/assignedtoretailer/<int:ret_id>/",
         others.AssignedSalesPeopleToRetailers.as_view(),
         name="dist-assigned_salespeople"),

    path("_<int:dist_id>/<str:dist_name>/_/salesmen/targets/",
         others.SalesTargetsView.as_view(),
         name="dist-sales-targets"),

    path("_<int:dist_id>/<str:dist_name>/_/salesmen/targets/add/",
         others.SalesTargetFormView.as_view(),
         name="dist-sales-targets-add"),

    path("_<int:dist_id>/<str:dist_name>/_/retailers/assignedtosaleman/<int:sl_id>/",
         others.AssignedRetailersToSalesPerson.as_view(),
         name="dist-assigned_retailers"),

    # Orders
    path("_<int:dist_id>/<str:dist_name>/_/orders",
         OrdersView.as_view(), name="dist-orders"),
    path("_<int:dist_id>/<str:dist_name>/_/orders/place", others.PlaceOrderFormView.as_view(),
         name="dist-place-orders"),
    path("_<int:dist_id>/<str:dist_name>/_/orders/edit/<int:order_id>", others.EditOrderFormView.as_view(),
         name="dist-orders-edit"),
    path("_<int:dist_id>/<str:dist_name>/_/orders/dispatch/<int:order_id>", OrderDispatchView.as_view(),
         name="dist-orders-dispatch"),

    # locations
    path("_<int:dist_id>/<str:dist_name>/_/locations/master", others.LocationMaster.as_view(),
         name="dist-locations-master"),

    path('delivery/print/<int:delivery_id>',
         SalesOrderPrint.as_view(), name="print_order"),
    path('delivery/partial_print/<int:delivery_id>',
         SalePartialOrderPrint.as_view(), name="partial_print_order"),
    #
    path('history/<str:app_label>/<str:model_name>/<int:object_id>/show',
         ObjectHistory.as_view(), name="view_history")

]
