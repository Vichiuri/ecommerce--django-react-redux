import json
from datetime import datetime, timedelta

from django.contrib.auth import authenticate
from django.shortcuts import render
from knox.models import AuthToken
from rest_framework import permissions, generics, status
from rest_framework.response import Response

from distributor.commons import calculateSubscription, send_html_email, customEncrypt, customDecrypt, \
    generateRandomString
from distributor.models import DistUsers, NetBotUser
from netbotAuth.models import User
from ..serializers import RegisterSerializer, LoginSerializer, UserSerializer, DistriButorUserSerializer, \
    PermissionGroupSerializer
from mobile_retailer.models.retailerM import MobileDevice


class RegisterApi(generics.GenericAPIView):
    """
    Registeration for distributors
     Currently not under use
    """
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginApi(generics.GenericAPIView):
    """
     Login controller for distributor \n
    Also acts as a middleware for netbot auth login
    """
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data
        account = DistUsers.objects.filter(user=user).first()

        if account:
            permission_group = account.permission_group
            final_date = calculateSubscription(account.distributor)
            date_today = datetime.today()
            if date_today.replace(tzinfo=None) > final_date.replace(tzinfo=None):
                return Response({
                    'error': "Subscription has expired",
                }, status=status.HTTP_402_PAYMENT_REQUIRED)
            elif account.distributor.active == False:
                return Response({
                    'error': "Subscription has expired",
                }, status=status.HTTP_402_PAYMENT_REQUIRED)
            else:
                logo = ''
                if account.distributor.logo:
                    logo = account.distributor.logo.url
                return Response({
                    "user": UserSerializer(user, context=self.get_serializer_context()).data,
                    'account': DistriButorUserSerializer(account, context=self.get_serializer_context()).data,
                    'group': PermissionGroupSerializer(permission_group, context=self.get_serializer_context()).data,
                    'logo': logo,
                    "token": AuthToken.objects.create(user)[1]
                })
        elif NetBotUser.objects.filter(user=user).first():
            return Response({
                "message": "Redirecting",
            }, status=status.HTTP_307_TEMPORARY_REDIRECT)
        else:
            return Response({
                "message": "UnAuthorised Access"
            }, status=status.HTTP_403_FORBIDDEN)



class ForgotPasswordApi(generics.GenericAPIView):
    """
    * View for forgot password for netbot auth and distributors
    """
    def get(self, request):
        token = self.request.query_params.get("token")
        encoded_email =  self.request.query_params.get("u")
        decoded_email = customDecrypt(encoded_email)

        querySet = User.objects.filter(email=decoded_email, reset_token=token)

        if querySet.first():
            user = querySet.first()
            timeStamp = float(token[25:])
            expiration_date =  datetime.fromtimestamp(timeStamp)
    
            if expiration_date.replace(tzinfo=None) > datetime.now().replace(tzinfo=None):
                reset_context = {
                    'email': user.email,
                    'token': token,
                }
                return render(request, 'reset_password.html', context=reset_context)

        return render(request, 'email_expired.html')

    def post(self, request):
        json_data = json.loads(request.body)
        querySet = User.objects.filter(email=json_data.get('email'))

        if querySet.first():
            user = querySet.first()

            encoded_email = customEncrypt(user.email)
            
            token = generateRandomString(25)

            current_time = datetime.timestamp(datetime.now() + timedelta(days=1))
            complete_token = str(token)+str(current_time)

            user.reset_token = complete_token
            user.save()
            
            reset_url = str(request.get_host())+'/retailer/api/auth/forgot/?u='+encoded_email+'&token='+complete_token

            email_context = {
                'reset_url': reset_url,
            }
            
            email_sent = send_html_email([user.email, ], "Forgot Password",
                                "emails/forgot_password_template.html", context=email_context
            )
            
            if email_sent:
                return Response({
                    'message': "A link to reset was sent please check your email"
                })
            else:
                return Response({
                    'error': "Something was not configured well try again"
                },status=status.HTTP_400_BAD_REQUEST)

        else:
           return Response({
                    'message': "A link to reset was sent please check your email"
             })

    def put(self, request):
        formData = request.POST.copy()
        token = formData['reset_token']

        querySet = User.objects.filter(email=formData['email'], reset_token=token)
        if querySet.first():
            user = querySet.first()
            timeStamp = float(token[25:])
            expiration_date =  datetime.fromtimestamp(timeStamp)

            if expiration_date.replace(tzinfo=None) > datetime.now().replace(tzinfo=None):
                if formData['new_password'] == formData['confirm_password']:
                    user.set_password(formData['new_password'])
                    user.reset_token = ''
                    user.save()

                    return Response({
                        'message': "Password has been reset"
                    })
                else:
                    return Response({'error': "New password does not match Confirm Password"}, status=status.HTTP_400_BAD_REQUEST)

        return render(request, 'email_expired.html')

class UserApi(generics.RetrieveAPIView):
    """
    * Refresh user token and authention on website
    """
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get(self, request):
        user = self.request.user
        account = DistUsers.objects.filter(user=user).first()
        permission_group = account.permission_group
        account.first_time = False
        account.save()

        final_date = calculateSubscription(account.distributor)
        date_today = datetime.today()
        if date_today.replace(tzinfo=None) > final_date.replace(tzinfo=None):
            return Response({
                'message': "Subscription has expired",
            }, status=status.HTTP_402_PAYMENT_REQUIRED)
        elif account.distributor.active == False:
            return Response({
                'error': "Subscription has expired",
            }, status=status.HTTP_402_PAYMENT_REQUIRED)
        else:
            logo = ''
            if account.distributor.logo:
                logo = account.distributor.logo.url
            return Response({
                "user": UserSerializer(user, context=self.get_serializer_context()).data,
                'account': DistriButorUserSerializer(account, context=self.get_serializer_context()).data,
                'group': PermissionGroupSerializer(permission_group, context=self.get_serializer_context()).data,
                'logo': logo
            })

    def put(self, request):
        user = self.request.user
        account = DistUsers.objects.filter(user=user).first()

        formData = request.POST.copy()
        if formData['new_password']:

            if formData['new_password'] == formData['confirm_password']:
                authUser = authenticate(request, email=user.email, password=formData['old_password'])
                if authUser:
                    authUser.set_password(formData['new_password'])
                    authUser.save()
                else:
                    return Response({
                        'error': "Current password does not match"
                    }, status=status.HTTP_403_FORBIDDEN)
            else:
                return Response({
                    'error': "New password and confirm password do not match"
                }, status=status.HTTP_403_FORBIDDEN)

        account.first_name = formData['first_name']
        account.last_name = formData['last_name']
        account.phone = formData['phone']
        account.bio = formData['bio']
        if request.FILES.get('photo'):
            account.pic.delete(save=False)
            account.pic = request.FILES.get('photo')

        if formData['delete_image']:
            account.pic.delete(save=False)

        account.save()

        return Response({
            'message': "User profile has been updated",
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            'account': DistriButorUserSerializer(account, context=self.get_serializer_context()).data,
        })
    
    def patch(self, request):
        try:
            user = self.request.user
            account = DistUsers.objects.filter(user=user).first()

            json_data = json.loads(request.body)
            account.fcm_token = json_data.get('token')

            account.save()

            return Response({
                'message': "Fcm token updated",
            })

        except Exception as e:
            content = {'error': 'Something went wrong'}
            return Response(content, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
