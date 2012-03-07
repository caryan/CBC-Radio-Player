'''
A helper script to create the local station data. It would be nice to load this dynamically but the CBC 
pls server doesn't support Cross-origin resource sharing so the same-origin policy prevents me
from using JS to get it. 
'''

import urllib2
import json

cities =  []
cities.append({'cityName': "Kelowna", 'acronym':'KEL'})
cities.append({ 'cityName': "Prince George", 'acronym': 'PRG'})
cities.append({ 'cityName': "Vancouver", 'acronym': 'VCR'})
cities.append({ 'cityName': "Victoria", 'acronym': 'VIC'})
cities.append({ 'cityName': "Calgary", 'acronym': 'CGY'})
cities.append({ 'cityName': "Edmonton", 'acronym': 'EDM'})
cities.append({ 'cityName': "Regina", 'acronym': 'REG'})
cities.append({ 'cityName': "Saskatoon", 'acronym': 'REG'})
cities.append({ 'cityName': "Winnipeg", 'acronym': 'WPG'})
cities.append({ 'cityName': "London", 'acronym': 'LDN'})
cities.append({ 'cityName': "Ottawa", 'acronym': 'OTT'})
cities.append({ 'cityName': "Sudbury", 'acronym': 'SUD'})
cities.append({ 'cityName': "Thunder Bay", 'acronym': 'TBA'})
cities.append({ 'cityName': "Toronto", 'acronym': 'TOR'})
cities.append({ 'cityName': "Windsor", 'acronym': 'WDR'})

for ct,city in enumerate(cities):
    print(city['cityName'])
    cities[ct]['audioURLs'] = []
    tmpPLSData = urllib2.urlopen('http://playerservices.streamtheworld.com/pls/CBC_R1_' + city['acronym'] + '_H.pls')
    for tmpLine in tmpPLSData:
        if tmpLine[:4] == 'File':
            cities[ct]['audioURLs'].append(tmpLine.rstrip().split('=')[1])

with open('LocalStationData.json','w') as tmpFID:
    json.dump(cities, tmpFID, indent=2)
