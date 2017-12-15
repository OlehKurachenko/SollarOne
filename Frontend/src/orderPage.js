var AJAX = require('./ajax');


$('#nameInput').change(function () {
    if (validName($('#nameInput').val())) {

        $('#nameInput').addClass("validInput");
        $('#nameInput').removeClass("invalidInput");
    } else {
        $('#nameInput').addClass("invalidInput");
        $('#nameInput').removeClass("validInput");
        $('#labelNameInput').addClass("invalidInput");
        $('#labelNameInput').removeClass("validInput");
    }
});

$('#cellInput').change(function () {
    if (validPhoneNumber($('#cellInput').val())) {

        $('#cellInput').addClass("validInput");
        $('#cellInput').removeClass("invalidInput");
        $('#labelCellInput').addClass("validInput");
        $('#labelCellInput').removeClass("invalidInput");
    } else {
        $('#cellInput').addClass("invalidInput");
        $('#cellInput').removeClass("validInput");
        $('#labelCellInput').addClass("invalidInput");
        $('#labelCellInput').removeClass("validInput")
    }
});


$('#post').click(function () {

    var name = $('#nameInput').val();
    var cell = $('#cellInput').val();
    var addr = $('#addressInput').val();
    if (!validPhoneNumber(cell) || !validName(name))
        return;
    var order = {
        name: name,
        phoneNumber: cell,
        address: addr
    };

    AJAX.post("order", order, function (err, data) {

    });
});

function isLetterOrSpace(ch) {
    return (ch >= 'a' && ch <= 'z') || (ch >= 'а' && ch <= 'я') || ch === ' ' || ch === 'ё' || ch === 'є' || ch === 'і';
}

function validPhoneNumber(str) {
    if (str == null || str.length < 10 || str.length > 14)
        return false;
    if (str.charAt(0) != 0) {
        if (str.charAt(0) != '+' || str.charAt(1) != '3' || str.charAt(2) != '8' || str.charAt(3) != '0')
            return false;
    }
    return true;
}

function validName(str) {
    if (str === null || str.length < 2)
        return false;
    var lowerCase = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        if (!isLetterOrSpace(lowerCase.charAt(i)))
            return false;
    }
    return true;
}