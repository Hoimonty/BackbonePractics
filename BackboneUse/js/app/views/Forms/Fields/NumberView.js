
define(['underscore', 'backbone', 'models/Forms/Fields/Number', 'text!templates/Forms/FormTemplete.html', 'text!templates/Forms/TypeTemplete.html'],
    function (_, Backbone, NumberModel, FormTemplete, TypeListTemplete) {
        var NumberView = Backbone.View.extend({
            //render: function () {
            //    this.$el.empty();
            //    this.$el.append($(FormTemplete).tmpl(NumberModel));
            //}
            render: function (onRenderCompleted) {
                //this.$el.empty();
               // this.$el.append($(FormTemplete).tmpl(NumberModel));
                //  onRenderCompleted(this.$el);
                $('#listType').append($(TypeListTemplete).tmpl(this.model.attributes));
                onRenderCompleted(this.$el);
            }
        });



        return NumberView;
    });