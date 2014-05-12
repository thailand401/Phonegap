Ext.define('Kitchensink.view.phone.Main', {
    extend: 'Ext.Container',
    xtype: 'mainview',

    requires: [
        'Ext.dataview.NestedList',
        'Kitchensink.view.tablet.NavigationBar',
        'Kitchensink.view.tablet.NestedList',
		'Kitchensink.view.Art',
		'Kitchensink.view.Art1',
		'Kitchensink.view.Art2',
		'Kitchensink.view.Art3',
		'Kitchensink.view.Art4',
		'Kitchensink.view.Art5',
		'Kitchensink.view.Art6',
		'Kitchensink.view.Art7',
		'Kitchensink.view.Art8',
		'Kitchensink.view.Art9',
		'Kitchensink.view.Art10',
    ],

    config: {
        fullscreen: true,
		//autoLoad:true,
        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left',
                duration: 100
            }
			
        },
		

			
	


        items: [
		
            {
				
				
				html:'<div class="modalPopLite-mask" style="width: 100%; height: 759px; opacity: 0.6; display: none;" id="modalPopLite-mask1"><div  style="position: fixed;display:block;" id="div_loader"> </div></div><div id="main-design-contain" style="width: 100%;height: 100%; display:inline;"><div style="width: 100%; height: 100%;"><div style="background-color:white" class="design-ctr-canvas" id="image_product_selected"><div id="ImageSelect-1" class="droppable"  style="text-align: center; position: relative; margin-left: auto; margin-right: auto;overflow: hidden;height:100%;"><canvas id="myCanvas-1" style="width: 100% !important; height: 100%;background: #fff; position: absolute;"></canvas><img src=""  id="image_result_canvas_layer_front" style="display: none;" /><img src="" id="image_result_canvas_layer_back" style="display: none;" />    <div style="display: none;"><canvas id="canvas_tmp" style="border: 1px solid rgb(204, 204, 204); display: none;"></canvas></div><canvas id="canvas" style="border: 1px solid rgb(204, 204, 204); display: none;"></canvas><canvas id="canvas_output" style="display: none;" width="1000" height="1000" style="" ></canvas><input id="product_current" type="hidden" name="product_current" value="16" /></div></div></div></div>  <div style="width:100%; text-align:center;"><div id="price_tag">$12.00</div><div id="logo_appp"><img style="width:164px;height:32px;" src = "resources/images/logoPC.png"/></div><input id="input_price" type="hidden" name="price" value="12.00" /></div>        <div  id="img-done-front"></div><div id="img-done-back"></div><div style="display:none"><div style="width:200px; float: none;" id="thicknessSlider" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false">&nbsp;<a id="bb" href="#" class="ui-slider-handle ui-state-default ui-corner-all" style="left: 79.5918%;"></a></div></div></div><img src="resources/images/price_tag.png" style="display:none" onLoad="load_canvas();loadelement();draw_tool();"/>',
				
				
				
                id: 'launchscreen',
                cls : 'card',
				style: 'background-color:white;'
					 
            },
            {
				
                id: 'mainNestedList',
                xtype : 'tabletnestedlist',
                useTitleAsBackText: false,
                docked: 'left',
                width: 210,
				store: 'Demos',
				
		 listeners:{
			  initialize: function(){ 
				
				if(!Ext.getCmp('mainNestedList').isHidden())
				{
					Ext.getCmp('mainNestedList').hide();
				}
			},
            itemtap: function(view, index, item, e){ 
		//	updateApp();
			// document.getElementById('download-name').innerHTML =  'sdasdasdasd';
			//document.getElementById('download-info').innerHTML = 'sdasdad';
		store = this.getStore();
		if(e._record._data.text == '<b style="color:#C0C0C0"><img onLoad="first1 = 0;save_json();" onClick="first1 = 0;" style="margin:auto" src="resources/images/cart.png"/>Checkout</b>')
		{
			
			var sizedata = [];
			var sizetmp = list_size.split('-');
			
			
			var html = 	'<form id="form_size" method="POST" action="">' +
                  '  <div style="max-height:365px;display:none;" id="size-tag">';
				  
				  
				  
			for(var i = 0; i < sizetmp.length; i++)
			{
				html = html + '<div class="size-item-block">' +
   ' <div id="size_' + sizetmp[i].toLowerCase() + '" size="' + sizetmp[i] + '" class="size-item">' + sizetmp[i] + '</div>' +
    '<input id="' + sizetmp[i].toLowerCase() + '" type="text" name="size[' + sizetmp[i] + ']" value="" class="" style="width: 28px; margin-top: 2px;">' +
'  </div>'
				if( i == sizetmp.length - 1)
		{
			html = html + '<div style="clear:both;"></div>' +
'</div>' +
               ' </form>';
			
			sizedata.push(
				
                    {
						
                       text: '<div id="size_' + sizetmp[i].toLowerCase() + '_id" style="text-align:center;" class="size-item1"><b style="color:#C0C0C0;font-size:16px;text-align:center;">' + sizetmp[i] + '</b></div>' + html,

                        leaf: true,
                   
                       
		
				 	}
				);
		}
		else
		{
				sizedata.push(
				
                    {
						
                       text: '<div id="size_' + sizetmp[i].toLowerCase() + '_id" style="text-align:center;" class="size-item1"><b style="color:#C0C0C0;font-size:16px;text-align:center;">' + sizetmp[i] + '</b></div>',

                        leaf: true,
                   
                       
		
				 	}
				);
				
		}
		
			}
			sizedata.push({
						text:'<b style="color:#C0C0C0; text-align:center" >Submit</b>',
						leaf: true,
						});
				store.getById('size_node').removeAll();
store.getById('size_node').appendChild(sizedata);
			
		}
			else if(e._record._data.text == '<b style="color:#C0C0C0"><img  src="resources/images/product.png"  onload="" />Choose Product </b>')
		{
			
			if(designNodecnt == 0)
			{
				//alert(arr.length);
			//if(refreshNodeProd == 0)
			//{
			 var st1 = '<div id="list-products"><div id="list_image">' 
      var st2 = '<div style="display: none;" class="tooltip_description" ><div id="price_value" class="tooltip_price"></div></div></div><div class="clear-both"></div>';
      
      
  //    $j('#list-products').html('<img src="resources/images/loader.gif" class="img_load" />');
      
      
          var st3 = '';
      for(var i = 0; i < arr.length; i++)
      {
		  
		
            //  $j('#list-products').html(str1 + str2);
              st3 =st3 + '<div size=' + arr[i][3] + ' style="width:75px;height:70px;" onClick="loadproduct();" index="' + i +'" class="frontside pslider select_product tooltip_item">' + '<img size=' + arr[i][3] + ' onClick="loadproduct();" style="width:71px;height:66px;" src="' + arr[i][0] + '" ' + 'class="img_load" /></div>';
              
               // $j('#price_value').html(arr[i][2]);
       //   alert(arr[i]);
		  
      }
	  var allproduct = st1 + st3 + st2;
			
			
				designNodecnt = 1;
			
			var nodedesign = [];
			  nodedesign.push(
		
	 {
                        text: '<div style="color:#C0C0C0; width:180px"  onclick="changeCategory(0, this);"><b style="color:#C0C0C0; width:210px" onclick="changeCategory(0, this);" >All</b></div>',
                        leaf: true,
                        //id: 'forms',
                       
		
				 	});
					    nodedesign.push({
                        text: '<div style="color:#C0C0C0; width:180px"  onclick="changeCategory(1, this);"><b style="color:#C0C0C0; width:100%">Men</b></div>',
                        leaf: true,
                        //id: 'forms',
                       
		
				 	});
					    nodedesign.push({
                        text: '<div style="color:#C0C0C0; width:180px"  onclick="changeCategory(2, this);"><b style="color:#C0C0C0; width:200px" onclick="changeCategory(2, this);" >Missy</b></div>',
                        leaf: true,
						//width: '100%'
                       // id: 'forms',
                       
		
				 	});
					    nodedesign.push({
                        text: '<div style="color:#C0C0C0; width:180px"  onclick="changeCategory(3, this);"><b style="color:#C0C0C0; width:100%" onclick="changeCategory(3, this);" >Junior</b></div>',
                        leaf: true,
                        //id: 'forms',
                       
		
				 	});
					   nodedesign.push( {
                        text: '<div style="color:#C0C0C0; width:180px"  onclick="changeCategory(4, this);"><b style="color:#C0C0C0; width:100%" onclick="changeCategory(4, this);" >Plus sizes</b></div>',
                        leaf: true,
                        //id: 'forms',
                       
		
				 	});
					   nodedesign.push( {
                        text: '<div style="color:#C0C0C0; width:180px"  onclick="changeCategory(5, this);"><b style="color:#C0C0C0; width:100%" onclick="changeCategory(5, this);" >Active wear</b></div>',
                        leaf: true,
                        //id: 'forms',
                       
		
				 	});
					  nodedesign.push( {
                        text: allproduct,
                        leaf: true,
                        //id: 'forms',
                       
		
				 	}
					);
					store.getById('ProdDesign').removeAll();
store.getById('ProdDesign').appendChild(nodedesign);
					
			}
			//}
		}
		
			else if(e._record._data.text == '<b style="color:#C0C0C0"> Your Saved Design</b>')
			
				{ 
				
					
			//jQuery('#modalPopLite-mask1').css('display','block');
		// jQuery('#div_loader').css('display','none');
		
		//////////////////////////////////////////////////////
			//alert(page);
				 var data = [];
	
		
	///////////////////////////////////////////////////////////////////
		
		
					if(save == 1)
					{
			
				
				if(page == 1)
				{
					
						//alert('cc');
				
				
					
				 var data = [];
	if(alldata1.length == 0 || alldata1.length == 1)
{
	
	
        data.push({
			
              text: '<b style="color:#C0C0C0">You have not created any content types yet!</b>', //+
			
			 
			
                id: 'none',
                leaf:true,
                    });
		
}
else
{
	
	 page=1;
			data.push({
			text:'<b style="color:#C0C0C0">You have ' + (alldata1.length - 1) + ' design: page ['+ parseInt(page) + '] </b>',
			leaf:true,
			});	
			
for(var i = load_count-1;i <= load_count + 1;i++)
{
	if(i <= alldata1.length - 1)
	{
								var datacontent = alldata1[i].split("@");
			
							
if(datacontent[3]!= undefined)
{
        data.push(
		
		{
                text: '<div style="width:auto;text-align:center;"><b index="'+ i +'"  style="color:#C0C0C0">' + datacontent[0] + '</b>' +
				
				'<div style="background-color:#fff"><img index="'+ i +'"  src="'+ datacontent[3] + '" style="width:89px; height:55px;">' +
				'<img index="'+ i +'" src="'+ datacontent[4] + '" style="width:89px; height:60px;"></div></div>'
				,
               // id: i,
               leaf:true,
			 
                    }
					);
}
	}
   }   
   load_count = load_count + 1;
 
      if(load_count - 1 < alldata1.length - 1 && page*3 < alldata1.length - 1)
	{
   data.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/back.png"/></div>',
			leaf:true,
		
			});	    
	}

	 if(parseInt(page) > 1)
	{
   data.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/front.png"/></div>',
			leaf:true,
			});	    
	}
	page = page + 1;
	
}


store.getById('data').removeAll();
store.getById('data').appendChild(data);

 save = 0;
					}
				
	
				}
				
				}
				
				
				////////////////////////
				
				else if(e._record._data.text == '<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/back.png"/></div>')
				{
					 var data1 = [];					
					 store.getById('data').removeAll();
//store.getById('data').appendChild(data);
//console.log(load_count);
i
					data1.push({
			text:'<b style="color:#C0C0C0">You have ' + (alldata1.length - 1) + ' design: page ['+ parseInt(page) + "] </b>",
			leaf:true,
			});	
for(var i = load_count + 1;i <= load_count + 3;i++)
{
	//console.log(i);
	//console.log(alldata1[i]);
	if(i < alldata1.length - 1)
	{
								var datacontent = alldata1[i].split("@");
			
							
if(datacontent[3]!= undefined)
{
        data1.push(
		
		{
             
                text: '<div style="width:auto;text-align:center;"><b index="'+ i +'"  style="color:#C0C0C0">' + datacontent[0] + '</b>' +
				
				'<div style="background-color:#fff"><img index="'+ i +'"  src="'+ datacontent[3] + '" style="width:89px; height:55px;">' +
				'<img index="'+ i +'" src="'+ datacontent[4] + '" style="width:89px; height:60px;"></div></div>'
				,
               // id: i,
               leaf:true,
			 
                    }
					);
}
	}
   }   
   
  // console.log(load_count);
 //  console.log(alldata1.length);
  // console.log(data1);
   if(load_count - 1 < alldata1.length - 1 && page*3 < alldata1.length - 1)
	{
   data1.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/back.png"/></div>',
			leaf:true,
			});	    
	}
	 if(parseInt(page) > 1)
	{
   data1.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/front.png"/></div>',
			leaf:true,
			});	    
	}
	load_count = load_count + 3;
	page = page + 1;
	store.getById('data').appendChild(data1);
				} 
				//////////////sdsd
				else if(e._record._data.text == '<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/front.png"/></div>')
				{
					//console.log(page);
					page = page - 2;
					load_count = load_count - 6;
					if(load_count < 0)
					{
						load_count = 1;
						//////////////
						var data3 = [];
						 store.getById('data').removeAll();
						// alert('sdada');
					//	var page=(load_count - 1)/ 2;
			data3.push({
			text:'<b style="color:#C0C0C0">You have ' + (alldata1.length - 1) + ' design: page ['+ parseInt(page) + '] </b>',
			leaf:true,
			});	
			
for(var i = load_count-1;i <= load_count + 1;i++)
{
	if(i <= alldata1.length - 1)
	{
								var datacontent = alldata1[i].split("@");
			
							
if(datacontent[3]!= undefined)
{
        data3.push(
		
		{
              
                text: '<div style="width:auto;text-align:center;"><b index="'+ i +'"  style="color:#C0C0C0">' + datacontent[0] + '</b>' +
				
				'<div style="background-color:#fff"><img index="'+ i +'"  src="'+ datacontent[3] + '" style="width:89px; height:55px;">' +
				'<img index="'+ i +'" src="'+ datacontent[4] + '" style="width:89px; height:60px;"></div></div>'
				,
               // id: i,
               leaf:true,
			 
                    }
					);
}
	}
   }   
 
 //    console.log(load_count);
  // console.log(alldata1.length);
      if(load_count - 1 < alldata1.length - 1 && page*3 < alldata1.length - 1)
	{
   data3.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/back.png"/></div>',
			leaf:true,
			});	    
	}
	//console.log(page);
	 if(parseInt(page) > 1)
	{
   data3.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/front.png"/></div>',
			leaf:true,
			});	    
	}
	  load_count = load_count + 1;
	page = page + 1;
	store.getById('data').appendChild(data3);
						/////////////////
					}
					
					else
					{
					 var data2 = [];					
					 store.getById('data').removeAll();
//store.getById('data').appendChild(data);
					//var page=(load_count - 1)/ 2;
					data2.push({
			text:'<b style="color:#C0C0C0">You have ' + (alldata1.length - 1) + ' design: page ['+ parseInt(page) + "] </b>",
			leaf:true,
			});	
			//console.log(load_count);
for(var i = load_count + 1;i <= load_count + 3;i++)
{
//	console.log(i);
	//console.log(alldata1[i]);
	if(i < alldata1.length - 1)
	{
								var datacontent = alldata1[i].split("@");
			
							
if(datacontent[3] != undefined )
{
        data2.push(
		
		{
               
                text: '<div style="width:auto;text-align:center;"><b index="'+ i +'"  style="color:#C0C0C0">' + datacontent[0] + '</b>' +
				
				'<div style="background-color:#fff"><img index="'+ i +'"  src="'+ datacontent[3] + '" style="width:89px; height:55px;">' +
				'<img index="'+ i +'" src="'+ datacontent[4] + '" style="width:89px; height:60px;"></div></div>'
				,
               // id: i,
               leaf:true,
			 
                    }
					);
}
	}
   }   
  
  // console.log(load_count);
 //  console.log(alldata1.length);
  // console.log(data1);
     if(load_count - 1 < alldata1.length - 1 && page*3 < alldata1.length - 1)
	{
   data2.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/back.png"/></div>',
			leaf:true,
			});	    
	}
	 if(parseInt(page) > 1)
	{
   data2.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/front.png"/></div>',
			leaf:true,
			});	    
	}
	 load_count = load_count + 3;
	page = page + 1;
	//console.log(data1);
	store.getById('data').appendChild(data2);
					}
				} 
				
				////////////////////////////////////
				
				
			else if(e._record.parentNode.data.text == '<b style="color:#C0C0C0"><img onLoad="first1 = 0;save_json();" onClick="first1 = 0;" style="margin:auto" src="resources/images/cart.png"/>Checkout</b>')
			{
				if(e._record._data.text != '<b style="color:#C0C0C0; text-align:center" >Submit</b>')
				{
				if(item == 0)
				{
					
				  var someForm = Ext.Viewport.down('Art1');
				  setActive('size_s');
				 setActive1('size_s_id');
				}
				 if(item == 1)
				{
						
					  var someForm = Ext.Viewport.down('Art2');
					  setActive('size_m');
					   setActive1('size_m_id');
				}
				 if(item == 2)
				{
						
					  var someForm = Ext.Viewport.down('Art3');
					  setActive('size_l');
					   setActive1('size_l_id');
				}
				 if(item == 3)
				{
					  var someForm = Ext.Viewport.down('Art4');
					  setActive('size_xl');
					   setActive1('size_xl_id');
				}
				 if(item == 4)
				{
					  var someForm = Ext.Viewport.down('Art5');
					  setActive('size_1x');
					   setActive1('size_1x_id');
				}
				 if(item == 5)
				{
					  var someForm = Ext.Viewport.down('Art6');
					  setActive('size_2x');
					   setActive1('size_2x_id');
				}
				 if(item == 6)
				{
					  var someForm = Ext.Viewport.down('Art7');
					  setActive('size_3x');
					   setActive1('size_3x_id');
				}
				//if(item == 7)
				//{
					 // var someForm = Ext.Viewport.down('Art10');
					//  setActive('size_3x');
					  // setActive1('size_3x_id');
				//}
// console.log(someForm);
  if(!someForm){
	  			if(item == 0)
				{
					//console.log(item);
				someForm = Ext.widget('Art1');
				}
				 if(item == 1)
				{
						//console.log(item);
					someForm = Ext.widget('Art2');
				}
				 if(item == 2)
				{
						//console.log(item);
					someForm = Ext.widget('Art3');
				}
				 if(item == 3)
				{
					 someForm = Ext.widget('Art4');
				}
				 if(item == 4)
				{
					 someForm = Ext.widget('Art5');
				}
				 if(item == 5)
				{
					  someForm = Ext.widget('Art6');
				}
				 if(item == 6)
				{
					  someForm = Ext.widget('Art7');
					  
				}
				// if(item == 7)
				//{
					//  someForm = Ext.widget('Art10');
					  
				//}
 someForm1 = someForm;
   someForm.showBy(e);
  }
  else{
  someForm.destroy();
  }
  
  
				}
				else
				{
					var someForm = Ext.Viewport.down('Art10');
					 if(!someForm){
						 someForm = Ext.widget('Art10');
						 
					 someForm1 = someForm;
   someForm.showBy(e);
  }
  else{
  someForm.destroy();
  }
				}
			}
			
			
				else if(e._record.parentNode.data.text == '<b style="color:#C0C0C0"> Your Saved Design</b>')
				{
					if(item > 0)
					{
						items = item;
						if(!someForm){
					  someForm = Ext.widget('Art8');
				someForm1 = someForm; 

   someForm.showBy(e);
  }
  else{
  someForm.destroy();
  }
					}
				}
			
			//console.log(e);
		else if(e._record._data.text == '<b  id="save_btn" style="color:#C0C0C0"><img  style="margin-right:5px;margin-left:5px;width:55px;height:50px;background-size:32px;" onLoad="first = 0;save_json();" onClick="first = 0;" style="margin:auto" src="resources/images/save.png"/>Save</b>')
				{
					if(item > 0)
					{
						//items = item;
						if(!someForm){
					  someForm = Ext.widget('Art9');
				 someForm1 = someForm;

   someForm.showBy(e);
  }
  else{
  someForm.destroy();
  }
					}
				}
				else if(e._record._data.text == '<b style="color:#C0C0C0"> <img style="margin:auto;background-size:32px;" src="resources/images/art.png"/>  Create Design</b>')
		 {
			 if(listArtCnt == 0)
		{
			
			setList(); 
			listArtCnt = 1;
		}
			
			
		 }
		else if(e._record._data.text == '<b style="color:#C0C0C0">Designer prints</b>' && save1 == 1)
		{
			save1 = 0;
			var pagecnt = load_count1/5 + 1;
			var data = [];
			data.push({
			text:'<b style="color:#C0C0C0">You have ' + listBackground.length + ' design: page ['+ parseInt(pagecnt) + '] </b>',
			leaf:true,
			});	
				
					load_count1 = load_count1 + 4;
				
			
			for(var i = load_count1 - 4;i <= load_count1;i++)
			{
				if(i < listBackground.length)
	{
				data.push({
                        text: '<div style="width:181px;height:181px" align="center"  class="frontside bsel tooltip_item art_background"><img style="width:181px;height:181px"  src="' + filepath + '/' + listBackground[i] +'" onclick="changeBg(this);" price="0.0000"><div class="tooltip_description">yaoming</div></div>',		
					  //text:listBackground[i],
						
                        leaf: true,
                       
                       
		
				 	});
	}
			}
			load_count1 = load_count1 + 1;
			
			
			  if(load_count1 < listBackground.length )// && page*5 < listBackground.length - 1)
	{
   data.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/back1.png"/></div>',
			leaf:true,
			});	    
	}
	 if(parseInt(pagecnt) > 1)
	{
   data.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/front1.png"/></div>',
			leaf:true,
			});	    
	}
			store.getById('designer_prints').removeAll();
store.getById('designer_prints').appendChild(data);






		}
		else if(e._record._data.text == '<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/back1.png"/></div>')
		{
				var pagecnt = load_count1/5 + 1;
			var data = [];
			data.push({
			text:'<b style="color:#C0C0C0">You have ' + listBackground.length + ' design: page ['+ parseInt(pagecnt) + '] </b>',
			leaf:true,
			});	
				
					load_count1 = load_count1 + 4;
				
			
			for(var i = load_count1 - 4;i <= load_count1;i++)
			{
				if(i < listBackground.length)
	{
				data.push({
                        text: '<div style="width:181px;height:181px" align="center"  class="frontside bsel tooltip_item art_background"><img style="width:181px;height:181px"  src="' + filepath + '/' + listBackground[i] +'" onclick="changeBg(this);" price="0.0000"><div class="tooltip_description">yaoming</div></div>',		
						 // text:listBackground[i],
                        leaf: true,
                       
                       
		
				 	});
	}
			}
			load_count1 = load_count1 + 1;
			
			
			  if(load_count1 < listBackground.length )// && page*5 < listBackground.length - 1)
	{
   data.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/back1.png"/></div>',
			leaf:true,
			});	    
	}
	 if(parseInt(pagecnt) > 1)
	{
   data.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/front1.png"/></div>',
			leaf:true,
			});	    
	}
			store.getById('designer_prints').removeAll();
store.getById('designer_prints').appendChild(data);
//console.log(load_count1);

			
		}
		else if(e._record._data.text == '<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/front1.png"/></div>')
		{
			load_count1 = load_count1 - 10;
			if(load_count1 < 0)
			{
				load_count1 = 0;
			}
			
				var pagecnt = load_count1/5 + 1;
			var data = [];
			data.push({
			text:'<b style="color:#C0C0C0">You have ' + listBackground.length + ' design: page ['+ parseInt(pagecnt) + '] </b>',
			leaf:true,
			});	
				//
					
				
			
			for(var i = load_count1;i <= load_count1 + 4;i++)
			{
				if(i < listBackground.length)
	{
				data.push({
                        text: '<div style="width:181px;height:181px" align="center"  class="frontside bsel tooltip_item art_background"><img style="width:181px;height:181px"  src="' + filepath + '/' + listBackground[i] +'" onclick="changeBg(this);" price="0.0000"><div class="tooltip_description">yaoming</div></div>',		
						 // text:listBackground[i],
                        leaf: true,
                       
                       
		
				 	});
	}
			}
			//load_count1 = load_count1 + 5;
			
			
			  if(load_count1 < listBackground.length )// && page*5 < listBackground.length - 1)
	{
   data.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/back1.png"/></div>',
			leaf:true,
			});	    
	}
	 if(parseInt(pagecnt) > 1)
	{
   data.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/front1.png"/></div>',
			leaf:true,
			});	    
	}
			store.getById('designer_prints').removeAll();
store.getById('designer_prints').appendChild(data);

			
		}
		///////////////////////////////////////////
		else if(e._record._data.text == '<b style="color:#C0C0C0">Design Elements</b>' && save2 == 1)
		{
			save2 = 0;
			var pagecnt = load_count2/5 + 1;
			var data = [];
			data.push({
			text:'<b style="color:#C0C0C0">You have ' + listVector.length + ' design: page ['+ parseInt(pagecnt) + '] </b>',
			leaf:true,
			});	
				
					load_count2 = load_count2 + 4;
				
			
			for(var i = load_count2 - 4;i <= load_count2;i++)
			{
				if(i < listVector.length)
	{
				data.push({
                        text: '<div style="width:181px;height:181px" align="center" alt="GoMedia Night Lights - Green" class="frontside bsel tooltip_item"><img style="width:181px;height:181px" id="1142-0.0000" class="draggable" src="' + filepath + '/' + listVector[i] +'" data-type="shape" price="0.0000" onclick="calldbclick(this);"></div>',	
					 // text:listVector[i],
						
                        leaf: true,
                       
                       
		
				 	});
	}
			}
			load_count2 = load_count2 + 1;
			
			
			  if(load_count2 < listVector.length )// && page*5 < listBackground.length - 1)
	{
   data.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/back2.png"/></div>',
			leaf:true,
			});	    
	}
	 if(parseInt(pagecnt) > 1)
	{
   data.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/front2.png"/></div>',
			leaf:true,
			});	    
	}
			store.getById('design_elements').removeAll();
store.getById('design_elements').appendChild(data);

			//////////////////////
		/*	var data = [];
			
				for(var i = 0; i < listVector.length;i++)
			{
				data.push({
                        text: '<div style="width:181px;height:181px" align="center" alt="GoMedia Night Lights - Green" class="frontside bsel tooltip_item"><img style="width:181px;height:181px" id="1142-0.0000" class="draggable" src="' + filepath + listVector[i] +'" data-type="shape" price="0.0000" onclick="calldbclick(this);"></div>',		
						
                        leaf: true,
                      
		
				 	});
			}
			
			store.getById('design_elements').removeAll();
store.getById('design_elements').appendChild(data); */
///////////////////////////////
		}
		//////$$$$$$$$$$$$$$
			else if(e._record._data.text == '<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/back2.png"/></div>')
		{
				var pagecnt = load_count2/5 + 1;
			var data = [];
			data.push({
			text:'<b style="color:#C0C0C0">You have ' + listVector.length + ' design: page ['+ parseInt(pagecnt) + '] </b>',
			leaf:true,
			});	
				
					load_count2 = load_count2 + 4;
				
			
			for(var i = load_count2 - 4;i <= load_count2;i++)
			{
				if(i < listVector.length)
	{
				data.push({
                       text: '<div style="width:181px;height:181px" align="center" alt="GoMedia Night Lights - Green" class="frontside bsel tooltip_item"><img style="width:181px;height:181px" id="1142-0.0000" class="draggable" src="' + filepath + '/' + listVector[i] +'" data-type="shape" price="0.0000" onclick="calldbclick(this);"></div>',	
						//  text:listVector[i],
                        leaf: true,
                       
                       
		
				 	});
	}
			}
			load_count2 = load_count2 + 1;
			
			
			  if(load_count2 < listVector.length )// && page*5 < listBackground.length - 1)
	{
   data.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/back2.png"/></div>',
			leaf:true,
			});	    
	}
	 if(parseInt(pagecnt) > 1)
	{
   data.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/front2.png"/></div>',
			leaf:true,
			});	    
	}
			store.getById('design_elements').removeAll();
store.getById('design_elements').appendChild(data);
console.log(load_count1);

			
		}
		else if(e._record._data.text == '<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/front2.png"/></div>')
		{
			load_count2 = load_count2 - 10;
			if(load_count2 < 0)
			{
				load_count2 = 0;
			}
			
				var pagecnt = load_count2/5 + 1;
			var data = [];
			data.push({
			text:'<b style="color:#C0C0C0">You have ' + listVector.length + ' design: page ['+ parseInt(pagecnt) + '] </b>',
			leaf:true,
			});	
				//
					
				
			
			for(var i = load_count2;i <= load_count2 + 4;i++)
			{
				if(i < listVector.length)
	{
				data.push({
                        text: '<div style="width:181px;height:181px" align="center" alt="GoMedia Night Lights - Green" class="frontside bsel tooltip_item"><img style="width:181px;height:181px" id="1142-0.0000" class="draggable" src="' + filepath + '/' + listVector[i] +'" data-type="shape" price="0.0000" onclick="calldbclick(this);"></div>',	
						 // text:listVector[i],
                        leaf: true,
                       
                       
		
				 	});
	}
			}
			//load_count1 = load_count1 + 5;
			
			
			  if(load_count2 < listVector.length )// && page*5 < listBackground.length - 1)
	{
   data.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/back2.png"/></div>',
			leaf:true,
			});	    
	}
	 if(parseInt(pagecnt) > 1)
	{
   data.push({
			text:'<div style="width:auto;text-align:center;"><img style="margin:3px; width:40px;height:40px;text-align:center;" src="resources/images/front2.png"/></div>',
			leaf:true,
			});	    
	}
			store.getById('design_elements').removeAll();
store.getById('design_elements').appendChild(data);

			
		}
		//////////$$$$$$$$$$$$$$
          
            }
        },
				  autoDestroy: false,
               // store: 'Demos',
				
				
            },
			 {
				id:'topToolbar',
                xtype: 'toolbar',
				//cls: 'toolbar-bottom',
                docked: 'top',
			//	height:30,
				minHeight:35,
				//cls: 'bottom-toolbar',
					 layout: {
        type: 'box',
        align: 'center',
        pack: 'center'
    },
				
              
                scrollable: {
                    direction: 'horizontal',
                    indicators: false
                },

               
                ui: 'dark',

               items: [
			      { 
				xtype: 'button',
				
				 html: '<img style="width:30px;height:30px;padding:0px;margin:0px;" src="resources/images/list-2.png">',
				// iconCls:'arrow_right',
				height: 30, 
			  cls: 'x-button-top',
				width: 30,
				padding:0,
				margin:3,
				
				//right:'20%',
				
				   listeners: {
												   
														   
        'tap' : function (button) {
			if(!Ext.getCmp('mainNestedList').isHidden())
			{
				 Ext.getCmp('mainNestedList').hide('fadeIn');
				 paintAppGlobal.canvas.calcOffset();
			}
			else
			{
				 Ext.getCmp('mainNestedList').show('fadeIn');
				 paintAppGlobal.canvas.calcOffset();
			}
		}
				   }
				 }
				 
				 ,
			    { 
				xtype: 'button',
				//height: 40, 
				 html: '<img style="width:30px;height:30px;padding:0px;margin:0px;" src="resources/images/compose-4.png">',
					height: 30, 
			  cls: 'x-button-top',
				width: 30,
				padding:0,
				margin:3,
				
				   listeners: {
												   
														   
        'tap' : function (button) {
			if(!Ext.getCmp('bottomToolbar').isHidden())
			{
				 Ext.getCmp('bottomToolbar').hide('fadeIn');
				  paintAppGlobal.canvas.calcOffset();
			}
			else
			{
				 Ext.getCmp('bottomToolbar').show('fadeIn');
				  paintAppGlobal.canvas.calcOffset();
			}
		}
				   }
				 },
				  { 
				xtype: 'button',
			//	height: 40, 
				
				  html: '<img style="width:30px;height:30px;padding:0px;margin:0px;" src="resources/images/clipboard-2.png">',
			     	height: 30, 
			  cls: 'x-button-top',
				width: 30,
				padding:0,
				margin:3,
				   listeners: {
												   
														   
        'tap' : function (button) {
			if(!Ext.getCmp('rightToolbar').isHidden())
			{
				 Ext.getCmp('rightToolbar').hide('fadeIn');
				  paintAppGlobal.canvas.calcOffset();
			}
			else
			{
				 Ext.getCmp('rightToolbar').show('fadeIn');
				  paintAppGlobal.canvas.calcOffset();
			}
		}
				   }
				
				 } 
			   ]
		},
            {
				
                id: 'rightToolbar',
                xtype : 'toolbar',
				
                useTitleAsBackText: true,
                docked: 'right',
				
					 layout: {
        type: 'box',
        align: 'center',
        pack: 'center'
    },
				
              
                scrollable: {
                    direction: 'vertical',
                    indicators: false
                },
				//direction: 'vertical',
                width: 240,
				
				
				  autoDestroy: false,
				  listeners:{
			
                initialize: function(){ 
				
				if(!Ext.getCmp('rightToolbar').isHidden())
				{
					Ext.getCmp('rightToolbar').hide();
				}
			}
				   },
				  items:
				  [
				  
				 
				  {
					  xtype:'panel',
					   
					 // height: '100%',
       // layout: 'fit',
					  //fullscreen:true,
					// autoScroll: false,
      	      items:
					  [
					  
					  //////////////////////////////////////////////////////
					  {
						  xtype:'fieldset',
						  width:230,
						  flex:1,
						   layout: 'fit',
						//scrollable: 'vertical',
				
              
             //   scrollable: 'vertical',
						  // instructions: 'Please select a product',
						   items:
						   [
						   
							  
					  {
						  text:'<div class="download download-active"><span class="icon-psd-40 download-icon"></span><h4 class="download-name">Home-Comp.psd</h4><p class="download-info">4.8 of 15MB - 162KB/sec - 1 min</p><div class="download-progress"><div style="width: 32%" class="download-progress-bar"></div></div></div>	',
						  },
							   
						   {  xtype: 'selectfield',
						  margin:'10 5 10 5',
						 value: 'Eraser Regular',
						  autoSelect: false,
						//  height:50,
						// autoSelect: true,
						  // id:'fontSelector',
                   // label: 'Font',
                  //  usePicker: 'auto',
					
                    options: [
				{text: 'Select Font...', value: 'College Bold'},
                                        {text: 'College Bold', value: 'College Bold'},
                                        {text: 'Droid Sans Mono', value: 'Droid Sans Mono'},
                                        {text: 'Eraser Regular', value: 'Eraser Regular', selected: true},
                                        {text: 'Gaussian Blur', value: 'Gaussian Blur'},
										  {text: 'OnomatoShark!', value: 'OnomatoShark!'},
										  {text: 'Vanilla', value: 'Vanilla'},
										  {text: 'Western Normal', value: 'Western Normal'},
                                    		],
											
											 listeners: {
												
											
											 
        change: function (field, value) {
//console.log(this.getValueField(3));
           jQuery('#fontSelector').attr('value', value);
		  // console.log(this.value);
		    var n=paintAppGlobal.canvas.getActiveObject();
  if(n) n.set("fontFamily",jQuery("#fontSelector").val());
  paintAppGlobal.canvas.renderAll();
        }
		
		
    }
											
											},   {  xtype: 'selectfield',
                   // label: 'Font size',
					//id:'fontSize',
					//height:100,
					//width:60,
					//padding:10,
					margin:'20 5 20 5',
					value: '64',
					 autoSelect: false,
				//	autoSelect: true,
					//style:'',
                   // usePicker: 'auto',
                    options: [
											{text: 'Select Fonr Size...', value: '6'},
                                          {text: '6', value: '6'},
                                          {text: '8', value: '8'},
                                       
                                          {text: '10', value: '10', selected: true},
                                          {text: '11', value: '11'},
										  {text: '12', value: '12'},
										  {text: '14', value: '14'},
										  {text: '16', value: '16'},
										  {text: '18', value: '18'},
										  {text: '20', value: '20'},
										  {text: '24', value: '24'},
										  {text: '28', value: '28'},
										  {text: '32', value: '32'},
										  {text: '36', value: '36'},
										  {text: '40', value: '40'},
										  {text: '48', value: '48'},
										  {text: '56', value: '56'},
										  {text: '64', value: '64'},
										   {text: '72', value: '72'},
										  {text: '88', value: '88'},
										  {text: '104', value: '104'},
                                    		],
											 listeners: {
												
        change: function (field, value) {
           jQuery('#fontSize').attr('value', value);
		  // console.log(value);
		    var e=paintAppGlobal.getCanvas().getActiveObject();
  e&&(e.setFontsize( jQuery('#fontSize').val()),
  
  paintAppGlobal.canvas.renderAll())
        }
    }
											
											},
											{
												xtype:'textfield',
												margin:'20 5 10 5',
												// label: 'Text',
												 //id:'fabricTextEditor_new',
												 placeHolder: 'Enter text to here',
												  listeners: {
                        keyup: function (txt, evt) {
                            jQuery('#fabricTextEditor_new').attr('value', txt.getValue());
							  var e=paintAppGlobal.getCanvas(),t=e.getActiveObject();
    if(t&&t.type=="text"){
      var n=jQuery("#fabricTextEditor_new");
      t.setText(n.val()),e.renderAll()
    }
							
                        } 
                    } 
												},
												{
													xtype:'panel',
													//style:'display:inline-block !important;',
													layout:'hbox',
													pack:'center',
													margin: '5 0 5 57',
													style:'center',
													//height:60,
													items:[
													{
													xtype:'button',
													//id: 'fontStyleBold',
													html:'<img style="width:15px;height:22px;" src="resources/images/bold.png"/>',
														check:0,
													
													cls:'x-button-font',
														width:30,
													height:30,
													//style:'display:inline;',
													 align: 'center',
													 	   listeners: {
															    initialize: function(){
															   this.check = 0;
														   }
														   ,
														   
        'tap' : function (button) {
     
  	if(this.check == 0)
		{
     toolbar.changeProperty("fontWeight",true?"bold":"100"); 
this.check = 1;
		}
		else
		{
		 toolbar.changeProperty("fontWeight",false?"bold":"100"); 
			this.check =0;
			}
  
   
        }, 
    }
													//style:'text-align:center',
													},
													{
													xtype:'button',
													//id: 'fontStyleBold',
													html:'<img style="width:15px;height:22px;" src="resources/images/italic.png"/>',
													width:30,
													height:30,
													check:0,
													cls:'x-button-font',
													//style:'background-color:#202020 !important;',
													 align: 'center',
													   listeners: {
														   initialize: function(){
															   this.check = 0;
														   }
														   ,
														   
														   
														   
        'tap' : function (button) {
     //     toolbar.changeProperty("fontStyle",true?"italic":"normal")
//this.check =1;\
//console.log(check);

  	if(this.check == 0)
		{
  toolbar.changeProperty("fontStyle",true?"italic":"normal")
this.check = 1;
		}
		else
		{
		  toolbar.changeProperty("fontStyle",false?"italic":"normal")
			this.check =  0;
			}
  
   
        }, 
    }
													//style:'text-align:center',
													},
													{
													xtype:'button',
													cls:'x-button-font',
													//id: 'fontStyleBold',
												//	style:'	display:inline;',
													html:'  <input id="fontStyleUnderline" type="checkbox" /><img style="width:15px;height:22px;" src="resources/images/underline.png"/>',
													check:0,
														width:30,
													height:30,
													 align: 'center',
													   listeners: {
														    initialize: function(){
															   this.check = 0;
														   }
														   ,
														   
        'tap' : function (button) {
        
		
		if(this.check == 0)
		{
 toolbar.changeProperty("textDecoration",true?"underline":"");
this.check =1;
		}
		else
		{
			toolbar.changeProperty("textDecoration",false?"underline":"");
			this.check =0;
			}
  
        }, 
    }
													//style:'text-align:center',
													}
													]
													},
												{
													// scrollable: true,
													html: ' <div style="display:none" > '+
													'<input type="hidden" id="fontSize"  style="width: 100%;"  />'+
													'<input type="hidden" id="fontSelector"  style="width: 0%;" />'+
     												' <input type="hidden" id="fabricTextEditor_new"  style="width: 0%;"  />'+
   ' </div>',
  
						
													},
													{
															xtype:'button',
													cls:'x-button-font',
													id:"btnAddText",
                  html:' <div style="text-align:center;" >Add Text    </div>',
 
														}
														,
														{
															id:'block-layer-item',
															html:'<div style="margin: 1% 0 4%;" id="layer-tool">'+
  '<div style="height: 50px;margin: 0 auto;text-align: center;  background-color: #202020 !important;'+
 
 ' background-color: -moz-linear-gradient(top, #202020 0%, #2c2c2c, #202020 80% ) !important;'+
'	background-color: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #202020 0%, #2c2c2c, #202020 80%);,#202020 0%, #2c2c2c, #202020 80%) !important;'+
	'background-color: -webkit-linear-gradient(top, #202020 0%, #2c2c2c, #202020 80%) !important;'+
	'background-color: -o-linear-gradient(top, #202020 0%, #2c2c2c, #202020 80%) !important;'+
	'background-color: -ms-linear-gradient(top, #202020 0%, #2c2c2c, #202020 80%) !important;'+
	'background-color: linear-gradient(to bottom, #202020 0%, #2c2c2c, #202020 80%) !important;'+
	
	'-webkit-box-shadow: 0px 1px 3px 0px #202020;'+
	'box-shadow: 0px 1px 3px 0px #202020;'+
	'text-shadow: 1px 1px 1px #202020;'+
	'border: solid 1px #000;;padding: 2%;border: solid 1px #171717;box-shadow: 1px 1px #131313;">'+
   ' <span><a class="layer-tool-fix-safari"></a></span>'+
	'<span><a onclick="" href="javascript:void(0);" title="Add New Layer" id="layer-add"></a></span>'+
   '<span><a onclick="" href="javascript:void(0);" title="Move Down Layer" id="layer-down"></a></span>'+
   '<span><a onclick="" href="javascript:void(0);" title="Move Up Layer" id="layer-up"></a></span>'+
   '<span><a onclick="" href="javascript:void(0);" title="Clock Layer" class="layer-unclock" id="layer-clock"></a></span>'+
   '<span><a onclick="" href="javascript:void(0);" title="Delete Layer" id="layer-trash" style="display: none;"></a></span>  '+
   '<div class="clear-both"></div>'+
 '</div>'+
'</div>'+
'<div id="block-layer"><div class="layer-block-item">  <div class="even layer-item selected layer_left" id="layer-0" onclick="selectLayer(0);" ondblclick="changeLayerName(this);"><a href="javascript:void(0);">Layer 1</a></div>   <div class="layer_eye"><a class="eye eye-on" href="javascript:void(0);"><img style="width:33px; height:22px;" src="resources/images/edit_black.png" onclick="changeNameLayer(this, 0);"></a></div><div class="layer_eye"><a class="eye eye-on" href="javascript:void(0);"><img height="" src="resources/images/eye-on.png" onclick="changeVisible(this, 0);"></a></div>     <div style="clear: both;"></div>  </div></div>'
    
															},
															{
																  xtype: 'sliderfield',
																  //  renderTo: 'custom-tip-slider',
																	//label:'<img height="" src="resources/images/opacity1.png" onclick="changeVisible(this, 0);">',
																	//labelAlign:'right',
																 labelWrap : true,
																	/*html:'<input class="ui-slider-handle ui-state-default ui-corner-all ui-state-active" type="hidden" style="left: 50%;" id="opacitySlider" />', */
																	html:' <img style="width:39px; height:20px;right:-161px;top:-25px;" src="resources/images/opacity1.png" >',
																	
		 
																//	labelWrap : true,
       // hideLabel: false,
        width: 167,
        increment: 2,
		margin:'20 20 20 0',
        minValue: 0,
        maxValue: 100,
		value: 10,
        tipText: function(thumb){
           return  Ext.String.format('<b>{0}% complete</b>', thumb.value);
        },
		listeners :{
		 change: function( me, Slider, thumb, newValue, oldValue, eOpts) {
			 //console.log(newValue);
                                jQuery('#aaa').css('left', newValue  + '%');
								 jQuery('#aaa').addClass('ui-slider-handle ui-state-default ui-corner-all ui-state-active ui-state-focus  ui-state-hover');
								 jQuery("#opacitySlider").slider({
      value: newValue
    });
	
	 toolbar.onOpacityChanged()
	
								 // toolbar.onOpacityChanged()
                                }
								 }
					
																},
																{
																	/*html:'<input class="ui-slider-handle ui-state-default ui-corner-all ui-state-active" type="hidden" style="left: 50%;" id="opacitySlider" />', */
																	html:'  <div id="name_bar" style="display:none"><h4 id="download-name" class="download-name"></h4><p id="download-info" class="download-info"></p> </div><div id="progress_bar_ctn" class="download-progress" style=" padding-bottom:12px;display:none;"><div class="download-progress-bar" id="progress_bar" style="width: 80%; padding-bottom:8px;"></div></div>	<div style="display:none;width:200px; float: right; margin-top: 5px;" id="opacitySlider" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all ui-state-active" aria-disabled="false"><a id="aaa" href="#" class="ui-slider-handle ui-state-default ui-corner-all ui-state-active ui-state-focus ui-state-hover" style="left: 52%;"></a></div>',
																	},
																	
											
						   ]
						  },
						  
						  
					  ]
					  
					  }
					  
					  
					  
				  ]
				  
			
            },
        
			{
				id:'bottomToolbar',
                xtype: 'toolbar',
				//cls: 'toolbar-bottom',
                docked: 'bottom',
				height:70,
				//cls: 'bottom-toolbar',
				 layout: {
        type: 'box',
        align: 'center',
        pack: 'center'
    },
				
              
                scrollable: {
                    direction: 'horizontal',
                    indicators: false
                },

               
                ui: 'light',
		listeners:{
			
                initialize: function(){ 
				
				if(!Ext.getCmp('bottomToolbar').isHidden())
				{
					Ext.getCmp('bottomToolbar').hide();
				}
			}
				   },
               items: [
			  
                { 
				xtype: 'button',
				 cls: 'x-button-bottom',
				
				height: 70,              
				width: 85,
				padding: 10,    
				margin: 0,
				
				 html: '<span class="tooltip_item"><a class="" onclick="" href="javascript:void(0);" id="dropper"><img id="dropper_red" src="resources/images/new/dropper.png"></a><input type="hidden" id="pen_dropper" value="select"><div style="display:none" title="Free Drawing" class="tooltip_description"></div></span>',
				   listeners: {
        'tap' : function (button) {
             var someForm = Ext.Viewport.down('Art');
 //console.log(someForm);
  if(!someForm){
   someForm = Ext.widget('Art');
   someForm.showBy(button);
  }
  else{
  someForm.destroy();
  }
  
        }, 
    }
				 }
               ,
                { 
				xtype: 'button',
				height: 70, 
				 cls: 'x-button-bottom',
				padding: 10,             
				width: 85,
				margin: 0,
				
				 html: '<div class="tooltip_item"><span><a id="bucket" class="" onclick="" href="javascript:void(0);"><img id="bucket_red" style="width:67px;height:59px;" src="resources/images/new/bucket.png"></a></span><div class="tooltip_description" style="display:none" title="Color Fill"></div></div>',
				
				 },
				  {
					 xtype: 'button',
				 cls: 'x-button-bottom',
				
				height: 70,              
				width: 85,
					padding: 10,  
					//pack:'center',  
				margin: 0,
				html:' <div id="block-color-picker" class="tooltip_item" style="text-align:center"><input id="primaryColorSelector" type="color" /><div class="tooltip_description" title="Select Color" style="display:none"></div></div>',
					// html:'<div id="block-color-picker" class="tooltip_item"><input id="primaryColorSelector" type="color" /><div class="tooltip_description" title="Select Color" style="display:none"></div></div>',
					 },
				
				 { 
				xtype: 'button',
				 cls: 'x-button-bottom',
				
				height: 70,              
				width: 85,
					padding: 10,    
				margin: 0,
				
				 html: '<img id="zoom_in" style="margin: auto" src="resources/images/new/zoom.png"/>',
				 },
				 { 
				xtype: 'button',
				 cls: 'x-button-bottom',
				
				height: 70,              
				width: 85,
					padding: 10,    
				margin: 0,
				
				 html: '<img id="zoom_out" style="margin: auto" src="resources/images/new/zoom-.png"/>',
				 },
				   { 
				xtype: 'button',
				 cls: 'x-button-bottom',
				
				height: 70,              
				width: 85,
					padding: 10,    
				margin: 0,
				
				 html: '<a id="rotato-right" href="javascript:void(0);"><img  style="margin: auto" src="resources/images/new/rotatoright.png"/></a>',
				 },
				   { 
				xtype: 'button',
				 cls: 'x-button-bottom',
				
				height: 70,              
				width: 85,
					padding: 10,    
				margin: 0,
				
				 html: '<a id="rotato-left" href="javascript:void(0);"><img  style="margin: auto" src="resources/images/new/rotatoleft.png"/></a>',
				 }
				 ,
				 { 
				xtype: 'button',
				 cls: 'x-button-bottom',
				
				height: 70,              
				width: 85,
					padding: 10,    
				margin: 0,
				
				 html: '<a id="hoz" onclick="fliphoz();"  href="javascript:void(0);"><img style="margin:auto" src="resources/images/new/icon-hoz.png"/></a>',
				 }
				 ,
				 { 
				xtype: 'button',
				 cls: 'x-button-bottom',
				
				height: 70,              
				width: 85,
					padding: 10,    
				margin: 0,
				
				 html: '<a id="ver" onclick="flipver();"  href="javascript:void(0);"><img style="margin:auto" src="resources/images/new/icon-ver.png"/></a>',
				 },
				 { 
				xtype: 'button',
				 cls: 'x-button-bottom',
				
				height: 70,              
				width: 85,
					padding: 10,    
				margin: 0,
				
				 html: '<a id="undo"  href="javascript:void(0);"><img style="margin:auto" src="resources/images/new/undo.png"/></a>',
				 },
				  { 
				xtype: 'button',
				 cls: 'x-button-bottom',
				
				height: 70,              
				width: 85,
					padding: 10,    
				margin: 0,
				
				 html: '<a id="redo"  href="javascript:void(0);"><img style="margin:auto" src="resources/images/new/redo.png"/></a>',
				 },
				  { 
				xtype: 'button',
			
				height: 70, 
				 cls: 'x-button-bottom',
				padding: 10,             
				width: 85,
				margin: 0,
				
				 html: '<a id="xcopy"  href="javascript:void(0);"><img style="margin:auto" src="resources/images/new/xcopy.png"/></a>',
				
				 },
               
            ]
            }
        ]
    }
});
