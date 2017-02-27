


Ext.define('wip.classic.Detail', {
    extend: 'Ext.panel.Panel',
    xtype: 'wipdetail',
    config: {
        initData: function (value) {
            console.log('wip' + value);
        }
    },
    html: 'WIP detail'
});