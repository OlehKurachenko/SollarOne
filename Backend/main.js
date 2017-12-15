var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

function configureEndpoints(app) {
    var pages = require('./pages');
    var data = require('./data');
    var api = require('./api');

    //Налаштування URL за якими буде відповідати сервер
    //Отримання списку піц
    //app.get('/api/get-pizza-list/', api.getPizzaList);
    //app.post('/orderpost', api.createOrder);

    //Сторінки
    //Головна сторінка
    //app.get('/', pages.mainPage);

    //Сторінка замовлення
    //app.get('/order', pages.orderPage);

    app.get('/longboards', pages.completes);

    app.get('/', pages.landing);

    app.get('/order', pages.order);

    app.post('/order', function (data) {
        console.log("Order received");
        console.log(data);
    });

    app.get('/api/getCompletesList', data.getCompletesList);


    //Якщо не підійшов жоден url, тоді повертаємо файли з папки www
    app.use(express.static(path.join(__dirname, '../Frontend/www')));
}

function startServer(port) {
    //Створюється застосунок
    var app = express();

    //Налаштування директорії з шаблонами
    app.set('views', path.join(__dirname, 'pageTemplates'));
    app.set('view engine', 'ejs');

    //Налаштування виводу в консоль списку запитів до сервера
    app.use(morgan('dev'));

    //Розбір POST запитів
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //Налаштовуємо сторінки
    configureEndpoints(app);

    //Запуск додатка за вказаним портом
    app.listen(port, function () {
        console.log('My Application Running on http://localhost:' + port + '/');
    });
}

exports.startServer = startServer;