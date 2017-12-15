var completesList = require('./data/completesList');

exports.getCompletesList = function (req, res) {
    res.send(completesList);
};