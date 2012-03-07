// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

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