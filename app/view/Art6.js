Ext.define('Kitchensink.view.Art6', {
    extend: 'Ext.form.Panel',
    alias : 'widget.Art6',
     
    config: {
      
     // We give it a left and top property
     //to make it floating by default
        left: 0,
        top: 0,
 
        // Make it modal so you can click the mask to hide the overlay
        modal: true,
	  // modal: false	,
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
												xtype:'textfield',
												margin:'20 5 10 5',
												label: 'Quantity',
												 placeHolder: 'Enter quantity:',
												  listeners: {
                        keyup: function (txt, evt) {
							jQuery('#2x').attr('value', txt.getValue());
							
							
							
							
                          // jQuery('#fabricTextEditor_new').attr('value', txt.getValue());
							///  var e=paintAppGlobal.getCanvas(),t=e.getActiveObject();
   // if(t&&t.type=="text"){
    //  var n=jQuery("#fabricTextEditor_new");
   //   t.setText(n.val()),e.renderAll()
   // }
							
                        } 
                    } 
												}



        ]
    }
   
});