from django.urls import path
from .views  import HomeTemplateView, AppointmentTemplateView, ManageAppointmentTemplateView, MapaTemplateView

urlpatterns = [
    path("", HomeTemplateView.as_view(), name="home"),
    path("make-an-appointment/", AppointmentTemplateView.as_view(), name="appointment"),
    path("manage-appointments/", ManageAppointmentTemplateView.as_view(), name="manage"),
    path("vet-map/", MapaTemplateView.as_view(), name="mapa")
]