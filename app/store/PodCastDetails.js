Ext.define('Sencha.store.PodCastDetails', {
    extend: 'Ext.data.Store',
    xtype: 'podcastdetails',
    requires: ['Sencha.model.PodCastDetail','Ext.data.proxy.JsonP'],
    
    config: {
        model: 'Sencha.model.PodCastDetail',
        autoLoad: true,
        }
});
