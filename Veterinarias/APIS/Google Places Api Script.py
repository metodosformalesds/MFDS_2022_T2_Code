import googlemaps
import prettyprint
import time
import pprint
import json

#Definir clave de la API Luis Adrian Robles
API_KEY= 'AIzaSyBklwT3U864mve_f8eK1YZiNo1BdRXMM8U'

#Definición de el cliente Luis Adrian Robles
gmaps = googlemaps.Client(key = API_KEY)

#Definición de la busqueda Luis Adrian Robles
places_result=gmaps.places_nearby(location='31.68327007978688,-106.42445603369978', radius = 13000, type='veterinary_care')
pprint.pprint(places_result)

#Pausar script por 3 segundos Luis Adrian Robles
time.sleep(3)

#Get los siguientes 20 resultados Luis Adrian Robles
places_result = gmaps.places_nearby(page_token = places_result['next_page_token'])
#time.sleep(3)
#pprint.pprint(places_result)
#places_result = gmaps.places_nearby(page_token = places_result['next_page_token'])
stored_results = []

for place in places_result['results']:
    my_place_id=place['place_id']

    #Seleccionar los campos deseados Luis Adrian Robles
    my_fields = ['name', 'formatted_address', 'opening_hours', 'geometry', 'type', 'rating']

    places_details=gmaps.place(place_id = my_place_id, fields= my_fields)

    json.dumps(places_details['result'], ensure_ascii=False)

    # Almacenar los resultados en una lista Luis Adrian Robles
    stored_results.append(places_details['result'])

#Crear Json Luis Adrian Robles
with open('data3.json', 'w') as file:
    json.dump(stored_results, file, indent=4)   
