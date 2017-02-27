Ext.define('wip.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.wip',
    control: {
        button: {
            //   click: 'onAnyButtonClick'
        }
    },
    init: function(view) {
        this.vm = this.getViewModel();
    },
    clicked: function(btn) {
        this.fireViewEvent('route', 2, 'wipdetail=44444');
    }

});