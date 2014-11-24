



define([
  'jquery',
  'underscore',
  'backbone',
  'views/product/ProductContainerView',
  'views/Forms/FormConfigView',
  'views/FormContents/FormListView',
  'views/Items/ItemAddView',
], function ($, _, Backbone, ProductView, FormConfigView, FormListView, itemAddView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            'New': 'ItemAddView',
            'Configuration': 'configurationForm',
            '*actions': 'ListView'
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
        ListView: function () {
            var formListView = new FormListView();
            formListView.render(function ($viewNode) {
                $('#page').html($viewNode);
            });
          
        },
        ItemAddView: function () {
            var addView = new itemAddView();
            addView.render(function ($viewNode) {
                $('#page').html($viewNode);
            });
          
        }
    });

    return AppRouter;
});

