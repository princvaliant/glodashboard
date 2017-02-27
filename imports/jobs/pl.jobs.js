import parseHelper from '../api/util/parseHelper';
let fs = Npm.require('fs');

Meteor.startup(function () {
    SyncedCron.add({
        name: 'Import pl data',
        schedule: function (parser) {
            // parser is a later.parse object
            return parser.text('every 1 hour');
        },
        job: function () {
          //  exec();
        }
    });
});

// For testing in development
Meteor.methods({
    'plImport': function () {
        exec();
    }
});

function exec () {

    let content = fs.readFileSync('/Users/avolos/Documents/map1.txt', 'utf8');

    let header = content.match(/Measurement Information([\w\W]*)Map specifications/);
    let mapSpecs = content.match(/Map specifications([\w\W]*)Map statistics/);
    let mapStats = content.match(/Map statistics([\w\W]*)(\r\n|\n)/);

    // Error handling

    let dc = parseHelper.parseOneDelimiter(header[1], ':, ');
    let specs = Papa.parse(mapSpecs[1]);
    let stats = Papa.parse(mapStats[1]);




    console.log(dc);
    console.log(specs);
    console.log(stats);


    // while (row) {
    //     row = SyncFiles.findOne({source: 'DB1', path: '//s1/Legacy/linktestdata', processed: false}, {sort: {dateCreated: 1}});
    //     if (row) {
    //         let data = Papa.parse(row.content);
    //         if (data && data.data) {
    //             let dataDef = Settings.testConfig.link.test.common;
    //             for (let i = 1; i < data.data.length; i++) {
    //                 let obj = {data: {}, meta: {}, device: {}};
    //                 let date = moment();
    //                 // Construct testdata object for row in linktest file
    //                 for (let o in dataDef) {
    //                     let val = data.data[i][o.replace('_', '.')];
    //                     let finalval = parseFloat(val);
    //                     if (_.isNaN(finalval)) {
    //                         if (dataDef[o] === 'counterRefreshTime') {
    //                             finalval = moment(val, 'ddd MMM DD HH:mm:ss YYYY').toDate();
    //                             date = moment(val, 'ddd MMM DD HH:mm:ss YYYY');
    //                         } else {
    //                             finalval = val;
    //                         }
    //                     }
    //                     obj.data[dataDef[o]] = finalval;
    //                 }
    //
    //                 let datestr = row.fileName.split('_');
    //                 if (datestr.length === 3) {
    //                     obj.data.switch = parseInt(row.code);
    //                     obj.data.fileName = row.fileName;
    //                     obj.data.subpath = row.subpath;
    //                     obj.meta.Channel = parseInt(row.code);
    //
    //                     // Query testdata for first value
    //                     if (obj.data && obj.data.transceiverSN) {
    //                         let firsttest = Testdata.findOne(
    //                             {
    //                                 'device.SerialNumber': obj.data.transceiverSN,
    //                                 step: 'link',
    //                                 type: 'link',
    //                                 subtype: 'test',
    //                                 'data.subpath': row.subpath
    //                             },
    //                             {sort: {'meta.StartDateTime': 1}});
    //                         if (!firsttest) {
    //                             obj.data.hour = 0;
    //                             obj.mid = Meteor.hashid();
    //                         } else if (date) {
    //                             let duration = moment.duration(date.diff(moment(firsttest.meta.StartDateTime)));
    //                             obj.data.hour = Math.round(duration.asHours());
    //                             obj.mid = firsttest.mid;
    //                         }
    //
    //                         obj.timestamp = date.toDate();
    //                         obj.step = 'link';
    //                         obj.type = 'link';
    //                         obj.subtype = 'test';
    //                         obj.result = 'X';
    //                         obj.status = 'X';
    //                         obj.measstatus = 'X';
    //                         obj.device.SerialNumber = obj.data.transceiverSN;
    //                         obj.device.ManufactureSerialNumber = null;
    //                         obj.device.PartNumber = obj.data.pnum || 'XQX4000';
    //                         obj.device.PartType = 'ENG';
    //                         obj.meta.StartDateTime = date.toDate();
    //                         obj.meta.EndDateTime = date.toDate();
    //                         Testdata.insert(obj);
    //                     }
    //                 }
    //             }
    //         }
    //         SyncFiles.update({_id: row._id}, {$set: {processed: true}});
    //     }
    //}
}
