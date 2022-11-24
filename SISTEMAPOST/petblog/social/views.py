from django.shortcuts import render, redirect, get_object_or_404 
from .models import *
from .forms import  UserRegisterForm, PostForm
from django.contrib import messages
from django.contrib.auth.models import User
# Create your views here.


def feed(request):
    posts = Post.objects.all()
    context = {'posts': posts}
    return render(request, 'social/feed.html', context)
# permite el registro del ususrio
def register(request):
   if request.method =='POST': # permite acceder a la informacion del post
        form = UserRegisterForm(request.POST) # instancia del ususrio 
        if form.is_valid(): # valida que form sea valido
            form.save() # se guarda el form
            username = form.cleaned_data['username']
            messages.success(request, f'Usuario {username} creado') #se envia un mensaje que el ususrio se ha creado 
            return redirect('feed')
   else:
        form = UserRegisterForm()

        context = {'form' : form }
        return render(request, 'social/register.html', context)
# se crear el formulario del post y se valida 
def post(request):
    current_user = get_object_or_404(User, pk=request.user.pk)
    if request.method=='POST': # accede a los post
        form = PostForm(request.POST) 
        if form.is_valid(): # se valida que el form sea correcto
            post = form.save(commit=False)
            post.user = current_user
            post.save() # se guarda el post
            messages.success(request, 'Post enviado') # se envia un mensaje al ususrio
            return redirect('feed')
    else:
        form = PostForm()
        return render(request, 'social/post.html', {'form' : form})


def profile(request):
    return render(request, 'social/profile.html')


# to_user_id = to_user
 #   rel = Relationship(from_user=current_user, to_user=to_user_id)
  #  rel.save()
   # messages.success(request, f'siguea a:{username}')
    #return redirect('home')

#def unfollow(request, username):
 #   current_user = request.user
  #  to_user = User.objects.get(username=username)
   # to_user_id = to_user
    #rel = Relationship.objects.filter(from_user=current_user.id, to_user=to_user_id).get()
    #rel.delete()
    #messages.success(request, f'ya no siguea a:{username}')
    #return redirect('home')         