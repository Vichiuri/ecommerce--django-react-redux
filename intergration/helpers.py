import binascii
import hashlib
from multiprocessing import context
import os
import string
import random
import pprint

from hashids import Hashids

from datetime import  datetime, timedelta
from distributor.models.netbot import DistUsers, Distributor
from intergration.models import DistributorSalt, DistributorToken
from django.shortcuts import get_object_or_404


pp = pprint.PrettyPrinter(indent=4)


def generate_random_string(size, prefix):
    chars=string.ascii_uppercase + string.digits + string.ascii_lowercase
    gen_string = ''.join(random.choice(chars) for _ in range(size))
    value = f'{prefix}{gen_string}'
    return value


def hash_password(password):
    """Hash a password for storing."""
    salt = binascii.b2a_base64(hashlib.sha256(os.urandom(60)).digest()).strip()
    pwdhash = binascii.b2a_base64(hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 10000)).strip().decode()
    return {'salt': salt.decode(), 'pwdhash': pwdhash}

def encrypt_token(value):
    salt = binascii.b2a_base64(hashlib.sha256(os.urandom(60)).digest()).strip()
    hashedValue = binascii.b2a_base64(hashlib.pbkdf2_hmac('sha256', value.encode('utf-8'), salt, 10000)).strip().decode()
    hashedValue_stripped = hashedValue[:-1]
    prefix = 'TKN'
    access_token = f'{prefix}-{hashedValue_stripped}'
    return access_token

def encrypt_token(value):
    salt = binascii.b2a_base64(hashlib.sha256(os.urandom(60)).digest()).strip()
    hashedValue = binascii.b2a_base64(hashlib.pbkdf2_hmac('sha256', value.encode('utf-8'), salt, 10000)).strip().decode()
    hashedValue_striped = hashedValue[:-1] 
    prefix = 'TKN'
    access_token = f'{prefix}-{hashedValue_striped}'
    return access_token
    

def verify_password(stored_password, provided_password):
    """Verify a stored password against one provided by user"""
    pwdhash = hashlib.pbkdf2_hmac('sha256', provided_password.encode('utf-8'), stored_password['salt'].encode(), 10000)
    return pwdhash == binascii.a2b_base64(stored_password['pwdhash']) 

def hashId(id):
    hashids = Hashids(min_length=16)
    hashed_id = hashids.encode(id) 
    return hashed_id



def generateAuthToken(user):    
    previous_tokens = DistributorToken.objects.filter(revoked=False, distributor=user)
    for consumer_key in previous_tokens:
        consumer_key.revoked = True
        consumer_key.save()
    
    input_values = dict()

    print('brrrr====>',hashId(user.id))
    
    consumer_key_prefix ='CON-'
    consumer_key = generate_random_string(15, consumer_key_prefix)
    salted_token = hash_password(consumer_key)
    
    api_prefix ='API-'
    api_key = generate_random_string(15, api_prefix)
    
    token = f'{consumer_key}{user.id}{salted_token.get("salt")}'
    token = encrypt_token(token)

    input_values['consumer_key'] = consumer_key
    input_values['expires_at'] = datetime.now() + timedelta(days=1)
    input_values['salt'] = DistributorSalt.objects.create(salt=salted_token.get("salt"))
    input_values['api_key'] = api_key
    input_values['distributor'] = user
    input_values['token'] = token
    input_values['encypted_dist'] = hashId(user.id)
    integrated_token = DistributorToken.objects.create(**input_values)

    return integrated_token


def get_distributor(request):
        _request_header = request.headers
        id = _request_header['Distributor'] 
        id = Hashids(min_length=16).decode(id)[0]
        user = get_object_or_404(Distributor, id=id)
        distUser = DistUsers.objects.filter(distributor=user).first()
        distributor = distUser.distributor
        return distributor