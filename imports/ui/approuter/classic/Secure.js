
import '../../exporter/classic/Master';
import '../../wip/classic/Master';
import '../../help/classic/Panel';
import '../../domain/classic/Panel';
import '../../myaccount/classic/Panel';


Ext.define('approuter.classic.Secure', {
    extend: 'Ext.tab.Panel',
    xtype: 'securepanel',
    controller: 'secure',
    referenceHolder: true,
    flex: 1,
    tabBarHeaderPosition: 0,
    plain: false,
    defaults: {
        bodyPadding: 0,
        bodyMargin: 0,
        border: false,
        layout: 'fit'
    },
    headerPosition: 'top',
    tabRotation: 'default',
    titleRotation: 'default',
    titleAlign: 'left',
    iconAlign: 'default',
    listeners: {
        tabchange: 'onTabChange',
        route: 'onRoute',
        afterrender: function(panel) {
            panel.tabBar.insert(0, {
                xtype: 'button',
                scale: 'small',
                iconAlign: 'left',
                iconCls: 'fa fa-bar-chart-o',
                text: 'GLO DASHBOARD',
                cls: 'logo-btn'
            });
        }
    }
});
