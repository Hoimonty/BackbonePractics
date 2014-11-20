define(['underscore', 'backbone', 'models/Forms/Fields/Checkbox', 'text!templates/Forms/FormTemplete.html', 'text!templates/Forms/TypeTemplete.html'],
    function (_, Backbone, CheckboxModel, FormTemplete, TypeListTemplete) {
        var CheckboxView = Backbone.View.extend({
            render: function (onRenderCompleted) {
                //this.$el.empty();
                //  this.$el.append($(FormTemplete).tmpl(CheckboxModel));
                $('#listType').append($(TypeListTemplete).tmpl(this.model.attributes));
                onRenderCompleted(this.$el);
            }
        });



        return CheckboxView;
    });