Ext.define('Sencha.view.PodCastDetailList' , {
	extend: 'Ext.List',
	xtype: 'podcastdetaillist',
	requires: 'Sencha.store.PodCastDetails',

	config: {
		title: 'PlaceHolder',
		itemTpl: '<div><b>{title}</b></div> <div>{content}</div> <div><i>{publishedDate}</i></div>',
		styleHtmlContent: true,
	  	onItemDisclosure: true,
	  	disableSelection: true
	}
	
});
