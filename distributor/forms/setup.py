"""
Distributor Setup Views
"""
from django import forms

from distributor.models import Distributor, ApkStorage


class Step1(forms.ModelForm):
    class Meta:
        model = Distributor
        fields = ('name', 'email', 'phone', 'category')


class Step2(forms.ModelForm):
    class Meta:
        model = Distributor
        # fields = ('country', 'state', 'address')
        fields = "__all__"


class Step3(forms.ModelForm):
    class Meta:
        model = Distributor
        fields = ('phone2', 'email2', 'description')


class DistForm(forms.ModelForm):
    class Meta:
        model = Distributor
        exclude = ['retailers', 'current_subscription_date', 'company_code']

        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'email': forms.TextInput(attrs={'class': 'form-control'}),
            'email2': forms.EmailInput(attrs={'class': 'form-control'}),
            'kra': forms.TextInput(attrs={'class': 'form-control'}),
            'phone': forms.TextInput(attrs={'class': 'form-control'}),
            'phone2': forms.TextInput(attrs={'class': 'form-control'}),
            'contact_person': forms.TextInput(attrs={'class': 'form-control'}),
            'contact_phone': forms.TextInput(attrs={'class': 'form-control'}),
            'website': forms.TextInput(attrs={'class': 'form-control'}),
            'country': forms.Select(attrs={'class': 'form-control'}),
            'state': forms.Select(attrs={'class': 'form-control'}),
            'address': forms.Textarea(attrs={'class': 'form-control', 'rows': '2'}),
            # 'description': SummernoteWidget(),
            'category': forms.TextInput(attrs={'class': 'form-control'}),
            'subscription': forms.Select(attrs={'class': 'form-control'}),
            'created_by': forms.TextInput(attrs={'id': 'adminID', 'type': 'hidden'})

        }


class EditDistributor(forms.ModelForm):
    class Meta:
        model = Distributor
        exclude = ['retailers', 'current_subscription_date', 'company_code']

        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'email': forms.TextInput(attrs={'class': 'form-control', 'readonly': 'readonly'}),
            'email2': forms.EmailInput(attrs={'class': 'form-control'}),
            'kra': forms.TextInput(attrs={'class': 'form-control'}),
            'phone': forms.TextInput(attrs={'class': 'form-control'}),
            'phone2': forms.TextInput(attrs={'class': 'form-control'}),
            'contact_person': forms.TextInput(attrs={'class': 'form-control'}),
            'contact_phone': forms.TextInput(attrs={'class': 'form-control'}),
            'website': forms.TextInput(attrs={'class': 'form-control'}),
            'country': forms.Select(attrs={'class': 'form-control'}),
            'state': forms.Select(attrs={'class': 'form-control'}),
            'address': forms.Textarea(attrs={'class': 'form-control', 'rows': '2'}),
            'category': forms.TextInput(attrs={'class': 'form-control'}),
            'subscription': forms.Select(attrs={'class': 'form-control'}),
            'created_by': forms.TextInput(attrs={'id': 'adminID', 'type': 'hidden'})

        }


class UploadApkForm(forms.ModelForm):
    class Meta:
        model = ApkStorage
        fields = '__all__'
