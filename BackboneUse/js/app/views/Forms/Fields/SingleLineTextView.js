
define(['underscore', 'backbone', 'models/Forms/Fields/SingleLineText', 'text!templates/Forms/FormTemplete.html', 'text!templates/Forms/TypeTemplete.html'],
    function (_, Backbone, SingleLineTextModel, FormTemplete, TypeListTemplete) {
        var SingleLineTextView = Backbone.View.extend({
            render: function (onRenderCompleted) {
               // this.$el.empty();
                $('#listType').append($(TypeListTemplete).tmpl(this.model.attributes));
                onRenderCompleted(this.$el);
            }
        });



        return SingleLineTextView;
    });