
"""
Authentication views for mobile
"""
from django.contrib.auth import authenticate
from knox.models import AuthToken
from rest_framework import generics, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from distributor.models import SalesMan, Retailer
from mobile_retailer.m_serializers.auth_serializers import RegisterRetailerSerializer, UserRegisterSerializer, \
    RegisterUserSerializer, RetailerLoginSerializer
from mobile_retailer.m_serializers.retailer_data import SalesManSerializer
from mobile_retailer.models import RetailerUser, MobileDevice
from retailer.serializers import RetailerSerializer


class RegisterRetailerApiView(APIView):
    retailer_serializer = RegisterRetailerSerializer
    user_serializer = UserRegisterSerializer

    def post(self, request, *args, **kwargs):
        retailer_sz = self.retailer_serializer(data=request.data)
        user_ = self.user_serializer(data=request.data)
        data = {}

        retailer_sz.is_valid(raise_exception=False)
        user_.is_valid(raise_exception=False)
        retailer = self.retailer_serializer.save(commit=False)
        user = self.user_serializer.save(commit=False)
        data["user"] = user
        data["retailer"] = retailer

        return Response(data)


@api_view(['POST'])
def register_retailer(request):
    # retailer_serializer = RegisterRetailerSerializer(data=request.data)
    retailer_serializer = RetailerSerializer(data=request.data)
    user_serializer = RegisterUserSerializer(data=request.data)
    retailer = None
    user = None

    if retailer_serializer.is_valid(raise_exception=True) and user_serializer.is_valid(raise_exception=True):
        retailer = retailer_serializer.save()
        user = user_serializer.save()
        user.is_staff = False
        user.is_superuser = False

        retailer_user = RetailerUser()
        retailer_user.retailer = retailer
        retailer_user.user = user

        user.save()
        retailer_user.save()

        print("user", user, "Retailer", retailer)
        return Response(
            {
                "ditributors": "",
                "token": AuthToken.objects.create(user)
            }
        )

    return Response(
        {
            "retailer": retailer_serializer.validated_data,
            "user": user_serializer.validated_data
        }
    )


@api_view(['POST'])
def login_retailer(request):
    """
    Retailer and Salesman Login
    """
    login_serializer = RetailerLoginSerializer(data=request.data)
    if login_serializer.is_valid(raise_exception=True):
        user = login_serializer.save()
        salesman = SalesMan.objects.filter(email=user.email).first()
        mobile_device = MobileDevice.objects.filter(user=user).first()
        if mobile_device is None:
            mobile_device = MobileDevice()
        mobile_device.user = user
        print(request.data['device_id'], "Device Id\n\n", "\n\nReceived ID")
        mobile_device.device_id = request.data['device_id']
        mobile_device.save()

        if salesman is not None:
            if salesman.retailers_.count() < 1:
                return Response(
                    {
                        "message": "You Currently Are Assigned to No Retailers"
                    }, status=403
                )
            return Response(
                {
                    "token": AuthToken.objects.create(user)[1],
                    "salesman": SalesManSerializer(salesman).data,
                    "user_type": "salesman"
                }
            )

        # print("Device Id", retail_user.device_id)
        retailer = Retailer.objects.filter(email=user.email).first()
        if retailer.distributors.count() < 1:
            return Response({
                "message": "You Are Currently Not Attached To Any Distributor"
            }, status=403)
        return Response({
            "token": AuthToken.objects.create(user)[1],
            "retailer": RetailerSerializer(retailer).data,
            "user_type": "retailer"
        })


class ProfileManagement(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        salesman = SalesMan.objects.filter(email=user.email).first()
        retailer = Retailer.objects.filter(email=user.email).first()
        data = dict()
        if salesman is None:
            data['email'] = retailer.email
            data['name'] = retailer.name
            data['phone'] = retailer.phone
            data['pic'] = None
            if retailer.pic:
                data['pic'] = retailer.pic.url
        else:
            data['email'] = salesman.email
            data['name'] = salesman.first_name + " " + salesman.last_name
            data['phone'] = salesman.phone
            data['pic'] = None
            if salesman.pic:
                data['pic'] = salesman.pic.url

        return Response({
            "profile": data
        })

    def post(self, request):
        user = request.user
        data = request.data
        action = data['action']
        if action == 'change_password':
            old_password = data['old_password']
            new_password = data['new_password']
            repeat_password = data['repeat_password']

            if new_password == repeat_password:
                user_check = authenticate(email=user.email, password=old_password)
                if user_check is None:
                    return Response(
                        {"message": "Old Password Is Wrong"},
                        status=403
                    )
                user.set_password(new_password)
                user.save()
                return Response({
                    "message": "Password Change Success"
                }, status=200
                )
            else:
                return Response(
                    {
                        "message": "New And Old Passwords Do Not Match"
                    }, status=403
                )

        return Response({
            "message": "Could Not Make Any Changes"
        }, status=301)
