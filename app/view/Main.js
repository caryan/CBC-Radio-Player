Ext.define('PodCastsView',  {
	extend: 'Ext.navigation.View',
	xtype: 'podcastsviewer',
	requires: ['CBCRadioPlayer.view.PodCastList', 'CBCRadioPlayer.view.PodCastDetailList'],
	
	config: {
		items: [{
			xtype: 'podcastlist'
		}]
	}
});


Ext.define('CBCRadioPlayer.view.Main', {
    extend: 'Ext.TabPanel', 
    xtype: 'mainpanel',
    requires: ['CBCRadioPlayer.view.LocalStationList', 'CBCRadioPlayer.view.FavouritesList'],

    config: {
    	fullscreen: true,
		tabBarPosition: 'bottom',
    	items: [
        {
        	title: 'Favourites',
        	iconCls: 'favorites',
        	html: 'Should have a list of favourites here for quick launching.'
        },
        {
            title: 'Local Stations',
            iconCls: 'tv',
            xtype: 'localstationlist'
        },
        {
            title: 'PodCasts',
            iconCls: 'podcast',
            xtype: 'podcastsviewer'
        },
        {
        	title: 'Now Playing',
        	iconCls: 'headphones',
        	xtype: 'playercont'
 
        }
    ]
    }
});