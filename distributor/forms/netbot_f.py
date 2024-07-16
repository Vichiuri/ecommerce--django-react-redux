"""
Netbot Models
"""
from django import forms

from distributor.models import NetBotUser, NetBotPermission, NetBotPermissionGroup, Subscription
from netbotAuth.models import User


class AddUserForm(forms.ModelForm):
    class Meta:
        model = NetBotUser
        exclude = ['user', ]

        widgets = {
            'first_name': forms.TextInput(attrs={'class': 'form-control'}),
            'last_name': forms.TextInput(attrs={'class': 'form-control'}),
            'phone': forms.NumberInput(attrs={'class': 'form-control', 'placeholder': 'e.g. (254712345678)'}),
            'permission_group': forms.Select(attrs={'class': 'form-control'}),
            'profile_pic': forms.FileInput(attrs={'class': 'form-control'}),
        }


class AddPermissionForm(forms.ModelForm):
    class Meta:
        model = NetBotPermission
        fields = '__all__'


class AddPermissionGroupForm(forms.ModelForm):
    class Meta:
        model = NetBotPermissionGroup
        exclude = ['permission', ]


class AddSubscriptionForm(forms.ModelForm):
    class Meta:
        model = Subscription
        fields = '__all__'

        widgets = {
            'period_time': forms.Select(attrs={'class': 'form-control'}),
            'period_length': forms.NumberInput(attrs={'class': 'form-control'}),
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'created_by': forms.TextInput(
                attrs={'id': 'createdByID', 'type': 'hidden', 'style': 'cursor:not-allowed', 'readonly': 'readonly'})
        }


class AddSystemUSerForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['email', ]
