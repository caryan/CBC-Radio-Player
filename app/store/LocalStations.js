// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 


Ext.define('CBCRadioPlayer.store.LocalStations', {
    extend: 'Ext.data.Store',
    requires: 'CBCRadioPlayer.model.LocalStation',
    
    config: {
        model: 'CBCRadioPlayer.model.LocalStation',
        sorters: 'cityName',
        autoLoad: true,
        proxy: {
        	type: 'ajax',
        	url: 'app/store/LocalStationData.json',
        	reader: {
        		type: 'json'
        	}
        }
		
    }
});
