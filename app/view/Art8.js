Ext.define('Kitchensink.view.Art8', {
    extend: 'Ext.form.Panel',
    alias : 'widget.Art8',
     
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
        width: 125,
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
												xtype:'button',
												//cls:'x-button-normal x-button x-button-font x-sized x-layout-box-item',
												//width:90,
												margin:5,
												height:40,
												width:100,
												//label: 'Quantity',
												text:'Load this?',
												handler: function()
												{
													
													
													Ext.Msg.show({
         title: 'Load',
         message: '<b style="color:#C0C0C0">Are you sure you want to load this, your design may be not saved?</b>',
		// prompt : true,     
		 	width: 600,
			height:130,
			multiline: true,
         //list: list,
       //  record: record,
         buttons: Ext.MessageBox.YESNO,
		// animEl: 'elId',
       //  promptConfig: false,
         fn: function (btn) {
             if (btn === 'yes') {
                                                           var index_tmp = (page - 2)*3 + (items - 1);
													load_temp1(index_tmp);
													 someForm1.destroy();
                                                       }
                                                       else {
                                                           someForm1.destroy();
                                                       }
        }
    });
													
													
										

													
												}
												
												
			},
			{
												xtype:'button',
												margin:5,
												height:40,
												width:100,
											//	label: 'Quantity',
												text:'Delete this?',
												handler: function()
												{	
												
												Ext.Msg.show({
         title: 'Delete',
         message: '<b style="color:#C0C0C0">Are you sure you want to delete this?</b>',
			width: 600,
			height:130,
			multiline: true,
         //list: list,
       //  record: record,
         buttons: Ext.MessageBox.YESNO,
       //  promptConfig: true,
         fn: function (btn) {
              if (btn === 'yes') {
                                                          for(var i = 0;i < alldata1.length - 1;i++)
													{
														if(i == (page - 2)*3 + (items - 1))
														{
															;
														}
														else
														{
															 dbEntries1.push(alldata1[i] + '$');
														}
														
												}
												
												  if (file.writer.available) {
                  file.writer.available = false;
                  file.writer.object.onwriteend = function (evt) {
                      file.writer.available = true;
                      file.writer.object.seek(0);
                  }
                  file.writer.object.write(dbEntries1.join("\n"));
              }
			   dbEntries1 = [];
			   Ext.Msg.show({
   title:'successfully deleted!',
   width:300,
   
  
}); 
//save = 1;
//Ext.getCmp('mainNestedList').getStore().getRoot().goToNode(1);
	Ext.getCmp('mainNestedList').goToNode(Ext.getCmp('mainNestedList').getStore().getRoot());
  readText();
		 
			
			save = 1;
  page=1;
  load_count=1;
			 someForm1.destroy();
			  // alert('successfully deleted!');
                                                       }
                                                       else {
                                                           someForm1.destroy();
                                                       }
        }
    });
												
											
													
												}
												
			}



        ]
    }
   
});