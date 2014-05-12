(function () {
	
  
  //  var data = {
		
     
       
           
     //   };
 // console.log(data);
  
   var insert =  { 
			
			text: '<b style="color:#C0C0C0"> <img style="margin:auto;background-size:32px;" src="resources/images/art.png"/>  Create Design</b>',
			 leaf: false,
			  cls: 'launchscreen',
			 
			items:[
			{
			   text: '<b style="color:#C0C0C0"> Your Saved Design</b>',
       // card: false,
		 cls: 'launchscreen',
        id: 'data',
       	items:
		[
		
		] },
			{
				text:'<b style="color:#C0C0C0">Designer prints</b>',
				leaf: false,
				  id: 'designer_prints',
				 items: [ 
			        
			] 
				},{
				text:'<b style="color:#C0C0C0">Design Elements</b>',
				leaf: false,
				id: 'design_elements',
				 items: [
			     ]
				},
				{
				text:'<b style="color:#C0C0C0">Embellishment</b>',
				leaf: false,
				
				 items: [
			         {
                        text: '<img style="width:181px;height:181px" data-type="shape" class="draggable" id="26-0.0000" src="resources/images/art/dsm0004_lost_in_paradise_1.jpg" onclick="changeBg(this);" price="0.0000">',		
						
                        leaf: true,
                      
                       
		
				 	}]
				},
				
				
				
			],
			}
		
		
	
		
			
			
    var root = {
        id: 'root',
	
        items: [
            { 
			//xtype:'button',
	text: '<b style="color:#C0C0C0"><img  src="resources/images/product.png"  onload="" />Choose Product </b>',
			//height:200,
			 leaf: false,
			id:'ProdDesign',
			  cls: 'launchscreen',	
			items: [
                   
					
			]
			}
			/* */,
			
		
	
			
               
        ]
    };
 

 // root.items.push(data);
  root.items.push(insert);
   root.items.push(
   {text: '<b  id="save_btn" style="color:#C0C0C0"><img  style="margin-right:5px;margin-left:5px;width:55px;height:50px;background-size:32px;" onLoad="first = 0;save_json();" onClick="first = 0;" style="margin:auto" src="resources/images/save.png"/>Save</b>',
		 
			 leaf: true,
			  cls: 'launchscreen',
			  }
  	
			);
			

//root.items.push(size);
 root.items.push(
   { 
			
			text: '<b style="color:#C0C0C0"><img onLoad="first1 = 0;save_json();" onClick="first1 = 0;" style="margin:auto" src="resources/images/cart.png"/>Checkout</b>',
		 
		 id:'size_node',
			 leaf: false,
			  cls: 'launchscreen',
			  items:[
			  
					
			
			  ]
			
			}
			  );
  

    Ext.define('Kitchensink.store.Demos', {
        alias: 'store.Demos',
        extend: 'Ext.data.TreeStore',
        requires: ['Kitchensink.model.Demo'],
 //autoLoad: true,
 
        config: {
			
			//buffered:true,
			displayField: 'text',
		//autoLoad: true,
		 hideOnMaskTap: true,
	//autoLoad: true,
            model: 'Kitchensink.model.Demo',
            root: root,
            defaultRootProperty: 'items',
		
			
        }
    });
	
})();
