from django.db import models


class DistributorInfo(models.Model):
    # email = models.EmailField(unique=True)
    # first_name = models.CharField(max_length=50)
    # last_name = models.CharField(max_length=50)
    # company = models.CharField(max_length=100, blank=True, null=True)
    client = models.OneToOneField('distributor.Distributor', on_delete=models.CASCADE)
    salt = models.ForeignKey('intergration.DistributorSalt', on_delete=models.CASCADE)
    api_key = models.CharField(max_length=20)


class DistributorSalt(models.Model):
    salt = models.CharField(max_length=256)


class DistributorToken(models.Model):
    salt = models.ForeignKey('intergration.DistributorSalt', on_delete=models.CASCADE)
    token = models.CharField(max_length=256)
    consumer_key = models.CharField(max_length=256, blank=True, null=True)
    api_key = models.CharField(max_length=256)
    expires_at = models.DateTimeField()
    distributor = models.ForeignKey('distributor.Distributor', on_delete=models.CASCADE)
    encypted_dist = models.CharField(max_length=100, blank=True, null=True)
    revoked = models.BooleanField(default=False)


