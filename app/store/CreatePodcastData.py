'''
A helper script to create the podcast rss feed data. 
This is a pain because web scraping is fragile and we'll have to update this if CBC changes their webpage.

Dependency: BeautifulSoup - because it is much nicer than the builtin HTMLParser

'''

import urllib2
from bs4 import BeautifulSoup
import re
import json

programTypes = ['newsandcurrent', 'region', 'arts', 'sports']
                
podCasts = []

for curType in programTypes:
    tmpHTML = urllib2.urlopen('http://www.cbc.ca/podcasting/index.html?' + curType).read()
    soup = BeautifulSoup(tmpHTML)
    
    tmpTitles = [tmpTag.text for tmpTag in soup.find_all(name='span', attrs={'pd_title'})]
    #For some irritating reason these descriptions are formated differently in different types
    #I probably don't get everything right but good enough for now.
    tmpDescriptions = [tmpTag.text.split('Updated')[0].strip() for tmpTag in soup.find_all(name='div', attrs={'pd_descp'})]
    tmpRSSFeeds = [tmpTag['href'] for tmpTag in soup.find_all(name='a', href=re.compile('xml$'), text='RSS')]
    tmpImgLinks = [tmpTag['src'] for tmpTag in soup.find_all(name='img', attrs={'pd_img'})]
    #Not all the links have the http at the beginning so add it if necessary
    tmpImgLinks = ['http://www.cbc.ca' + tmpImgLink for tmpImgLink in tmpImgLinks if tmpImgLink[:4] != 'http']
    
    #Add the podcasts to the list as a dictionary
    for tmpTitle, tmpDescription, tmpRSSFeed, tmpImgLink in zip(tmpTitles, tmpDescriptions, tmpRSSFeeds, tmpImgLinks):
        podCasts.append({'title':tmpTitle, 'description':tmpDescription, 'RSSFeed':tmpRSSFeed, 'imgLink':tmpImgLink})
        
        
#Dump it to the json file
with open('PodCastData.json','w') as tmpFID:
    json.dump(podCasts, tmpFID, indent=2)