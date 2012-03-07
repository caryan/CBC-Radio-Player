Ext.define('CBCRadioPlayer.view.PodCastList',{
  extend: 'Ext.List',
  xtype: 'podcastlist',
  requires: ['CBCRadioPlayer.store.PodCasts'],
  
  config: {
  	title: 'PodCasts',
  	itemTpl: '{title}',
  	store: 'PodCasts',
  	onItemDisclosure: true,
  	disableSelection: true
  }
})