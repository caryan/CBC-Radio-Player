// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

Ext.define('CBCRadioPlayer.store.Favourites', {
    extend: 'Ext.data.Store',
    requires: 'Ext.data.proxy.LocalStorage',
    
    config: {
    	autoLoad: true,
        model: 'CBCRadioPlayer.model.Favourite',
        proxy: {
        	type: 'localstorage',
        	id: 'CBCRadio-Favourites'
        }
    
    }
});
