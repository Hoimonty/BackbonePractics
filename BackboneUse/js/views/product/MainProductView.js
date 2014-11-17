define([
  'jquery',
  'underscore',
  'backbone',
 'jqueryTemp',
  'models/product/ProductModel',
  'collections/product/ProductCollection',
  'views/product/InsertProductView',
  'views/product/ProductListView',
  'text!templates/product/MainFormTemplete.html',
  'text!templates/product/ProductListTemplete.html'
], function ($, _, Backbone, jqueryTemp, ProductModel, ProductCollection, insertProductItem, ProductListView, productTemplate, productTable) {

    var mainView = Backbone.View.extend({
        el: $("#page"),
        render: function () {
            var self = this;
            this.$el.html(productTemplate);
            //  this.$el.append(productTable);
            var formTable = new ProductListView({
                el: "#table-style",
                OnProductUpdate: function (product) {
                    var formRight = new insertProductItem({
                        model: product,
                        OnProductSave: function (item) {
                            formRight.remove();
                        }
                    });
                    $('#right').empty().append(formRight.render());
                }
            });
            formTable.render();
            var productAddView = new insertProductItem({
                el: "#left",
                model: new ProductModel(),
                OnProductSave: function (item) {
                    formTable.AddProduct(item);
                    productAddView.model = new ProductModel();
                    productAddView.RefreshView();
                }
            });
            productAddView.render();

            // var formRight = new insertProductItem({ el: "#right", OnProductSave: function () { } });


            //    var formRight = new insertProductItem({ el: "#right" });
            //    formRight.render();
            //    formRight.collection.bind('add', formTable.appendItem); // collection event binder


        },
        AddItems: function (item)
        { alert(item); }
    })

    return mainView;
});
