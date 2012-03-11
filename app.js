//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>

Ext.application({
    name: 'CBCRadioPlayer',

    requires: [
        'Ext.MessageBox'
    ],

    controllers: ['Main', 'CurrentlyPlaying'],
    views: ['Main', 'CurrentlyPlaying', 'LocalStationList', 'PodCastList', 'PodCastDetailList'],
    stores: ['LocalStations', 'Favourites', 'PodCasts', 'PodCastDetails'],
    models: ['LocalStation', 'Favourite', 'PodCast', 'PodCastDetail'],
    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('CBCRadioPlayer.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});
