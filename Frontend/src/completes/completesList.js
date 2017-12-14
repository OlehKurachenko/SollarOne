var Templates = require('../templates');
var AJAX = require('../ajax');

var completesList;
var completesListKeys;
var completesListHTML = [];
var completesListNodes = [];

var filters = [];

var $completesList = $('#completes-list');

function showCompletesList(filters) {
    $completesList.html();

    var isOk;
    for (var i = 0; i < completesListKeys.length; ++i) {
        isOk = true;
        console.log("Trying to add " + i);
        filters.forEach(function (value) {
            if (!value(completesList[completesListKeys[i]]))
                isOk = false;
        });
        if (isOk) {
            console.log("Adding " + i);
            $completesList.append(completesListNodes[i]);
        }
    }
}

function initiateCompletesList() {
    AJAX.get('api/getCompletesList', function (data) {
        completesList = data.list;
        completesListKeys = Object.keys(completesList);
        for (var i = 0; i < completesListKeys.length; ++i) {
            completesListHTML[i] = Templates.completesList_oneItem({name: completesList[completesListKeys[i]].name_ua});
            completesListNodes[i] = $(completesListHTML[i]);
        }
        showCompletesList(filters);
    });
}

exports.intiateCompletesList = initiateCompletesList;

