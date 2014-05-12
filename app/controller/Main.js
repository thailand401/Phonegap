/**
 * @class Kitchensink.controller.Main
 * @extends Ext.app.Controller
 *
 * This is an abstract base class that is extended by both the phone and tablet versions. This controller is
 * never directly instantiated, it just provides a set of common functionality that the phone and tablet
 * subclasses both extend.
 */
Ext.define('Kitchensink.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        /**
         * @private
         */
		 autoLoad: true,
        viewCache: [],

        refs: {
            nav: '#mainNestedList',
            main: 'mainview',
            toolbar: '#mainNavigationBar',
            sourceButton: 'button[action=viewSource]',

            sourceOverlay: {
                selector: 'sourceoverlay',
                xtype: 'sourceoverlay',
                autoCreate: true
            }
        },
		//store:{'Demos'},
        control: {
            sourceButton: {
                tap: 'onSourceTap'
            },
            nav: {
                itemtap: 'onNavTap'
            }
        },

        routes: {
           
        },

        /**
         * @cfg {Ext.data.Model} currentDemo The Demo that is currently loaded. This is set whenever showViewById
         * is called and used by functions like onSourceTap to fetch the source code for the current demo.
         */
        currentDemo: undefined
    },

    /**
     * Finds a given view by ID and shows it. End-point of the "demo/:id" route
     */
	 
	 /*
	 init: function() {
		// alert('asd');
		 load_canvas();loadelement();init();
		
        var now = new Date();
console.log(now.getTime() + "con");

    }, */
   
});
