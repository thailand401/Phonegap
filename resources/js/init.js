//var  paintAppGlobal ;
//$(function (){
//	/*Set up canvas*/
//	var canvas = new fabric.Canvas('myCanvas-1');
//  canvas.selection = false;
//  paintAppGlobal = new PaintApp(canvas);
//    
//	//var canvas2 = new fabric.Canvas('myCanvas-2');
//	//paintAppGlobal = paintAppGlobal1;
//	var api = new RemoteApi(paintAppGlobal);
//	var toolbar = new PaintAppToolbar(paintAppGlobal);
//  setOverlayImage();
//});

function animateDragAndDrop(object,toOpacity) {
	
	fabric.util.animate({
						
		startValue: 0.1,
		endValue: toOpacity,
		
		duration: 800,
		
		onChange: function(value) {
			object.set('opacity', value);
			paintAppGlobal.getCanvas().renderAll();
			//onChange();
		},
		onComplete: function() {
			//$("#btnSelect").trigger('click');
		}
	});
}
function rgb2hex(rgb) {
	//console.log(rgb);
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex2rgb(hex) {
  if (hex[0]=="#") hex=hex.substr(1);
  if (hex.length==3) {
    var temp=hex; hex='';
    temp = /^([a-f0-9])([a-f0-9])([a-f0-9])$/i.exec(temp).slice(1);
    for (var i=0;i<3;i++) hex+=temp[i]+temp[i];
  }
  var triplets = /^([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i.exec(hex).slice(1);
  return {
    r:   parseInt(triplets[0],16),
    g: parseInt(triplets[1],16),
    b:  parseInt(triplets[2],16)
  }
}

//jQuery(".droppable").droppable({
	//destroy:true,
//	drop: function( event, ui ) {
	//	paintAppGlobal.handleDrop(ui);
	//}
//});