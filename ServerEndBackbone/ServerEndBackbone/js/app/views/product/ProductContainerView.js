
define([
  'jquery',
  'underscore',
  'backbone',
 'jquery_tmpl',
  'models/product/Product',
  'models/product/ProductCollection',
  'views/product/ProductDetailView',
  'views/product/ProductListView',
  'text!templates/product/ProductContainerTemplete.html',
  'text!templates/product/ProductListTemplete.html'
], function ($, _, Backbone, jqueryTemp, Product, ProductCollection, ProductDetailView, ProductListView, productTemplate, ProductListTemplete) {

    var mainView = Backbone.View.extend({
       // el: $("#page"),
        render: function (onRenderCompleted) {
            var self = this;
            this.$el.html(productTemplate);
            //  this.$el.append(ProductListTemplete);
            var formTable = new ProductListView({
               // el: "#table-style",
                OnProductUpdate: function (product) {
                    var formRight = new ProductDetailView({
                        model: product,
                        OnProductSave: function (item) {
                            formRight.remove();
                        }
                    });
                    formRight.render(function ($viewNode) {
                        self.$('#right').html($viewNode);

                    });
                }
            });
            formTable.render(function ($viewNode) {
                self.$('#table-style').append($viewNode);
            });
            var productAddView = new ProductDetailView({
                //el: "#left",
                model: new Product(),
                OnProductSave: function (item) {
                    formTable.AddProduct(item);
                    productAddView.model = new Product();
                    productAddView.RefreshView();
                }
            });
            productAddView.render(
                function ($viewNode) {
                    self.$('#left').html($viewNode);

            });
            onRenderCompleted(this.$el);
        }
      
    })

    return mainView;
});
