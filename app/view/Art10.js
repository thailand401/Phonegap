Ext.define('Kitchensink.view.Art10', {
    extend: 'Ext.form.Panel',
    alias : 'widget.Art10',
     
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
          	{xtype:'panel',
													//style:'display:inline-block !important;',
													layout:'box',
													pack:'center',
												//	margin: '5 0 5 46',
													style:'center',
													//height:60,
												//	width:100,
													items:[
													{
														xtype:'label',
														width:80,
														margin:5,
														html:'<b style="color:#000;">Are you sure?</b></br>',
														
														},
													
													{
														xtype:'button',
												//cls:'x-button-normal x-button x-button-font x-sized x-layout-box-item',
												//width:90,
												margin:5,
												height:30,
												width:90,
												//label: 'Quantity',
												text:'Agree',
												handler: function()
												{
													confirmSaveAndCheckout();
													 //window.location.href = 'http://www.peopleschoiceapparel.com/customer/account/loginApp';
														someForm1.destroy();
												}
														},
														{
															
															xtype:'button',
												//cls:'x-button-normal x-button x-button-font x-sized x-layout-box-item',
												//width:90,
												margin:5,
												height:30,
												width:90,
												//label: 'Quantity',
												text:'Cancel',
												handler: function()
												{
													someForm1.destroy();
														
												}
															}
														
														]
												}



        ]
    }
   
});