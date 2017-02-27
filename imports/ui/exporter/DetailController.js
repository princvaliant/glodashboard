import Toast from  '../applib/classic/base/Toast';

Ext.define('exporter.DetailController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.exporterdetail',
    init: function() {
        this.view.tabBar.add({
            xtype: 'button',
            scale: 'small',
            iconCls: 'fa fa-plus',
            tooltip: Lang.t('exporter.addlinkeddata')
        });
        this.control({
            'exporterdetail': {
                initiateObject: this.initiateObject
            }
        });
    },
    initiateObject: function(id) {
        Meteor.call('exporterGet', id, (error, exporter) => {
            if (error) {
                Toast.error(error.reason, error.error);
            } else {
                this.view.removeAll();
                _.each(exporter.links, (link) => {
                    this.view.add({
                        xtype: 'exporterdetailcontent',
                        closable: link.key !== 'master',
                        title:  link.category + ' - ' + link.key.toUpperCase()
                    });
                }, this);
                setTimeout(() => {
                    this.view.setActiveTab(0);
                }, 200);
            }
        });
    }
});