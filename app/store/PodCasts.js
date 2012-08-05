// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

Ext.define('CBCRadioPlayer.store.PodCasts', {
    extend: 'Ext.data.Store',
    requires: 'CBCRadioPlayer.model.PodCast',
    
    config: {
        model: 'CBCRadioPlayer.model.PodCast',
        sorters: 'title',
        autoLoad: true,
        proxy: {
        	type: 'ajax',
        	url: 'resources/stationData/PodCastData.json',
        	reader: {
        		type: 'json'
        	}
        }
		
    }
});
