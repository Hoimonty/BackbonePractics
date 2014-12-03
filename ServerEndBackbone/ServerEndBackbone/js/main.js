/// <reference path="app/app.js" />
/// <reference path="app/templates/product/ProductListTemplete.html" />
require.config({
    baseUrl: 'js/app',
    paths: {
        jquery: '../libs/jquery/jquery-min',
        underscore: '../libs/underscore/underscore-min',
        backbone: '../libs/backbone/backbone-min',
        jquery_tmpl: '../libs/jquery/jquery.tmpl',
        text: '../libs/require/text',
        jquery_ui: '../libs/jquery/jquery-ui',
        app: 'app',
        templates: 'templates'
    },
    shim: {
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "jquery_tmpl": {
            deps: ["jquery"],
            exports: "$"
        },
        "jquery_ui": {
            deps: ["jquery"],
            exports: "$"
        }

    }

});

require(['app', 'text'], function (App) {
    //  App.initialize();
    var router = new App();


});
