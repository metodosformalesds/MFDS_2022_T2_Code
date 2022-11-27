from __future__ import unicode_literals
from django.db import models

# Create your models here.

from django.contrib.auth.models import User

class Post(models.Model):

	usuario = models.ForeignKey(User, on_delete=models.CASCADE)
	texto = models.TextField()
	creado = models.DateTimeField(auto_now_add=True)

	class Meta:
		ordering = ['creado']

	def __unicode__(self):
		return self.texto  + ' ' + self.usuario.username
