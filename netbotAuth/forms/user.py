"""
User Form Classes
"""
from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm, PasswordChangeForm

from distributor.models import DistUsers, NetBotUser
from netbotAuth.models import User


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('email',)


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = User
        fields = ('email',)


class ProfilePassword(PasswordChangeForm):
    ...


class UserFormProfile(forms.ModelForm):
    def __init__(self, distributor, *args, **kwargs):
        super(UserFormProfile, self).__init__(*args, **kwargs)  # populates the form
        # self.fields['permission_group'].queryset = PermissionGroup.objects.filter(distributor=distributor)

    class Meta:
        model = DistUsers
        exclude = ['distributor', 'user', 'permission_group']


class NetBotFormProfile(forms.ModelForm):
    class Meta:
        model = NetBotUser
        exclude = ['user', 'permission_group']
