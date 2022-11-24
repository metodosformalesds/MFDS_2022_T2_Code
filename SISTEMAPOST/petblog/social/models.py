from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
#from django.db.models.signals import post_save

# en esta funcion se crea el perfil del ususrio
class Profile(models.Model):

    User = models.OneToOneField(User, on_delete=models.CASCADE) # si se borra el ususrio se borra todo lo relacionado a el
    image = models.ImageField(default='imagen.jpg')

    def __str__(self):
        return f'Perfil de {self.user.username}' # muestra el perfil del ususrio y su nombre

    #def following(self):
     #   user_ids = Relationship.objects.filter(from_user=self.user)\
      #                          .values_list('to_user_id', flat=True)
       # return User.objects.filter(id__in=user_ids)  


    #def followers(self):
     #   user_ids = Relationship.objects.filter(to_user=self.user)\
      #                          .values_list('from_user_id', flat=True)
       # return User.objects.filter(id__in=user_ids)                                 


# permite al ususrio crear post
class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts') # acceder a todos los post del ususrio
    timestamp = models.DateTimeField(default=timezone.now)  # muestra el momento de creacion del post      
    description =models.TextField()



    #namePet =models.CharField(max_length=30)
    #sizepet= models.CharField( max_length=30)
    #nameOwner = models.CharField( max_length=50)
    #direccion = models.CharField(max_length=50)
    #email = models.EmailField('correo', max_length=50, unique=True)

    
# muestra el ususrio  la descipcion del post y la hora de publicacion
    class Meta:
        ordering = ['-timestamp'] # ordena los post de manera descendente.  timestmp muestra el momento de creacion del post

    def __str__(self):
         return f'{self.user.username}: {self.description}'   


   


class Relationship(models.Model):
    from_user = models.ForeignKey(User, related_name='relationships', on_delete=models.CASCADE)
    to_user = models.ForeignKey(User, related_name='related_to', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.from_user} to {self.to_user}'

    class Meta:
        indexes = [
        models.Index(fields=['from_user', 'to_user',]),
        ]    