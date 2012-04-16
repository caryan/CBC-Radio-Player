Ext.define('CBCRadioPlayer.view.PodCastListItem', {
	extend: 'Ext.dataview.component.DataItem',
    xtype : 'podcastlistitem',
    requires: ['Ext.Img'],

	config: {
		dataMap: {
			getTitle: {
				setHtml: 'title'
			},
			
			getImage: {
				setSrc: 'imgLink'
			}
			
		},
		
		cls: Ext.baseCSSPrefix + 'list-item',
		
		title: {
			cls: 'title'
		},
		
		image: {
			docked: 'left'
		},
		
		layout: {
			type: 'vbox',
			pack: 'center'
		}
	},
	
	applyTitle: function(config) {
		return Ext.factory(config, Ext.Component, this.getTitle());
	},
	
	updateTitle: function(newTitle) {
		if (newTitle) {
			this.add(newTitle);
		}
	},
	
	applyImage: function(config) {
		return Ext.factory(config, Ext.Img, this.getImage());
	},
	
	updateImage: function(newImage) {
		if (newImage) {
			this.add(newImage);
		}
	},
	
})
