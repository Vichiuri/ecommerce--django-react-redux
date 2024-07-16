"""
.
"""

import datetime
import traceback

from django.contrib import messages
from django.contrib.auth.mixins import UserPassesTestMixin
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.views import View

from distributor.forms.distri import UserGroupForm, PermissionsForm, AddSalesManForm, AddUserForm, UserAddForm, \
    AddProductForm, AddProductCategoryForm, AddProductSubCategoryForm, AddRetailerForm, AddThemeForm, \
    AddBannerForm, AddRetailerTypeForm, AddProductPackageForm, EditOrderForm, ChooseRetailerForm
from distributor.forms.setup import Step1, Step2, Step3, DistForm
from distributor.models import Distributor, DistUsers, PermissionGroup, SalesMan, Retailer, PCategory, SubCategory, \
    Product, MobileBanner, MNotification, MThemes, ProductImage, RetailerType, ProductPackage, RetailOrders, Delivery, \
    DistOrder, PriceLevel
from distributor.views.forms.others import calculate_product_price
from netbotAuth.models import  User


class Setup(View):
    template_name = "setup/index.html"
    current_form = 'step1'
    form = DistForm
    form_title = 'Basic Info'

    def get(self, request):
        if 'current_form' not in request.session:
            request.session['current_form'] = 'step1'
        if request.session['current_form'] == 'step1':
            self.form = Step1
        elif request.session['current_form'] == 'step2':
            self.form = Step2
        elif request.session['current_form'] == 'Step3':
            self.form = Step3

        return render(request, self.template_name, {"c_form": self.form})

    def post(self, request):
        distributor = DistForm(request.POST, request.FILES)
        if distributor.is_valid():
            distributor.save()
        else:
            return JsonResponse(distributor.errors, safe=False)
        return redirect('distributor:set-up')


class Home(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.is_superuser == False

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        retailers = distributor.ret_distributors
        profile = Profile.objects.filter(user=request.user).first()
        dist_users = DistUsers.objects.filter(distributor=distributor).all()
        page_title = dist_name + " | Home"
        return render(request, 'distri/index.html',
                      {"distributor": distributor, "retailers": retailers, "profile": profile,
                       "dist_users": dist_users, "page_title": page_title})


class SalesMenView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        salesmen = SalesMan.objects.filter(distributor=distributor).all()
        context = {"distributor": distributor, 'salesmen': salesmen, 'page_title': dist_name + " | Sales People List"}
        return render(request, "distri/lists/salesmen_list.html", context)

    def post(self, request, dist_id, dist_name):
        try:
            data = dict()
            action = request.POST['action']
            if action == 'edit':
                sales_man_id = request.POST['id']
                salesman = SalesMan.objects.get(id=sales_man_id)
                form = AddSalesManForm(instance=salesman)
                return render(request, 'distri/modals/salesman.html', {"form": form})
            elif action == 'delete':
                salesman_id = request.POST['id']
                salesman = SalesMan.objects.get(id=salesman_id)
                user = User.objects.filter(email=salesman.email).first()
                dist_user = DistUsers.objects.filter(user=user).first()
                if salesman is None:
                    data['title'] = 'Error'
                    data['icon'] = 'error'
                    data['message'] = 'Could Not Delete Sales Person ,They Do nit Exist'
                    return JsonResponse(data)
                elif salesman.delete():
                    user.delete()
                    dist_user.delete()
                    data['title'] = "Success"
                    data['icon'] = "success"
                    data['message'] = "Deletion Of Salesman Success"
                    return JsonResponse(data)
        except:
            traceback.print_exc()
            data = dict()
            data['title'] = 'error'
            data['icon'] = 'error'
            data['message'] = 'Something Went Wrong .Further Processing of Your Request Halted.'
            return JsonResponse(data)


class ProductsView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        page_title = dist_name + " | Products"
        products = Product.objects.filter(distributor=distributor).all()
        context = {"page_title": page_title, "distributor": distributor, "products": products}
        return render(request, "distri/lists/products.html", context=context)

    def post(self, request, dist_id, dist_name):
        if 'action' in request.POST.keys():
            data = dict()
            distributor = Distributor.objects.get(id=dist_id)
            try:
                ob_id = request.POST['id']
                action = request.POST['action']
                if action == 'delete':
                    product = Product.objects.get(id=ob_id)
                    pr_name = product.name
                    if product is None:
                        data['title'] = 'Product Deletion Failure'
                        data['icon'] = 'error'
                        data['message'] = "Product Does Not Exist"
                        return JsonResponse(data)
                    elif product.delete():
                        messages.success(request, "Product " + pr_name + " Deleted Successfully")
                        data['title'] = 'Product Deletion Success'
                        data['icon'] = 'success'
                        data['message'] = "Product " + pr_name + " Deleted "
                        return JsonResponse(data)
                    else:
                        data['title'] = 'Product Deletion Failure'
                        data['icon'] = 'error'
                        data['message'] = "Some Indeterminate Error Prevented Deletion\n" \
                                          "Error Logged For Further Investigation"
                        return JsonResponse(data)
                elif action == 'edit':
                    product = Product.objects.get(id=ob_id)
                    pr_images = ProductImage.objects.filter(product=product).all()
                    pr_form = AddProductForm(distributor=distributor, instance=product)
                    return render(request, 'distri/modals/product.html', {"form": pr_form, "pr_images": pr_images})
            except Exception as e:
                data['title'] = 'Error'
                data['icon'] = "error"
                data['message'] = str(e)
                return JsonResponse(data)


class ProductCategories(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        pcs = PCategory.objects.filter(distributor=distributor).all()
        page_title = dist_name + " Product Categories"
        context = {"pcs": pcs, "distributor": distributor, "page_title": page_title}
        return render(request, "distri/lists/p_categories.html", context=context)

    def post(self, request, dist_id, dist_name):
        if 'action' in request.POST.keys():
            action = request.POST['action']
            data = dict()
            try:
                c_id = request.POST['id']
                category = PCategory.objects.get(id=c_id)
                cat_name = category.name
                if action == 'delete':
                    category.delete()
                    data['title'] = "Deletion Success"
                    data['message'] = "Deletion Of \n" + cat_name + "\n Went On Successfully"

                    data['icon'] = 'success'
                    messages.success(request, cat_name + " Deleted Successfully")
                    return JsonResponse(data)
                elif action == 'edit':
                    cat_form = AddProductCategoryForm(instance=category)
                    return render(request, 'distri/modals/p_category.html', {"form": cat_form})
            except Exception as e:
                data['title'] = "Error"
                data['icon'] = "error"
                data['message'] = 'Process Failure\n' + str(e)
                return JsonResponse(data)


class ProductSubCategory(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        page_title = dist_name + " Product SubCategories"
        sub_cs = SubCategory.objects.filter(distributor=distributor).all()
        context = {"page_title": page_title, "distributor": distributor, "sub_cs": sub_cs}
        return render(request, "distri/lists/p_sb_categories.html", context=context)

    def post(self, request, dist_id, dist_name):
        if 'action' in request.POST.keys():
            data = dict()
            try:
                action = request.POST['action']
                sb_id = request.POST['id']
                sb_cat = SubCategory.objects.get(id=sb_id)
                sb_name = sb_cat.name
                if action == 'edit':
                    distributor = Distributor.objects.get(id=dist_id)
                    sb_form = AddProductSubCategoryForm(distributor=distributor, instance=sb_cat)
                    return render(request, "distri/modals/p_s_category.html", {"form": sb_form})
                elif action == 'delete':
                    sb_cat.delete()
                    data['title'] = "Success"
                    data['message'] = "Deletion Of " + sb_name + " Success!!"
                    data['icon'] = "success"
                    messages.success(request, "Deletion Of " + sb_name + " Success!!")
                    return JsonResponse(data)
            except Exception as e:
                data['title'] = "Error"
                data['icon'] = "error"
                data['message'] = "Process Failure \n " + str(e)
                return JsonResponse(data)


class OrdersView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        try:
            if 'action' in request.GET.keys():
                action = request.GET['action']
                order_id = request.GET['id']
                order_ = RetailOrders.objects.get(id=order_id)
                if action == "approve":
                    order_.status = 'Approved'
                    order_.when_approved = datetime.datetime.now()
                    order_.save()
                    messages.success(request, "Order Approval Success")
                elif action == "decline":
                    order_.status = "Declined"
                    order_.when_declined = datetime.datetime.now()
                    order_.save()
                    messages.success(request, "Order Decline Success")

        except Exception as e:
            messages.error(request, "Error Process Failed " + str(e))
            return redirect("distributor:dist-orders", dist_id, dist_name)

        distributor = Distributor.objects.get(id=dist_id)
        orders = RetailOrders.objects.all()
        retailers = Retailer.objects.all()
        context = {"retailers": retailers, "orders_list": orders, "distributor": distributor,
                   "page_title": "Orders List|" + dist_name,
                   "content_title": "List Of Orders"}
        return render(request, "distri/lists/orders_list.html", context=context)

    def post(self, request, dist_id, dist_name):

        try:
            if 'action' in request.POST.keys():
                action = request.POST['action']
                order_id = request.POST['id']
                print("\nOrder Id", order_id, "")
                ret_order = RetailOrders.objects.get(id=order_id)
                data = dict()
                data['icon'] = "success"
                note = "."
                if "note" in request.POST.keys():
                    note = request.POST['note']

                    ret_order.note = ret_order.note + "\n" + note
                if action == "delete":
                    ret_order.delete()
                    messages.success(request, "Order Deletion Success")
                    data['message'] = "Deletion Success"
                    data['title'] = "Order Deletion Success"
                    return JsonResponse(data)
                elif action == 'approve':
                    ret_order.status = "Approved"
                    ret_order.when_approved = datetime.datetime.now()
                    ret_order.note = ret_order.note + " Approved On :" + str(
                        ret_order.when_approved)
                    ret_order.history.history_change_reason = note

                    for order__ in ret_order.ret_orders.all():
                        product = order__.product
                        stock_qty = product.stock_qty
                        if stock_qty < order__.qty:
                            data['title'] = "Approval Failure"
                            data['icon'] = "error"
                            data['message'] = "Order Approval Failure\n Product " \
                                              "" + product.name + "" \
                                                                  "Will run to negatives In Stock\n Please Consider " \
                                                                  "Updating Stock Details For The Same "
                            return JsonResponse(data)
                        else:
                            product.stock_qty = product.stock_qty - order__.qty
                            product.save()
                    messages.success(request, "Order Approval Success")
                    data["title"] = "Approval Success"
                    data['message'] = "Order Approval Was Successful"
                elif action == "hold":
                    ret_order.status = "On Hold"
                    ret_order.when_held = datetime.datetime.now()
                    ret_order.note = ret_order.note + " Withheld On :" + str(
                        ret_order.when_held)
                    ret_order.history.history_change_reason = note
                    messages.success(request, "Order #" + str(ret_order.id) + " Put On Hold Successfully")
                    data["title"] = "Withholding Success"
                    data['message'] = "Order Approval Was Successful"
                elif action == 'decline':
                    ret_order.status = "Declined"
                    ret_order.note = note
                    ret_order.when_declined = datetime.datetime.now()
                    ret_order.note = ret_order.note + " Declined On :" + str(
                        ret_order.when_declined)
                    ret_order.history.history_change_reason = note
                    messages.success(request, "Order #" + str(ret_order.id) + " Declined Success!!")
                    data["title"] = "Decline Success"
                    data['message'] = "Order Decline Was Successful"
                # elif action == "dispatch":
                #     ret_order.when_dispatched = datetime.datetime.now()
                #     ret_order.status = "Dispatched"
                #     delivery = Delivery()
                #     delivery.order = ret_order
                #     delivery.save()
                #     ret_order.note = ret_order.note + "\nDispatched On :" + str(
                #         ret_order.when_dispatched)
                elif action == "release":
                    ret_order.when_dispatched = datetime.datetime.now()
                    ret_order.status = "Pending"
                    ret_order.note = ret_order.note + "\nReleased On :" + str(
                        ret_order.when_dispatched)
                    ret_order.history.history_change_reason = note

                ret_order.save()
                return JsonResponse(data)
        except Exception as e:
            traceback.print_exc()
            data = dict()
            data['title'] = "Error"
            data['icon'] = "error"
            data['message'] = "Process Failure!!! " + str(e)
            return JsonResponse(data)


class UsersView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        dist_users = DistUsers.objects.filter(distributor=distributor).all()
        print(dist_users)
        page_title = dist_name + " | Users"
        context = {"distributor": distributor, "dist_users": dist_users, "page_title": page_title}
        return render(request, "distri/lists/users.html", context=context)

    def post(self, request, dist_id, dist_name):
        try:
            action = request.POST['action']
            if action == 'delete':
                user_id = request.POST['id']
                user = User.objects.get(id=user_id)
                data = dict()
                if user is None:
                    data['title'] = 'Error'
                    data['icon'] = 'error'
                    data['message'] = "Failed To Delete User They Does not exist"
                    return JsonResponse(data)
                elif user.dist_users.delete() and user.delete():
                    messages.success(request, "Deletion Of User " + user.email + " Success")
                    data['title'] = "Success"
                    data['icon'] = 'success'
                    data['message'] = "Deletion Of " + user.email + " Success"
                    return JsonResponse(data)
                else:
                    data['title'] = 'Error'
                    data['icon'] = 'error'
                    data['message'] = "Failed Deletion Of User Could Not Complete. Unknown Error"
                    return JsonResponse(data)
            elif action == 'edit':
                distributor = Distributor.objects.get(id=dist_id)
                user_id = request.POST['id']
                print('user id', user_id, '\n\n')
                user = User.objects.get(id=user_id)
                dist_user = user.dist_users
                form1 = AddUserForm(distributor, instance=dist_user)
                form2 = UserAddForm(instance=user)
                context = dict()
                context['form1'] = form1
                context['form2'] = form2
                return render(request, 'distri/modals/p_group.html', context)

        except:
            traceback.print_exc()
            data = dict()
            data['title'] = 'Error'
            data['icon'] = 'error'
            data['message'] = "Failed!! System Ran Into an Unknown Error"


class DeliveriesView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        deliveries = Delivery.objects.all()
        if 'action' in request.GET.keys():
            action = request.GET['action']
            ret_id = request.GET['ret_id']
            retailer_order = RetailOrders.objects.get(id=ret_id)
            if action == 'view':
                context = {"ret_order": retailer_order}
                return render(request, "distri/modals/view_ret_order.html", context=context)

        context = {"deliveries": deliveries, "distributor": distributor, "content_title": "List Deliveries"}
        return render(request, "distri/lists/deliveries.html", context=context)


class ReportsView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        return render(request, "distri/lists/reports.html", {"distributor": distributor})


class RetailersView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        retailers = Retailer.objects.all()
        page_title = dist_name + " | Retailers"
        context = {"page_title": page_title, "distributor": distributor, "retailers": retailers}
        return render(request, "distri/lists/retailers.html", context=context)

    def post(self, request, dist_id, dist_name):
        try:
            if 'action' in request.POST.keys():
                data = dict()
                action = request.POST['action']
                ret_id = request.POST['id']
                retailer = Retailer.objects.get(id=ret_id)
                if action == 'edit':
                    form = AddRetailerForm(instance=retailer)
                    return render(request, 'distri/modals/retailer.html', {"form": form})

                elif action == 'delete':
                    retailer.delete()
                    messages.success(request, "Retailer Deletion Success")
                    data['title'] = "Deletion Success"
                    data['icon'] = "success"
                    data['message'] = "Retailer Deleted Successfully"
                    return JsonResponse(data)
            return JsonResponse(data)
        except Exception as e:
            data = dict()
            data['title'] = "Error"
            data['icon'] = "error"
            data['message'] = "Process Failed\n " + str(e)
            return JsonResponse(data)


class UserGroupView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        user_groups = PermissionGroup.objects.filter(distributor=distributor).all()
        context = {"distributor": distributor, "user_groups": user_groups, "page_title": dist_name + " |User Groups "}
        return render(request, "distri/lists/user_groups.html", context=context)

    def post(self, request, dist_id, dist_name):
        try:
            action = request.POST['action']
            if action == 'delete':
                gr_id = request.POST['id']
                group = PermissionGroup.objects.get(id=gr_id)
                data = dict()
                if group is None:
                    data['title'] = 'Error'
                    data['icon'] = 'error'
                    data['message'] = "Failed To Delete Group It Does not exist"
                    return JsonResponse(data)
                elif group.delete():
                    messages.success(request, "Deletion Of Group " + group.name + " Success")
                    data['title'] = "Success"
                    data['icon'] = 'success'
                    data['message'] = "Deletion Of " + group.name + " Success"
                    return JsonResponse(data)
                else:
                    data['title'] = 'Error'
                    data['icon'] = 'error'
                    data['message'] = "Failed To Delete Group" + " System Ran Into an Unknown Error"
                    return JsonResponse(data)
            elif action == 'edit':
                distributor = Distributor.objects.get(id=dist_id)
                group_id = request.POST['id']
                p_group = PermissionGroup.objects.get(id=group_id)
                permission = p_group.permission
                form1 = UserGroupForm(instance=p_group)
                form2 = PermissionsForm(instance=permission)
                context = dict()
                context['form1'] = form1
                context['form2'] = form2
                return render(request, 'distri/modals/p_group.html', context)

        except:
            traceback.print_exc()
            data = dict()
            data['title'] = 'Error'
            data['icon'] = 'error'
            data['message'] = "Failed!! System Ran Into an Unknown Error"
            return JsonResponse(data)


class ThemesView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        themes = MThemes.objects.filter(distributor=distributor)
        context = {"distributor": distributor, "page_title": dist_name + "| Mobile Banners ", "themes": themes}
        return render(request, "distri/lists/m_themes.html", context=context)

    def post(self, request, dist_id, dist_name):
        data = dict()
        try:
            if 'action' in request.POST.keys():
                action = request.POST['action']
                ob_id = request.POST['id']
                obj = MThemes.objects.get(id=ob_id)
                if action == 'edit':
                    form = AddThemeForm(instance=obj)
                    return render(request, 'distri/modals/m_notif.html', {"form": form})
                if action == 'delete':
                    obj.delete()
                    messages.success(request, "Notification Deletion Success")
                    data['title'] = "Success"
                    data['icon'] = "success"
                    return JsonResponse(data)
            return JsonResponse(data)
        except Exception as e:
            data['icon'] = 'error'
            data['title'] = "Error"
            data['message'] = "Process Failure!!! " + str(e)
            return JsonResponse(data)


class NotificationsView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        notifs = MNotification.objects.filter(distributor=distributor)
        context = {"distributor": distributor, "page_title": dist_name + "| Mobile Banners ", "notifs": notifs}

        return render(request, "distri/lists/m_notifs.html", context=context)

    def post(self, request, dist_id, dist_name):
        data = dict()
        try:
            if 'action' in request.POST.keys():
                action = request.POST['action']
                ob_id = request.POST['id']
                obj = MThemes.objects.get(id=ob_id)
                if action == 'edit':
                    form = AddThemeForm(instance=obj)
                    return render(request, 'distri/modals/m_theme.html', {"form": form})
                if action == 'delete':
                    obj.delete()
                    messages.success(request, "Theme Deletion Success")
                    data['title'] = "Success"
                    data['icon'] = "success"
                    return JsonResponse(data)
            return JsonResponse(data)
        except Exception as e:
            data['icon'] = 'error'
            data['title'] = "Error"
            data['message'] = "Process Failure!!! " + str(e)
            return JsonResponse(data)


class BannersView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        content_title = "Mobile Banners List"
        distributor = Distributor.objects.get(id=dist_id)
        banners = MobileBanner.objects.filter(distributor=distributor)
        context = {"content_title": content_title, "distributor": distributor,
                   "page_title": dist_name + "| Mobile Banners ", "banners": banners}
        return render(request, "distri/lists/m_banners.html", context=context)

    def post(self, request, dist_id, dist_name):
        data = dict()
        try:
            if 'action' in request.POST.keys():
                action = request.POST['action']
                ob_id = request.POST['id']
                obj = MobileBanner.objects.get(id=ob_id)
                if action == 'edit':
                    form = AddBannerForm(instance=obj)
                    return render(request, 'distri/modals/m_banner.html', {"form": form})
                if action == 'delete':
                    obj.delete()
                    messages.success(request, "Banner Deletion Success")
                    data['title'] = "Success"
                    data['icon'] = "success"
                    return JsonResponse(data)
            return JsonResponse(data)
        except Exception as e:
            data['icon'] = 'error'
            data['title'] = "Error"
            data['message'] = "Process Failure!!! " + str(e)
            return JsonResponse(data)


class DelProductImage(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated

    def post(self, request, im_id):
        data = dict()
        try:
            pr_image = ProductImage.objects.get(id=im_id)
            pr_image.delete()
            data['title'] = "Success"
            data['message'] = "Deletion Of Product Image Success"
            data['icon'] = "success"
            return JsonResponse(data)
        except Exception as e:
            data['title'] = "Error"
            data['message'] = "Product Pic Deletion Failed\n" + str(e)
            data['icon'] = 'error'
            return JsonResponse(data)


class RetailerTypesView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        retailer_Ts = RetailerType.objects.filter(distributor=distributor)
        context = {"distributor": distributor, "page_title": dist_name + "| Retailer Types ",
                   "retailer_types": retailer_Ts}
        return render(request, "distri/lists/ret_types.html", context=context)

    def post(self, request, dist_id, dist_name):
        data = dict()
        try:
            if 'action' in request.POST.keys():
                action = request.POST['action']
                ob_id = request.POST['id']
                obj = RetailerType.objects.get(id=ob_id)
                if action == 'edit':
                    form = AddRetailerTypeForm(instance=obj)
                    return render(request, 'distri/modals/retType.html', {"form": form})
                if action == 'delete':
                    obj.delete()
                    messages.success(request, " Client Type Deletion Success ")
                    data['title'] = "Success"
                    data['icon'] = "success"
                    return JsonResponse(data)
            return JsonResponse(data)
        except Exception as e:
            data['icon'] = 'error'
            data['title'] = "Error"
            data['message'] = "Process Failure!!! " + str(e)
            return JsonResponse(data)


class ProductPackagesView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        pr_P = ProductPackage.objects.filter(distributor=distributor)
        context = {"distributor": distributor, "page_title": dist_name + "| Product Packages ", "pr_pgs": pr_P}
        return render(request, "distri/lists/pr_packages.html", context=context)

    def post(self, request, dist_id, dist_name):
        data = dict()
        distributor = Distributor.objects.get(id=dist_id)
        try:
            if 'action' in request.POST.keys():
                action = request.POST['action']
                ob_id = request.POST['id']
                obj = ProductPackage.objects.get(id=ob_id)
                if action == 'edit':
                    form = AddProductPackageForm(distributor=distributor, instance=obj)
                    return render(request, 'distri/modals/retType.html', {"form": form})
                if action == 'delete':
                    obj.delete()
                    messages.success(request, " Client Type Deletion Success ")
                    data['title'] = "Success"
                    data['icon'] = "success"
                    return JsonResponse(data)
            return JsonResponse(data)
        except Exception as e:
            data['icon'] = 'error'
            data['title'] = "Error"
            data['message'] = "Process Failure!!! " + str(e)
            return JsonResponse(data)


class OffersPage(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        content_title = "Offers"
        distributor = Distributor.objects.get(id=dist_id)
        pr_P = ProductPackage.objects.filter(distributor=distributor)
        context = {"content_title": content_title, "distributor": distributor,
                   "page_title": dist_name + "| Product Packages ", "pr_pgs": pr_P}
        return render(request, "distri/lists/offers.html", context=context)


class OrderDispatchView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name, order_id):
        distributor = Distributor.objects.get(id=dist_id)
        ret_order_ = RetailOrders.objects.get(id=order_id)
        if 'action' in request.GET.keys():
            action = request.GET['action']

            if action == 'place_order':
                orders_to_add = ret_order_.ret_orders.all()
                if len(orders_to_add) == 0:
                    messages.warning(request, "Cant Place Order!!! No Products In Cart")
                    return redirect("distributor:dist-orders-edit", dist_id, dist_name, order_id)

                for order_ in orders_to_add:
                    order_.placed = True
                    order_.save()
                    ret_order_.total_cost += order_.order_price
                    salesman_id = request.GET['salesman_field']
                    pay_ments = request.GET['payment_terms']
                    price_level = request.GET['price_level']

                    ret_order_.salesman_id = salesman_id
                    ret_order_.payment_terms = pay_ments
                    ret_order_.price_level_id = price_level
                    ret_order_.save()
                messages.success(request, "Order Update Success")
                return redirect("distributor:dist-orders", dist_id, dist_name)
            elif action == 'delete_order':
                order_id = request.GET['order_id']
                order_del = DistOrder.objects.get(id=order_id)
                order_del.delete()
                messages.success(request, "Order Deletion Success")
                return redirect('distributor:dist-orders-edit', dist_id, dist_name, order_id)
            elif action == 'update_order':
                order_id = request.GET['order_id']
                pr_qty = request.GET['pr_qty']

                order_update = DistOrder.objects.get(id=order_id)
                previous_retail_order_cost = order_update.order_price
                order_update.qty = int(pr_qty)
                order_update.order_price = calculate_product_price(order_update.product, order_update.qty)
                print(order_update.product.stock_qty)
                if order_update.qty > order_update.product.stock_qty:
                    order_update.qty = order_update.product.stock_qty
                    order_update.order_price = calculate_product_price(order_update.product, order_update.qty)
                ret_order = order_update.ret_order_s.first()
                ret_order.total_cost = ret_order.total_cost - previous_retail_order_cost + order_update.order_price
                ret_order.save()
                order_update.save()
                # messages.success(request, "Order Update Success")
                return JsonResponse(
                    {"total_price": "" + str(order_update.order_price), "ret_total": str(ret_order.total_cost)})
            elif action == "dispatch_order":
                driver = request.GET['driver']
                phone = request.GET['phone']
                vehicle = request.GET['vehicle']
                note = request.GET["note"]
                delivery = Delivery()
                delivery.order = ret_order_
                ret_order_.status = "Dispatched"
                ret_order_.when_dispatched = datetime.datetime.now()
                ret_order_.save()
                delivery.vehicle_no = vehicle
                delivery.transporter = driver
                delivery.transporter_phone = phone
                delivery.remarks = note
                delivery.save()
                return redirect("distributor:dist-orders", dist_id, dist_name)

        retailer = Retailer.objects.first()

        order_form = EditOrderForm(order_id)
        dummy_dist_order = DistOrder()
        dummy_dist_order.retailer = retailer
        change_retailer_form = ChooseRetailerForm(instance=dummy_dist_order)
        dist_orders = ret_order_.ret_orders.all()
        sales_people = SalesMan.objects.filter(distributor=distributor).all()
        price_levels = PriceLevel.objects.filter(distributor=distributor).all()
        page_title = "Editing Order" + dist_name
        context = {"dist_orders": dist_orders, "page_title": page_title,
                   "retailer": retailer, "sales_people": sales_people,
                   "price_levels": price_levels,
                   "order_place": ret_order_,
                   "change_retailer_form": change_retailer_form,
                   "distributor": distributor, "order_form": order_form,
                   "content_title": "Confirm Order Dispatch "}

        return render(request, "distri/forms/partial_delivery.html", context=context)

    def post(self, request, dist_id, dist_name, order_id):
        try:
            distributor = Distributor.objects.get(id=dist_id)

            ret_order = RetailOrders.objects.get(id=order_id)
            retailer = ret_order.retailer

            order_form = EditOrderForm(order_id, request.POST)
            if order_form.is_valid():
                order = order_form.save(commit=False)
                order.distributor = distributor
                order.retailer = retailer
                order.submitted_by = request.user.dist_users
                ex_order = ret_order.ret_orders.filter(product=order.product).first()

                if ex_order is None:
                    print("\n\nName", order.product.name, "Price Per", order.product.price, "Total",
                          order.qty * order.product.price, "Quantity", order.qty, "\n\n")
                    order.order_price = calculate_product_price(order.product, order.qty)
                    order.placed = True
                    order.save()
                    ret_order.ret_orders.add(order)
                else:
                    print("\n\nName", order.product.name, "Price Per", order.product.price, "Total",
                          order.qty * order.product.price, "Quantity", order.qty, "\n\n")
                    ex_order.qty = ex_order.qty + order.qty
                    ex_order.order_price = calculate_product_price(ex_order.product, ex_order.qty)
                    ex_order.save()

                messages.success(request, "Product Add To Order Success !!!")
                # return redirect('distributor:dist-place-orders', dist_id, dist_name)
                return redirect("/_" + str(dist_id) + "/" + dist_name + "/_/orders/edit/" + str(order_id))
            messages.warning(request, "An UnIdentified Error")
            return redirect("/_" + str(dist_id) + "/" + dist_name + "/_/orders/edit/" + str(order_id))
        except Exception as e:
            traceback.print_exc()
            messages.error(request, "Order Placement Error !!! " + str(e))
            return redirect('distributor:dist-orders-edit', dist_id, dist_name, order_id)

