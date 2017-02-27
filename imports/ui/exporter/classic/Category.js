import '../../applib/proxy/MeteorProxy';

Ext.define('exporter.classic.SelectCategory', {
    extend: 'Ext.window.Window',
    xtype: 'exporterselectcategory',
    width: 400,
    title: Lang.t('exporter.addexporter'),
    modal: true,
    layout: 'anchor',
    items: {
        xtype: 'form',
        margin: 7,
        defaults: {
            anchor: '-1',
            labelWidth: 120,
            allowBlank: false
        },
        items: [{
            xtype: 'combobox',
            name: 'category',
            fieldLabel: Lang.t('exporter.selectcategory'),
            displayField: 'title',
            store: Ext.create('Ext.data.Store', {
                autoLoad: false,
                remoteFilter: true,
                fields: ['id', 'title'],
                proxy: {
                    type: 'meteor',
                    actionMethods: {
                        'read': 'categoryList'
                    }
                }
            }),
            minChars: 0,
            editable: false,
            queryMode: 'remote'
        }, {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: Lang.t('general.name'),
        }],
        buttons: [{
            text: Lang.t('general.btnsave'),
            disabled: true,
            formBind: true,
            handler: 'onSaveNewExporter'
        }]
    }
});