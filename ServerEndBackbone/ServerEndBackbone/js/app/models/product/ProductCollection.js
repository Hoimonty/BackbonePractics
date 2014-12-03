
define([
  'jquery',
  'underscore',
  'backbone',
  'models/product/Product'
], function ($, _, Backbone, Product) {
    var ProductsCollection = Backbone.Collection.extend({
        model: Product
    });

    return ProductsCollection;
});
