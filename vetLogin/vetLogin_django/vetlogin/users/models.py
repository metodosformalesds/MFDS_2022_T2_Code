from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.fields.files import ImageField


class User(AbstractUser):
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
