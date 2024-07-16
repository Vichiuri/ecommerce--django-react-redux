from distributor.models import DistUsers, NetBotUser
from netbotAuth.models import  User
from ..serializers import  LoginSerializer, UserSerializer, RetailerUserSerializer
from knox.models import AuthToken
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from distributor.commons import calculateSubscription, send_html_email, customEncrypt, customDecrypt, generateRandomString
import json
from mobile_retailer.models.retailerM import RetailerUser
from distributor.models.distributor import RetailerProfile
from geopy.geocoders import Nominatim

class RetailerUserApi(generics.RetrieveAPIView):
    """
    Retailer Website fetch info and refresh token view
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = RetailerUserSerializer

    def get(self, request):
        user = self.request.user
        account = RetailerUser.objects.filter(user=user).first()

        if account:
            return Response({
                "user": UserSerializer(user, context=self.get_serializer_context()).data,
                'account': RetailerUserSerializer(account, context=self.get_serializer_context()).data,
            })

        else:
            return Response({
                "message": "It would appear you are not a retailer"
            }, status=status.HTTP_403_FORBIDDEN)

    def patch(self, request):
        try:
            user = request.user
            retailer = user.retailer
            json_data = json.loads(request.body)

            retailer_profile = RetailerProfile.objects.filter(retailer=retailer).first()
            if retailer_profile:
                retailer_profile.latitude = json_data.get('latitude')
                retailer_profile.longitude = json_data.get('longitude')
                geolocator = Nominatim(user_agent="Biz App")
                location = geolocator.reverse(""+str(json_data.get('latitude'))+"," +str(json_data.get('longitude'))+"")

                if location.raw.get('address'):
                    address = location.raw.get('address')
                    retailer_profile.county = address.get('state')
                    retailer_profile.world_country = address.get('country')

                retailer_profile.save()

                return Response({
                    'message': "Location has been updated",
                })
            else:
                return Response({
                    'message': "it would appear you are not a retailer"
                },status=status.HTTP_403_FORBIDDEN)
        except Exception as e:
            return Response({
                'message': "Something went wrong"
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class RetailerLoginApi(generics.GenericAPIView):
    """
    Login credentials for retailer on the website
    """
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data
        account = RetailerUser.objects.filter(user=user).first()

        if account:
            return Response({
                "user": UserSerializer(user, context=self.get_serializer_context()).data,
                'account': RetailerUserSerializer(account, context=self.get_serializer_context()).data,
                "token": AuthToken.objects.create(user)[1]
            })

        else:
            return Response({
                "message": "It would appear you are not a retailer"
            }, status=status.HTTP_403_FORBIDDEN)