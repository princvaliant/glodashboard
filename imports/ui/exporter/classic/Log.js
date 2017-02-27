

Ext.define('exporter.classic.Log', {
    extend: 'Ext.panel.Panel',
    xtype: 'exporterlog',
    items: [
        {
            xtype: 'button',
            text: 'Jump to report detail',
            listeners: {
                click: 'clicked1'
            }
        }
    ]
});