from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.db.models.signals import post_save

class Profile(models.Model):
    User = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='imagen.jpg')

    def __str__(self):
        return f'Perfil de {self.User.username}'

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    timestamp = models.DateTimeField(default=timezone.now)        
    description =models.TextField()
    

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
         return f'{self.user.username}: {self.description}'   


    def create_profile(sender, instance, created,**kwargs):
        if created:
            Profile.objects.create(user=instance)

    post_save.connect(create_profile, sender=User)        
