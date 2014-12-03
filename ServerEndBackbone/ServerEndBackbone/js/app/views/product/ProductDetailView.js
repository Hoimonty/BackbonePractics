
define(['jquery', 'backbone', 'text!templates/product/ProductDetailTemplete.html'],
    function ($, Backbone, Template) {

        var ItemDetailsView = Backbone.View.extend({
            events: {
                'click #add': 'SaveItem'
            },
            initialize: function (options) {
                this.options.OnProductSave = options.OnProductSave;
            },
            render: function (onRenderComplete) {
                var self = this;
                RenderProduct.apply(this);
                onRenderComplete(this.$el);
            },
            RefreshView: function () {
                RenderProduct.apply(this);
            },
            SaveItem: function (event) {
                this.model.set({
                    SLNo: this.counter, // modify item defaults,
                    ProductName: this.$el.find('#txtProductName').val(),
                    Price: this.$el.find('#txtProductPrice').val()
                });
                this.options.OnProductSave(this.model);
            }
        });


        function RenderProduct() {
            var viewProduct = { ProductName: this.model.get('ProductName'), ProductPrice: this.model.get('Price') };
            this.$el.empty().append($(Template).tmpl(viewProduct));
        }

        return ItemDetailsView;
    });