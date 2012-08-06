// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

Ext.define('CBCRadioPlayer.controller.CurrentlyPlaying', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	audioElement: '#audioElement',
        	playButton: '#playButton',
        	pauseButton: '#pauseButton',
        	stopButton: '#stopButton',
        	addFavButton: '#addFavButton',
        	favouritesList: '#favouriteslist'
        },
        control: {
        	playButton: {
        		tap: 'myPlay'
        	},
        	pauseButton: {
        		tap: 'myPause'
        	},
        	stopButton: {
        		tap: 'myStop'
        	},
        	addFavButton:{
        		tap: 'add_to_favourite_list'
        	}
        },
      },
       
	add_to_favourite_list: function(){
		//Add the favourite to the store
		this.getFavouritesList().getStore().add(this.getAudioElement().favInfo)
		this.getFavouritesList().getStore().sync()
		//Let the user know something happened.
		Ext.Msg.alert('Added to Favourites', 'Added ' + this.getAudioElement().favInfo.displayName + ' to the favourites panel.', Ext.emptyFn);
	},


	myPlay: function () {
		//Handle packaged Android using Cordova's Media class
		if (window.cordova) {
			//If  we have stopped a live stream then restart it
			console.log("myPlay: Using Cordova Media");
			if (this.getAudioElement().cordovaAudio == null){
				console.log("myPlay: starting a new Cordova Media");
				if (this.getAudioElement().streamURL !== '') {
					this.getAudioElement().cordovaAudio = new Media(this.getAudioElement().streamURL, function() {console.log("cordova Audio: Success");});
					this.getAudioElement().cordovaAudio.play();
				}
			}
			else{
				console.log('myPlay: Restaring the media');
				this.getAudioElement().cordovaAudio.play();
			}
		}
			
		//Otherwise use ST HTML 5 Audio  
		else{
			console.log("myPlay: Using HTML5 Sencha Audio")
			if (!this.getAudioElement().isPlaying()){
				if (this.getAudioElement().getUrl() !== '') {
			    	if (this.getAudioElement().isLive) {
				    		this.getAudioElement().updateUrl(this.getAudioElement().streamURL)
				    	}
		    	}
		    	this.getAudioElement().play();
		    }
	    }
		
	},
	
	myStop: function () {
		if (window.cordova) {
			console.log("myStop: Using Cordova Media")
			if (this.getAudioElement().cordovaAudio != null){
				this.getAudioElement().cordovaAudio.stop();
				this.getAudioElement().cordovaAudio.release();
				this.getAudioElement().cordovaAudio = null;
			}
		}
		else{
			console.log("Using HTML5 Sencha Audio")
			if (this.getAudioElement().isPlaying()) {
				this.getAudioElement().stop();
				//If we are live then we have to set the stream URL to '' to stop data 
				if (this.getAudioElement().isLive){
					this.getAudioElement().streamURL = this.getAudioElement().getUrl()
					this.getAudioElement().updateUrl('')
				}
			}
		}
	},
	
	myPause: function (){
		if (window.cordova) {
			if (this.getAudioElement().cordovaAudio != null){
				this.getAudioElement().cordovaAudio.pause();
				if (this.getAudioElement().isLive){
					this.getAudioElement().cordovaAudio.stop()
					this.getAudioElement().cordovaAudio.release()
					this.getAudioElement().cordovaAudio = null
				}
			}
		}
		else{
			if (this.getAudioElement().isPlaying()) {
		 		this.getAudioElement().pause()
				//If we are live then we have to set the stream URL to '' to stop data 
				if (this.getAudioElement().isLive){
					this.getAudioElement().streamURL = this.getAudioElement().getUrl()
					this.getAudioElement().updateUrl('')
				}
			}
		}
	}

});


