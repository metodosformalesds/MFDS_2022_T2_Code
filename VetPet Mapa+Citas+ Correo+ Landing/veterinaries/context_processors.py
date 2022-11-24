from .models import Appointment


#Daniel Barajas Gaytan 193047
#muestra las citas no cuenten con status de aceptado
def get_notification(request):
    count = Appointment.objects.filter(accepted=False).count()
    data = {
        "count":count
    }
    return data