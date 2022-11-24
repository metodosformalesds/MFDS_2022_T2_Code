from django.urls import path
from .views  import HomeTemplateView, AppointmentTemplateView, ManageAppointmentTemplateView, MapaTemplateView, LandingTemplateView, SelectionView
from django.contrib.auth.views import LoginView, LogoutView

urlpatterns = [
    path("", HomeTemplateView.as_view(), name="home"), #Url a pagina principal
    path("make-an-appointment/", AppointmentTemplateView.as_view(), name="appointment"), # Url a pagina de  angedar citas
    path("manage-appointments/", ManageAppointmentTemplateView.as_view(), name="manage"), #Url a pagina de administrar citas
    path("vet-map/", MapaTemplateView.as_view(), name="mapa"), #Url a pagina de mapa
    path("landing/", LandingTemplateView.as_view(), name="landing"), # Url a  pagina de landing
    path('login/', LoginView.as_view(template_name='login.html'), name='login'), # url a form de login.html
    path('logout/', LogoutView.as_view(template_name='login.html'), name='logout'), #funcion de desloguear
    path('selection/', SelectionView.as_view(), name='selection'), #Url a pagina de seleccion de apartado
]