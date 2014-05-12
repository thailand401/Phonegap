Ext.define('Kitchensink.view.canvas', {
    extend: 'Ext.Container',
    //requires: ['Kitchensink.view.LoremIpsum2'],
    config: {
     
		items:[ {html:'<div style="height: 97%; display: inline;" id="main-design-contain"><div style="width: 99.7%;; height: 100%;"><div id="image_product_selected" class="design-ctr-canvas"><div style="text-align: center; position: relative; margin-left: auto; margin-right: auto; width: 500px;" class="droppable ui-droppable" id="ImageSelect-1"><div class="canvas-container" style="width: 500px; height: 500px; position: relative; -moz-user-select: none;"><canvas style="background: none repeat scroll 0% 0% rgb(255, 255, 255); border: 3px solid rgb(255, 8, 25); position: absolute; width: 500px; height: 500px; left: 0px; top: 0px; -moz-user-select: none;" id="myCanvas-1" width="500" height="500" class="lower-canvas"></canvas><canvas class="upper-canvas" style="position: absolute; width: 500px; height: 500px; left: 0px; top: 0px; -moz-user-select: none; cursor: default;" width="500" height="500"></canvas></div><div id="price_tag">$12.00</div><input type="hidden" value="12.0000" name="price" id="input_price"><input type="hidden" value="16" name="product_current" id="product_current"></div>'}]
    }
});
