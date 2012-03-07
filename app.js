Ext.application({
    name: 'CBCRadioPlayer',

    controllers: ['Main'],
    views: ['Main', 'CurrentlyPlaying', 'LocalStationList', 'PodCastList', 'PodCastDetailList'],
    stores: ['LocalStations', 'Favourites', 'PodCasts', 'PodCastDetails'],
    models: ['LocalStation', 'Favourite', 'PodCast', 'PodCastDetail'],

    launch: function() {
        Ext.Viewport.add({
            xtype: 'mainpanel'
        });
    }
});