Ext.define('Sencha.store.LocalStations', {
    extend: 'Ext.data.Store',
    requires: 'Sencha.model.LocalStation',
    
    config: {
        model: 'Sencha.model.LocalStation',
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
