



define([
  'jquery',
  'underscore',
  'backbone',
  'views/product/ProductContainerView',
  'views/Forms/FormConfigView',
  'views/FormContents/FormContentView'
], function ($, _, Backbone, ProductView,FormConfigView,FormContent) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            'New': 'addProduct',
            'Configuration': 'configurationForm',
            '*actions': 'FormContentView'
        },
        initialize: function () {
            Backbone.history.start();
        },

        addProduct: function () {
            var addProductView = new ProductView();
            addProductView.render(function ($viewNode) {
                $('#page').html($viewNode);
            });
        },
        configurationForm: function () {
            var formConfigView = new FormConfigView();
            formConfigView.render(function ($viewNode) {
                $('#page').html($viewNode);
            });
        },
        FormContentView: function () {
            var formContentView = new FormContent();
            formContentView.render(function ($viewNode) {
                $('#page').html($viewNode);
            });
          
        }
    });

    return AppRouter;
});

