import '../../model/domain/category';

Meteor.methods({
    categoryList: function (filter, options) {
        let count = Categories.find().count();
        let data = Categories.find({active:true}, options || {}).fetch();
        return {
            total: count,
            data: data
        };
    }
});