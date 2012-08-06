// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

Ext.define('CBCRadioPlayer.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	PodCastsViewer: '.podcastsviewer',
        	PodCastList: '.podcastlist',
        	audioElement: '#audioElement',
        },
        control: {
        	'localstationlist': {
        		itemtap: 'startLocalStationStream'
        	},
        	'podcastlist': {
        		itemtap: 'showPodCastDetail'
        	},
        	'podcastdetaillist': {
        		itemtap: 'startPodCastStream'
        	},
        	// '#podcastsearchfield':{
        		// keyup: 'onSearchKeyUp',
        		// clearicontap: 'onSearchClearIconTap'
        	// }
        	
        	'favouriteslist': {
        		itemtap: 'favourite_runner'
        	}
        	
        	}
       },
       
    getPlayerControl: function(){
    	return this.getApplication().getController('CurrentlyPlaying')
    },

	startLocalStationStream: function(list, index, target, record) {
		
		Ext.ComponentManager.get('showTitle').setHtml('<b>Live from ' + record.data.cityName + '</b>');
		Ext.ComponentManager.get('showDescription').setHtml('');
		Ext.ComponentManager.get('showImage').setSrc(record.data.imgLink);

		audioURLs = record.data.audioURLs;

		this.getPlayerControl().myStop()
	
		this.getAudioElement().setUrl(audioURLs[0]);
		this.getAudioElement().streamURL = audioURLs[0];
		this.getAudioElement().isLive = true;
		this.getAudioElement().favInfo = {
			displayName: 'Live from ' +  record.data.cityName,
			isLive: true,
			audioURLs: audioURLs,
			cityName: record.data.cityName,
			imgLink: record.data.imgLink,
			};
		

		this.getPlayerControl().myPlay();
		
		//Move to the currently playing tab
		Ext.ComponentManager.get('mainTabPanel').setActiveItem(3);

	},

	showPodCastDetail: function(list, index, target, record) {
		var curPodCastDetails = this.getPodCastsViewer().push({
				xtype: 'podcastdetaillist',
				title: record.data.title,
				RSSFeed: record.data.RSSFeed,
				store: {
					xtype: 'podcastdetails',
					imgLink: record.data.imgLink,
					proxy: {
						type: 'jsonp',
						url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&q=' + record.data.RSSFeed,
						reader: {
							type: 'json',
							rootProperty: 'responseData.feed.entries'
						}
					}
				}
			});
	},
	
	startPodCastStream: function(list, index, target, record) {
		audioURL = record.data.link;
		
		//Hack work-around for broken World at Six links
		if (record.data.title.substring(0,22) == "CBC News: World at Six"){
			audioURL = 'http://podcast.cbc.ca/w6/worldatsix.mp3'
		}
		
		// Check we have something valid before continuing
		if (audioURL == ""){
			Ext.Msg.alert('Uhoh!', 'The podcast location is broken.', Ext.emptyFn);
		}
		else{
			Ext.ComponentManager.get('showTitle').setHtml('<b>' + record.data.title + '</b>');
			Ext.ComponentManager.get('showDescription').setHtml(record.data.content);
			Ext.ComponentManager.get('showImage').setSrc(list.getStore().getImgLink());
	
			this.getPlayerControl().myStop();
	
			this.getAudioElement().setUrl(audioURL);
			this.getAudioElement().streamURL = audioURL;
			this.getAudioElement().isLive = false;
			this.getAudioElement().favInfo = {
				displayName: list.getTitle(),
				isLive: false,
				audioURLs: null,
				title: list.getTitle(),
				imgLink: list.getStore().getImgLink(),
				RSSFeed: list.getRSSFeed(),
			};
			
			//Handle Cordova for Android with Cordova Media class		
			this.getPlayerControl().myPlay();
	
			//Move to the currently playing tab
			Ext.ComponentManager.get('mainTabPanel').setActiveItem(3);
		}
	},
	
	
	favourite_runner: function(list, index, target, record){
		
		//If it is a live stream then pass it to the startLocalStationStream
		if (record.data.isLive) {
		this.startLocalStationStream(null, null, null, record);
		}
		else{
		this.showPodCastDetail(null, null, null, record);
		Ext.ComponentManager.get('mainTabPanel').setActiveItem(2);
		}
	},
	
	   /**
     * Called when the search field has a keyup event.
     *
     * This will filter the store based on the fields content.
     * 
     * Taken from the examples/list-search 
     */
    onSearchKeyUp: function(field) {
        //get the store and the value of the field
        var value = field.getValue(),
            store = this.getPodCastList().getStore();

        //first clear any current filters on this store
        store.clearFilter();

        //check if a value is set first, as if it isn't we don't have to do anything
        if (value) {
            //the user could have entered spaces, so we must split them so we can loop through them all
            var searches = value.split(' '),
                regexps = [],
                i;

            //loop them all
            for (i = 0; i < searches.length; i++) {
                //if it is nothing, continue
                if (!searches[i]) continue;

                //if found, create a new regular expression which is case insenstive
                regexps.push(new RegExp(searches[i], 'i'));
            }

            //now filter the store by passing a method
            //the passed method will be called for each record in the store
            store.filter(function(record) {
                var matched = [];

                //loop through each of the regular expressions
                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = record.get('title').match(search);
                    //if it matched the title, push it into the matches array
                    matched.push(didMatch);
                }

                //if nothing was found, return false (dont so in the store)
                if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    //else true true (show in the store)
                    return matched[0];
                }
            });
        }
    },
    
     /**
     * Called when the user taps on the clear icon in the search field.
     * It simply removes the filter form the store
     */
    onSearchClearIconTap: function(field) {
        //call the clearFilter method on the store instance
        this.getPodCastList().getStore().clearFilter();
    }

});

