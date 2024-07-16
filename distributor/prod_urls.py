from django.urls import path

from distributor.views.distributor import ProductSubCategory, ProductCategories, ProductPackagesView
from distributor.views.forms import distr

app_name = 'distributor'
urlpatterns = [
    path("packages/add_edit", distr.AddProductPackageView.as_view(), name="dist-prPack-add"),
    path("add_edit", distr.AddProductView.as_view(), name="dist-products-add"),
    path("edit/<int:pr_id>/", distr.EditProduct.as_view(), name="dist-product-edit"),
    path("master/", distr.ProductMaster.as_view(), name="dist-product-master"),
    path("category/add_edit", distr.AddProductCategoryView.as_view(), name="dist-prCat-add_edit"),
    path("subCategory/add_edit", distr.AddSubCategoryView.as_view(), name="dist-prSbCat-add_edit"),
    path("SubCategories", ProductSubCategory.as_view(), name="dist-prSbCats"),
    path("Categories", ProductCategories.as_view(), name="dist-prCs"),
    path("_<int:dist_id>/<str:dist_name>/_/productPackages", ProductPackagesView.as_view(),
         name="dist-product-packages"),
]
