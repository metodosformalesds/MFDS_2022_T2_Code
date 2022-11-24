from django.urls import path
from .views  import HomeTemplateView, AppointmentTemplateView, ManageAppointmentTemplateView, MapaTemplateView, LandingTemplateView, SelectionView
from django.contrib.auth.views import LoginView, LogoutView

urlpatterns = [
    path("", HomeTemplateView.as_view(), name="home"),
    path("make-an-appointment/", AppointmentTemplateView.as_view(), name="appointment"),
    path("manage-appointments/", ManageAppointmentTemplateView.as_view(), name="manage"),
    path("vet-map/", MapaTemplateView.as_view(), name="mapa"),
    path("landing/", LandingTemplateView.as_view(), name="landing"),
    path('login/', LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', LogoutView.as_view(template_name='login.html'), name='logout'),
    path('selection/', SelectionView.as_view(), name='selection'),
]