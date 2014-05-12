Ext.define('Kitchensink.view.Art', {
    extend: 'Ext.form.Panel',
    alias : 'widget.Art',
     
    config: {
      
     // We give it a left and top property
     //to make it floating by default
        left: 0,
        top: 0,
 
        // Make it modal so you can click the mask to hide the overlay
      //  modal: true,
        hideOnMaskTap: true,
		scrollable: false,
 
        // Set the width and height of the panel
        width: 250,
        height: 75,
     layout: {
            type: 'vbox',
			pack: 'left',
        },
        defaults: {
            margin: '0 0 5 0',
            labelWidth: '40%'
        },
        items: [
           {
			   //layout: 'vbox',
    xtype: 'sliderfield',
	increment: 2,
	margin:10,
	 minValue: 0,
        maxValue: 50,
		value: 10,
	html:
       ' ',
   // src: 'resources/art/dsm0003_california_14.jpg',
   // height: 150,
	listeners :{
		 change: function( me, Slider, thumb, newValue, oldValue, eOpts) {
			 //console.log(newValue);
                                jQuery('#aaa').css('left', newValue  + '%');
								 jQuery('#bb').addClass('ui-slider-handle ui-state-default ui-corner-all ui-state-active ui-state-focus  ui-state-hover');
								 
								
								// console.log(n);
    jQuery("#thicknessSlider").slider({
      value:newValue
    })
		toolbar.onThicknessChanged()						 // toolbar.onOpacityChanged()
                                }
								 }
},




        ]
    }
   
});