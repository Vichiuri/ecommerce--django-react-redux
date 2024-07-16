from distributor.models.netbot import Distributor
from intergration.models import DistributorToken
from intergration.serializers import DistributorTokenSerializer
from retailer.serializers import DistributorSerializer
from ..helpers import generateAuthToken, hashId
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from hashids import Hashids

from django.shortcuts import get_object_or_404, render
 
class UserTokenView(APIView):
    serializer_class = DistributorSerializer

    def get(self, request, id):
        try:
            user = Distributor.objects.filter(id=id).first()
            token_dict = generateAuthToken(user)
            data = self.serializer_class(user).data
            consumer_key = f'{token_dict.consumer_key}.{token_dict.salt.salt}'
            token = token_dict.token
            api_key = token_dict.api_key
            distributor = hashId(user.id)
            print('encoded===>', distributor)

            header = {'Authorization': "Bearer %s" % token,
                      'Content-type': 'application/json',
                    }

            return Response(
                dict(
                    success=True, 
                    message='Token Generated Success', 
                    token=token,
                    api_key=api_key,
                    consumer_key=consumer_key,
                    distributor=distributor,
                ), 
                headers=header,
                status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response(dict(success=False, message="Credentials do not match", log=e), status=status.HTTP_400_BAD_REQUEST)


class DistributorTokenView(APIView):
    def get(self, request, id):
        try:           
            # id = Hashids(min_length=16).decode(id)[0]
            
            distributor = Distributor.objects.filter(id=id).first()            
            # distributor = User.objects.filter(id=id).first()
            if distributor:
                queryset = DistributorToken.objects.filter(revoked=False, distributor=distributor).first()
                if queryset:
                    serializer = DistributorTokenSerializer(queryset)
                    token = queryset.token
                    consumer_key = queryset.consumer_key
                    salt =  queryset.salt.salt
                    _id =  queryset.encypted_dist
                    api_key = queryset.api_key
                    
                    print('_id', _id)
                    
                    return Response({
                        'message': "Tokens",
                        "consumer_key": f'{consumer_key}.{salt}',
                        "api_key": api_key,
                        "token": token,
                        "distributor_id": _id,
                    }, status=status.HTTP_200_OK)
                return Response({
                    'message': "Tokens not found",
                    "consumer_key": '',
                    "api_key": '',
                    "token": '',
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

