Ext.define('Kitchensink.view.tablet.NavigationBar', {
    extend: 'Ext.TitleBar',
    xtype: 'tabletnavigationbar',

    config: {
        ui: 'light'
    },

    platformConfig: [{
        platform: 'blackberry',
        ui: 'light'
    }]
});
