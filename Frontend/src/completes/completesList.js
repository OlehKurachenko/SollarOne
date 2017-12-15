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

function countCompletePrice(complete) {
    var sum = 0;
    if (complete.deck) {
        if (complete.deck.shape)
            sum += complete.deck.shape.price;
        if (complete.deck.graphic)
            sum += complete.deck.graphic.price;
    }
    if (complete.griptape)
        sum += complete.griptape.price;
    if (complete.trucks)
        sum += complete.trucks.price;
    if (complete.wheels)
        sum += complete.wheels.price;
    return sum;
}

function initiateCompletesList() {
    AJAX.get('api/getCompletesList', function (data) {
        completesList = data;
        completesListKeys = Object.keys(completesList);
        for (var i = 0; i < completesListKeys.length; ++i) {
            var val = completesList[completesListKeys[i]];
            completesListHTML[i] = Templates.completesList_oneItem(
                {
                    picture: val.picture_url,
                    name: val.name_ua,
                    styles: val.styles_ua.join(', '),
                    length: val.deck.shape.length,
                    flex: val.deck.flex,
                    trucks_ln: val.trucks_c.company + ' ' + val.trucks_c.model + ' ' + val.trucks_c.width,
                    wheels_ln: val.wheels_c.company + ' ' + val.wheels_c.model + ' ' + val.wheels_c.size,
                    price: countCompletePrice(val)
                });
            completesListNodes[i] = $(completesListHTML[i]);
        }
        showCompletesList(filters);
    });
}

exports.intiateCompletesList = initiateCompletesList;

