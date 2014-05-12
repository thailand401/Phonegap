Ext.define('Kitchensink.view.Art11', {
    extend: 'Ext.form.Panel',
    alias : 'widget.Art11',
     
    config: {
      
     // We give it a left and top property
     //to make it floating by default
        left: 0,
        top: 0,
 
        // Make it modal so you can click the mask to hide the overlay
        modal: true,
	  // modal: false	,
        hideOnMaskTap: false,
		scrollable: false,
 
        // Set the width and height of the panel
        width: 300,
        height: 50,
     layout: {
            type: 'box',
			//pack: 'left',
        },
        defaults: {
            margin: '0 0 5 0',
            labelWidth: '40%'
        },
        items: [
          	{
				text:'<div class="meter red">' +
	'<span style="width: 80%"></span>' +
'</div>',
				}



        ]
    }
   
});