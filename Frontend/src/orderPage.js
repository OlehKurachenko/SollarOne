$('#nameInput').change(function () {
    if (ValidName()) {
        $('#nameInput').addClass("validInput");
        $('#nameInput').removeClass("invalidInput");
    }
});

$('#cellInput').change(function () {
    if (validPhoneNumber()) {
        $('#cellInput').addClass("validInput");
        $('#cellInput').removeClass("invalidInput");
    }
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