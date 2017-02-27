import '../../DetailContentController';
import './Variable';
import './Grid';

Ext.define('exporter.classic.detail.Content', {
    extend: 'Ext.panel.Panel',
    xtype: 'exporterdetailcontent',
    controller: 'exporterdetailcontent',
    stateful: true,
    stateId: 'exporterdetailcontentstateid',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    items: [{
            xtype: 'exporterdetailgrid',
            border: true,
            flex: 1
        }, {
            xtype: 'exporterdetailvariable',
            header: false,
            title: Lang.t('general.variables'),
            width: 250,
            border: true
        }
    ]
});