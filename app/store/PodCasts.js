Ext.define('CBCRadioPlayer.store.PodCasts', {
    extend: 'Ext.data.Store',
    requires: 'CBCRadioPlayer.model.PodCast',
    
    config: {
        model: 'CBCRadioPlayer.model.PodCast',
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
