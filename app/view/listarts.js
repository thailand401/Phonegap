Ext.define('Kitchensink.view.SlideRight', {
    extend: 'Ext.Panel',
   
    config: {
        cls: 'card card2',
        scrollable: true,
        items: [{
            docked: 'top',
            html: 'Slide Right Animation'
        }, ]
    }
});