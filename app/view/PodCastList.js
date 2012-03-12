// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

Ext.define('CBCRadioPlayer.view.PodCastList',{
  extend: 'Ext.List',
  xtype: 'podcastlist',
  requires: ['CBCRadioPlayer.store.PodCasts', 'Ext.field.Search'],
  
  config: {
  	title: 'PodCasts',
  	itemTpl: '{title}',
  	store: 'PodCasts',
  	onItemDisclosure: true,
  	disableSelection: true,
  	
	items: [
        {
            xtype: 'toolbar',
            docked: 'top',

            items: [
              	  {
                    xtype: 'searchfield',
                    id: 'podcastsearchfield',
                    placeHolder: 'Search...'
                	}
            	]
    	    }
	    ]
	}
	
});