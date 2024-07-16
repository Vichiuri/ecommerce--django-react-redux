import traceback

from django.contrib import messages
from django.contrib.auth.mixins import UserPassesTestMixin
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.views import View

from distributor.forms.distri import AddUnitForm, AddComplexUnitForm, PriceLevelForm, PriceListForm, PriceOfferForm, \
    AddOrderForm, AddRegionForm, AddCityForm, AddAreaForm, AddSalesTargetForm, ChooseRetailerForm, EditOrderForm
from distributor.models import Distributor, MUnit, CompoundUnit, PriceLevel, Retailer, SalesMan, PriceList, Product, \
    PriceOffer, DistOrder, DistRegion, DistCity, DistArea, SalesTarget, RetailOrders


class ProductMaster(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        page_title = dist_name + " | Product Master"
        distributor = Distributor.objects.filter(id=dist_id).first()
        p_units = MUnit.objects.filter(distributor=distributor).all()
        p_c_units = CompoundUnit.objects.filter(distributor=distributor).all
        price_levels = PriceLevel.objects.filter(distributor=distributor).all()
        unit_form = AddUnitForm
        compound_form = AddComplexUnitForm
        price_level_f = PriceLevelForm

        context = {"distributor": distributor, "page_title": page_title, "unit_form": unit_form,
                   "com_form": compound_form, "price_l_form": price_level_f, "p_units": p_units,
                   "complex_units": p_c_units, "price_levels": price_levels}

        return render(request, "distri/forms/master_product.html", context=context)

    def post(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        form_name = request.POST['form_name']
        form_obj = PriceLevelForm(request.POST)
        form_message = "Price Level"
        try:

            if form_name == 'c_unit':
                form_obj = AddComplexUnitForm(request.POST)
                form_message = " Compound Unit "
            elif form_name == 'unit':
                form_obj = AddUnitForm(request.POST)
                form_message = "Unit "
            if form_obj.is_valid():
                obj = form_obj.save(commit=False)
                obj.distributor = distributor
                obj.save()
                messages.success(request, form_message + " Saved Successfully")
                return redirect("distributor:dist-product-master", dist_id, dist_name)
            else:
                return redirect("distributor:dist-product-master", dist_id, dist_name)
        except Exception as e:
            messages.error(request, "Process Failure !!! " + str(e))
            return redirect("distributor:dist-product-master", dist_id, dist_name)


class PriceListFormView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        price_list_form = PriceListForm(distributor=distributor)
        page_title = dist_name + " | Price List Add"
        context = {"price_list_form": price_list_form, "distributor": distributor, "page_title": page_title}
        return render(request, "distri/forms/price_listf.html", context=context)

    def post(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        price_l_form = PriceListForm(distributor, request.POST)
        page_title = "Correct Errors | " + dist_name
        if price_l_form.is_valid():
            price_list = price_l_form.save(commit=False)
            price_list.distributor = distributor
            price_list.save()
            return redirect('distributor:dist-price_lists', dist_id, dist_name)
        else:
            messages.error(request, "Price List Errors!!!")
            context = {"price_list_form": price_l_form, "distributor": distributor, "page_title": page_title}
            return render(request, "distri/forms/price_listf.html", context=context)


class AssignedRetailersToSalesPerson(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name, sl_id):
        salesman = SalesMan.objects.get(id=sl_id)
        a_retailers = Retailer.objects.filter(salesmen__exact=salesman).all()
        retailers = Retailer.objects.exclude(salesmen__exact=salesman).all()
        context = {"retailers": retailers, "a_retailers": a_retailers}
        return render(request, "distri/modals/assignedSalesmen.html", context=context)

    def post(self, request, dist_id, dist_name, sl_id):
        data = dict()
        try:
            salesman = SalesMan.objects.get(id=sl_id)
            action = request.POST['action']
            ret_id = request.POST['ret_id']
            retailer = Retailer.objects.get(id=ret_id)
            if action == 'add':
                salesman.retailers.add(retailer)
                salesman.save()
                data['icon'] = "success"
                data['title'] = "Success"
                data['message'] = "Retailer Assignment Success!!!"

            elif action == 'remove':
                salesman.retailers.remove(retailer)
                salesman.save()
                data['icon'] = "success"
                data['title'] = "Success"
                data['message'] = "Retailer Removal!!!"
            return JsonResponse(data)
        except Exception as e:
            data['title'] = "Error"
            data['message'] = "An Unexpected Error Occurred\n " + str(e)
            data['icon'] = "error"
            return JsonResponse(data)


class AssignedSalesPeopleToRetailers(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name, ret_id):
        distributor = Distributor.objects.get(id=dist_id)
        retailer = Retailer.objects.get(id=ret_id)
        a_sales_people = SalesMan.objects.filter(retailer=retailer).all()
        sales_people = SalesMan.objects.filter(distributor=distributor).all()
        context = {"a_sales_people": a_sales_people, "sales_people": sales_people}

        return render(request, "distri/modals/assignedSalesmen.html", context=context)

    def post(self, request, dist_id, dist_name, ret_id):
        ...


class PriceListView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        products = Product.objects.filter(distributor=distributor).all()

        price_list_form = PriceListForm(distributor=distributor)
        price_lists = PriceList.objects.filter(distributor=distributor).all()
        page_title = "Price List | " + dist_name
        context = {"price_list_form": price_list_form, "distributor": distributor,
                   "price_lists": price_lists, "page_title": page_title, "products": products}
        return render(request, "distri/lists/price_list.html", context=context)

    def post(self, request, dist_id, dist_name):
        ...


class OffersFormView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        form = PriceOfferForm(distributor)
        context = {"form": form, "page_title": dist_name + "|Offers Add", "distributor": distributor}
        return render(request, "distri/forms/offers.html", context=context)

    def post(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        form = PriceOfferForm(distributor, request.POST)
        if 'id' in request.POST.keys():
            pr_id = request.POST['id']
            price_offer = PriceOffer.objects.get(id=pr_id)

            form = PriceOfferForm(distributor, request.POST, instance=price_offer, )
        if form.is_valid():
            pr_offer = form.save(commit=False)
            pr_offer.distributor = distributor
            pr_offer.save()
            messages.success(request, "Offer Saved Success")
            return redirect("distributor:dist-offers-list", dist_id, dist_name)
        else:
            messages.error(request, "Offer Detail Errors")
            context = {"form": form, "page_title": dist_name + " | Offers Add", "distributor": distributor}
            return render(request, "distri/forms/offers.html", context=context)


class OffersListView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        offers = PriceOffer.objects.filter(distributor=distributor).all()
        content_title = "Offers"
        page_title = "Offers!" + dist_name
        context = {"content_title": content_title, "distributor": distributor, "page_title": page_title,
                   "offers": offers}
        return render(request, "distri/lists/offers.html", context=context)

    def post(self, request, dist_id, dist_name):
        data = dict()
        try:
            distributor = Distributor.objects.get(id=dist_id)
            if 'action' in request.POST.keys():
                action = request.POST['action']
                ob_id = request.POST['id']
                obj = PriceOffer.objects.get(id=ob_id)
                if action == 'edit':
                    form = PriceOfferForm(distributor, instance=obj)
                    return render(request, 'distri/modals/price_offer.html', {"form": form})
                if action == 'delete':
                    obj.delete()
                    messages.success(request, "Offer Deletion Success")
                    data['title'] = "Success"
                    data['icon'] = "success"
                    return JsonResponse(data)
            return JsonResponse(data)
        except Exception as e:
            data['icon'] = 'error'
            data['title'] = "Error"
            data['message'] = "Process Failure!!! " + str(e)
            return JsonResponse(data)


class PlaceOrderFormView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        if 'action' in request.GET.keys():
            action = request.GET['action']

            if action == 'place_order':
                ret_id = request.GET['ret_id']
                retailer = Retailer.objects.get(id=ret_id)
                orders_to_add = DistOrder.objects.filter(distributor=distributor, placed=False, retailer=retailer,
                                                         submitted_by=request.user.dist_users)
                if len(orders_to_add) == 0:
                    messages.warning(request, "Cant Place Order!!! No Products In Cart")
                    return redirect("distributor:dist-place-orders", dist_id, dist_name)
                retailer_order = RetailOrders()
                retailer_order.distributor = distributor
                retailer_order.retailer = retailer
                retailer_order.status = 'Pending'
                salesman_id = request.GET['salesman_field']
                pay_ments = request.GET['payment_terms']
                price_level = request.GET['price_level']

                retailer_order.salesman_id = salesman_id
                retailer_order.payment_terms = pay_ments
                retailer_order.price_level_id = price_level
                retailer_order.save()
                retailer_order.ret_orders.set(orders_to_add)
                for order_ in orders_to_add:
                    order_.placed = True
                    order_.save()
                    retailer_order.total_cost += order_.order_price
                    retailer_order.save()
                messages.success(request, "Order Placement Success")
                return redirect("distributor:dist-orders", dist_id, dist_name)
            elif action == 'delete_order':
                order_id = request.GET['order_id']
                order_del = DistOrder.objects.get(id=order_id)
                order_del.delete()
                messages.success(request, "Order Deletion Success")
                return redirect('distributor:dist-place-orders', dist_id, dist_name)
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
                return JsonResponse({"total_price": "" + str(order_update.order_price),"ret_total":ret_order.total_cost})

        retailer = Retailer.objects.first()
        if retailer is None:
            messages.error(request, "Cant Place Order , Add At Least One Retailer")
            return redirect('distributor:dist-orders', dist_id, dist_name)
        retailer_name = ""
        retailer_pin_no = ""
        if retailer is not None:
            retailer_name = retailer.name
            retailer_pin_no = retailer.pin_no
        if 'ret_id' in request.GET.keys():
            ret_id = request.GET['ret_id']
            retailer = Retailer.objects.get(id=ret_id)

        order_form = AddOrderForm(request, retailer.id)
        dummy_dist_order = DistOrder()
        dummy_dist_order.retailer = retailer
        change_retailer_form = ChooseRetailerForm(instance=dummy_dist_order)
        dist_orders = DistOrder.objects.filter(distributor=distributor, placed=False, retailer=retailer,
                                               submitted_by=request.user.dist_users)

        page_title = " Order Placing " + dist_name
        retailers_to_select = Retailer.objects.all()
        sales_people = SalesMan.objects.filter(distributor=distributor).all()
        price_levels = PriceLevel.objects.filter(distributor=distributor).all()
        print(price_levels)
        context = {"retailers_to_select": retailers_to_select, "dist_orders": dist_orders, "page_title": page_title,
                   "retailer": retailer,
                   "sales_people": sales_people,
                   "price_levels": price_levels,
                   "change_retailer_form": change_retailer_form,
                   "distributor": distributor, "order_form": order_form,
                   "content_title": "Place Order On Behalf Of " + retailer_name +
                                    "(" + retailer_pin_no + ") "

                   }

        return render(request, "distri/forms/order_refined_form.html", context=context)

    def post(self, request, dist_id, dist_name):
        try:
            distributor = Distributor.objects.get(id=dist_id)
            ret_id = request.GET['ret_id']
            retailer = Retailer.objects.get(id=ret_id)

            order_form = AddOrderForm(request, ret_id, request.POST)
            if order_form.is_valid():
                order = order_form.save(commit=False)
                order.distributor = distributor
                order.retailer = retailer
                order.submitted_by = request.user.dist_users
                ex_order = DistOrder.objects.filter(placed=False, submitted_by=request.user.dist_users,
                                                    product=order.product, retailer=retailer).first()

                if ex_order is None:
                    print("\n\nName", order.product.name, "Price Per", order.product.price, "Total",
                          order.qty * order.product.price, "Quantity", order.qty, "\n\n")
                    order.order_price = calculate_product_price(order.product, order.qty)
                    order.save()
                else:
                    print("\n\nName", order.product.name, "Price Per", order.product.price, "Total",
                          order.qty * order.product.price, "Quantity", order.qty, "\n\n")
                    ex_order.qty = ex_order.qty + order.qty
                    ex_order.order_price = calculate_product_price(ex_order.product, ex_order.qty)
                    ex_order.save()

                messages.success(request, "Product Add To Order Success !!!")
                # return redirect('distributor:dist-place-orders', dist_id, dist_name)
                return redirect("/_" + str(dist_id) + "/" + dist_name + "/_/orders/place?ret_id=" + str(retailer.id))
            messages.warning(request, "An UnIdentified Error")
            return redirect("/_" + str(dist_id) + "/" + dist_name + "/_/orders/place?ret_id=" + str(retailer.id))
        except Exception as e:
            traceback.print_exc()
            messages.error(request, "Order Placement Error !!! " + str(e))
            return redirect('distributor:dist-place-orders', dist_id, dist_name)


class EditOrderFormView(UserPassesTestMixin, View):
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
                return JsonResponse({"total_price": "" + str(order_update.order_price),"ret_total":ret_order.total_cost})

        retailer = Retailer.objects.first()

        retailer_name = retailer.email + " ( " + retailer.name + " ) "
        retailer_pin_no = " Pin No:" + retailer.pin_no

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
                   "content_title": "Place Order On Behalf Of " + retailer_name + "(" + retailer_pin_no + ")"}

        return render(request, "distri/forms/orders_edit.html", context=context)

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


class LocationMaster(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        page_title = dist_name + " | Location Master"
        distributor = Distributor.objects.get(id=dist_id)
        regions = DistRegion.objects.filter(distributor=distributor).all()
        cities = DistCity.objects.filter(distributor=distributor).all
        areas = DistArea.objects.filter(distributor=distributor).all()
        region_form = AddRegionForm
        city_form = AddCityForm(distributor)
        area_form = AddAreaForm(distributor)

        context = {"distributor": distributor, "page_title": page_title, "area_form": area_form,
                   "region_form": region_form, "city_form": city_form, "regions": regions,
                   "cities": cities, "areas": areas, "content_title": "Client Locations Master"}

        return render(request, "distri/forms/master_locations.html", context=context)

    def post(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        form_name = request.POST['form_name']
        form_obj = AddRegionForm(request.POST)
        form_message = "Region"
        try:

            if form_name == 'city_form':
                form_obj = AddCityForm(distributor, request.POST)
                form_message = " City "
            elif form_name == 'area_form':
                form_obj = AddAreaForm(distributor, request.POST)
                form_message = "Area "
            if form_obj.is_valid():
                obj = form_obj.save(commit=False)
                obj.distributor = distributor
                obj.save()
                messages.success(request, form_message + " Saved Successfully")
                return redirect("distributor:dist-locations-master", dist_id, dist_name)
            else:
                return redirect("distributor:dist-locations-master", dist_id, dist_name)
        except Exception as e:
            traceback.print_exc()
            messages.error(request, "Process Failure !!! " + str(e))
            return redirect("distributor:dist-locations-master", dist_id, dist_name)


class SalesTargetsView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        page_title = dist_name + " | Sales Targets"
        distributor = Distributor.objects.get(id=dist_id)
        targets = SalesTarget.objects.filter(distributor=distributor).all()
        content_title = "Sales Targets"
        context = {"content_title": content_title, "distributor": distributor, "page_title": page_title,
                   "sales_targets": targets}
        return render(request, "distri/lists/sales_targets.html", context=context)

    def post(self, request, dist_id, dist_name):
        data = dict()
        try:
            distributor = Distributor.objects.get(id=dist_id)
            if 'action' in request.POST.keys():
                action = request.POST['action']
                ob_id = request.POST['id']
                obj = SalesTarget.objects.get(id=ob_id)
                if action == 'edit':
                    form = AddSalesTargetForm(instance=obj)
                    return render(request, 'distri/modals/sales_target.html', {"form": form})
                if action == 'delete':
                    obj.delete()
                    messages.success(request, "Sales Target  Deletion Success")
                    data['title'] = "Success"
                    data['icon'] = "success"
                    return JsonResponse(data)
            return JsonResponse(data)
        except Exception as e:
            data['icon'] = 'error'
            data['title'] = "Error"
            data['message'] = "Process Failure!!! " + str(e)
            return JsonResponse(data)


class SalesTargetFormView(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.email == self.request.user.dist_users.user.email

    def get(self, request, dist_id, dist_name):
        page_title = dist_name + " | Sales Targets Add"
        distributor = Distributor.objects.get(id=dist_id)
        content_title = "Sales Targets"
        form = AddSalesTargetForm
        context = {"form": form, "content_title": content_title, "distributor": distributor, "page_title": page_title}
        return render(request, "distri/forms/sales_target_form.html", context=context)

    def post(self, request, dist_id, dist_name):
        distributor = Distributor.objects.get(id=dist_id)
        sltg = AddSalesTargetForm(request.POST)
        try:
            if "id" in request.POST.keys():
                sl_id = request.POST['id']
                sales_target = SalesTarget.objects.get(id=sl_id)
                sltg = AddSalesTargetForm(request.POST, instance=sales_target)
            if sltg.is_valid():
                sales_target = sltg.save(commit=False)
                sales_target.distributor = distributor
                sales_target.save()
                messages.success(request, "Sales Target Saved Successfully")
                return redirect("distributor:dist-sales-targets", dist_id, dist_name)
            else:
                content_title = "Sales Targets Process Error"
                page_title = dist_name + " | Sales Targets Add"
                context = {"form": sltg, "content_title": content_title, "distributor": distributor,
                           "page_title": page_title}
                return render(request, "distri/forms/sales_target_form.html", context=context)

        except Exception as e:
            messages.error(request, "Failed To Process Target !!!" + str(e))
            return redirect('distributor:dist-sales-targets-add', dist_id, dist_name)


def calculate_product_price(product, quantity):
    scs = (("BnXEX", "Buy n of X GET Extra X"),
           ("BnXYF", "Buy n of X get Y free"),
           ("BnXy%O", "Buy n of X get y% off"))
    product_price = product.price * quantity
    print(product.x_items.all())
    print(len(product.x_items.all()))
    if len(product.x_items.all()) > 0:
        for scheme in product.x_items.all():
            print(scheme)
            if scheme.scheme == "BnXEX":
                if quantity >= scheme.x_amt:
                    product_price = product_price - (int(quantity / scheme.x_amt)) * product.price * scheme.y_amt
            if scheme.scheme == "BnXy%O":
                if quantity >= scheme.x_amt:
                    product_price = product_price * (100 - scheme.y_amt) / 100

    print(product_price)
    return product_price
