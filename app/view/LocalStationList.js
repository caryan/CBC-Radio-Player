Ext.define('CBCRadioPlayer.view.LocalStationList',{
  extend: 'Ext.List',
  xtype: 'localstationlist',
  requires: 'CBCRadioPlayer.store.LocalStations',
  
  config: {
  	title: 'Local Stations',
  	itemTpl: '{cityName}',
  	store: 'LocalStations',
  	onItemDisclosure: true,
  	disableSelection: true
  }
})