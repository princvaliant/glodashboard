import Toast from  '../applib/classic/base/Toast';

Ext.define('exporter.DetailContentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.exporterdetailcontent',
    init: function () {
        let self = this;
        Meteor.call('exporterVarGridDef', (err, result) => {
            let grid = self.getView().down('grid');
            let store = Ext.create('applib.store.Meteor', {
                remoteSort: false,
                remoteFilter: false,
                fields: result.fields,
                proxy: {
                    type: 'meteor',
                    actionMethods: {
                        'read': 'exporterVarList',
                        'update': 'exporteVarUpdate',
                        'create': 'exporterVarCreate',
                        'destroy': 'exporterVarDestroy'
                    },
                    extraParams: {
                        exporterId: '',
                        category: ''
                    }
                },
                listeners: {
                    exception: function (error) {
                        Toast.error(error.reason, error.error);
                    }
                }
            });
            grid.suspendLayout = true;
            let state = Ext.state.Manager.getProvider().state[grid.stateId];
            grid.reconfigure(store, result.columns);
            grid.applyState(state);
            store.load();
            grid.suspendLayout = false;
        });
    }
});