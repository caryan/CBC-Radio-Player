// Copyright 2012 Colm Ryan colm@colmryan.org
// License GPL v3 (http://www.gnu.org/licenses/gpl.txt) 

Ext.define('CBCRadioPlayer.view.PodCastDetailList' , {
	extend: 'Ext.List',
	xtype: 'podcastdetaillist',
	requires: 'CBCRadioPlayer.store.PodCastDetails',

	config: {
		title: 'PlaceHolder',
		RSSFeed: null,
		itemTpl: '<div><b>{title}</b></div> <div>{content}</div> <div><i>{publishedDate}</i></div>',
		styleHtmlContent: true,
		disableSelection: true,
	}
	
});
