Ext.define('Sencha.store.Favourites', {
    extend: 'Ext.data.Store',
    requires: 'Ext.data.proxy.LocalStorage',
    
    config: {
        model: 'Sencha.model.Favourite',
        proxy: {
        	type: 'localstorage',
        	id: 'CBCRadio-favourites'
        }
    
    }
});
