
define(['underscore', 'backbone', 'models/Forms/Fields/Number', 'text!templates/Forms/FormTemplete.html', 'text!templates/Forms/TypeTemplete.html'],
    function (_, Backbone, NumberModel, FormTemplete, TypeListTemplete) {
        var NumberView = Backbone.View.extend({
            initialize: function (options) {
                this.mood = options.mood;
            },
            render: function (onRenderCompleted) {
                if (this.mood == 'Caption') {
                    $(this.$el).append($(TypeListTemplete).tmpl(this.model.attributes));
                    onRenderCompleted(this.$el);
                }
                if (this.mood == 'Configuration') {
                    var numberModel = new NumberModel();
                    numberModel.Type = 'Number';
                    $(this.$el).append($(FormTemplete).tmpl(numberModel));
                    onRenderCompleted(this.$el);
                }
                
            }
        });



        return NumberView;
    });