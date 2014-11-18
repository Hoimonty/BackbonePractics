


define([
  'jquery',
  'underscore',
  'backbone',
  'views/product/ProductContainerView'
], function ($, _, Backbone, ProductView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            'addProduct': 'addProduct',
            // Default
            '*actions': 'addProduct'
        },
        initialize: function () {
            Backbone.history.start();
        },

        addProduct: function () {
            var addProductView = new ProductView();
            addProductView.render();
        }
    });

    return AppRouter
});

