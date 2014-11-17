define([
  'jquery',
  'underscore',
  'backbone',
  'models/product/ProductModel'
], function ($, _, Backbone, ProductModel) {
    var ProductsCollection = Backbone.Collection.extend({
        model: ProductModel
    });

    return ProductsCollection;
});
