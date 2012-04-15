// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

Ext.define('CBCRadioPlayer.controller.CurrentlyPlaying', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	curPlayer: '#curPlayingControls',
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
    	if (this.getCurPlayer().getUrl() !== '') {
	    	if (this.getCurPlayer().isLive) {
		    		this.getCurPlayer().updateUrl(playerControls.getUrl())
		    	}
	    	this.getCurPlayer().play();
    	}
	}, 
	
	pauseButtonAction: function() {
   		if (this.getCurPlayer().isPlaying()) {
	 		this.getCurPlayer().pause()
	 		}
	}, 

	stopButtonAction: function() {
		if (this.getCurPlayer().isPlaying()) {
			this.getCurPlayer().stop();
		}
	}, 

});