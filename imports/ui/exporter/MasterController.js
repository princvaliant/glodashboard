import '../applib/classic/base/Dialog';
import './classic/Category';
import Toast from  '../applib/classic/base/Toast';
import  '../applib/store/MeteorStore';


Ext.define('exporter.MasterController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.exportermaster',
    constructor: function () {
        this.callParent(arguments);
        this.bufferedSearch = Ext.Function.createBuffered (_search, 300);
        this.filter = {};
    },
    init: function () {
        let self = this;
        this.vm = this.getViewModel();
        Meteor.call('exporterGridDef', (err, result) => {
            let grid = this.getView().down('grid');
            let store = Ext.create('applib.store.Meteor', {
                fields: result.fields,
                proxy: {
                    type: 'meteor',
                    actionMethods: {
                        'read': 'exporterList',
                        'update': 'exporterUpdate',
                        'create': 'exporterCreate',
                        'destroy': 'exporterDestroy',
                        'duplicate': 'exporterDuplicate'
                    },
                    extraParams: {
                        search: '',
                        owner: '',
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
            grid.suspendLayout = false;
            self.filter = {
                search: self.lookupReference('exportersearch').value,
                owner: self.lookupReference('exportersonlymyfilter').checked,
                category: self.lookupReference('exporterscategoryfilter').value
            }
            self.bufferedSearch(self);
        });
        return true;
    },
    onSelectionChange: function (cmp, selected, eOpts) {
        this.vm.set('disableDelete', selected[0].data.owner !== Meteor.user().username)
        Meteor.call('exporterFormDef', 'activeExporter', selected[0].data.owner, (err, result) => {
            let form = this.lookupReference('exportermasterviewform');
            form.removeAll();
            form.add(result.forms);
        });
    },
    onAddButton: function (btn) {
        let addWindow = Ext.create('exporter.classic.SelectCategory');
        this.view.add(addWindow);
        addWindow.show();

    },
    onSaveNewExporter: function (btn) {
        let data = btn.up('form').getValues();
        let grid = this.getView().down('grid');
        grid.store.insert(0, data, (error) => {
            if (!error) {
                grid.getSelectionModel().select(0);
                let window = btn.up('window');
                window.destroy();
            }
        });
    },
    onRowDoubleClick: function () {
        this.fireViewEvent('route', 2, {
            target: 'exporterdetail',
            id: this.vm.get('activeExporter').data._id,
            name: this.vm.get('activeExporter').data.name});
    },
    onDeleteButton: function () {
        Ext.MessageBox.confirm(Lang.t('general.deletetitle'), Lang.t('general.deleteconfirm'), function (btn) {
            if (btn === 'yes') {
                let current = this.vm.get('activeExporter');
                let grid = this.getView().down('grid');
                grid.store.remove(current);
                grid.getSelectionModel().select(0);
            }
        }, this);
    },
    onDuplicateButton: function () {
        let grid = this.getView().down('grid');
        grid.store.duplicate(this.vm.get('activeExporter'), (error) => {
            if (!error) {
                grid.getSelectionModel().select(0);
                let window = btn.up('window');
                window.destroy();
            }
        });
    },
    onSearchChanged: function (cmp, newValue) {
        this.filter['search'] = newValue;
        this.bufferedSearch(this);
    },

    onCategoryChanged: function (cmp, newValue) {
        this.filter['category'] = newValue;
        this.bufferedSearch(this);
    },

    onOwnerOnlyChanged: function (cmp, newValue) {
        this.filter['owner'] = newValue;
        this.bufferedSearch(this);
    },


    clicked2: function (btn) {
        // this.fireViewEvent('route', 2, 'exporterdetail=2222');
        //     this.fireViewEvent('route', 2, 'exporterdetail=_new_');
    }
});

function _search(cntrl) {
    let grid = cntrl.getView().down('grid');
    grid.store.getProxy().extraParams = cntrl.filter;
    grid.store.load();
}