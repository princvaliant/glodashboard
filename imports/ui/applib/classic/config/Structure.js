

Ext.define('applib.classic.config.Structure', {
    singleton : true,
    ui_secure : [
        {
            tab: 'exporter',
            iconCls: 'fa fa-bar-chart',
            initCard: 'exportermaster'
        },  {
            tab: 'wip',
            iconCls: 'fa fa-cogs',
            initCard: 'wipmaster'
        }, {
            tab: 'domain',
            iconCls: 'fa fa-wrench',
            initCard: 'domainpanel'
        }, {
            tab: 'help',
            iconCls: 'fa fa-question-circle',
            initCard: 'helppanel'
        }, {
            tab: 'myaccount',
            iconCls: 'fa fa-user',
            initCard: 'myaccountpanel'
        }
    ]
});

