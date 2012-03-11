// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

Ext.define('CBCRadioPlayer.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	CurPlayerContainer: 'playercont',
        	PodCastsViewer: 'podcastsviewer'
        },
        control: {
        	'localstationlist': {
        		disclose: 'startLocalStationStream'
        	},
        	'podcastlist': {
        		disclose: 'showPodCastDetail'
        	},
        	'podcastdetaillist': {
        		disclose: 'startPodCastStream'
        	}
        	}
       },

	startLocalStationStream: function(list, record) {
		audioURLs = record.data.audioURLs;
		var playerControls = Ext.ComponentManager.get('curPlayingControls')

		if (playerControls.isPlaying()) {
			playerControls.stop();
		}
		playerControls.setUrl(audioURLs[0]);
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
		playerControls.play();
		
		Ext.ComponentManager.get('mainTabPanel').setActiveItem(3);
		
	}

});

