import '../Controller';
import '../ViewModel';
import './Detail';

Ext.define('wip.classic.Master', {
    extend: 'Ext.panel.Panel',
    xtype: 'wipmaster',
    controller: 'wip',
    viewModel: {
        type: 'wip'
    },
    initComponent: function () {
        this.callParent();
        this.enableBubble('route');
    },
    config: {
        initData: function (value) {

        }
    },
    items: [
        {
            xtype: 'button',
            text: 'Jump to wip detail',
            listeners: {
                click: 'clicked'
            }
            // }, {
            //     xtype: 'exportergrid',
            //     stateful: true,
            //     stateId: 'exportergridid',
            //     reference: 'exportergrid'
        }
    ]
});