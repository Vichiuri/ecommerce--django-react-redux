from django.urls import path
from netbotAuth.views import auth

app_name = 'netbotAuth'
urlpatterns = [
    path("login", auth.Login.as_view(), name="login"),
    path("login_success", auth.LoginSuccess.as_view(), name="login_success"),
    path("logout", auth.Logout.as_view(), name="logout"),


]
