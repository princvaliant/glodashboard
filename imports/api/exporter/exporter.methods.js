import Exporter from '../../model/exporter/exporter';
import astroToGridDef from '../util/astroToGridDef';
import astroToFormDef from '../util/astroToFormDef';

Meteor.methods({
    exporterGet: function (id) {
        let exporter = Exporters.findOne(id);
        if (exporter === undefined) {
            throw new Meteor.Error('404', Lang.t('general.notfound'));
        }
        return exporter;
    },
    exporterList: function (filter, options) {
        if (!_.isEmpty(filter)) {
            let query = {$and: []};
            if (filter.search) {
                _.each(filter.search.split(' '), (srch) => {
                    if (!_.isEmpty(srch.trim())) {
                        query.$and.push({search: {$regex: '^' + srch.trim().toLowerCase()}})
                    }
                });
            } else {
                query.$and.push({search: {$ne: ''}})
            }
            if (filter.owner) {
                query.$and.push({owner: Meteor.user().username});
            }
            if (filter.category && filter.category.trim()) {
                query.$and.push({category: filter.category});
            }

            query.$and.push({$or:[{
                publish: true
            }, {
                owner: Meteor.user().username
            }]});

            console.log(JSON.stringify(query));
            console.log(JSON.stringify(options));

            let count = Exporters.find(query).count();
            let data = Exporters.find(query, options || {}).fetch();
            return {
                total: count,
                data: data
            };
        }
    },
    exporterUpdate: function (record) {
        let cls = Exporter.cls.findOne({_id: record._id});
        if (record.id) {
            delete record.id;
        }
        cls.set(record);
        cls.save();
        return Exporters.findOne(record._id);
    },
    exporterDuplicate: function (record) {
        if (record.id) {
            delete record.id;
        }
        delete record._id;
        record.owner += Meteor.user().username;
        record.name += ' - COPY';
        record.lastRunAt = null;
        record.runs = 0;
        let newId = new Exporter.cls(record).save();
        // duplicate all records in variables
        return Exporters.findOne(newId);
    },
    exporterCreate: function (records) {
        let ret = [];
        _.each(records, function (record) {
            ret.push(new Exporter.cls(record).save());
        });
        let retObj = _.map(ret, (o) => {
            return Exporters.findOne(o);
        });
        return retObj;
    },
    exporterDestroy: function (record) {
        Exporters.remove(record._id);
    },
    exporterGridDef: function () {
        return {
            columns: astroToGridDef.toColumns(Exporter.def),
            fields: astroToGridDef.toFields(Exporter.def)
        };
    },
    exporterFormDef: function (bindString, owner) {
        return {
            forms: astroToFormDef.toForm(Exporter.def, bindString, owner)
        };
    }
});