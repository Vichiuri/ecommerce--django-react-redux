"""
.
"""
from datetime import datetime
from distributor.models.netbot import AuthLogs, NetBotNotification, WorldCountry, ApkStorage
from django.contrib import messages
from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404, render, redirect, HttpResponseRedirect
from django.views import View, generic
from django.urls import reverse_lazy
from django.db.models import Count
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.paginator import Paginator

from distributor.forms.distri import UserAddForm
from distributor.forms.netbot_f import AddPermissionGroupForm, AddPermissionForm, AddSubscriptionForm, AddUserForm
from distributor.forms.setup import Step1, Step2, Step3, DistForm, UploadApkForm
from distributor.models import Distributor, NetBotUser, NetBotPermissionGroup, Subscription, SubscriptionHistory, \
    DistUsers, Retailer, DistOrder
from django.http import JsonResponse
from netbotAuth.models.users import User


class Index(View):

    def get(self, request):
        if self.request.user.is_authenticated and self.request.user.is_superuser:
            ...
        else:
            return redirect('netbotAuth:login_success')

        distributors = Distributor.objects.all()
        dist_users = DistUsers.objects.all()
        retailers = Retailer.objects.all()
        net_users = NetBotUser.objects.all()
        usg_gs = NetBotPermissionGroup.objects.all()

        context = {"usg_gs": usg_gs, "page_title": "Net Bot Dashboard| Home", "distributors": distributors,
                   "net_users": net_users, "dist_users": dist_users, "retailers": retailers}
        return render(request, 'NewTheme/index.html', context=context)


# Charts Views
class Barchart(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request, format=None):
        subs = Subscription.objects.all()
        data_ = dict()
        data = list()
        labels = list()
        for sub in subs:
            labels.append(str(sub))
            data.append(sub.sub_distributor.all().count())

        data_['data'] = data
        data_['labels'] = labels
        return Response(data_)


class DoughnutChart(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, *args, **kwargs):
        # distributors = Distributor.objects.all()[:5]
        dataDict = dict()
        labels = list()
        data = list()
        distributor_count = Distributor.objects.annotate(count=Count('retailers')).order_by('-count')[:5]

        for dist in distributor_count:
            labels.append(str(dist))
            data.append(dist.ret_distributors.all().count())

        dataDict['labels'] = labels
        dataDict['data'] = data

        return Response(dataDict)


# end of chart views

# Notifications Views

def notificationList(request):
    userCreatedDate = User.objects.get(id=request.user.id)
    notif = NetBotNotification.objects.all()

    notifs = []
    for n in notif:
        if n.when_created > userCreatedDate.date_joined:
            notifs.append(n)

    paginator = Paginator(notifs, 8)  # Show 25 contacts per page.

    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    context = {'notifs': page_obj}
    return render(request, 'NewTheme/All_notifications.html', context)


# class NotificationList(generic.ListView):
#     model = NetBotNotification
#     template_name = 'NewTheme/All_notifications.html'


def notification(request, not_pk):
    try:
        notification_qs = get_object_or_404(NetBotNotification, pk=not_pk, )
        user = request.user

        notification_qs.not_seen_by.remove(user)

        context = {"notification_qs": notification_qs}
        return render(request, 'NewTheme/notifications.html', context)
    except Exception as e:
        print(str(e))
        return JsonResponse({"": ""})


# def mark_as_read(request):
#     user = request.user
#     nots = NetBotNotification.objects.all()

#     for nf in nots:
#         if user in nf.not_seen_by:
#             cleared = nf.not_seen_by.remove(user)

#     context = {"cleared": cleared}
#     return render(request, 'NewTheme/dashboard.html', context)    


def update_notification(request):
    return render(request, "NewTheme/update_notif.html", context={})


def update_notif_count(request):
    try:
        user = request.user
        notif_num = user.not_seen_notifications.count()
        return HttpResponse(notif_num)
    except Exception as e:
        print(str(e))
        return JsonResponse({"": ""})


class DeleteNotification(generic.DeleteView):
    model = NetBotNotification
    template_name = "NewTheme/delete_notification.html"

    def get_context_data(self, *args, **kwargs):
        context = super(DeleteNotification, self).get_context_data()
        notificationToDelete = get_object_or_404(NetBotNotification, id=self.kwargs['pk'])

        context['notificationToDelete'] = notificationToDelete
        print("\n", notificationToDelete, "\n")

    success_url = reverse_lazy('distributor:notifications')


# End of Notification Views


def logs(request):
    userCreatedDate = User.objects.get(id=request.user.id)
    log_qs = NetBotNotification.objects.all()

    logs = []
    for n in log_qs:
        if n.when_created > userCreatedDate.date_joined:
            logs.append(n)
    return render(request, 'NewTheme/logs.html', context={'logs': logs})


def authLogs(request):
    aLogs = AuthLogs.objects.all().order_by('-id')
    return render(request, 'NewTheme/AuthLogs.html', context={'aLogs': aLogs})


class DistributorsView(View):

    def get(self, request):
        if self.request.user.is_authenticated and self.request.user.is_superuser:
            ...
        else:
            return redirect('netbotAuth:login_success')
        distributors = Distributor.objects.all().order_by('-id')

        page_title = "NetBot DashBoard | Distributor Lists"
        return render(request, "NewTheme/distributors.html",
                      {"distributors": distributors, "page_title": page_title,
                       #   "num_of_retailers":num_of_retailers
                       })

    def post(self, request):
        data = dict()
        try:
            if 'action' in request.POST.keys():
                action = request.POST['action']
                dist_id = request.POST['id']
                distributor = Distributor.objects.get(id=dist_id)
                if action == 'delete':
                    if distributor.active:
                        distributor.active = False
                        distributor.save()
                        data['message'] = "Deactivation Of " + \
                                          distributor.name + " Success"
                    else:
                        distributor.active = True
                        distributor.save()
                        data['message'] = "Activation Of " + \
                                          distributor.name + " Success"
                    data['title'] = "Success"
                    data['icon'] = "success"

                    return JsonResponse(data)
                elif action == 'edit':
                    form = DistForm(instance=distributor)
                    city = distributor.state
                    country = distributor.country
                    return render(request, "dashboard/modals/distributor.html", {"form": form,
                                                                                 "city": city,
                                                                                 "country": country})
        except Exception as e:
            data['title'] = "Error"
            data['icon'] = 'error'
            data['message'] = "Failure !!! " + str(e)
            return JsonResponse(data)


# Distributor details
def distributor_details(request, dist_id):
    distributor = Distributor.objects.filter(id=dist_id).first()
    context = {'distributor': distributor}
    return render(request, 'NewTheme/distributor-details.html', context)


# retailers per distributor count
def dist_ret_count(request):
    distributors = Distributor.objects.annotate(count=Count('retailers')).order_by('-count')
    context = {'distributors': distributors}
    return render(request, 'NewTheme/distrib-retailer-count.html', context)


# user actions Logs
def user_actions(request, user_id):
    actions = NetBotNotification.objects.filter(action_by=user_id)
    context = {'actions': actions}
    return render(request, 'NewTheme/userActions.html', context)


class DistSetup(View):
    form = Step1

    def get(self, request):
        form_steps = [Step1, Step2, Step3]
        if 'current_step' in request.session:
            self.form = form_steps[int(request.session['current_step'])]

    def post(self):
        ...


class NetUsersView(View):

    def get(self, request):
        if self.request.user.is_authenticated and self.request.user.is_superuser:
            ...
        else:
            return redirect('netbotAuth:login_success')
        users_ = NetBotUser.objects.all()
        page_title = "NetBot Dashboard | Users List"

        context = {"users_": users_, "page_title": page_title}
        return render(request, 'NewTheme/users.html', context=context)

    def post(self, request):
        data = dict()
        try:
            if 'action' in request.POST.keys():
                action = request.POST['action']
                us_id = request.POST['id']
                user_ = NetBotUser.objects.get(id=us_id)
                if action == 'delete':
                    user_.user.delete()
                    user_.delete()
                    data['icon'] = "success"
                    data['title'] = "User Deletion"
                    return JsonResponse(data)
                elif action == 'edit':
                    form1 = UserAddForm(instance=user_.user)
                    form2 = AddUserForm(instance=user_)
                    # form1 = UserAddForm(instance=user_)
                    # form2 = AddUserForm(instance=user_.user)
                    return render(request, "dashboard/modals/user.html", {"form1": form1, "form2": form2})
        except Exception as e:

            data['title'] = "Error"
            data['icon'] = "error"
            data['message'] = "Failed !!! " + str(e)
            return JsonResponse(data)


class PermissionGroupsView(View):

    def get(self, request):
        if self.request.user.is_authenticated and self.request.user.is_superuser:
            ...
        else:
            return redirect('netbotAuth:login_success')
        permission_gs = NetBotPermissionGroup.objects.all()
        page_title = "NetBot Dashboard | DistPermission Groups"

        context = {"permission_gs": permission_gs, "page_title": page_title}
        return render(request, 'NewTheme/userGroups.html', context=context)

    def post(self, request):
        data = dict()
        try:
            if 'action' in request.POST.keys():
                action = request.POST['action']
                p_id = request.POST['id']
                p_group = NetBotPermissionGroup.objects.get(id=p_id)
                if action == 'delete':
                    p_group.permission.delete()
                    p_group.delete()
                    data['title'] = "Success"
                    data['icon'] = "success"
                    data['message'] = "DistPermission Group " + \
                                      p_group.name + " Deletion Success"
                    messages.success(
                        request, "DistPermission Group " + p_group.name + " Deletion Success")
                    return JsonResponse(data)
                elif action == 'edit':
                    form1 = AddPermissionGroupForm(instance=p_group)
                    form2 = AddPermissionForm(instance=p_group.permission)
                    return render(request, "dashboard/modals/usergroup.html", {"form1": form1, "form2": form2})

        except Exception as e:
            data['title'] = "Error"
            data["icon"] = "error"
            data["message"] = "Failed!!! " + str(e)


class SubscriptionsView(View):

    def get(self, request):
        if self.request.user.is_authenticated and self.request.user.is_superuser:
            ...
        else:
            return redirect('netbotAuth:login_success')
        subscriptions = Subscription.objects.all()
        page_title = "NetBot Dashboard  | Subscriptions"

        context = {"subscriptions": subscriptions, "page_title": page_title}
        return render(request, 'NewTheme/subscription.html', context=context)

    def post(self, request):
        data = dict()
        try:
            if 'action' in request.POST.keys():
                action = request.POST['action']
                sub_id = request.POST['id']
                sub = Subscription.objects.get(id=sub_id)
                if action == 'delete':
                    sub.delete()
                    data['title'] = "Deletion Success"
                    data['message'] = "Deletion Success"
                    data['icon'] = 'success'
                    messages.success(request, "Subscription " +
                                     sub.name + " Deletion Success")
                    return JsonResponse(data)
                elif action == 'edit':

                    form = AddSubscriptionForm(instance=sub)
                    return render(request, "dashboard/modals/subscription.html", {"form": form})

        except Exception as e:
            data['title'] = "Error"
            data['icon'] = "error"
            data['message'] = "Failed!! " + str(e)


def activeSubscriptions(request, sub_id):
    subs = Distributor.objects.filter(subscription=sub_id)
    subName = Subscription.objects.get(id=sub_id)
    subHist = SubscriptionHistory.objects.filter(subscription=subName).first()

    context = {'subs': subs, 'subName': subName, 'subHist': subHist}
    return render(request, 'NewTheme/active_subs.html', context)


class SubscriptionHistoryView(View):

    def get(self, request):
        if self.request.user.is_authenticated and self.request.user.is_superuser:
            ...
        else:
            return redirect('netbotAuth:login_success')
        subs = SubscriptionHistory.objects.all().order_by('-subscription_date')

        subList = []
        filtered_sub = []
        for s in subs:
            if not s.distributor in subList:
                filtered_sub.append(s)
            subList.append(s.distributor)

        page_title = "NetBot Dashboard | Subscription History"
        context = {"page_title": page_title, "subs": filtered_sub}

        return render(request, 'NewTheme/subs-report.html', context=context)

    def post(self, request):
        ...


def subscriptionHistoryDetails(request, shd_id):
    subs = SubscriptionHistory.objects.all().order_by('-id')
    sub = subs.filter(id=shd_id).first()
    subst = Distributor.objects.filter(id=sub.distributor.id).first()
    print('subst: ', subst.id)

    dist = []
    for s in subs:
        if s.distributor.id == subst.id:
            dist.append(s)

    context = {'subst': dist}
    return render(request, 'NewTheme/sub-reports-details.html', context)


class ObjectHistory(View):
    def get(self, request, app_label, model_name, object_id):
        try:
            model_name = model_name
            app_name = app_label
            from django.apps import apps
            ob_hist = apps.get_model(app_label=app_name, model_name=model_name)
            history_ob = ob_hist.objects.get(id=object_id)
            latest_record = history_ob.history.latest()
            print("most recent", latest_record)
            list_of_changes = list()
            for i in range(10):
                try:

                    previous_hist = latest_record.prev_record
                    if previous_hist is not None:
                        delta = latest_record.diff_against(previous_hist)
                        changes_occurred = dict()
                        data_changes = list()
                        for change in delta.changes:
                            print("{} changed from {} to {}".format(change.field, change.old, change.new))
                            data = dict()

                            data["field"] = str(change.field)
                            data["from"] = str(change.old)
                            data["to"] = str(change.new)
                            data_changes.append(data)
                        if len(data_changes) == 0:
                            ...
                        else:
                            user_ = latest_record.history_user
                            user_name = "System/Unknown"
                            if user_ is not None:
                                user_name = user_.dist_users.first_name + " " + user_.dist_users.last_name + " (" + user_.dist_users.phone + ") "

                            changes_occurred["user"] = user_name
                            changes_occurred["date"] = str(latest_record.history_date)
                            changes_occurred["type"] = "Update"
                            changes_occurred["reason"] = latest_record.history_change_reason
                            changes_occurred["changes"] = data_changes
                            list_of_changes.append(changes_occurred)

                        latest_record = previous_hist

                except Exception as e:
                    print("\n\n", str(e), "\n\n")

            # return JsonResponse(list_of_changes, safe=False)
            # context = {"changes": list_of_changes}
            # changes_json = json.dumps(list_of_changes)
            return JsonResponse(
                list_of_changes, safe=False
            )
        except Exception as e:
            ...
            return JsonResponse({"error": str(e)}, status=400)

        # return render(request, "distri/modals/ob_hist.html", context=context)


class ChangeCityOptions(View):
    def get(self, request, country_id):
        country = WorldCountry.objects.get(id=country_id)
        cities = country.cities.all().order_by('city_name')
        return render(request, "NewTheme/city_options.html", {"citiies": cities})


class UploadApk(View):
    def get(self, request):
        if self.request.user.is_authenticated and self.request.user.is_superuser:
            ...
        else:
            return redirect('netbotAuth:login_success')
        apk = ApkStorage.objects.filter(id=1).first()
        if apk is None:
            apk = ApkStorage()
            apk.save()
        form = UploadApkForm(instance=apk)
        return render(request, "dashboard/apk.html", context={"form": form})

    def post(self, request):
        apk = ApkStorage.objects.get(id=1)
        form = UploadApkForm(request.POST, request.FILES, instance=apk)
        if form.is_valid():
            form.save()
        return redirect('distributor:upload-apk')
