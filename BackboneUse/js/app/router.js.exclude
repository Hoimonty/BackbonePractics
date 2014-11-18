// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/product/MainProductView'
], function ($, _, Backbone, ProductView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            'addProduct': 'addProduct',
            // Default
            '*actions': 'addProduct'
        },
        initialize: function () {
        },

        addProduct: function () {
            var addProductView = new ProductView();
            addProductView.render();
        }
    });

    return AppRouter
});
