var parts = require('./parts');

exports.countCompletePrice = function (complete) {
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
};

exports.list = {
    JET_RACCON: {
        name_ua: "Реактивний Єнот",
        styles_ua: ["Фрірайд", "Даунхіл"],
        deck: {
            shape: parts.decks.shape.ROCCET_RACCON,
            flex: parts.decks.flex.HARD,
            graphic: parts.decks.graphic.STD_PRINT_2
        },
        griptape: parts.griptapes.griptape.CH_BLACK,
        trucks: parts.trucks.BEAR_GRIZZLY_GEN5,
        wheels: parts.wheels.HAWGS_MINIMONSTERS,
        picture_url: "assets/images/completes/complete_1.jpg"
    }
};