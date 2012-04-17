// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

Ext.define('CBCRadioPlayer.controller.CurrentlyPlaying', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	curPlayer: '#curPlayingControls',
        	playButton: '#playButton',
        	pauseButton: '#pauseButton',
        	stopButton: '#stopButton',
        	addFavButton: '#addFavButton',
        	favouritesList: '#favouriteslist'
        },
        control: {
        	playButton: {
        		tap: 'play_button_action'
        	},
        	pauseButton: {
        		tap: 'pause_button_action'
        	},
        	stopButton: {
        		tap: 'stop_button_action'
        	},
        	addFavButton:{
        		tap: 'add_to_favourite_list'
        	}
        }
      },
       
	play_button_action: function() {
		if (!this.getCurPlayer().isPlaying()){
			if (this.getCurPlayer().getUrl() !== '') {
		    	if (this.getCurPlayer().isLive) {
			    		this.getCurPlayer().updateUrl(this.getCurPlayer().streamURL)
			    	}
		    	this.getCurPlayer().play();
	    	}
	    }
	}, 
	
	pause_button_action: function() {
   		if (this.getCurPlayer().isPlaying()) {
	 		this.getCurPlayer().pause()
			//If we are live then we have to set the stream URL to '' to stop data 
			if (this.getCurPlayer().isLive){
				this.getCurPlayer().streamURL = this.getCurPlayer().getUrl()
				this.getCurPlayer().updateUrl('')
			}
	 		}
	}, 

	stop_button_action: function() {
		if (this.getCurPlayer().isPlaying()) {
			this.getCurPlayer().stop();
			//If we are live then we have to set the stream URL to '' to stop data 
			if (this.getCurPlayer().isLive){
				this.getCurPlayer().streamURL = this.getCurPlayer().getUrl()
				this.getCurPlayer().updateUrl('')
			}
		}
	}, 
	
	add_to_favourite_list: function(){
		//Add the favourite to the store
		this.getFavouritesList().getStore().add(this.getCurPlayer().favInfo)
		this.getFavouritesList().getStore().sync()
		//Let the user know something happened.
		Ext.Msg.alert('Added to Favourites', 'Added ' + this.getCurPlayer().favInfo.displayName + ' to the favourites panel.', Ext.emptyFn);
	}

});