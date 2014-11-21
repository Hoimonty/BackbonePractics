



define([
  'jquery',
  'underscore',
  'backbone',
  'views/product/ProductContainerView',
  'views/Forms/FormConfigView'
], function ($, _, Backbone, ProductView,FormConfigView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            'addProduct': 'addProduct',
            // Default
            '*actions': 'configurationForm'
        },
        initialize: function () {
            Backbone.history.start();
        },

        addProduct: function () {
            var addProductView = new ProductView({
                el: "#page"
            });
            addProductView.render();
        },
        configurationForm: function () {
            var formConfigView = new FormConfigView({
                el: "#page"
            });
            formConfigView.render();
        }
    });

    return AppRouter
});

