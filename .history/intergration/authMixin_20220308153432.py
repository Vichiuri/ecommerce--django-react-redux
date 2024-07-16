from django.http import HttpResponse
from intergration.models import DistributorSalt, DistributorToken
from rest_framework import status


class IntegratedAuthMixin:
    def dispatch(self, request, *args, **kwargs):        
        headers = request.headers
        print('headers', headers)
        if headers.get('Auth') and headers.get('api_key') and headers.get('Distributor'):
            token_array = headers.get('Auth').split('.')
            token_string = token_array[0]
            salt_string = token_array[1]
            
            salt = DistributorSalt.objects.filter(salt=salt_string).first()
            if salt:
                token = DistributorToken.objects.filter(token=token_string, salt= salt, revoked=False, distributor= headers.get('Distributor')).first()
                if token and token.distributor and token.api_key == headers.get('api_key'):
                    if not hasattr(request, 'context'):
                        request.context = {}
                    request.context['distributor'] = token.distributor
                    return super().dispatch(request, *args, **kwargs)
                else:
                    return HttpResponse('Authorization Failed', status=status.HTTP_401_UNAUTHORIZED )
        return HttpResponse('Authorization not allowed', status=status.HTTP_401_UNAUTHORIZED )


