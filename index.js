let pdfreader = require("pdfreader"),
    _ = require('lodash'),
    jsonfile = require('jsonfile'),
    fs = require('fs');


let hasFinished = {};
let dataToJSON = {};

const testFolder = 'ref/ref_arm/';
const outputFileName = 'data.json';
const categories = ['collection data', 'basic data', 'amount of plates', 'estimated dating by stylistic criteria',
    'marks', 'applications', 'turned/angled edge', 'rivets', 'joint between segments of', 'joint of segments within type', 'washers', 'group', 'ridges', 'plate decoration'];

let writeToFile = () => {
    jsonfile.writeFile(outputFileName, dataToJSON, function (err) {
        console.error('error while writing:' + err)
    })
};

let writeToFileCheck = () => {
    return _.every(hasFinished);
};

let parseFile = (filePath) => {

    hasFinished[filePath] = false;
    let parsedMetadata = {};

    let category = undefined,
        keys = [],
        values = [];

    let pushCategory = (nextCategory) => {
        if (category) {
            parsedMetadata[category] = _.zipObject(keys, values);
        } else {
            parsedMetadata = _.zipObject(keys, values);
        }

        category = nextCategory;
        keys = [];
        values = [];
    };

    let parseItem = (item) => {
        function pushValueInternal(keyArray, valueArray) {
            if (!category && keys.length === 2 && values.length === 2) {
                valueArray[1] += item.text;
            }
            else if (keyArray.length > valueArray.length) {
                valueArray.push(item.text);
            } else {
                keyArray.push(item.text);
            }
        }

        let pushValue = () => {
            if (category === 'estimated dating by stylistic criteria')
                pushValueInternal(values, keys);
            else
                pushValueInternal(keys, values);
        };

        if (_.includes(categories, item.text)) {
            pushCategory(item.text);
        } else {
            pushValue();
        }
    };


    let finished = () => {
        pushCategory();
        console.log(`parsed ${filePath}`);
        dataToJSON[parsedMetadata['Item-ID']] = parsedMetadata;
        hasFinished[filePath] = true;
        if (writeToFileCheck())
            writeToFile();
    };

    new pdfreader.PdfReader().parseFileItems(filePath, function (err, item) {
        if (!item)
            finished();
        else {
            if (item.text)
                parseItem(item);
        }
    });
};


fs.readdir(testFolder, (err, files) => {
    hasFinished['base'] = false;
    files.forEach(file => {
        parseFile(testFolder + file);
    });
    hasFinished['base'] = true;
});
