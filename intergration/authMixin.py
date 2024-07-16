from django.http import HttpResponse
from intergration.models import DistributorSalt, DistributorToken
from rest_framework import status
from hashids import Hashids


class IntegratedAuthMixin:
    def dispatch(self, request, *args, **kwargs):        
        headers = request.headers
        print('dist from request', headers)
        distributor = Hashids(min_length=16).decode(headers.get('distributor'))[0]

        if headers.get('consumer_key') and headers.get('api_key') and headers.get('token') and distributor:
            consumer_key_array = headers.get('consumer_key').split('.')
            consumer_key_string = consumer_key_array[0]
            salt_string = consumer_key_array[1]
            
            salt = DistributorSalt.objects.filter(salt=salt_string).first()
            if salt:
                token_instance = DistributorToken.objects.filter(
                    consumer_key=consumer_key_string, 
                    salt=salt, 
                    revoked=False, 
                    distributor=distributor,
                    token=headers.get('token')
                    ).first()
                if token_instance and token_instance.distributor and token_instance.api_key == headers.get('api_key'):
                    if not hasattr(request, 'context'):
                        request.context = {}
                    request.context['distributor'] = token_instance.distributor
                    return super().dispatch(request, *args, **kwargs)
                else:
                    return HttpResponse('Authorization Failed', status=status.HTTP_401_UNAUTHORIZED )
        return HttpResponse('Authorization Failed', status=status.HTTP_401_UNAUTHORIZED )


