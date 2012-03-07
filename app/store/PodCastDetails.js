Ext.define('CBCRadioPlayer.store.PodCastDetails', {
    extend: 'Ext.data.Store',
    xtype: 'podcastdetails',
    requires: ['CBCRadioPlayer.model.PodCastDetail','Ext.data.proxy.JsonP'],
    
    config: {
        model: 'CBCRadioPlayer.model.PodCastDetail',
        autoLoad: true,
        }
});
