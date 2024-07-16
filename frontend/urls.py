from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.index),
    path('forbidden/', views.restrictedView),
    path('subscription_expired/', views.handler402),
]
