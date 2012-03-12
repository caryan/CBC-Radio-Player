// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

Ext.define('CBCRadioPlayer.view.FavouritesList',{
  extend: 'Ext.List',
  xtype: 'favouriteslist',
  requires: ['CBCRadioPlayer.store.Favourites'],
  
  config: {
  	title: 'Favourites',
  	itemTpl: '{displayName}',
  	store: 'Favourites',
  	onItemDisclosure: true,
    emptyText: '<div style="margin-top: 20px; text-align: left">Add some favourite for quick launching here.</div>',
 
  }
})