import googlemaps
import prettyprint
import time
import pprint
import json

#Definir clave de la API
API_KEY= 'AIzaSyBklwT3U864mve_f8eK1YZiNo1BdRXMM8U'

#Definición de el cliente
gmaps = googlemaps.Client(key = API_KEY)

#Definición de la busqueda
places_result=gmaps.places_nearby(location='31.68327007978688,-106.42445603369978', radius = 13000, type='veterinary_care')
pprint.pprint(places_result)

#Pausar script por 3 segundos
time.sleep(3)

#Get los siguientes 20 resultados
places_result = gmaps.places_nearby(page_token = places_result['next_page_token'])
#time.sleep(3)
#pprint.pprint(places_result)
#places_result = gmaps.places_nearby(page_token = places_result['next_page_token'])
stored_results = []

for place in places_result['results']:
    my_place_id=place['place_id']

    #Seleccionar los campos deseados
    my_fields = ['name', 'formatted_address', 'opening_hours', 'geometry', 'type', 'rating']

    places_details=gmaps.place(place_id = my_place_id, fields= my_fields)

    json.dumps(places_details['result'], ensure_ascii=False)

    # Almacenar los resultados en una lista
    stored_results.append(places_details['result'])

#Crear Json
with open('data3.json', 'w') as file:
    json.dump(stored_results, file, indent=4)   