from django.contrib.auth.models import AbstractUser
from django.db import models

from django.utils.translation import ugettext_lazy as _

class CustomUser(AbstractUser):
    # first_name = models.CharField(_("First Name"), blank=True, max_length=255)
    # last_name = models.CharField(_("Last Name"), blank=True, max_length=255)
    # email = models.EmailField(_("Email"), unique=True)
    # password = models.CharField(_("Password"), max_length=255)
    address = models.CharField(_("Address"), max_length=255)

    def __str__(self):
        return self.email