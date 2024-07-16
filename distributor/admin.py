"""
Register Admin Models Here
"""

from distributor.models.netbot import NetBotUser
import inspect
import sys

from django.contrib import admin
from django.contrib.admin import AdminSite
from distributor.models import Distributor, Product, Retailer, PCategory, Subscription, SubCategory, \
    SubscriptionHistory, Delivery, DistUsers, PermissionGroup, DistPermission, NetBotNotification, PriceOffer

admin.site.register(Distributor)
admin.site.register(Retailer)
admin.site.register(PCategory)
admin.site.register(SubCategory)
admin.site.register(Subscription)
admin.site.register(Product)
admin.site.register(SubscriptionHistory)
admin.site.register(Delivery)
admin.site.register(DistUsers)
admin.site.register(PermissionGroup)
admin.site.register(DistPermission)
admin.site.register(PriceOffer)


class NetBotNotificationAdmin(admin.ModelAdmin):
    list_display = ['display_text', 'details', 'when_created', 'action_by']
    readonly_fields = ('display_text', 'seen_by', 'details', 'when_created', 'action_by')


admin.site.register(NetBotNotification, NetBotNotificationAdmin)

AdminSite.site_title = "NetBot Biz"
AdminSite.site_header = "NetBot Biz"

# Register your models here.
