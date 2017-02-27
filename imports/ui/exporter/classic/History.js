import './Log';

Ext.define('exporter.classic.History', {
    extend: 'Ext.panel.Panel',
    xtype: 'exporterhistory',
    items: [
        {
            xtype: 'button',
            text: 'Jump to report log',
            listeners: {
                click: 'clicked4'
            }
        }
    ]
});