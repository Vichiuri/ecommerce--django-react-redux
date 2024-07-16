"""
Distributor Models
"""
from django import forms

from distributor.models import DistUsers, PermissionGroup, DistPermission, PCategory, SubCategory, Retailer, SalesMan, \
    Product, MobileBanner, MThemes, MNotification, ProductPackage, RetailerType, ProductPrice, MUnit, CompoundUnit, \
    PriceLevel, PriceList, PriceOffer, DistOrder, RetailOrders, DistRegion, DistCity, DistArea, SalesTarget, Delivery
from netbotAuth.models import User


class AddSalesManForm(forms.ModelForm):
    class Meta:
        model = SalesMan
        exclude = ['distributor']


class AddRetailerForm(forms.ModelForm):
    class Meta:
        model = Retailer
        exclude = ['distributors', ]


class AddProductForm(forms.ModelForm):
    def __init__(self, distributor, *args, **kwargs):
        super(AddProductForm, self).__init__(*args, **kwargs)  # populates the form
        self.fields['category'].queryset = PCategory.objects.filter(distributor=distributor)

    class Meta:
        model = Product
        exclude = ['distributor']


class AddUserForm(forms.ModelForm):
    def __init__(self, distributor, *args, **kwargs):
        super(AddUserForm, self).__init__(*args, **kwargs)  # populates the form
        self.fields['permission_group'].queryset = PermissionGroup.objects.filter(distributor=distributor)

    class Meta:
        model = DistUsers
        exclude = ['distributor', 'user', ]


class UserAddForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['email', ]

        widgets = {
            'email': forms.EmailInput(attrs={'class': 'form-control'})
        }


class PermissionsForm(forms.ModelForm):
    class Meta:
        model = DistPermission
        exclude = ('distributor',)


class UserGroupForm(forms.ModelForm):
    class Meta:
        model = PermissionGroup
        exclude = ('distributor', 'permission')


class AddProductCategoryForm(forms.ModelForm):
    class Meta:
        model = PCategory
        exclude = ['distributor', ]


class AddProductSubCategoryForm(forms.ModelForm):
    def __init__(self, distributor, *args, **kwargs):
        super(AddProductSubCategoryForm, self).__init__(*args, **kwargs)  # populates the form
        self.fields['category'].queryset = PCategory.objects.filter(distributor=distributor)

    class Meta:
        model = SubCategory
        exclude = ['distributor', ]


class AddBannerForm(forms.ModelForm):
    class Meta:
        model = MobileBanner
        exclude = ['distributor', ]


class AddThemeForm(forms.ModelForm):
    class Meta:
        model = MThemes
        exclude = ['distributor', ]


class AddNotificationForm(forms.ModelForm):
    class Meta:
        model = MNotification
        exclude = ['distributor', ]


class AddProductPackageForm(forms.ModelForm):
    def __init__(self, distributor, *args, **kwargs):
        super(AddProductPackageForm, self).__init__(*args, **kwargs)  # populates the form
        self.fields['product'].queryset = Product.objects.filter(distributor=distributor)

    class Meta:
        model = ProductPackage
        exclude = ['distributor', ]


class AddRetailerTypeForm(forms.ModelForm):
    class Meta:
        model = RetailerType
        exclude = ['distributor', ]


class AddProductPriceForm(forms.ModelForm):
    class Meta:
        model = ProductPrice
        exclude = ['distributor', 'product']


class AddUnitForm(forms.ModelForm):
    class Meta:
        model = MUnit
        exclude = ['distributor', ]


class AddComplexUnitForm(forms.ModelForm):
    class Meta:
        model = CompoundUnit
        exclude = ['distributor', ]


class PriceLevelForm(forms.ModelForm):
    class Meta:
        model = PriceLevel
        exclude = ['distributor']


class PriceListForm(forms.ModelForm):

    def __init__(self, distributor, *args, **kwargs):
        super(PriceListForm, self).__init__(*args, **kwargs)  # populates the form
        self.fields['price_level'].queryset = PriceLevel.objects.filter(distributor=distributor)

    class Meta:
        model = PriceList
        exclude = ['distributor', ]


class PriceOfferForm(forms.ModelForm):
    def __init__(self, distributor, *args, **kwargs):
        super(PriceOfferForm, self).__init__(*args, **kwargs)  # populates the form
        self.fields['x_item'].queryset = Product.objects.filter(distributor=distributor)
        self.fields['y_item'].queryset = Product.objects.filter(distributor=distributor)

    class Meta:
        model = PriceOffer
        exclude = ['distributor', ]


class AddOrderForm(forms.ModelForm):
    def __init__(self, request, retailer_id, *args, **kwargs):
        super(AddOrderForm, self).__init__(*args, **kwargs)  # populates the form
        distributor = request.user.dist_users.distributor
        orders = DistOrder.objects.filter(placed=False, submitted_by=request.user.dist_users,
                                          retailer_id=retailer_id).all()
        prs = list()
        for order in orders:
            prs.append(order.product.id)

        self.fields['product'].queryset = Product.objects.filter(distributor=distributor).exclude(id__in=prs).all()

    class Meta:
        model = DistOrder
        exclude = ['distributor', 'retailer', 'placed', 'order_price']


class EditOrderForm(forms.ModelForm):
    def __init__(self, order_id, *args, **kwargs):
        super(EditOrderForm, self).__init__(*args, **kwargs)  # populates the form
        ret_order = RetailOrders.objects.get(id=order_id)
        orders = ret_order.ret_orders.all()
        distributor = ret_order.distributor
        prs = list()
        for order in orders:
            prs.append(order.product.id)

        self.fields['product'].queryset = Product.objects.filter(distributor=distributor).exclude(id__in=prs).all()

    class Meta:
        model = DistOrder
        exclude = ['distributor', 'retailer', 'placed', 'order_price']


class AddRegionForm(forms.ModelForm):
    class Meta:
        model = DistRegion
        exclude = ['distributor', ]


class AddCityForm(forms.ModelForm):

    def __init__(self, distributor, *args, **kwargs):
        super(AddCityForm, self).__init__(*args, **kwargs)  # populates the form
        self.fields['region'].queryset = DistRegion.objects.filter(distributor=distributor)

    class Meta:
        model = DistCity
        exclude = ['distributor', ]


class AddAreaForm(forms.ModelForm):

    def __init__(self, distributor, *args, **kwargs):
        super(AddAreaForm, self).__init__(*args, **kwargs)  # populates the form
        self.fields['city'].queryset = DistCity.objects.filter(distributor=distributor)

    class Meta:
        model = DistArea
        exclude = ['distributor', ]


class AddSalesTargetForm(forms.ModelForm):
    class Meta:
        model = SalesTarget
        exclude = ['distributor', ]


class ChooseRetailerForm(forms.ModelForm):
    class Meta:
        model = DistOrder
        fields = ['retailer', ]


class AddPriceListForm(forms.ModelForm):
    class Meta:
        model = PriceList
        exclude = ['distributor', ]


class DispatchForm(forms.ModelForm):
    class Meta:
        model = Delivery
        fields = ['transporter', 'remarks', 'vehicle_no']
