import { Class } from 'meteor/jagi:astronomy';

Exporters = new Mongo.Collection('exporter');

let def = {
    name: 'Exporter',
    collection: Exporters,
    fields: {
        // Name field of the report
        name: {
            type: String,
            // validators: [{
            //     type: 'minLength',
            //     param: 5
            // }],
            grid: {
                width: 200,   // If width > 0 then show field in grid
                editor: true   // If editor = true show field editor in row
            },
            form: {
                idx: 1     // Order of the fields in form
            },
            roles: 'OWNER,ADMIN'  // Who can edit the field (OWNER = user who created object)
        },
        category: {
            type: String,
            grid: {
                width: 140
            },
            roles: 'OWNER,ADMIN'
        },
        notes: {
            type: String,
            optional: true,
            grid: {
                width: 0
            },
            form: {
                xtype: 'textarea',  // Overrides default type of the editor
                idx: 3
            },
            roles: 'OWNER,ADMIN'
        },
        tags: {
            type: String,
            optional: true,
            grid: {
                width: 110
            },
            form: {
                idx: 4
            },
            roles: 'OWNER,ADMIN'
        },
        owner: {
            type: String,
            default  () {
                return Meteor.userId() || 'SYSTEM';
            },
            immutable: true,
            grid: {
                width: 110
            }
        },
        publish: {
            type: Boolean,
            default: false,
            grid: {
                width: 70,
                editor: false
            },
            form: {
                idx: 5
            },
            roles: 'OWNER,ADMIN'
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
        },
        lastRunAt: {
            type: Date,
            optional: true,
            grid: {
                width: 110
            }
        },
        runs: {
            type: Number,
            optional: true,
            precision: 0,
            grid: {
                width: 90
            }
        },
        avgRunTime: {
            type: Number,
            optional: true,
            precision: 0,
            grid: {
                width: 100
            }
        },
        search: {
            type: [String],
            default: [],
            optional: true,
        },
        links: {
            type: [Object]
        }
    },
    events: {
        beforeInsert(e) {
            e.target.links = [{
                idx: 0, key: 'master', category: e.currentTarget.category
            }];
        },
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
        timestamp: {},
        softremove: {}
    },
    indexes: {
        exporterSearchIndex: {
            fields: {
                search: 1,
                owner: 1,
                category: 1,
                lastRunAt: 1
            }
        }
    }
};

let cls = Class.create(def);

export default {
    def, cls
}