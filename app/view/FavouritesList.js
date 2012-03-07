Ext.define('CBCRadioPlayer.view.FavouritesList',{
  extend: 'Ext.List',
  xtype: 'favouriteslist',
  requires: ['CBCRadioPlayer.store.Favourites'],
  
  config: {
  	title: 'Favourites',
  	itemTpl: '{displayName}',
  	store: 'Favourites',
  	onItemDisclosure: true
  }
})