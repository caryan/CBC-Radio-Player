// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

Ext.define('CBCRadioPlayer.view.CurrentlyPlaying', {
	extend: 'Ext.Container',
    layout: 'vbox',
    xtype: 'playercont',
    requires: 'Ext.Audio',
    
    config: {
        scrollable: 'vertical',
    	items: [
    	{
    		xtype: 'titlebar',
    		title: 'Now Playing....',
    		docked: 'top'
    	},
        {
            id: 'curPlayingPanel',
            html: '<div id="showTitle"> <b>Nothing Playing Yet...</b></div> \
            		<div style="width:30%;float:left"> <img id="showImage" src="" /></div> \
            		<div id="showContent" style="width:70%;height:60%;float:left;overflow:auto"> Some description here. </div>',
            		
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
            isLive: false
        }
    	]
    },
    
  

});

