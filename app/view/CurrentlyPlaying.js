Ext.define('CBCRadioPlayer.view.CurrentlyPlaying', {
	extend: 'Ext.Container',
    layout: 'vbox',
    xtype: 'playercont',
    requires: 'Ext.Audio',
    
    config: {
    	items: [
        {
            xtype: 'panel',
            html: 'Some current playing info.',
            flex: 1
        },
        {
            xtype: 'audio',
            preload: false,
            url: '',
            id: 'playerControl'
        }
    	]
    }
});

