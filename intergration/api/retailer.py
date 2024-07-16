from django.db.models import Q, query
from django.core.paginator import Paginator

from distributor.commons import random_password
from distributor.models import Retailer, RetailerProfile, DistRegion, DistArea, DistCity, DistUsers, PriceLevel, \
    SalesMan, Distributor
from intergration.authMixin import IntegratedAuthMixin
from intergration.helpers import get_distributor
from intergration.serializers import RetailerAPISerializer, RetailerProfileAPISerializer
from mobile_retailer.models import RetailerUser
from netbotAuth.models import User
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser
from distributor.commons import checkCurrentProgress, customEncrypt, generateRandomString, send_dist_email, send_html_email
import json
from distributor.threading import CreateRetailerNotifcation
from datetime import datetime, timedelta
from django.shortcuts import get_object_or_404
from retailer.api.retailer import createRetailProfile

from retailer.serializers import RegisterSerializer


class IntegratedRetailerApi(IntegratedAuthMixin, viewsets.ViewSet):
    """
    Add Create and view retailer based on distributor
    """
    serializer_class = RetailerAPISerializer
    permissions_classes = [
        # permissions.IsAuthenticated
    ]
    parser_classes = [FormParser, MultiPartParser, JSONParser]

    def list(self, request):
        distributor = get_distributor(self.request)
        
        offset = 25
        query = self.request.query_params.get("query")
        rows = self.request.query_params.get("rows")
        querySet = RetailerProfile.objects.filter(distributor=distributor).order_by('-id')

        if rows:
            offset = rows

        if query:
            retailer_query = querySet.filter(Q(contact_name__icontains=query) | Q(contact_phone__icontains=query) |
                                             Q(contact_email__icontains=query) | Q(region__name__icontains=query) | Q(
                city__name__icontains=query) |
                Q(area__name__icontains=query) | Q(salesman__first_name__icontains=query) | Q(
                salesman__last_name__icontains=query) |
                Q(retailer__name__icontains=query) | Q(retailer__email__icontains=query) | Q(
                retailer__phone__icontains=query))

            querySet = retailer_query

        paginator = Paginator(querySet, offset)  # Show 25 contacts per page.
        page = self.request.query_params.get("page")
        pageList = paginator.get_page(page)
        last_page = paginator.num_pages

        return Response({
            "message":"Ratailere fetch successfully",
            "retailers": RetailerProfileAPISerializer(pageList, many=True).data,
            "last_page": last_page
        })

    def create(self, request):
        _request_header = self.request.headers
        id = _request_header['Distributor']
        user = get_object_or_404(Distributor, id=id)
        distUser = DistUsers.objects.filter(distributor=user).first()
        distributor = distUser.distributor

        formData = RetailerAPISerializer(data=request.data)
        # formData['pic'] = request.FILES.get('photo')

        if formData.is_valid():
            ret_email = formData.validated_data.get('email')
            _retailer = Retailer.objects.filter(email=ret_email).first()
            if _retailer:
                retailer = _retailer
                retailer.distributors.add(distributor)
                retailer.save()

                check_profile = RetailerProfile.objects.filter(
                    distributor=distributor, retailer=retailer)

                if check_profile.first():
                    return Response({
                        'message': "Retailer with this profile already exists",
                        "retailer": RetailerProfileAPISerializer(check_profile.first()).data,
                    }, status=status.HTTP_403_FORBIDDEN)
                else:
                    retailer_profile = createRetailProfile(request.data, distributor, retailer, distUser.user)
                    view_complete = checkCurrentProgress(distributor)
                    CreateRetailerNotifcation(retailer_profile, 'created').start()
                    return Response({
                        "message": "Retailer has been added",
                        "retailer": RetailerProfileAPISerializer(retailer_profile).data,
                        "view_complete": view_complete
                    }, status=status.HTTP_201_CREATED)
            else:
                ret_user = None
                # distUser = DistUsers.objects.filter(distributor=distributor).first()
                # distributor = distributor
                retailer = Retailer(pin_no=formData.validated_data.get('pin_no'), name=formData.validated_data.get('name'), email=formData.validated_data.get('email'),
                                    phone=formData.validated_data.get('phone'))
                if request.FILES.get('photo'):
                    retailer.pic = request.FILES.get('photo')

                check_user = User.objects.filter(email=retailer.email)
                check_distributor = Distributor.objects.filter(
                    email=retailer.email, kra=retailer.pin_no)

                if check_user.first() and check_distributor.first():
                    ret_user = check_user.first()

                elif check_user.first() and not check_distributor.first():
                    return Response({
                        "error": "This email has already been used"
                    }, status=status.HTTP_401_UNAUTHORIZED)
                else:
                    pass_word = random_password()
                    email_context = {
                        "retailer": retailer,
                        "password": pass_word,
                        "dist": distributor,
                        "url_host": request.get_host()
                    }

                    email_sent = send_dist_email(distributor=distributor, template_name="emails/retailer_creation.html",
                                                to_emails=[retailer.email],
                                                subject="Retailer Creation", context_dict=email_context)

                    if not email_sent:
                        pass_word = "user123"
                        message = "Email settings not configured well email was not sent to salesman password is user123"

                    userData = {}

                    userData['email'] = retailer.email
                    userData['password'] = pass_word

                    userSerilizer = RegisterSerializer(data=userData)
                    userSerilizer.is_valid(raise_exception=True)

                    ret_user = userSerilizer.save()

                retailer.save()

                retailer_profile = createRetailProfile(
                    request.data, distributor, retailer, distUser.user)
                retailer.distributors.add(distributor)
                message = "Retailer has been added"

                retailerUser = RetailerUser(user=ret_user, retailer=retailer)
                retailerUser.save()

                view_complete = checkCurrentProgress(distributor)
                CreateRetailerNotifcation(retailer_profile, 'created').start()
                return Response({
                    "message": message,
                    "retailer": RetailerProfileAPISerializer(retailer_profile).data,
                    "view_complete": view_complete
                }, status=status.HTTP_201_CREATED)
        return Response({
            "message": 'Failed to add',
            "error log": formData.errors
        }, status=status.HTTP_400_BAD_REQUEST)           
    
    def retrieve(self, request, pk):
        try:
            distributor = get_distributor(self.request)
            queryset = RetailerProfile.objects.filter(distributor=distributor)
            retailer_profile = get_object_or_404(queryset, pk=pk)
            serializer = RetailerProfileAPISerializer(retailer_profile)

            return Response({
                "message":"Retailer profile retrieve successfully",
                "Retailer Profile": serializer.data
            }, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({
                "message":"Retailer profile was not found",
            }, status=status.HTTP_404_NOT_FOUND)

    def update(self, request, pk):
        distributor = get_distributor(self.request)

        queryset = RetailerProfile.objects.filter(distributor=distributor)
        retailer_profile = get_object_or_404(queryset, pk=pk)
        serializer = RetailerProfileAPISerializer(retailer_profile, request.data)

        if serializer.is_valid():
            if request.data['region']:
                region = DistRegion.objects.get(id=request.data['region'])
                retailer_profile.region = region
            else:
                retailer_profile.region = None
            if request.data['area']:
                area = DistArea.objects.get(id=request.data['area'])
                retailer_profile.area = area
            else:
                retailer_profile.area = None
            if request.data['city']:
                city = DistCity.objects.get(id=request.data['city'])
                retailer_profile.city = city
            else:
                retailer_profile.city = None
            if request.data['price_level']:
                price_level = PriceLevel.objects.get(id=request.data['price_level'])
                retailer_profile.price_level = price_level

            if request.data['contact_person']:
                retailer_profile.contact_person = request.data['contact_person']
            if request.data['contact_details']:
                retailer_profile.contact_details = request.data['contact_details']
            if request.data['contact_person_position']:
                retailer_profile.contact_person_position = request.data['contact_person_position']
            if request.data['contact_city']:
                retailer_profile.contact_city = request.data['contact_city']
            if request.data['contact_person_phone']:
                retailer_profile.contact_person_phone = request.data['contact_person_phone']

            if request.FILES.get('contact_pic'):
                retailer_profile.contact_pic.delete(save=False)
                retailer_profile.contact_pic = request.FILES.get('contact_pic')
            
            retailer_profile.contact_name = serializer.validated_data['contact_name']
            retailer_profile.contact_phone = serializer.validated_data['contact_phone']
            retailer_profile.contact_email = serializer.validated_data['contact_email']
            retailer_profile.is_active = serializer.validated_data.get('is_active')

            if request.data['salesman']:
                salesMan = SalesMan.objects.get(id=request.data['salesman'])
                retailer_profile.retailer.salesmen.add(salesMan)
                retailer_profile.salesman = salesMan

            retailer_profile.save()

            CreateRetailerNotifcation(retailer_profile, 'updated').start()
            return Response({
                "message": "Retailer has been updated",
                "retailer": RetailerProfileAPISerializer(retailer_profile).data
            }, status=status.HTTP_201_CREATED)

        return Response({
            "message": "Retailer Failed to update",
            "error logs": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
    
    def partial_update(self, request, pk):
        distributor = get_distributor(self.request)

        queryset = RetailerProfile.objects.filter(distributor=distributor)
        retailer_profile = get_object_or_404(queryset, pk=pk)
        serializer = RetailerProfileAPISerializer(retailer_profile, request.data, partial=True)

        if serializer.is_valid():
            if request.data['region']:
                region = DistRegion.objects.get(id=request.data['region'])
                retailer_profile.region = region
            else:
                retailer_profile.region = None
            if request.data['area']:
                area = DistArea.objects.get(id=request.data['area'])
                retailer_profile.area = area
            else:
                retailer_profile.area = None
            if request.data['city']:
                city = DistCity.objects.get(id=request.data['city'])
                retailer_profile.city = city
            else:
                retailer_profile.city = None
            if request.data['price_level']:
                price_level = PriceLevel.objects.get(id=request.data['price_level'])
                retailer_profile.price_level = price_level

            if request.data['contact_person']:
                retailer_profile.contact_person = request.data['contact_person']
            if request.data['contact_details']:
                retailer_profile.contact_details = request.data['contact_details']
            if request.data['contact_person_position']:
                retailer_profile.contact_person_position = request.data['contact_person_position']
            if request.data['contact_city']:
                retailer_profile.contact_city = request.data['contact_city']
            if request.data['contact_person_phone']:
                retailer_profile.contact_person_phone = request.data['contact_person_phone']

            if request.FILES.get('contact_pic'):
                retailer_profile.contact_pic.delete(save=False)
                retailer_profile.contact_pic = request.FILES.get('contact_pic')
            
            retailer_profile.contact_name = serializer.validated_data['contact_name']
            retailer_profile.contact_phone = serializer.validated_data['contact_phone']
            retailer_profile.contact_email = serializer.validated_data['contact_email']
            retailer_profile.is_active = serializer.validated_data.get('is_active')

            if request.data['salesman']:
                salesMan = SalesMan.objects.get(id=request.data['salesman'])
                retailer_profile.retailer.salesmen.add(salesMan)
                retailer_profile.salesman = salesMan

            retailer_profile.save()

            CreateRetailerNotifcation(retailer_profile, 'updated').start()
            return Response({
                "message": "Retailer has been updated",
                "retailer": RetailerProfileAPISerializer(retailer_profile).data
            }, status=status.HTTP_201_CREATED)

        return Response({
            "message": "Retailer Failed to update",
            "error logs": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk):
        try:
            distributor = get_distributor(self.request)
            queryset = RetailerProfile.objects.filter(distributor=distributor)
            retailer_profile = get_object_or_404(queryset, pk=pk)
            
            retailer = retailer_profile.retailer
            retailer.distributors.remove(distributor)
            retailer.save()
            retailer_profile.delete()

            CreateRetailerNotifcation(retailer_profile, 'deleted').start()
            return Response({
                "message": "Retailer has been deleted",
            }, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({
                "message": "Retailer deletion failed",
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class IntergrateRetailerForgotPassword(IntegratedAuthMixin, viewsets.ViewSet):

    def list(self, request):
        # handles forget password
        try:
            json_data = json.loads(request.body)
            print('jajs', json_data)
            retailer = Retailer.objects.get(id=json_data.get('id'))
            querySet = User.objects.filter(email=retailer.email)

            if querySet.first():
                user = querySet.first()
                encoded_email = customEncrypt(user.email)
                token = generateRandomString(25)
                current_time = datetime.timestamp(
                    datetime.now() + timedelta(days=1))
                complete_token = str(token)+str(current_time)
                user.reset_token = complete_token
                user.save()

                reset_url = str(request.get_host(
                ))+'/retailer/api/auth/forgot/?u='+encoded_email+'&token='+complete_token

                email_context = {
                    'reset_url': reset_url,
                }

                email_sent = send_html_email([user.email, ], "Forgot Password",
                                             "emails/forgot_password_template.html", context=email_context
                                             )

                if email_sent:
                    return Response({
                        'message': "A link to reset was sent to the retailer"
                    })
                else:
                    return Response({
                        'error': "Something was not configured well try again"
                    }, status=status.HTTP_400_BAD_REQUEST)

            else:
                return Response({
                    'message': "Could not find retailer with that email"
                }, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(e)
            return Response({
                'error': f"Could not set reset email {e}"
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)