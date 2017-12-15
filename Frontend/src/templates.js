var fs = require('fs');
var ejs = require('ejs');

exports.completesList_oneItem =
    ejs.compile(fs.readFileSync('./Backend/pageTemplates/completes/completesList_oneItem.ejs', "utf8"));