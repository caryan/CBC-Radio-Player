Ext.define('Sencha.view.PodCastList',{
  extend: 'Ext.List',
  xtype: 'podcastlist',
  requires: ['Sencha.store.PodCasts'],
  
  config: {
  	title: 'PodCasts',
  	itemTpl: '{title}',
  	store: 'PodCasts',
  	onItemDisclosure: true,
  	disableSelection: true
  }
})