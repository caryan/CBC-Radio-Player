// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

Ext.define('CBCRadioPlayer.view.CurrentlyPlaying', {
	extend: 'Ext.Container',
    layout: 'vbox',
    xtype: 'playercont',
    requires: ['Ext.Audio', 'Ext.Img'],
    
    config: {
        scrollable: 'vertical',
    	items: [
    	{
    		xtype: 'titlebar',
    		title: 'Now Playing',
    		docked: 'top',
    		items: [{
    			id: 'addFavButton',
    			iconCls: 'favorites',
    			iconMask: true,
    			align: 'right',
    		}]
    	},
        {
            id: 'curPlayingPanel',
            layout: 'vbox',
            items: [
            {
	            layout: 'hbox',
	            items: [
	        	{
	        		xtype: 'image',
	        		id: 'showImage',
	        		src: '',
	        		height: 125,
	        		width: 125,
	        	},
	        	{
	        		id: 'showTitle',
	        		html: '<b>Nothing Playing Yet...</b>',
	        		flex: 1,
	        	}
		        ]
            },
	        {
	        	id: 'showDescription',
	        }
        	],
            flex: 2
        },
        {
        	xtype: 'toolbar',
        	docked: 'bottom',
        	items: [
        	{iconCls: 'play1', iconMask: true, flex: 1, id: 'playButton'},
        	{iconCls: 'pause', iconMask: true, flex: 1, id: 'pauseButton'},
        	{iconCls: 'stop', iconMask: true, flex: 1, id: 'stopButton'}]
        },
        {
            xtype: 'audio',
            id: 'curPlayingControls',
            preload: false,
            url: '',
            docked: 'bottom',
            hidden: true,
            isLive: false,
            favInfo: null
        }
    	]
    },
    
  

});

