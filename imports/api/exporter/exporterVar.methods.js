import ExporterVar from '../../model/exporter/exporterVar';
import astroToGridDef from '../util/astroToGridDef';

Meteor.methods({
    exporterVarList: function (filter, options) {
        if (!_.isEmpty(filter)) {

            console.log(JSON.stringify(filter));
            console.log(JSON.stringify(options));

            let count = Exporters.find(filter).count();
            let data = Exporters.find(filter, options || {}).fetch();
            return {
                total: count,
                data: data
            };
        }
    },
    exporterVarUpdate: function (record) {
        let cls = ExporterVar.cls.findOne({_id: record._id});
        if (record.id) {
            delete record.id;
        }
        cls.set(record);
        cls.save();
        return ExporterVars.findOne(record._id);
    },
    exporterVarCreate: function (record) {
        let ret = new ExporterVar.cls(record).save();
        return Exporters.findOne(ret);
    },
    exporterVarDestroy: function (record) {
        ExporterVars.remove(record._id);
    },
    exporterVarGridDef: function () {
        return {
            columns: astroToGridDef.toColumns(ExporterVar.def),
            fields: astroToGridDef.toFields(ExporterVar.def)
        };
    }
});