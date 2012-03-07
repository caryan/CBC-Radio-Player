Ext.define('CBCRadioPlayer.store.Favourites', {
    extend: 'Ext.data.Store',
    requires: 'Ext.data.proxy.LocalStorage',
    
    config: {
        model: 'CBCRadioPlayer.model.Favourite',
        proxy: {
        	type: 'localstorage',
        	id: 'CBCRadio-favourites'
        }
    
    }
});
