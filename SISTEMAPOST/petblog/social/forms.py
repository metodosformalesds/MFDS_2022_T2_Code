from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from .models import Post

#permite mostrar el formulario de registro
class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()
    password1 = forms.CharField(label='contrasenia', widget = forms.PasswordInput) # se pide la contrasenia
    password2 = forms.CharField(label='confirmar contrasenia', widget = forms.PasswordInput) # se pide confirmar contrsenia

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
        help_tests = {k:"" for k in fields}

#esta clase permite crear el formulario del post
class PostForm(forms.ModelForm):
    content = forms.CharField(label='', widget=forms.Textarea(attrs={'rows':2, 'placeholder': 'beautifull pet'}), required= True)

# retorna el contenido del formulario
    class Meta:
        model = Post
        fields = ['content']
