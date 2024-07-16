"""
Authentication Serializers
"""
from django.contrib.auth import authenticate
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from distributor.models import Retailer, DistUsers, SalesMan
from mobile_retailer.models import RetailerUser
from netbotAuth.models import User


class RegisterRetailerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Retailer
        fields = ['pin_no', 'email']

    def create(self, validated_data):
        ...


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password', 'password2']


class RetailerSerializer(serializers.Serializer):
    pin_no = serializers.CharField(max_length=11, min_length=11)
    email = serializers.EmailField(max_length=100, min_length=4)

    def create(self, validated_data):
        retailer = Retailer.objects.filter(pin_no=validated_data['pin_no']).first()
        return retailer

    def validate_pin_no(self, value):
        first_letter = str(value)[0]
        last_value = str(value)[len(str(value)) - 1]
        if not first_letter.isalpha():
            raise serializers.ValidationError("Pin Number Must Start With A letter")
        if not last_value.isalpha():
            raise serializers.ValidationError("Pin Number Must End With A Letter")
        retailer = Retailer.objects.filter(pin_no=str(value)).first()

        if retailer is None:
            raise serializers.ValidationError("You Must Be Registered By At least One Distributor To Continue")

        user = RetailerUser.objects.filter(retailer=retailer).first()
        if user is not None:
            raise serializers.ValidationError("We Have This Pin Already Registered")

        return value


class RegisterUserSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=200, min_length=4)
    password1 = serializers.CharField(min_length=6)
    password2 = serializers.CharField(min_length=6)

    def create(self, validated_data):
        user = User()
        user.email = validated_data['email']
        user.set_password(validated_data['password1'])
        print("Printing User", user)
        return user

    def validate_password1(self, value):
        if str(value).isalpha():
            raise serializers.ValidationError("A good Password Must At least Have A number"
                                              " A Letter Uppercase And Lower Case And A Non Alphanumeric Character")
        if str(value).isnumeric():
            raise serializers.ValidationError("A good Password Must At least Have A number"
                                              " A Letter Uppercase And Lower Case And A Non Alphanumeric Character")
        return value

    def validate_email(self, value):
        user = User.objects.filter(email=str(value)).first()
        if user is not None:
            raise serializers.ValidationError("This Email Is Already Used")
        return value

    def validate(self, data):
        if not data['password2'] == data['password1']:
            raise serializers.ValidationError("Passwords Must Be The same")
        return data


class RetailerLoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()
    device_id = serializers.CharField(required=True, allow_blank=False)
    user_type = serializers.CharField(required=False, allow_blank=True, )

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            salesman = SalesMan.objects.filter(email=data["email"])
            self.user_type = "salesman"
            if salesman is None:
                self.user_type = "retailer"

            return data

        else:
            raise serializers.ValidationError("Incorrect Credentials")

    def create(self, validated_data):
        user = User.objects.filter(email=validated_data['email']).first()
        salesman = SalesMan.objects.filter(email=user.email)
        if salesman is not None:
            return user
        retailer_user = RetailerUser.objects.filter(user=user).first()
        retailer_user.device_id = validated_data['device_id']
        print("Device Id", validated_data['device_id'])
        print("fetched Device Id\n", validated_data['device_id'], "\n")
        retailer_user.save()
        return user
