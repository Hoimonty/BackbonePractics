
define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    var Product = Backbone.Model.extend({
        defaults: {
            SLNo: 0,
            ProductName: "",
            Price: ""

        }
    });

    return Product;

});
