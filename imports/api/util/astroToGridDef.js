import userRolesHelper from './userRolesHelper';

export default astro = {

    toColumns: function (def, owner) {
        let retObj = [];
        for (let field in def.fields) {
            if (def.fields.hasOwnProperty(field)) {
                let val = def.fields[field];
                if (val.grid && val.grid.width) {
                    let obj = {
                        dataIndex: field,
                        text: Lang.t(def.name + '.' + field),
                        width: val.grid.width || 100,
                        allowBlank: val.optional === true,
                        stateId: def.name + field + 'colid'
                    };
                    obj = _.extend(obj, _convertColumn(val.type, val.precision));
                    if (val.grid.editor) {
                        obj = _.extend(obj, _columnEditor(val.type, val.precision, val.optional, val.validators, owner, val.roles));
                    }
                    retObj.push(obj);
                }
            }
        }
        return retObj;
    },

    toFields: function (def) {
        let retObj = [];
        for (let field in def.fields) {
            if (def.fields.hasOwnProperty(field)) {
                let val = def.fields[field];
                if (val.grid) {
                    let obj = {
                        name: field,
                        type: _convertField(val.type, val.precision)
                    };
                    retObj.push(obj);
                }
            }
        }
        return retObj;
    }
}


function _columnEditor(type, precision, optional, validators, owner, roles) {
    let editor;
    let allowed = userRolesHelper.inRole(Meteor.user(), owner, roles)
    if (!allowed) {
        return {};
    }
    if (type === Boolean)
        editor = {
            xtype: 'checkboxfield'
        };
    else if (type === Number && precision > 0)
        editor = {
            xtype: 'numberfield',
            allowDecimals: true,
            decimalPrecision: precision
        };
    else if (type === Number && !precision)
        editor = {
            xtype: 'numberfield',
            allowDecimals: false,
            decimalPrecision: 0
        };
    else if (type === Date)
        editor = {
            xtype: 'datefield',
            format: 'Y-m-d H:i'
        };
    else
        editor = {
            xtype: 'textfield'
        };
    if (!optional) {
        editor.emptyText = 'required';
        editor.allowBlank  = false;
    }
    return {editor: editor};
}


function _convertColumn(type, precision) {
    if (type === Boolean)  return {
        xtype: 'checkcolumn',
        disabled: true,
        trueText: 'yes',
        falseText: 'no'
    };
    if (type === Number && precision > 0) return {
        xtype: 'numbercolumn',
        format: ('' + Math.pow(10, precision)).replace('1', '0.')
    }
    if (type === Number && !precision)  return {
        xtype: 'numbercolumn',
        format: '0'
    }
    if (type === Date)  return {
        xtype: 'datecolumn',
        format: 'Y-m-d H:i'
    }
    return {};
}


function _convertField(type, precision) {
    if (type === String)  return 'string';
    if (type === Boolean)  return 'boolean';
    if (type === Number && precision > 0)  return 'float';
    if (type === Number && !precision)  return 'int';
    if (type === Date)  return 'date';
    return 'string';
}



