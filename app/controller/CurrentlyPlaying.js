// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

Ext.define('CBCRadioPlayer.controller.CurrentlyPlaying', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	curplayer: '#curPlayingControls',
        	playButton: '#playButton',
        	pauseButton: '#pauseButton',
        	stopButton: '#stopButton'
        },
        control: {
        	playButton: {
        		tap: 'playButtonAction'
        	},
        	pauseButton: {
        		tap: 'pauseButtonAction'
        	},
        	stopButton: {
        		tap: 'stopButtonAction'
        	}
        }
      },
       
	playButtonAction: function() {
    	var playerControls = Ext.ComponentManager.get('curPlayingControls');
    	if (playerControls.isLive)
	    	{
	    		playerControls.updateUrl(playerControls.getUrl())
	    	}
    	playerControls.play();
	}, 
	
	pauseButtonAction: function() {
		Ext.ComponentManager.get('curPlayingControls').pause();
	}, 

	stopButtonAction: function() {
		var playerControls = Ext.ComponentManager.get('curPlayingControls')
		if (playerControls.isPlaying()) {
			playerControls.stop();
		}
	}, 

});