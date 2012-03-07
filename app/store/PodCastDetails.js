// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

Ext.define('CBCRadioPlayer.store.PodCastDetails', {
    extend: 'Ext.data.Store',
    xtype: 'podcastdetails',
    requires: ['CBCRadioPlayer.model.PodCastDetail','Ext.data.proxy.JsonP'],
    
    config: {
        model: 'CBCRadioPlayer.model.PodCastDetail',
        autoLoad: true,
        }
});
