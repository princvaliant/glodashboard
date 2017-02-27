import './MasterController';

Ext.define('exporter.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.exporter',
    init: function(view) {
        this.vm = this.getViewModel();
    },
    clicked1: function(btn) {
        this.fireViewEvent('route', 1, 'exporter');
    },

    clicked2: function(btn) {
        this.fireViewEvent('route', 2, 'exporterdetail=21212');
    },

    clicked3: function(btn) {
        this.fireViewEvent('route', 3, 'exporterhistory=4444');
    },

    clicked4: function(btn) {
        this.fireViewEvent('route', 4, 'exporterlog=dadasdasddsdas');
    }
});