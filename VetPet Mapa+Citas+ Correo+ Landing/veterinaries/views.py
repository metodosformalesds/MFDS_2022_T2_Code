#Daniel Barajas Gaytan 193047

from django.shortcuts import render
from django.http import  HttpResponse
from django.http.response import HttpResponseRedirect
from django.views.generic.base import TemplateView
from django.core.mail import EmailMessage, message
from django.conf import settings
from django.contrib import messages
from .models import Appointment
from django.views.generic import ListView
import datetime
from django.template import Context
from django.template.loader import render_to_string, get_template

#Daniel Barajas Gaytan 193047
#Recoge el template "index.html" junto con su ccs
class HomeTemplateView(TemplateView):
    template_name = "index.html"

    #Daniel Barajas Gaytan 193047
    #Iba  a ser utilizada para el contact us!
    def post(self, request):
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        email = EmailMessage(
            subject= f"{name} Atte VetPet",
            body=message,
            from_email=settings.EMAIL_HOST_USER,
            to=[settings.EMAIL_HOST_USER],
            reply_to=[email]
        )
        email.send()
        return HttpResponse("Email sent successfully!")


#Daniel Barajas Gaytan 193047
#Funcion que recoge los datos del formulario  generado en appointment.html
class AppointmentTemplateView(TemplateView):
    template_name = "appointment.html"

    def post(self, request):
        fname = request.POST.get("fname")
        lname = request.POST.get("lname")
        email = request.POST.get("email")
        mobile = request.POST.get("mobile")
        message = request.POST.get("request")

        appointment = Appointment.objects.create(
            first_name=fname,
            last_name=lname,
            email=email,
            phone=mobile,
            request=message,
        )

        appointment.save()

        messages.add_message(request, messages.SUCCESS, f"Gracias {fname} por solicitar una cita, ¡le enviaremos un correo electrónico lo antes posible!")
        return HttpResponseRedirect(request.path)


#Daniel Barajas Gaytan 193047
#Clase de administracion de citas, da la posibilidad de escoger fecha y cambiar el status a aceptada
class ManageAppointmentTemplateView(ListView):
    template_name = "manage-appointments.html"
    model = Appointment
    context_object_name = "appointments"
    login_required = True
    paginate_by =  3

    
    def post(self, request):
        date = request.POST.get("date")
        appointment_id = request.POST.get("appointment-id")
        appointment = Appointment.objects.get(id=appointment_id)
        appointment.accepted = True
        appointment.accepted_date = datetime.datetime.now()
        appointment.save()


        data = {
            "fname":appointment.first_name,
            "date":date,
        }
#Daniel Barajas Gaytan 193047
#Esta parte del codigo utiliza el template email.html como base del correo sustituyendo el nombre de quien la solicita
#y la fecha en la que fue confirmada y la  envia  al correo solicitante
        message = get_template('email.html').render(data)
        email = EmailMessage(
            "Información sobre tu consulta",
            message,
            settings.EMAIL_HOST_USER,
            [appointment.email]
        )
        
        
        email.content_subtype = "html"
        email.send()
        messages.add_message(request, messages.SUCCESS, f"Haz aceptado la solicitud de {appointment.first_name}. Se le ha enviado un correo con todos los detalles")
        return HttpResponseRedirect(request.path)


        



    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        appointments = Appointment.objects.all()
        context.update({
            "title":"Manage Appointments"
        })
        return context


#Adrian Robles y Daniel Barajas
class MapaTemplateView(TemplateView):
    template_name = "mapa.html"
#Adrian Robles Creacion de la Vista de la pagina inicial 
class LandingTemplateView(TemplateView):
    template_name = "landing.html"
#Adrian Robles Creaciín de la  Vista de la pagina inicial 
class SelectionView(TemplateView):
    template_name = "selection.html"
