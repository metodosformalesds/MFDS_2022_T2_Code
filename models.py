from django.db import models
from .models import *

# Create your models here.
class Categoria(models.Model):
    id = models.AutoField(primari_key = True)
    nombre = models.CharField('Nombre de la categoria', max_length=100, null=false, blank=False)
    estado = models.BooleanField('categoria/activada/no activada', default=True)
    fechaCreacion = models.DateField('fecha creacion',auto_now = False, auto_now_add = True)

    class Meta:
        verbose_name ='Categoria'
        verbose_name_plural = 'Categorias'

    def __str__(self):
        return self.nombre

    class Autor(models.Model):
        id = models.AutoField(primary_key= True)
        nombre = models.CharField('Nombres', max_length = 100)
        apellidos = models.CharField('Apellidos', max_length = 120)
        email = models.EmailField('Correo Electrónico', max_length = 200)
        descripcion = models.TextField('Descripción')
        imagen_referencial = models.ImageField('Imagen Referencial', null = True, blank = True,upload_to = 'autores/')
        web = models.URLField('Web', null = True, blank = True)
        facebook = models.URLField('Facebook', null = True, blank = True)
        twitter = models.URLField('Twitter', null = True, blank = True)
        instagram = models.URLField('Instagram', null = True, blank = True)

    class Meta:
        verbose_name ='Autor'
        verbose_name_plural = 'Autores'

    def __str__(self):
        return "{0},{1}".format(self.apellidos,self.nombre)    