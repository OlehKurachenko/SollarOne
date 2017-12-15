var parts = require('./parts');

module.exports = {
    JET_RACCON: {
        name_ua: "Реактивний Єнот",
        styles_ua: ["Фрірайд", "Даунхіл"],
        deck: {
            shape: parts.decks.shape.ROCCET_RACCON,
            flex: parts.decks.flex.HARD,
            graphic: parts.decks.graphic.STD_PRINT_2
        },
        griptape: parts.griptapes.griptape.CH_BLACK,
        trucks_c: parts.trucks.trucks.BEAR_GRIZZLY_GEN5,
        wheels_c: parts.wheels.wheels.HAWGS_MINIMONSTERS,
        picture_url: "assets/images/completes/complete_1.jpg"
    },
    DANCING_SNAKE: {
        name_ua: "Танцююча змія",
        styles_ua: ["Денсинг"],
        deck: {
            shape: parts.decks.shape.FLEX_FOX,
            flex: parts.decks.flex.MEDIUM,
            graphic: null
        },
        griptape: parts.griptapes.griptape.CH_WHITE,
        trucks_c: parts.trucks.trucks.PARIS_V2_180,
        wheels_c: parts.wheels.wheels.HAWGS_FATTIE_70,
        picture_url: "assets/images/completes/complete_5.jpg"
    },
    FAU_RACCON: {
        name_ua: "Потужний Єнот",
        styles_ua: ["Фрірайд"],
        deck: {
            shape: parts.decks.shape.ROCCET_RACCON,
            flex: parts.decks.flex.SOFT,
            graphic: parts.decks.graphic.STD_PRINT_3
        },
        griptape: parts.griptapes.griptape.CH_BLACK,
        trucks_c: parts.trucks.trucks.BEAR_GRIZZLY_GEN5,
        wheels_c: parts.wheels.wheels.HAWGS_MINIMONSTERS,
        picture_url: "assets/images/completes/complete_2.jpg"
    },
    BLUE_RACCON: {
        name_ua: "Смішний Єнот",
        styles_ua: ["Фрірайд", "Карвінг"],
        deck: {
            shape: parts.decks.shape.ROCCET_RACCON,
            flex: parts.decks.flex.HARD,
            graphic: parts.decks.graphic.STD_PRINT_2
        },
        griptape: parts.griptapes.griptape.CH_BLACK,
        trucks_c: parts.trucks.trucks.BEAR_GRIZZLY_GEN5,
        wheels_c: parts.wheels.wheels.HAWGS_MINIMONSTERS,
        picture_url: "assets/images/completes/complete_3.jpg"
    }
};