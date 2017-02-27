
import '../DetailController';
import '../../applib/classic/base/TabPanel';
import './detail/Content';

Ext.define('exporter.classic.Detail', {
    extend: 'applib.classic.base.TabPanel',
    xtype: 'exporterdetail',
    controller: 'exporterdetail',
    stateful: true,
    stateId: 'exporterdetailid',
    tabPosition: 'left',
    tabRotation: 'default',
    defaults: {
        closable: true,
        border: false
    },
    layout: "fit",
    config: {
        initData: function (id) {
            this.fireEvent('initiateObject', id);
        }
    },
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            iconCls: 'fa fa-table',
            xtype: 'button',
            text: Lang.t('general.viewdata')
        }, '-', {
            iconCls: 'fa fa-file-excel-o',
            xtype: 'button',
            text: Lang.t('general.excelexport')
        }, '->', {
            iconCls: 'fa fa-upload',
            xtype: 'button',
            text: Lang.t('exporter.exceltemplate')
        }]
    }]
});


