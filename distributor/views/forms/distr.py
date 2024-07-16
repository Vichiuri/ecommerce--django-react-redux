import traceback

from django.contrib import messages
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.mixins import UserPassesTestMixin
from django.shortcuts import render, redirect
from django.views import View

from distributor.forms.distri import AddUserForm, UserGroupForm, PermissionsForm, UserAddForm, AddRetailerForm, \
    AddSalesManForm, AddProductForm, AddProductCategoryForm, AddProductSubCategoryForm, AddThemeForm, \
    AddNotificationForm, AddBannerForm, AddProductPackageForm, AddRetailerTypeForm, AddProductPriceForm
from distributor.forms.setup import DistForm
from distributor.models import Distributor, PermissionGroup, DistPermission, Retailer, SalesMan, Product, PCategory, \
    ProductImage, MobileBanner, MThemes, MNotification, RetailerType, ProductPackage, ProductPrice, DistUsers
from mobile_retailer.models.retailerM import RetailerCart
from netbotAuth.forms.user import ProfilePassword, UserFormProfile
from netbotAuth.models import User


class AddSalesManView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    form = AddSalesManForm

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        page_title = dist_name + " | Add A Sales Person"

        context = {"form": self.form, "page_title": page_title, "distributor": distributor}

        return render(request, "distri/forms/salesman.html", context=context)

    def post(self, request, dist_id, dist_name):
        try:

            distributor = Distributor.objects.get(id=dist_id)
            salesman_ = self.form(request.POST)
            if salesman_.is_valid():
                if 'id' in request.POST.keys():
                    try:
                        salesman_id = request.POST['id']
                        salesman = SalesMan.objects.get(id=salesman_id)
                        salesman__ = salesman_.save(commit=False)
                        print("\n\n\n\t\tI am Here\n\n\n")
                        salesman__.distributor = distributor
                        salesman__.id = salesman.id
                        salesman__.save()
                        salesman_.save_m2m()

                        messages.success(request, "Sales Person " + salesman.last_name + " Update Success!!!")
                        return redirect('distributor:dist-salesmen', dist_id, dist_name)

                    except Exception as e:
                        messages.error(request, "Error Sales Person Update Failure " + str(e))
                        return redirect('distributor:dist-salesmen', dist_id, dist_name)
                salesman = salesman_.save(commit=False)

                salesman.distributor = distributor


                user = User()
                user.email = salesman.email
                user.set_password("user123")
                user.is_active = True
                user.is_active = True
                user.is_superuser = False

                permission = DistPermission()
                permission_check = DistPermission.objects.filter(
                    can_view_orders=True,
                    can_manage_orders=True,
                    can_post_orders=True,
                    can_view_retailer=True,
                    can_manage_retailer=True,
                    can_view_products=True,
                    can_manage_product=True,
                    can_view_product_category=True,
                    distributor=distributor).first()

                permission.distributor = distributor
                permission.can_view_orders = True
                permission.can_manage_orders = True
                permission.can_post_orders = True
                permission.can_view_retailer = True
                permission.can_manage_retailer = True
                permission.can_view_products = True
                permission.can_manage_product = True
                permission.can_view_product_category = True

                p_group = PermissionGroup.objects.filter(name="sales_people", distributor=distributor).first()
                if p_group is None:
                    p_group = PermissionGroup()
                    p_group.distributor = distributor
                    p_group.name = "sales_people"
                if permission_check is None:
                    p_group.permission = permission
                    permission.save()
                else:
                    p_group.permission = permission_check
                dist_user = DistUsers()
                dist_user.distributor = distributor
                dist_user.user = user
                dist_user.phone = salesman.phone
                dist_user.first_name = salesman.first_name
                dist_user.last_name = salesman.last_name
                dist_user.permission_group = p_group

                user.save()

                p_group.save()

                dist_user.save()
                salesman.save()
                salesman_.save_m2m()

                messages.success(request, "Salesman " + salesman.last_name + " Saved Successfully")
                return redirect('distributor:dist-salesmen', dist_id, dist_name)
            else:
                page_title = dist_name + " | Add A Sales Person"
                context = {"form": salesman_, "page_title": page_title, "distributor": distributor}
                messages.error(request, "Saving Of Salesman Failed Please Correct Errors Below")
                return render(request, "distri/forms/salesman.html", context=context)
        except Exception as e:
            traceback.print_exc()
            messages.error(request, "Something Went Wrong System Could Not Recover " + str(e))
            return redirect("distributor:dist-salesmen-add", dist_id, dist_name)


class AddUserView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    form2 = UserAddForm

    def get(self, request, dist_id, dist_name):

        distributor = Distributor.objects.get(id=dist_id)
        form1 = AddUserForm(distributor)
        page_title = dist_name + " | Add User"

        context = {"form1": form1, "form2": self.form2, "page_title": page_title, "distributor": distributor}
        return render(request, "distri/forms/user.html", context=context)

    def post(self, request, dist_id, dist_name):
        page_title = dist_name + " | Add User"
        distributor = Distributor.objects.get(id=dist_id)
        user_ = self.form2(request.POST)
        ds_user = AddUserForm(distributor, request.POST, request.FILES)

        if ds_user.is_valid():

            dist_user = ds_user.save(commit=False)

            if 'id' in request.POST.keys():
                try:
                    user_id = request.POST['id']
                    user__ = User.objects.get(id=user_id)
                    user_ = self.form2(request.POST, instance=user__)
                    ds_user = AddUserForm(distributor, request.POST, request.FILES, instance=user__.dist_users)
                    if user_.is_valid() and ds_user.is_valid():
                        user_.save()
                        ds_user.save()
                        messages.success(request, "User  Update Success")
                        return redirect('distributor:dist-users', dist_id, dist_name)
                    else:
                        messages.error(request, "Please Correct Errors Below To Continue")
                        context = {"form1": user_, "form2": ds_user, "page_title": page_title,
                                   "distributor": distributor}

                        return render(request, "distri/forms/user.html", context=context)

                except Exception as e:
                    traceback.print_exc()
                    messages.error(request, "Failed To Update User " + str(e))
                    return redirect('distributor:dist-users', dist_id, dist_name)
            elif user_.is_valid():
                user = user_.save(commit=False)
                user.is_superuser = False
                user.is_active = True
                user.set_password("user123")
                user.save()
                dist_user.user = user
                dist_user.distributor = distributor
                dist_user.save()
                messages.success(request,
                                 "User " + dist_user.first_name + " " + dist_user.last_name + " Saved Successfully")

                return redirect("distributor:dist-users", dist_id, dist_name)
        else:
            messages.error(request, "Please Correct Errors Below To Continue")
            context = {"form1": user_, "form2": ds_user, "page_title": page_title,
                       "distributor": distributor}

            return render(request, "distri/forms/user.html", context=context)


class UserGroupFromView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    form1 = UserGroupForm
    form2 = PermissionsForm

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        page_title = distributor.name + " | Add User"
        context = {"form1": self.form1, "form2": self.form2, "page_title": page_title, "distributor": distributor}
        return render(request, "distri/forms/user_group.html", context=context)

    def post(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        user_g = self.form1(request.POST)
        perm = self.form2(request.POST)
        if user_g.is_valid() and perm.is_valid():

            permission = perm.save(commit=False)
            user_group = user_g.save(commit=False)

            if 'id' in request.POST.keys():

                try:
                    us_g_id = request.POST['id']
                    user_grp = PermissionGroup.objects.get(id=us_g_id)
                    user_group.id = us_g_id
                    permission.distributor = distributor
                    permission.id = user_grp.permission.id
                    permission.save()
                    user_group.permission = permission
                    user_group.distributor = distributor
                    user_group.save()
                    messages.success(request, "User Group " + user_group.name + " Update Success !!!")
                    return redirect("distributor:dist-user-groups", dist_id, dist_name)
                except Exception as e:
                    traceback.print_exc()
                    messages.error(request, "Could Not Update User Group... " + str(e))
                    return redirect("distributor:dist-user-groups", dist_id, dist_name)

            permission.distributor = distributor
            perm_confirm = DistPermission.objects.filter(
                distributor=distributor,
                can_add_user=permission.can_add_user,
                can_view_users=permission.can_view_users,
                can_view_salesmen=permission.can_view_salesmen,
                can_add_salesmen=permission.can_add_salesmen,
                can_approve_orders=permission.can_approve_orders,
                can_decline_orders=permission.can_approve_orders,
                can_post_orders=permission.can_post_orders,
                can_create_product=permission.can_create_product,
                can_create_product_category=permission.can_create_product_category,
                can_create_product_subcategory=permission.can_create_product_subcategory,
                can_edit_product=permission.can_edit_product
            ).first()
            if perm_confirm is not None:
                if perm_confirm.permission_group.first() is not None:
                    messages.error(request,
                                   " User Group '" + perm_confirm.permission_group.first().name + "' Already Registered With The "
                                                                                                  "same permissions")
                    return redirect("distributor:dist-user-group-add", dist_id, dist_name)
                else:
                    perm_confirm.delete()
            permission.save()
            user_group.distributor = distributor
            user_group.permission = permission
            user_group_confirm = PermissionGroup.objects.filter(distributor_id=dist_id, name=user_group.name).first()
            if user_group_confirm is not None:
                messages.error(request, "Could Not Save User Group. Group Name " + user_group.name + " Already Exists")
                return redirect("distributor:dist-user-group-add", dist_id, dist_name)
            else:
                user_group.save()
                messages.success(request, "User Group Saved Successfully")
                return redirect("distributor:dist-user-groups", dist_id, dist_name)
        else:

            page_title = distributor.name + " | Add User"
            context = {"form1": user_g, "form2": perm, "page_title": page_title, "distributor": distributor}
            return render(request, "distri/forms/user_group.html", context=context)


class AddRetailerView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    form = AddRetailerForm

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        page_title = dist_name + " Add Retailer"

        context = {"distributor": distributor, "page_title": page_title, "form": self.form}
        return render(request, "distri/forms/retailer.html", context=context)

    def post(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        page_title = dist_name + " Add Retailer"
        retailer_ = self.form(request.POST)
        if 'id' in request.POST.keys():
            ret_id = request.POST['id']
            ret = Retailer.objects.get(id=ret_id)
            retailer_ = self.form(request.POST, instance=ret)
            if retailer_.is_valid():
                ret = retailer_.save()
                try:
                    retailer_.save_m2m()
                except Exception as e:
                    print(str(e))

                messages.success(request, "Retailer Of Pin " + ret.pin_no + " Update Success!!!")
                return redirect('distributor:dist-clients', dist_id, dist_name)
            else:
                context = {"distributor": distributor, "page_title": page_title, "form": retailer_}
                messages.error(request, "Retailer Details Error Please Correct Below To save Again")
                return render(request, "distri/forms/retailer.html", context=context)

        if retailer_.is_valid():
            __retailer = retailer_.save(commit=False)
            retCart = RetailerCart()
            retCart.retailer = __retailer.id
            retCart.orders = ''
            print('rrrrrr', retCart.retailer)
            retCart.save()
            print('cart saved', retCart)
            __retailer.save()
            # retailer.save_m2m()
            messages.success(request, "Retailer OF Pin " + __retailer.pin_no + " Saved Successfully")
            return redirect('distributor:dist-clients', dist_id, dist_name)
        else:
            context = {"distributor": distributor, "page_title": page_title, "form": retailer_}
            messages.error(request, "Retailer Details Error Please Correct Below To save Again")
            return render(request, "distri/forms/retailer.html", context=context)


class AddProductView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        page_title = dist_name + "Add Product"
        distributor = Distributor.objects.get(id=dist_id)
        form = AddProductForm(distributor=distributor)
        form2 = AddProductPriceForm
        context = {"distributor": distributor, "page_title": page_title, "form": form, "form2": form2}
        return render(request, "distri/forms/product.html", context=context)

    def post(self, request, dist_id, dist_name):
        page_title = dist_name + "Add Product"
        distributor = Distributor.objects.get(id=dist_id)
        pr_form = AddProductForm(distributor, request.POST)

        try:
            if pr_form.is_valid():
                prod = pr_form.save(commit=False)

                if 'id' in request.POST.keys():
                    print("\nForm Keys\t", request.POST.keys(), "\tdone\n")
                    pr_id = request.POST['id']

                    prod.distributor = distributor
                    prod.id = pr_id
                    prod.save()

                    try:
                        photos = request.FILES.getlist('new_photos[]')
                        print("\n\n Photos:\t", photos, "\n")
                        for photo in photos:
                            pr_image = ProductImage(product=prod, image=photo)
                            pr_image.save()
                    except Exception as e:
                        messages.error(request, "Some Unpreventable Error Occurred!!! " + str(e))
                        return redirect('distributor:dist-products', dist_id, dist_name)

                    messages.success(request, "Product Update Success!!!")
                    return redirect('distributor:dist-products', dist_id, dist_name)
                prod.distributor = distributor
                prod.save()
                try:
                    photos = request.FILES.getlist('photos[]')
                    for photo in photos:
                        pr_image = ProductImage(product=prod, image=photo)
                        pr_image.save()
                except Exception as e:
                    messages.error(request, "Some Unpreventable Error Occurred!!! " + str(e))
                    return redirect('distributor:dist-products', dist_id, dist_name)

                messages.success(request, "Product Saved Successfully")
                return redirect('distributor:dist-products', dist_id, dist_name)
            else:
                messages.error(request, "Product Save Fail!!!... Pleas Correct the errors Below")
                context = {"distributor": distributor, "page_title": page_title, "form": pr_form}
                return render(request, "distri/forms/product.html", context=context)
        except Exception as e:
            messages.error(request, "Product Save Fail!!! " + str(e))
            context = {"distributor": distributor, "page_title": page_title, "form": pr_form}
            return redirect('distributor:dist-products', dist_id, dist_name)


class AddProductCategoryView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        page_title = dist_name + " Categories|Add"
        form = AddProductCategoryForm
        context = {"distributor": distributor, "page_title": page_title, 'form': form}
        return render(request, 'distri/forms/productCategory.html', context=context)

    def post(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        page_title = dist_name + " | Categories | Add "
        c_form = AddProductCategoryForm(request.POST, request.FILES)

        if 'id' in request.POST.keys():
            cat_id = request.POST['id']
            category = PCategory.objects.get(id=cat_id)
            c_form = AddProductCategoryForm(request.POST, request.FILES, instance=category)
            if c_form.is_valid():
                cat = c_form.save(commit=False)
                cat.distributor = distributor
                cat.save()
                messages.success(request, "Product Category Update Success!!!")
                return redirect('distributor:dist-prCs', dist_id, dist_name)
            else:
                messages.error(request, "Category Save Failure Please Correct the Errors Below")
                context = {"distributor": distributor, "page_title": page_title, 'form': c_form}
                return render(request, 'distri/forms/productCategory.html', context=context)
        elif c_form.is_valid():
            cat = c_form.save(commit=False)

            cat.distributor = distributor
            cat.save()
            messages.success(request, "Product Category Saved Success")
            return redirect('distributor:dist-prCs', dist_id, dist_name)
        else:
            messages.error(request, "Category Save Failure Please Correct the Errors Below")
            context = {"distributor": distributor, "page_title": page_title, 'form': c_form}
            return render(request, 'distri/forms/productCategory.html', context=context)


class AddSubCategoryView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        page_title = dist_name + " | Add Sub Category"
        form = AddProductSubCategoryForm(distributor=distributor)
        context = {'distributor': distributor, 'page_title': page_title, 'form': form}
        return render(request, 'distri/forms/productSubCategory.html', context=context)

    def post(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        page_title = dist_name + " Categories|Add"
        sb_c = AddProductSubCategoryForm(distributor, request.POST, request.FILES)
        if sb_c.is_valid():
            sb_cat = sb_c.save(commit=False)
            if 'id' in request.POST.keys():
                sb_id = request.POST['id']
                sb_cat.distributor = distributor
                sb_cat.id = sb_id
                sb_cat.save()
                messages.success(request, "Sub Category Update  Success!!!")
                return redirect('distributor:dist-prSbCats', dist_id, dist_name)

            sb_cat.distributor = distributor
            sb_cat.save()
            messages.success(request, "Sub Category saved Successfully")
            return redirect('distributor:dist-prSbCats', dist_id, dist_name)
        else:
            messages.error(request, "Subcategory save Failure... Please Correct errors below")
            context = {'distributor': distributor, 'page_title': page_title, 'form': sb_c}
            return render(request, 'distri/forms/productSubCategory.html', context=context)


class AddBannerFormView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        page_title = dist_name + "| Add/Edit Banner"
        form = AddBannerForm
        context = {"page_title": page_title, "distributor": distributor, "form": form}
        return render(request, "distri/forms/m_banner.html", context=context)

    def post(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        page_title = dist_name + "| Add/Edit Banner"
        if 'id' in request.POST.keys():
            banner_id = request.POST['id']
            banner = MobileBanner.objects.get(id=banner_id)
            banner_ = AddBannerForm(request.POST, request.FILES, instance=banner)
            if banner_.is_valid():
                banner_.save()
                messages.success(request, "Banner Update Success")
                return redirect('distributor:dist-mobile-banners', distributor.id, distributor.name)
            else:
                context = {"page_title": page_title, "distributor": distributor, "form": banner_}
                messages.error(request, "Failed To Update Banner Please Check Errors Below")
                return render(request, "distri/forms/m_banner.html", context=context)
        banner_ = AddBannerForm(request.POST, request.FILES)
        print("\n\n", banner_, "\n\n")
        if banner_.is_valid():
            banner = banner_.save(commit=False)
            banner.distributor = distributor
            banner.save()
            messages.success(request, "Banner Saved Successfully")
            return redirect('distributor:dist-mobile-banners', distributor.id, distributor.name)
        else:
            context = {"page_title": page_title, "distributor": distributor, "form": banner_}
            messages.error(request, "Failed To Save Banner Please Check Errors Below")
            return render(request, "distri/forms/m_banner.html", context=context)


class AddNotificationFormView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        page_title = dist_name + "| Add/Edit Notification"
        form = AddNotificationForm
        context = {"page_title": page_title, "distributor": distributor, "form": form}
        return render(request, "distri/forms/m_notif.html", context=context)

    def post(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        notif_ = AddNotificationForm(request.POST)
        if 'id' in request.POST.keys():
            notif_id = request.POST['id']
            notif = MNotification.objects.get(id=notif_id)
            notif_ = AddNotificationForm(request.POST, instance=notif)
        if notif_.is_valid():
            notif__ = notif_.save(commit=False)
            notif__.distributor = distributor
            notif__.save()
            messages.success(request, "Notification Saved Successfully")
            return redirect('distributor:dist-mobile-notifications', distributor.id, distributor.name)
        else:
            messages.error(request, "Failed To save Notification Please Correct The Errors Below")
            page_title = dist_name + "| Add/Edit Notification"
            context = {"page_title": page_title, "distributor": distributor, "form": notif_}
            return render(request, "distri/forms/m_theme.html", context=context)


class AddThemeFormView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        page_title = dist_name + "| Add/Edit Theme"
        form = AddThemeForm
        context = {"page_title": page_title, "distributor": distributor, "form": form}
        return render(request, "distri/forms/m_theme.html", context=context)

    def post(self, request, dist_id, dist_name):
        page_title = dist_name + "| Add/Edit Theme"
        distributor = Distributor.objects.get(id=dist_id)
        theme_ = AddThemeForm(request.POST)
        if 'id' in request.POST.keys():
            theme_id = request.POST['id']
            theme = MThemes.objects.get(id=theme_id)
            theme_ = AddThemeForm(request.POST, instance=theme)
        if theme_.is_valid():
            theme__ = theme_.save(commit=False)
            theme__.distributor = distributor
            theme__.save()
            messages.success(request, "Theme Saved Successfully")
            return redirect('distributor:dist-mobile-themes', distributor.id, distributor.name)
        else:
            messages.error(request, "Save Failure. Please Correct The Errors Below")
            context = {"page_title": page_title, "distributor": distributor, "form": theme_}
            return render(request, "distri/forms/m_theme.html", context=context)


class ProfileSettings(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        page_title = dist_name + "|" + request.user.email + "| Profile Details"
        pr_form = UserFormProfile(distributor, instance=request.user.dist_users)
        pw_form = ProfilePassword(request.user)
        context = {"page_title": page_title, "distributor": distributor, "pr_form": pr_form, "pw_form": pw_form}
        return render(request, "distri/forms/profile.html", context=context)

    def post(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)

        if 'form_name' in request.POST.keys():
            form_name = request.POST['form_name']
            if form_name == 'profile_f':
                pr_form = UserFormProfile(distributor, request.POST, request.FILES, instance=request.user.dist_users)
                if pr_form.is_valid():
                    pr_form.save()
                    messages.success(request, "Profile Info Updated Successfully")
                    return redirect('distributor:dist-profile', distributor.id, distributor.name)
                else:
                    page_title = dist_name + "|" + request.user.email + "| Profile Details"
                    pw_form = ProfilePassword(request.user)
                    context = {"page_title": page_title, "distributor": distributor, "pr_form": pr_form,
                               "pw_form": pw_form}
                    return render(request, "distri/forms/profile.html", context=context)
            elif form_name == 'pass_w_c':
                pw_form = ProfilePassword(request.user, request.POST)
                if pw_form.is_valid():
                    user = pw_form.save()
                    messages.success(request, "Password Change Success")
                    update_session_auth_hash(request, user)
                    return redirect('distributor:dist-profile', distributor.id, distributor.name)
                else:
                    messages.error(request, "Password Change Failure, Correct Errors and Try Again")
                page_title = dist_name + "|" + request.user.email + "| Profile Details"
                pr_form = UserFormProfile(distributor, instance=request.user.dist_users)
                context = {"page_title": page_title, "distributor": distributor, "pr_form": pr_form,
                           "pw_form": pw_form}
                return render(request, "distri/forms/profile.html", context=context)


class CompanyInfo(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        form = DistForm(instance=distributor)
        page_title = dist_name + "| Info"
        context = {"page_title": page_title, "distributor": distributor, "form": form}
        return render(request, 'distri/forms/c_details.html', context=context)

    def post(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        form = DistForm(request.POST, request.FILES, instance=distributor)
        if form.is_valid():
            form.save()
            messages.success(request, "Company Details Updated Successfully")
            return redirect('distributor:dist-retailer-types', dist_id, dist_name)
        else:
            page_title = dist_name + "| Info"
            context = {"page_title": page_title, "distributor": distributor, "form": form}
            return render(request, 'distri/forms/ret_Types.html', context=context)


class AddProductPackageView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        form = AddProductPackageForm(distributor)
        page_title = dist_name + "| Info"
        context = {"page_title": page_title, "distributor": distributor, "form": form}
        return render(request, 'distri/forms/p_Packages.html', context=context)

    def post(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        form = AddProductPackageForm(distributor, request.POST, request.FILES)
        if 'id' in request.POST.keys():
            prPack = ProductPackage.objects.get(id=request.POST['id'])
            form = AddProductPackageForm(distributor, request.POST, request.FILES, instance=prPack)
        if form.is_valid():
            prP = form.save(commit=False)
            prP.distributor = distributor
            prP.save()
            messages.success(request, "Product Package Added Successfully")
            return redirect('distributor:dist-product-packages', dist_id, dist_name)
        else:
            page_title = dist_name + "| Product Package | Error"
            context = {"page_title": page_title, "distributor": distributor, "form": form}
            return render(request, 'distri/forms/p_Packages.html', context=context)


class AddRetailerTypeView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        form = AddRetailerTypeForm
        page_title = dist_name + "| Retailer Type Add/Edit "
        context = {"page_title": page_title, "distributor": distributor, "form": form}
        return render(request, 'distri/forms/ret_Types.html', context=context)

    def post(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        form = AddRetailerTypeForm(request.POST)
        if 'id' in request.POST.keys():
            ret_type = RetailerType.objects.get(id=request.POST['id'])
            form = AddRetailerTypeForm(request.POST, instance=ret_type)
        if form.is_valid():
            ret = form.save(commit=False)
            ret.distributor = distributor
            ret.save()
            messages.success(request, "Retailer Type Saved Successfully")
            return redirect('distributor:dist-retailer-types', dist_id, dist_name)
        else:
            page_title = dist_name + "| Info"
            context = {"page_title": page_title, "distributor": distributor, "form": form}
            return render(request, 'distri/forms/ret_Types.html', context=context)


class EditProduct(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name, pr_id):
        product = Product.objects.get(id=pr_id)
        distributor = Distributor.objects.get(id=dist_id)
        form = AddProductForm(distributor=distributor, instance=product)
        form2 = AddProductPriceForm
        page_title = dist_name + " | Edit " + product.name
        pr_prices = ProductPrice.objects.filter(product=product).all()
        context = {"distributor": distributor, "page_title": page_title, "form": form, "form2": form2,
                   "pr_prices": pr_prices}
        return render(request, "distri/forms/edit_pr.html", context=context)

    def post(self, request, dist_id, dist_name, pr_id):
        page_title = dist_name + "Edit Product"
        distributor = Distributor.objects.get(id=dist_id)
        product = Product.objects.get(id=pr_id)
        pr_form = AddProductPriceForm(request.POST)
        if pr_form.is_valid():
            pr_price = pr_form.save(commit=False)
            pr_price.product = product
            pr_price.distributor = distributor
            pr_price.save()
            return redirect('distributor:dist-product-edit', dist_id, dist_name, pr_id)
        else:
            form = AddProductForm(distributor=distributor, instance=product)
            form2 = pr_form
            page_title = dist_name + " | Edit " + product.name
            pr_prices = ProductPrice.objects.filter(product=product).all()
            context = {"distributor": distributor, "page_title": page_title, "form": form, "form2": form2,
                       "pr_prices": pr_prices}
            return render(request, "distri/forms/edit_pr.html", context=context)


"""

Here We go with the product Master Page
Supposed To deal With Everything About Product Cataloguing

"""
