from distributor.models import distributor
from distributor.models.netbot import Distributor
from intergration.models import DistributorToken
from intergration.serializers import DistributorTokenSerializer
from retailer.serializers import DistributorSerializer
from ..helpers import generateAuthToken
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import render


 
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


class DistributorTokenView(ListAPIView):
    queryset = DistributorToken.objects.filter(revoked=False)
    serializer_class = DistributorTokenSerializer

    # permission_classes = [IsAdminUser]

def renderDistributorToken(request, id):
    _distributor = Distributor.objects.filter(id=id).first()
    tokens = DistributorToken.objects.filter(revoked=False, distributor = _distributor)
    context = {'distributor':_distributor, 'tokens':tokens}
    return render(request, 'NewTheme/token.html', context)

