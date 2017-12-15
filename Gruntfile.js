module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    var config = {
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            options: {
                transform: [require('brfs')],
                browserifyOptions: {
                    basedir: "Frontend/src/js/"
                }
            },
            landing: {
                src: 'Frontend/src/landing.js',
                dest: 'Frontend/www/assets/js/landing.js'
            },
            constructor: {
                src: 'Frontend/src/constructor.js',
                dest: 'Frontend/www/assets/js/constructor.js'
            },
            completes: {
                src: 'Frontend/src/completes.js',
                dest: 'Frontend/www/assets/js/completes.js'
            },
            orderPage: {
                src: 'Frontend/src/orderPage.js',
                dest: 'Frontend/www/assets/js/orderPage.js'
            }
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "Frontend/www/assets/css/common.css": "Frontend/www/assets/less/common.less",
                    "Frontend/www/assets/css/landing.css": "Frontend/www/assets/less/landing.less",
                    "Frontend/www/assets/css/constructor.css": "Frontend/www/assets/less/constructor.less",
                    "Frontend/www/assets/css/completes.css": "Frontend/www/assets/less/completes.less",
                    "Frontend/www/assets/css/orderPage.css": "Frontend/www/assets/less/orderPage.less"
                }
            }
        }
    };

    var watchDebug = {
        options: {
            'no-beep': true
        },
        //Назва завдання будь-яка
        scripts: {
            //На зміни в яких файлах реагувати
            files: ['Frontend/src/**/*.js', 'Frontend/**/*.ejs'],
            //Які завдання виконувати під час зміни в файлах
            tasks: ['browserify:pizza']
        }
    };


    config.watch = watchDebug;
    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // TODO configure below
    grunt.registerTask('default',
        [
            'browserify:landing',
            //'browserify:constructor',
            'browserify:completes',
            'browserify:orderPage',
            'less'
        ]
    );

};