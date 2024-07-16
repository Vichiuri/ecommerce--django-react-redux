from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.views import LoginView, LogoutView, PasswordChangeView
from django.shortcuts import redirect, render
from django.views import View
from django.contrib.auth import login, authenticate

from distributor.models import Distributor, DistUsers, NetBotUser
from netbotAuth.models import User


# class Login(LoginView):
class Login(View):

    template_name = "auth/page-login.html"

    # redirect_authenticated_user = True
    # redirect_field_name = "next"
    # def get(self,request):
    #     return render(request,self.template_name,context={})
    def post(self, request):
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return redirect("/")


class LoginSuccess(View):
    def get(self, request):
        if request.user.is_authenticated:
            ...
        else:
            return redirect("netbotAuth:logout")
        user = request.user
        dist_user = DistUsers.objects.filter(user=user).first()
        net_user = NetBotUser.objects.filter(user=user).first()
        if net_user is not None:
            return redirect("distributor:index")
        elif dist_user is not None:
            distributor = dist_user.distributor
            return redirect("distributor:dist-home", distributor.id, distributor.name)
        else:
            return redirect("netbotAuth:logout")


class Logout(LogoutView):
    ...


class PasswordCnView(PasswordChangeView):
    success_url = 'netbotAuth:login_success'

class PasswordReestView():
    ...