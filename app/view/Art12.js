Ext.define('Kitchensink.view.Art9', {
    extend: 'Ext.form.Panel',
    alias : 'widget.Art9',
     
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
        width: 300,
        height: 115,
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
			 margin: 10,
			label:'File name',
			placeholder:'Enter your layer name',
			  listeners: {
                        keyup: function (txt, evt) {
                          filename = txt.getValue();
							
                        } 
                    } 
			},
			{
				xtype:'panel',
													//style:'display:inline-block !important;',
													layout:'hbox',
													pack:'center',
												//	margin: '5 0 5 46',
													style:'center',
													//height:60,
													items:[
													{
												xtype:'button',
												//cls:'x-button-normal x-button x-button-font x-sized x-layout-box-item',
												//width:90,
												margin:5,
												height:30,
												width:132,
												//label: 'Quantity',
												text:'Ok',
												handler: function()
												{
													
											
												}
												
												
			},
			{
												xtype:'button',
												margin:5,
												height:30,
												width:132,
												//label: 'Quantity',
												text:'Cancel',
												handler: function()
												{
													//alert('items:' + items);
												
 someForm1.destroy();
													
													
												}
												// placeHolder: 'Enter quantity:',
												
			}
													]
													
													},
			



        ]
    }
   
});