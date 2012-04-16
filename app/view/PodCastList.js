// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

Ext.define('CBCRadioPlayer.view.PodCastList',{
  extend: 'Ext.DataView',
  xtype: 'podcastlist',
  requires: ['CBCRadioPlayer.store.PodCasts', 'CBCRadioPlayer.view.PodCastListItem', 'Ext.field.Search'],
  
  config: {
  	title: 'PodCasts',
  	store: 'PodCasts',
  	ui: 'podcasts',
    useComponents: true,
    defaultType: 'podcastlistitem',
    disableSelection: true,

	// items: [
        // {
            // xtype: 'toolbar',
            // docked: 'top',
// 
            // items: [
              	  // {
                    // xtype: 'searchfield',
                    // id: 'podcastsearchfield',
                    // placeHolder: 'Search...'
                	// }
            	// ]
    	    // }
	    // ]
	},
	
});