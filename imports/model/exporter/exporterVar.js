import {Class} from 'meteor/jagi:astronomy';

ExporterVars = new Mongo.Collection('exporter_vars');

let def = {
    name: 'ExporterVar',
    collection: ExporterVars,
    fields: {
        // Name field of the report
        exporterId: {
            type: String
        },
        category: {
            type: String
        },
        idx: {
            type: Number,
            precision: 0
        },
        step: {
            type: String,
            grid: {
                width: 130
            }
        },
        name: {
            type: String,
            grid: {
                width: 200
            }
        },
        title: {
            type: String,
            grid: {
                width: 200,
                editor: true
            }
        },
        filter: {
            type: String,
            grid: {
                width: 300,
                editor: true
            }
        },
        owner: {
            type: String,
            default  () {
                return Meteor.userId() || 'SYSTEM';
            },
            immutable: true
        },
        createdAt: {
            type: Date,
            grid: {
                width: 0
            }
        },
        updatedAt: {
            type: Date,
            grid: {
                width: 0
            }
        }
    },
    events: {
        beforeSave(e) {
            e.target.search = [];
            if (_.isString(e.currentTarget.tags) && !_.isEmpty(e.currentTarget.tags.trim())) {
                e.target.search = _.map(e.currentTarget.tags.split(','), (o) => {
                    return o.toLowerCase();
                });
            }
            e.target.search = _.union(e.target.search, _.map(e.currentTarget.name.split(' '), (o) => {
                return o.toLowerCase();
            }));
            if (e.target._isNew) {
                e.target.owner = Meteor.user().username;
                e.target.search.push(e.target.owner);
            } else {
                e.target.search.push(e.currentTarget.owner);
            }
        }
    },
    behaviors: {
        timestamp: {}
    },
    indexes: {
        exporterVarsIndex: {
            fields: {
                exporterId: 1,
                category: 1,
                idx: 1
            }
        }
    }
};

let cls = Class.create(def);

export default {
    def, cls
}