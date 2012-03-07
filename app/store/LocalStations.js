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
