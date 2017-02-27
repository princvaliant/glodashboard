import { Class } from 'meteor/jagi:astronomy';

Categories = new Mongo.Collection('category', {idGeneration: 'STRING'});

let def = {
    name: 'Category',
    collection: Categories,
    fields: {
        // Name field of the report
        title: {
            type: String,
            grid: {
                width: 200
            },
            roles: 'ADMIN'  // Who can edit the field (OWNER = user who created object)
        },
        active: {
            type: Boolean,
            grid: {
                width: 200
            },
            roles: 'ADMIN'  // Who can edit the field (OWNER = user who created object)
        }
    },
    indexes: {
        categoryActive: {
            fields: {
                active: 1
            }
        }
    }
};

let cls = Class.create(def);

export default {
    def, cls
}