/* 
	This file is used for initialize the GUI of application
*/
var GroupLayer = function(status, index){
  this.enable = status;
  this.index = index;
  this.lock = false;
};



GroupLayer.prototype.moveToIndex=function(new_index){
  var objects = paintAppGlobal.canvas.getObjects();
  for(var x = 0; x < objects.length; x++){    
    if(objects[x].groupLayer == this.index){
      console.log(new_index);      
      paintApp.canvas.moveTo(objects[x], new_index);     
      new_index++;
    }
  }
 // setDone();
}

GroupLayer.prototype.getIndexMoveUpDownObject=function(){  
  var objects = paintAppGlobal.canvas.getObjects();
  for(var x in objects){
    if(objects[x].groupLayer == this.index){
      return x;
    }
  }
  return 0;
}

GroupLayer.prototype.getIndexAddObject=function(pre_group_index){
  //console.log(pre_group_index);
  var result = 0;
  var objects = paintAppGlobal.canvas.getObjects();
  if(objects.length  == 0)
    return result;  
  for(var x in objects){
    if(objects[x].groupLayer == pre_group_index){
      result = x*1 + 1;
    }
    if(objects[x].groupLayer == this.index){
      result = x*1 + 1;
    }
  }
  //console.log(result);
  return result;
}

GroupLayer.prototype.getIndexMoveObject=function(pre_group_index){
  var result = 0;
  var objects = paintAppGlobal.canvas.getObjects();
  for(var x in objects){
    if(objects[x].groupLayer == pre_group_index && x != objects.length - 1){
      result = x*1 + 1;
    }
    if(objects[x].groupLayer == this.index && x != objects.length - 1){
      result = x*1 + 1;
    }
  }
  return result;
}

GroupLayer.prototype.hasObject=function(){
  var objects = paintAppGlobal.canvas.getObjects();
  for(var x in objects){
    if(objects[x].groupLayer == this.index){
      return true;     
    }
  }
  return false;
}

GroupLayer.prototype.selectEnabled=function(){
  paintAppGlobal.canvas.discardActiveObject();
  var objects = paintAppGlobal.canvas.getObjects();
  if(objects.length  == 0)
    return;  
  for(var x in objects){
    if(objects[x].groupLayer == this.index && !this.lock){
      objects[x].selectable = true; 
    }else{
      objects[x].selectable = false;
    }
  }  
  paintAppGlobal.canvas.renderAll();
}

GroupLayer.prototype.lockEvent=function(){
  // if(paintAppGlobal.canvas.getActiveObject()){
    // paintAppGlobal.canvas.getActiveObject().setActive(false) ;
    // paintAppGlobal.canvas.renderAll();
  // }
  paintAppGlobal.canvas.discardActiveObject();
  var objects = paintAppGlobal.canvas.getObjects();
  if(objects.length  == 0)
    return;  
  for(var x in objects){
    if(objects[x].groupLayer == this.index ){
      objects[x].selectable = false; 
    }
  }  
  paintAppGlobal.canvas.renderAll();
}

GroupLayer.prototype.unLockEvent=function(){
  var objects = paintAppGlobal.canvas.getObjects();
  if(objects.length  == 0)
    return;  
  for(var x in objects){
    if(objects[x].groupLayer == this.index ){
      objects[x].selectable = true; 
    }
  }  
  paintAppGlobal.canvas.renderAll();
}

GroupLayer.prototype.hide=function(){
  var objects = paintAppGlobal.canvas.getObjects();
  if(objects.length  == 0)
    return;  
  for(var x in objects){
    if(objects[x].groupLayer == this.index){
      objects[x].set('opacity', 0);
    //objects[x].selectable = false;     
    }
  }  
  paintAppGlobal.canvas.renderAll();
 // setDone();
}

GroupLayer.prototype.show=function(){
  var objects = paintAppGlobal.canvas.getObjects();
  if(objects.length  == 0)
    return;  
  for(var x in objects){
    if(objects[x].groupLayer == this.index){
      objects[x].set('opacity', 1);
    //      if(this.index == current_group_layer)
    //        objects[x].selectable = true;      
    }
  }  
  paintAppGlobal.canvas.renderAll();
 // setDone();
}

GroupLayer.prototype.changeOpacity=function(value){
  var objects = paintAppGlobal.canvas.getObjects();
  if(objects.length  == 0 || this.lock)
    return;  
  for(var x in objects){
    if(objects[x].groupLayer == this.index){
      objects[x].set('opacity', value); 
    }
  }  
  paintAppGlobal.canvas.renderAll();
//setDone();
}
  
GroupLayer.prototype.remove=function(){
  var objects = paintAppGlobal.canvas.getObjects();
  if(objects.length  == 0)
    return;  
  var obj_delete = [];
  for(var x in objects){
    if(objects[x].groupLayer == this.index){
      obj_delete.push(objects[x]);           
    }    
  }  
  for(var x in obj_delete){
    paintAppGlobal.canvas.remove(obj_delete[x]); 
  }
  paintAppGlobal.canvas.renderAll();
//  setDone();  
}

GroupLayer.prototype.resultCanvasLayer=function(){
  var price = 0;
  var objects = paintAppGlobal.canvas.getObjects();
  var resultObject = new Object();
  var obj_delete = [];
  resultObject.objects = [];
  for (var x in objects)
  {
    if(objects[x].groupLayer == this.index){
      resultObject.objects.push(objects[x]);  
      obj_delete.push(objects[x]);
    }
  }
  resultObject.width = paintAppGlobal.canvas.getWidth();
  resultObject.background = 'rgba(0, 0, 0, 0)';
  resultObject.height = paintAppGlobal.canvas.getHeight();
  
  for(var x in obj_delete){
    if(obj_delete[x].type){
      //console.log(obj_delete[x]);
      price = price*1 + obj_delete[x].price*1;
    }
    paintAppGlobal.canvas.remove(obj_delete[x]); 
  }
  paintAppGlobal.canvas.renderAll();
  //console.log(price);
  return {'data':JSON.stringify(resultObject), 'price': price};
  //var result = 'width=' + myCanvasObject.height + '&data=' + JSON.stringify(myCanvasObject);
}