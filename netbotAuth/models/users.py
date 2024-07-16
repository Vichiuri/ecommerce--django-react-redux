"""
Custom User Model
Designed TO override And Extend The default django User Model
"""

from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone


class UserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """Create and save a User with the given email and password."""
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        """Create and save a regular User with the given email and password."""
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    reset_token = models.CharField(verbose_name='Token field', max_length=50, null=True, blank=True)
    REQUIRED_FIELDS = []
    USERNAME_FIELD = 'email'
    objects = UserManager()

    def __str__(self):
        return self.email

    @property
    def salesman(self):
        from distributor.models import SalesMan
        return SalesMan.objects.filter(email=self.email).first()

    @property
    def dist_user(self):
        from distributor.models import DistUsers
        return DistUsers.objects.filter(user_id=self.id).first()

    @property
    def netbot_user(self):
        from distributor.models import NetBotUser
        return NetBotUser.objects.filter(user_id=self.id).first()

    @property
    def retailer(self):
        from distributor.models import Retailer
        return Retailer.objects.filter(email=self.email).first()

    class Meta:
        db_table = "net_users"

# class Profile(models.Model):
#     user = models.OneToOneField("netbotAuth.User", verbose_name="User", related_name="user_profile",
#                                 on_delete=models.DO_NOTHING)
#     first_name = models.CharField(verbose_name="First Name", max_length=20)
#     last_name = models.CharField(verbose_name="Last Name", max_length=20)
#     profile_pic = models.ImageField(verbose_name="Profile Pic", upload_to="pics/profile/")
#
#     def __str__(self):
#         return self.first_name + " " + self.last_name
#
#     class Meta:
#         db_table = "user_profiles"
#         verbose_name_plural = "User Profiles"
#         verbose_name = "User Profile"
