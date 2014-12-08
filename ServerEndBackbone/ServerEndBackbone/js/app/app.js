



define([
  'jquery',
  'underscore',
  'backbone',
  'views/product/ProductContainerView',
  'views/Forms/FormConfigView',
  'views/FormContents/FormListView',
  'views/Items/ItemAddView',
  'views/Items/ItemEditView'
], function ($, _, Backbone, ProductView, FormConfigView, FormListView, itemAddView, ItemEditView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            'New': 'ItemAddView',
            'Configuration': 'configurationForm',
            'ItemEdit/:id': 'ItemEdit',
            'ItemDelete': 'ItemDelete',
            '*actions': 'ListView'
        },
        initialize: function () {
            Backbone.history.start();
        },
        ItemEdit: function (id) {
            var formTableDetail = new ItemEditView({ key: id });
            formTableDetail.render(function ($viewNode) {
                $('#page').html($viewNode);
            });
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

        },
        ItemDelete: function ()
        {
            this.ListView();
        }
    });

    return AppRouter;
});

