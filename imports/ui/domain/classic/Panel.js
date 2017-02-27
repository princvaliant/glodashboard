import '../Controller';
import '../ViewModel';

Ext.define('domain.classic.Panel', {
    extend: 'approuter.classic.secure.Tab',
    xtype: 'domainpanel',
    hierarchy: {
        TOP: 'domainpanel',
        L0: '',
        L1: '',
        L2: ''
    },
    config: {
        initData: function (value) {

        }
    },
    onRender: function () {

        console.log('Setting render');

        this.callParent();
    }
});