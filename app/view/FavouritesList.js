Ext.define('Sencha.view.FavouritesList',{
  extend: 'Ext.List',
  xtype: 'favouriteslist',
  requires: ['Sencha.store.Favourites'],
  
  config: {
  	title: 'Favourites',
  	itemTpl: '{displayName}',
  	store: 'Favourites',
  	onItemDisclosure: true
  }
})