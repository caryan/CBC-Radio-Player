Ext.define('Sencha.store.PodCasts', {
    extend: 'Ext.data.Store',
    requires: 'Sencha.model.PodCast',
    
    config: {
        model: 'Sencha.model.PodCast',
        sorters: 'title',
        autoLoad: true,
        proxy: {
        	type: 'ajax',
        	url: 'app/store/PodCastData.json',
        	reader: {
        		type: 'json'
        	}
        }
		
    }
});
