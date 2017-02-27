

Ext.define('exporter.classic.master.Form', {
    extend: 'Ext.panel.Panel',
    xtype: 'exportermasterform',
    stateful: true,
    stateId: 'exportermasterformstateid',
    items: [
        {
            xtype: 'fieldset',
            title: Lang.t('general.information'),
            collapsible: false,
            margin: 5,
            defaults: {
                labelWidth: 100,
                anchor: '100%'
            },
            items: [{
                xtype: 'textfield',
                fieldLabel: Lang.t('general.name'),
                bind: '{activeExporter.name}'
            }, {
                xtype: 'textfield',
                fieldLabel: Lang.t('general.productcategory'),
                bind: '{activeExporter.productCategory}'
            }, {
                xtype: 'textfield',
                fieldLabel: Lang.t('general.notes'),
                bind: '{activeExporter.notes}'
            }, {
                xtype: 'textfield',
                fieldLabel: Lang.t('general.owner'),
                bind: '{activeExporter.owner}'
            }, {
                xtype: 'textfield',
                fieldLabel: Lang.t('general.publish'),
                bind: '{activeExporter.publish}'
            }, {
                xtype: 'textfield',
                fieldLabel: Lang.t('general.tags'),
                bind: '{activeExporter.tags}'
            }, {
                xtype: 'component',
                html: Lang.t('exporter.exceltemplate')
            }, {
                xtype: 'filefield',
                hideLabel: true,
                reference: 'basicFile'
            }]
        },
    ]
});