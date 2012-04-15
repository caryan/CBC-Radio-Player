// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

Ext.define('CBCRadioPlayer.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	CurPlayerContainer: 'playercont',
        	PodCastsViewer: 'podcastsviewer',
        	PodCastList: 'podcastlist'
        },
        control: {
        	'localstationlist': {
        		select: 'startLocalStationStream'
        	},
        	'podcastlist': {
        		select: 'showPodCastDetail'
        	},
        	'podcastdetaillist': {
        		select: 'startPodCastStream'
        	},
        	// '#podcastsearchfield':{
        		// keyup: 'onSearchKeyUp',
        		// clearicontap: 'onSearchClearIconTap'
        	// }
        	
        	}
       },

	startLocalStationStream: function(list, record) {
		audioURLs = record.data.audioURLs;
		var playerControls = Ext.ComponentManager.get('curPlayingControls')

		if (playerControls.isPlaying()) {
			playerControls.stop();
		}
		playerControls.setUrl(audioURLs[0]);
		playerControls.isLive = true;
		playerControls.play();

		Ext.ComponentManager.get('mainTabPanel').setActiveItem(3);

	},

	showPodCastDetail: function(list, record) {
		var curPodCastDetails = this.getPodCastsViewer().push({
				xtype: 'podcastdetaillist',
				title: record.data.title,
				store: {
					xtype: 'podcastdetails',
					imgLink: record.data.imgLink,
					proxy: {
						type: 'jsonp',
						url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=-1&q=' + record.data.RSSFeed,
						reader: {
							type: 'json',
							rootProperty: 'responseData.feed.entries'
						}
					}
				}
			});
	},
	
	startPodCastStream: function(list, record) {
		audioURL = record.data.link;
		
		var playerControls = Ext.ComponentManager.get('curPlayingControls')
		
		Ext.get('showTitle').setHtml('<b>' + record.data.title + '</b>');
		Ext.get('showContent').setHtml(record.data.content);
		Ext.get('showImage').dom.src = list.getStore().getImgLink();

		if (playerControls.isPlaying()) {
			playerControls.stop();
		}
		playerControls.setUrl(audioURL);
		playerControls.isLive = false;
		playerControls.play();
		
		Ext.ComponentManager.get('mainTabPanel').setActiveItem(3);
		
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

