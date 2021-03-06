﻿
define([
  'jquery',
  'underscore',
  'backbone',
 'jquery_tmpl',
  'models/product/Product',
  'models/product/ProductCollection',
   'views/product/ProductDetailView',
  'text!templates/product/ProductListTemplete.html'
], function ($, _, Backbone, jqueryTemp, Product, ProductCollection, InserProductView, Template) {
    var productListView = Backbone.View.extend({
        tagName: 'tbody',
        events: {
            'click .update': 'UpdateItem'
        },
        initialize: function (options) {
            this.options.OnProductUpdate = options.OnProductUpdate;
            this.collection = new ProductCollection();
        },
        render: function (onRenderCompleted) {
            var self = this;
            RenderProducts.apply(this);
            onRenderCompleted(this.$el);
        },
        AddProduct: function (item) {
            item.set('id', new Date().getTime());
            item.on('change', RenderProducts, this);
            this.collection.add(item);
            RenderProducts.apply(this);
        },
        UpdateItem: function (event) {
            var productid = $(event.currentTarget).data('id')
            var product = this.collection.get(productid);
            this.options.OnProductUpdate(product);
        }
    });

    function RenderProducts() {
        var viewProducts = ConvertCollectionToViewModel.apply(this);
        var template = $(Template).find('#tmpl-product-list-item');
        this.$el.empty().append(template.tmpl(viewProducts));
    }

    function ConvertCollectionToViewModel() {
        var viewModels = new Array();
        for (i = 0; i < this.collection.length; ++i) {
            var item = this.collection.at(i);
            viewModels.push({ Id: item.get('id'), ProductName: item.get('ProductName'), ProductPrice: item.get('Price') })
        }
        return viewModels;
    }

    return productListView;
})