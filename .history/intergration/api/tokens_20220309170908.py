from pkg_resources import get_distribution
from distributor.models import distributor
from distributor.models.netbot import Distributor
from intergration.authMixin import IntegratedAuthMixin
from intergration.models import DistributorToken
from intergration.serializers import DistributorTokenSerializer
from retailer.serializers import DistributorSerializer
from ..helpers import generateAuthToken, get_distributor
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import get_object_or_404, render


 
class UserTokenView(APIView):
    serializer_class = DistributorSerializer

    def get(self, request, id):
        try:
            user = Distributor.objects.filter(id=id).first()
            token_dict = generateAuthToken(user)
            data = self.serializer_class(user).data
            token = f'{token_dict.token}.{token_dict.salt.salt}'
            Auth_token = f'{token_dict.token}{user.id}{token_dict.salt.salt}'
            api_key = token_dict.api_key
            distributor = user.id
            header = {'Authorization': "Bearer %s" % Auth_token}

            return Response(
                dict(
                    success=True, 
                    message='Token Generated Success', 
                    token=token, 
                    content_type='application/json',
                    api_key=api_key,
                    data=data,
                    distributor=distributor,
                ), 
                headers=header,
                status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response(dict(success=False, message="Credentials do not match", log=e), status=status.HTTP_400_BAD_REQUEST)


class DistributorTokenView(APIView):
    def get(self, request, id):
        print("HERE!!!!!!!!")
        try:            
            distributor = get_object_or_404(Distributor, id=id)
            if distributor:
                queryset = DistributorToken.objects.filter(revoked=False, distributor=distributor).first()
                if queryset:
                    serializer = DistributorTokenSerializer(queryset)
                    token = queryset.token
                    salt =  queryset.salt.salt
                    _id =  distributor.id
                    api_key = queryset.api_key
                    
                    return Response({
                        'message': "Tokens",
                        "Auth": f'{token}{_id}{salt}',
                        "Api_Key": api_key,
                        "distributor_id": _id,
                    }, status=status.HTTP_200_OK)
                return Response({
                    'message': "Tokens not found",
                    "Auth": '',
                    "Api_Key": '',
                    "distributor_id": '',
                }, status=status.HTTP_204_NO_CONTENT)    
            return Response({
                'message': "Distributor not found",
            }, status=status.HTTP_400_BAD_REQUEST)   
             
        except Exception as e:
            return Response({
                'message': "Tokens no found",
                "error log": e
            }, status=status.HTTP_400_BAD_REQUEST)
    # permission_classes = [IsAdminUser]

def renderDistributorToken(request, id):
    _distributor = Distributor.objects.filter(id=id).first()
    tokens = DistributorToken.objects.filter(revoked=False, distributor = _distributor)
    context = {'distributor':_distributor, 'tokens':tokens}
    return render(request, 'NewTheme/token.html', context)

