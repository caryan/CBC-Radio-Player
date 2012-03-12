'''
A helper script to create the podcast rss feed data. 
This is a pain because web scraping is fragile and we'll have to update this if CBC changes their webpage.

Dependency: BeautifulSoup - because it is much nicer than the builtin HTMLParser

Currently can't handle:
Oops had trouble with NS: Mainstreet Cape Breton
Oops had trouble with The Debaters
Oops had trouble with 2011 CBC Massey Lectures
Oops had trouble with CBC Radio 3
Oops had trouble with CBC Radio 3 Breakfast Club
Oops had trouble with Radio 3 Super Feed

// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

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
    
    #The podcasts seem to be split into divs with class "pt_drks"
    soupCasts = soup.find_all(attrs={'pt_drks'})
    
    for tmpSoupCast in soupCasts:
        try:
            tmpTitle = tmpSoupCast.find_all(name='span', attrs={'pd_title'})[0].text
        
            #For some irritating reason these descriptions are formated differently in different types
            #I probably don't get everything right but good enough for now.
            tmpDescription = tmpSoupCast.find_all(name='div', attrs={'pd_descp'})[0].text.split('Updated')[0].strip()
            tmpRSSFeed = tmpSoupCast.find_all(name='a', href=re.compile('((xml)|(rss))$'), text='RSS')[0]['href']
            tmpImgLink = tmpSoupCast.find_all(name='img', attrs={'pd_img'})[0]['src']
            
            #Not all the links have the http at the beginning so add it if necessary
            if tmpImgLink[:4] != 'http':
                tmpImgLink = 'http://www.cbc.ca' + tmpImgLink
            
            #Add the podcast to the list as a dictionary
            podCasts.append({'title':tmpTitle, 'description':tmpDescription, 'RSSFeed':tmpRSSFeed, 'imgLink':tmpImgLink})

        except IndexError:
            print('Oops had trouble with {0}'.format(tmpTitle))
        
#Dump it to the json file
with open('PodCastData.json','w') as tmpFID:
    json.dump(podCasts, tmpFID, indent=2)