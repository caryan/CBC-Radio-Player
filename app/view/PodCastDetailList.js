Ext.define('CBCRadioPlayer.view.PodCastDetailList' , {
	extend: 'Ext.List',
	xtype: 'podcastdetaillist',
	requires: 'CBCRadioPlayer.store.PodCastDetails',

	config: {
		title: 'PlaceHolder',
		itemTpl: '<div><b>{title}</b></div> <div>{content}</div> <div><i>{publishedDate}</i></div>',
		styleHtmlContent: true,
	  	onItemDisclosure: true,
	  	disableSelection: true
	}
	
});
