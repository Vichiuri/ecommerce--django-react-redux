from django.contrib import messages
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.mixins import UserPassesTestMixin
from django.shortcuts import render, redirect, get_object_or_404
from django.views import View

from distributor.commons import addCustomUnits, generate_distributor_code
from distributor.commons import random_password, send_html_email
from distributor.forms.distri import UserAddForm
from distributor.forms.netbot_f import AddUserForm, AddPermissionForm, AddPermissionGroupForm, AddSubscriptionForm
from distributor.forms.setup import DistForm, EditDistributor
from distributor.models import DistUsers, PermissionGroup, DistPermission, \
    Distributor, NetBotPermissionGroup, NetBotUser, Subscription
from netbotAuth.forms.user import NetBotFormProfile, ProfilePassword
from netbotAuth.models import User
from netbot_biz import settings
from distributor.models.distributor import DistributorOptions, Retailer
from distributor.threading import CreateDistributorNotificationThread, CreateSubscriptionNotification, CreateUserNotification


class AddDistributorView(View):
    def get(self, request):
        form = DistForm
        subscription = Subscription.objects.all()
        context = {"page_title": "Add Distributor",
                   "form": form, 'subscription': subscription}

        return render(request, 'NewTheme/add-distributor.html', context=context)

    def post(self, request):

        try:
            form = DistForm(request.POST, request.FILES)
            sys_user_form = UserAddForm(request.POST)
            if 'id' in request.POST.keys():
                dist_id = request.POST['id']
                distributor = Distributor.objects.get(id=dist_id)
                dist = DistForm(request.POST, request.FILES,
                                instance=distributor)
                user = User.objects.filter(
                    email=str(request.POST['email'])).first()
                user_f = UserAddForm(request.POST, instance=user)
                if dist.is_valid() and user_f.is_valid():
                    user_f = user_f.save(commit=False)
                    user.email = user_f.email
                    user.save()
                    dist_user = DistUsers.objects.filter(user=user).first()
                    dist_user.email = user.email
                    dist_user.save()
                    dist_ = dist.save(commit=False)
                    dist_.id = dist_id
                    dist_.save()

                    CreateDistributorNotificationThread(
                        distributor, 'updated').start()

                    messages.success(
                        request, "Distributor Updated successfully")
                    return redirect('distributor:distributor-list')
                else:
                    messages.error(
                        request, "Distributor Add Failure... Please Correct the errors below")
                    # form_dist=dict(request.POST.copy())
                    # print(form_dist)
                    # dist=DistForm(initial=form_dist)
                    context = {
                        "page_title": "Add Distributor Failed", "form": dist}
                    return render(request, 'NewTheme/add-distributor.html', context=context)

            elif form.is_valid():
                user = None
                distributor = form.save(commit=False)
                retailer_ = Retailer.objects.filter(
                    email=request.POST['email'])

                user = User()
                if not retailer_.first() and User.objects.filter(email=str(request.POST['email'])).first():
                    messages.error(request, "Distributor Add Failure... Please Correct the errors below")
                    messages.warning(request, "Email has already been used")
                    context = {"page_title": "Add Distributor Failed", "form": form}
                    return render(request, 'NewTheme/add-distributor.html', context=context)
                if retailer_.filter():
                    user = User.objects.filter(email=retailer_.email).first()
                user.email = distributor.email
                if not retailer_.first():
                    user.set_password("user123")
                user.is_active = True
                user.is_active = True
                user.is_superuser = False
                permission = DistPermission()
                permission.distributor = distributor
                permission.can_view_users = True
                permission.can_manage_users = True
                permission.can_view_salesmen = True
                permission.can_manage_salesmen = True
                permission.can_view_orders = True
                permission.can_manage_orders = True
                permission.can_post_orders = True
                permission.can_view_retailer = True
                permission.can_manage_retailer = True
                permission.can_view_products = True
                permission.can_manage_product = True
                permission.can_view_product_category = True
                permission.can_manage_product_categories = True
                permission.can_edit_company_details = True
                permission.can_view_dashboard = True
                permission.can_view_deliveries = True
                permission.can_manage_mobile = True
                permission.can_view_offers = True
                permission.can_manage_offers = True
                permission.can_view_settings = True
                permission.can_manage_settings = True

                p_group = PermissionGroup()
                p_group.distributor = distributor
                p_group.name = "admins"
                p_group.dist_super = True
                p_group.permission = permission

                # tax__ = DistTax()
                # tax__.tax_name = 'None'
                # tax__.tax = 0
                # tax__.distributor = distributor
                # is_active = True

                dist_user = DistUsers()
                dist_user.distributor = distributor
                dist_user.user = user
                dist_user.phone = distributor.phone
                dist_user.first_name = " ."
                dist_user.last_name = ". "
                dist_user.permission_group = p_group
                
                final_pass = random_password()
                if not retailer_.first():
                    user.set_password(final_pass)
                
                name_ = str(distributor.name)
                prefix_ = name_[0:3]
                _prefix = prefix_.upper()
                company_code = generate_distributor_code(_prefix)
                print('company-code-created ',company_code)
                distributor.company_code = company_code


                context_ = {
                    'dist_name': distributor.name,
                    'dist_email': user.email,
                    'dist_password': final_pass,
                    'company_code': company_code,
                    "url_host": request.get_host()
                }
                if not retailer_.first():
                    if send_html_email([user.email, ], 'Account Creation', 'emails/temp1.html', context_):
                        
                        distributor.save()
                        permission.save()
                        user.save()
                        p_group.save()
                        dist_user.save()
                        addCustomUnits(distributor=distributor)
                        creator = request.user.netbotuser
                        email_context = {"distributor": distributor,
                                         "creator_full_name": creator.first_name + " " + creator.last_name,
                                         "creator_phone": creator.phone,
                                         "creator_email": request.user.email,
                                         "distributor_count": Distributor.objects.count(),
                                         "creation_date": distributor.when_created,
                                         }
                        send_html_email([settings.DEFAULT_FROM_EMAIL, ], "Distributor Creation",
                                        "emails/dist_creation_email.html", context=email_context
                                        )
                        CreateDistributorNotificationThread(distributor, 'created').start()
                        messages.success(request,
                                         "Distributor Was Created successfully\n "
                                         "Login Details Send To Distributors Email")
                        return redirect('distributor:distributor-list')

                if not retailer_.first():
                    messages.success(request, "System Could Not Send Email To Distributor...\n"
                                              "Advice Them To use their Email And A default "
                                              "Password Of user123 for logins")
                if retailer_.first():
                    messages.success(request, " Distributor Add Success "
                                              " Advice The User TO Use A Previous Email Received For App Logins ")

                distributor.save()
                dist_settings = DistributorOptions(distributor=distributor)
                dist_settings.save()

                permission.save()
                if not retailer_.first():
                    user.set_password("user123")
                user.save()
                p_group.save()
                # tax__.save()
                # print('tax saved')
                dist_user.save()
                addCustomUnits(distributor=distributor)
                creator = request.user.netbotuser
                email_context = {"distributor": distributor,
                                 "creator_full_name": creator.first_name + " " + creator.last_name,
                                 "creator_phone": creator.phone,
                                 "creator_email": creator.email,
                                 "distributor_count": Distributor.objects.count(),
                                 "creation_date": distributor.when_created,
                                 }
                send_html_email([settings.DEFAULT_FROM_EMAIL, ], "Distributor Creation",
                                "emails/dist_creation_email.html", context=email_context
                                )
                CreateDistributorNotificationThread(
                    distributor, 'created').start()
                return redirect('distributor:distributor-list')
            else:
                messages.error(
                    request, "Distributor Add Failure... Please Correct the errors below")
                context = {
                    "page_title": "Add Distributor Failed", "form": form}
                return render(request, 'NewTheme/add-distributor.html', context=context)

        except Exception as e:
            messages.error(
                request, "Distributor Add Failure... Please Correct the errors below... ")
            return redirect('distributor:distributor-list')


def editDistributor(request, d_id):
    context = {}
    dModel = get_object_or_404(Distributor, id=d_id)
    form = EditDistributor(instance=dModel)
    if request.method == "GET":
        context['form'] = form
        context['dModel'] = dModel
        return render(request, 'NewTheme/editDistributor.html', context)
    elif request.method == 'POST':
        form = EditDistributor(request.POST, request.FILES, instance=dModel)
        if form.is_valid():
            form.save()
            messages.success(request, 'Distributor Updated successfully')
            return redirect('distributor:distributor-list')
        else:
            context['form'] = form
            context['dModel'] = dModel
            messages.error(
                request, "Distributor Add Failure... Please Correct the errors below... " + str(form.errors))
            print(form.errors)

            return render(request, 'NewTheme/editDistributor.html', context)

        # context = {"page_title": "Update Distributor Failed", "form": form, "form":dModel}
        # return render(request, 'NewTheme/editDistributor.html', context=context)


class AddPermissionGroupView(View):
    def get(self, request):
        form = AddPermissionForm
        form2 = AddPermissionGroupForm
        context = {"form1": form, "form2": form2,
                   "page_title": " Add DistPermission"}
        return render(request, 'NewTheme/add-userGroup.html', context=context)

    def post(self, request):
        perm_g_ = AddPermissionGroupForm(request.POST)
        perm_ = AddPermissionForm(request.POST)
        if 'id' in request.POST.keys():
            perm_g_id = request.POST['id']
            perm_g = NetBotPermissionGroup.objects.get(id=perm_g_id)
            perm_g_ = AddPermissionGroupForm(request.POST, instance=perm_g)
            perm_ = AddPermissionForm(request.POST, instance=perm_g.permission)

            perm_g_.save()
            perm_.save()
            messages.success(
                request, "DistPermission Group Update Successfully")
            return redirect("distributor:user-group-list")

        if perm_.is_valid() and perm_g_.is_valid():
            perm_g = perm_g_.save(commit=False)

            perm = perm_.save()
            perm_g.permission = perm
            perm_g.save()
            messages.success(
                request, "DistPermission Group Saved Successfully")
            return redirect("distributor:user-group-list")

        else:
            messages.error(
                request, "Could Not Save DistPermission Group, PLease Check And Correct Errors Below")
            context = {"form1": perm_, "form2": perm_g_,
                       "page_title": " Add DistPermission | Errors"}
            return render(request, 'NewTheme/add-userGroup.html', context=context)


class AddUserView(View):
    def get(self, request):
        form = AddUserForm
        form2 = UserAddForm
        context = {"form1": form2, "form2": form, "page_title": " Add User"}
        return render(request, 'NewTheme/add-user.html', context=context)

    def post(self, request):
        user_ = UserAddForm(request.POST)
        net_user_ = AddUserForm(request.POST, request.FILES)
        if 'id' in request.POST.keys():
            us_id = request.POST['id']
            user = NetBotUser.objects.get(id=us_id)
            user_ = UserAddForm(request.POST, instance=user.user)
            net_user_ = AddUserForm(request.POST, request.FILES, instance=user)
            if user_.is_valid() and net_user_.is_valid():

                user_.save()
                net_user_.save()
                CreateUserNotification(user, 'updated').start()
                messages.success(request, "User Updated Successfully")
                return redirect('distributor:user-list')
            else:
                messages.error(request, "User Save Failure")
                context = {"form1": user_, "form2": net_user_,
                           "page_title": " Add User| Errors"}
                return render(request, 'NewTheme/add-user.html', context=context)

        if user_.is_valid() and net_user_.is_valid():
            user = user_.save(commit=False)
            generated_password = random_password()
            user.set_password(generated_password)
            user.is_active = True
            user.is_superuser = True
            user.save()
            net_user = net_user_.save(commit=False)
            net_user.user = user
            net_user.save()
            context = {
                "user_full_name": net_user.first_name + " " + net_user.last_name,
                "email": user.email,
                "password": generated_password,
                "sender_fullname": request.user.netbotuser.first_name + " " + request.user.netbotuser.last_name,

            }
            if send_html_email([user.email], "Netbot Account Creation", 'emails/netbot_user_password.html',
                               context=context):
                user.save()
                net_user = net_user_.save(commit=False)
                net_user.user = user
                net_user.save()
                messages.success(
                    request, "User Saved Successfully,Login Credentials Send To Their Email")
                CreateUserNotification(net_user, 'created').start()
                return redirect('distributor:user-list')
            user.set_password("user123")
            user.save()
            net_user = net_user_.save(commit=False)
            net_user.user = user
            net_user.save()
            CreateUserNotification(net_user, 'created').start()
            messages.success(request, "User Creation Success")
            messages.error(request,
                           "System Failed To send Login Credentials To users Email,\n"
                           "Advice Them To use Their Email And Password As user123")
            return redirect('distributor:user-list')
        else:
            context = {"form1": user_, "form2": net_user_,
                       "page_title": " Add User| Errors"}
            return render(request, 'NewTheme/add-user.html', context=context)


class AddSubscriptionView(View):
    def get(self, request):
        form = AddSubscriptionForm

        context = {"form": form, "page_title": " Add Subscription"}
        return render(request, 'NewTheme/add-subscription.html', context=context)

    def post(self, request):
        subs = AddSubscriptionForm(request.POST)

        if 'id' in request.POST.keys():
            sub_id = request.POST['id']
            subs_ = Subscription.objects.get(id=sub_id)
            subs = AddSubscriptionForm(request.POST, instance=subs_)
            if subs.is_valid():
                subs.save()
                messages.success(request, "Subscription Update Success")
                CreateSubscriptionNotification(subs_, 'updated').start()
                return redirect('distributor:subscriptions-list')
            else:
                messages.error(request, "Update Failed")
                context = {"form": subs, "page_title": " Add Subscription"}
                return render(request, 'NewTheme/add-subscription.html', context=context)

        if subs.is_valid():
            subs.save()
            messages.success(request, "Subscription Added Successfully")
            CreateSubscriptionNotification(subs.instance, 'created').start()
            return redirect('distributor:subscriptions-list')
        else:
            context = {"form": subs, "page_title": " Add Subscription"}
            messages.error(
                request, "Failed To save Subscription. Please Correct The Errors Below")
            return render(request, 'NewTheme/add-subscription.html', context=context)


class NetBotProfileSettings(UserPassesTestMixin, View):
    def test_func(self):
        return self.request.user.is_authenticated

    def get(self, request):
        if NetBotUser.objects.filter(user=request.user).first() is None:
            net_user = NetBotUser()
            net_user.user = request.user
            net_user.phone = '.'
            net_user.first_name = '.'
            net_user.last_name = '.'
            net_user.save()
        page_title = request.user.email + "| Profile Details"
        pr_form = NetBotFormProfile(instance=request.user.netbotuser)
        pw_form = ProfilePassword(request.user)
        context = {"page_title": page_title,
                   "pr_form": pr_form, "pw_form": pw_form}
        return render(request, "NewTheme/profile.html", context=context)

    def post(self, request):

        if 'form_name' in request.POST.keys():
            form_name = request.POST['form_name']
            if form_name == 'profile_f':
                pr_form = NetBotFormProfile(
                    request.POST, request.FILES, instance=request.user.netbotuser)
                if pr_form.is_valid():
                    pr_form.save()
                    messages.success(
                        request, "Profile Info Updated Successfully")
                    return redirect('distributor:profile')
                else:
                    page_title = request.user.email + "| Profile Details"
                    pw_form = ProfilePassword(request.user)
                    context = {"page_title": page_title, "pr_form": pr_form,
                               "pw_form": pw_form}
                    return render(request, "NewTheme/profile.html", context=context)
            elif form_name == 'pass_w_c':
                pw_form = ProfilePassword(request.user, request.POST)
                if pw_form.is_valid():
                    user = pw_form.save()
                    messages.success(request, "Password Change Success")
                    update_session_auth_hash(request, user)
                    return redirect('distributor:profile')
                else:
                    messages.error(
                        request, "Password Change Failure, Correct Errors and Try Again")
                    page_title = request.user.email + "| Profile Details"
                    pr_form = NetBotFormProfile(
                        instance=request.user.netbotuser)
                    context = {"page_title": page_title, "pr_form": pr_form,
                               "pw_form": pw_form}
                    return render(request, "NewTheme/profile.html", context=context)
