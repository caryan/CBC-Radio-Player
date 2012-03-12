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
cities.append({'cityName': "Kelowna", 'acronym':'R1_KEL'})
cities.append({ 'cityName': "Prince George", 'acronym': 'R1_PRG'})
cities.append({ 'cityName': "Vancouver", 'acronym': 'R1_VCR'})
cities.append({ 'cityName': "Victoria", 'acronym': 'R1_VIC'})
cities.append({ 'cityName': "Calgary", 'acronym': 'R1_CGY'})
cities.append({ 'cityName': "Edmonton", 'acronym': 'R1_EDM'})
cities.append({ 'cityName': "Regina", 'acronym': 'R1_REG'})
cities.append({ 'cityName': "Saskatoon", 'acronym': 'R1_REG'})
cities.append({ 'cityName': "Winnipeg", 'acronym': 'R1_WPG'})
cities.append({ 'cityName': "London", 'acronym': 'R1_LDN'})
cities.append({ 'cityName': "Ottawa", 'acronym': 'R1_OTT'})
cities.append({ 'cityName': "Sudbury", 'acronym': 'R1_SUD'})
cities.append({ 'cityName': "Thunder Bay", 'acronym': 'R1_TBA'})
cities.append({ 'cityName': "Toronto", 'acronym': 'R1_TOR'})
cities.append({ 'cityName': "Windsor", 'acronym': 'R1_WDR'})
cities.append({ 'cityName': "Montreal", 'acronym': 'R1_MTL'})
cities.append({ 'cityName': "Nord Quebec", 'acronym': 'R1_N_MTL'})
cities.append({ 'cityName': "Quebec City", 'acronym': 'R1_QQU'})
cities.append({ 'cityName': "Fredericton", 'acronym': 'R1_FRD'})
cities.append({ 'cityName': "Moncton", 'acronym': 'R1_MCT'})
cities.append({ 'cityName': "Saint John", 'acronym': 'R1_SNB'})
cities.append({ 'cityName': "Charlottetown", 'acronym': 'R1_CHR'})
cities.append({ 'cityName': "Cape Breton", 'acronym': 'R1_SYD'})
cities.append({ 'cityName': "Halifax", 'acronym': 'R1_HFX'})
cities.append({ 'cityName': "Corner Brook", 'acronym': 'R1_COR'})
cities.append({ 'cityName': "Gander", 'acronym': 'R1_GFA'})
cities.append({ 'cityName': "Labrador", 'acronym': 'R1_GBA'})
cities.append({ 'cityName': "St John's", 'acronym': 'R1_SNF'})
cities.append({ 'cityName': "Inuvik", 'acronym': 'R1_INK'})
cities.append({ 'cityName': "Yellowknife", 'acronym': 'R1_YKN'})

#Radio 2
cities.append({'cityName': "Radio 2: Atlantic", 'acronym':'R2_HFX'})
cities.append({'cityName': "Radio 2: Eastern", 'acronym':'R2_TOR'})
cities.append({'cityName': "Radio 2: Central", 'acronym':'R2_WPG'})
cities.append({'cityName': "Radio 2: Mountain", 'acronym':'R2_EDM'})
cities.append({'cityName': "Radio 2: Pacific", 'acronym':'R2_VCR'})


for ct,city in enumerate(cities):
    print(city['cityName'])
    cities[ct]['audioURLs'] = []
    tmpPLSData = urllib2.urlopen('http://playerservices.streamtheworld.com/pls/CBC_' + city['acronym'] + '_H.pls')
    for tmpLine in tmpPLSData:
        if tmpLine[:4] == 'File':
            cities[ct]['audioURLs'].append(tmpLine.rstrip().split('=')[1])





with open('LocalStationData.json','w') as tmpFID:
    json.dump(cities, tmpFID, indent=2)
    
    
