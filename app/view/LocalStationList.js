Ext.define('Sencha.view.LocalStationList',{
  extend: 'Ext.List',
  xtype: 'localstationlist',
  requires: 'Sencha.store.LocalStations',
  
  config: {
  	title: 'Local Stations',
  	itemTpl: '{cityName}',
  	store: 'LocalStations',
  	onItemDisclosure: true,
  	disableSelection: true
  }
})