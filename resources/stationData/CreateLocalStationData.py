'''
A helper script to create the local station data. It would be nice to load this dynamically but the CBC 
pls server doesn't support Cross-origin resource sharing so the same-origin policy prevents me
from using JS to get it. 

// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

'''

import urllib2
import json

#Radio 1 
cities =  []
cities.append({'cityName': "Kelowna", 'acronym':'R1_KEL', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Prince George", 'acronym': 'R1_PRG', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Vancouver", 'acronym': 'R1_VCR', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Victoria", 'acronym': 'R1_VIC', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Calgary", 'acronym': 'R1_CGY', 'imgLink': 'http://www.cbc.ca/calgary/images/hosts/frequency.png'})
cities.append({ 'cityName': "Edmonton", 'acronym': 'R1_EDM', 'imgLink': 'http://www.cbc.ca/edmonton/images/hosts/frequency.png'})
cities.append({ 'cityName': "Regina", 'acronym': 'R1_REG', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Saskatoon", 'acronym': 'R1_REG', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Winnipeg", 'acronym': 'R1_WPG', 'imgLink': 'http://www.cbc.ca/manitoba/images/masthead/frequency.png'})
cities.append({ 'cityName': "London", 'acronym': 'R1_LDN', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Ottawa", 'acronym': 'R1_OTT', 'imgLink': 'http://www.cbc.ca/ottawa/images/masthead/frequency.png'})
cities.append({ 'cityName': "Sudbury", 'acronym': 'R1_SUD', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Thunder Bay", 'acronym': 'R1_TBA', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Toronto", 'acronym': 'R1_TOR', 'imgLink': 'http://www.cbc.ca/toronto/images/masthead/frequency.png'})
cities.append({ 'cityName': "Windsor", 'acronym': 'R1_WDR', 'imgLink': 'http://www.cbc.ca/windsor/images/masthead/frequency.png'})
cities.append({ 'cityName': "Montreal", 'acronym': 'R1_MTL', 'imgLink': 'http://www.cbc.ca/montreal/images/masthead/frequency.png'})
cities.append({ 'cityName': "Nord Quebec", 'acronym': 'R1_N_MTL', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Quebec City", 'acronym': 'R1_QQU', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Fredericton", 'acronym': 'R1_FRD', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Moncton", 'acronym': 'R1_MCT', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Saint John", 'acronym': 'R1_SNB', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Charlottetown", 'acronym': 'R1_CHR', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Cape Breton", 'acronym': 'R1_SYD', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Halifax", 'acronym': 'R1_HFX', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Corner Brook", 'acronym': 'R1_COR', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Gander", 'acronym': 'R1_GFA', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Labrador", 'acronym': 'R1_GBA', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "St John's", 'acronym': 'R1_SNF', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Inuvik", 'acronym': 'R1_INK', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})
cities.append({ 'cityName': "Yellowknife", 'acronym': 'R1_YKN', 'imgLink': 'http://www.cbc.ca/bc/images/masthead/radioone.png'})

#Radio 2
cities.append({'cityName': "Radio 2: Atlantic", 'acronym':'R2_HFX', 'imgLink': 'http://www.cbc.ca/asianheritage/images-blog/cbc_radio_two.jpg'})
cities.append({'cityName': "Radio 2: Eastern", 'acronym':'R2_TOR', 'imgLink': 'http://www.cbc.ca/asianheritage/images-blog/cbc_radio_two.jpg'})
cities.append({'cityName': "Radio 2: Central", 'acronym':'R2_WPG', 'imgLink': 'http://www.cbc.ca/asianheritage/images-blog/cbc_radio_two.jpg'})
cities.append({'cityName': "Radio 2: Mountain", 'acronym':'R2_EDM', 'imgLink': 'http://www.cbc.ca/asianheritage/images-blog/cbc_radio_two.jpg'})
cities.append({'cityName': "Radio 2: Pacific", 'acronym':'R2_VCR', 'imgLink': 'http://www.cbc.ca/asianheritage/images-blog/cbc_radio_two.jpg'})


for ct,city in enumerate(cities):
    print(city['cityName'])
    cities[ct]['audioURLs'] = []
    tmpPLSData = urllib2.urlopen('http://playerservices.streamtheworld.com/pls/CBC_' + city['acronym'] + '_H.pls')
    for tmpLine in tmpPLSData:
        if tmpLine[:4] == 'File':
            cities[ct]['audioURLs'].append(tmpLine.rstrip().split('=')[1])





with open('LocalStationData.json','w') as tmpFID:
    json.dump(cities, tmpFID, indent=2)
    
    
