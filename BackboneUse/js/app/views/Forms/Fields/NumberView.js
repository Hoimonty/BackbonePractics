
define(['underscore', 'backbone', 'models/Forms/Fields/Number', 'text!templates/Forms/FormTemplete.html'],
    function (_, Backbone, NumberModel,FormTemplete) {
        var NumberView = Backbone.View.extend({
            render: function () {
                this.$el.empty();
                this.$el.append($(FormTemplete).tmpl(NumberModel));
            }
        });



        return NumberView;
    });