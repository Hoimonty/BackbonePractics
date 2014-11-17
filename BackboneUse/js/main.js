require.config({
    paths: {
        jquery: 'libs/jquery/jquery-min',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone-min',
        jqueryTemp: 'libs/jquery/jquery.tmpl',
        templates: '../templates'
    },
    shim: {

        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "jqueryTemp": {
            deps: ["jquery"],
            exports: "jQueryTemp"
        }

    }

});

require(['app'], function (App) {
    App.initialize();
    Backbone.history.start();
});
