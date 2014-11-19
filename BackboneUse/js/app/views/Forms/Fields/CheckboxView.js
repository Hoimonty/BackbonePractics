define(['underscore', 'backbone', 'models/Forms/Fields/Checkbox', 'text!templates/Forms/FormTemplete.html'],
    function (_, Backbone, CheckboxModel, FormTemplete) {
        var CheckboxView = Backbone.View.extend({
            render: function (onRenderCompleted) {
                this.$el.empty();
                this.$el.append($(FormTemplete).tmpl(CheckboxModel));
                onRenderCompleted(this.$el);
            }
        });



        return SingleLineTextView;
    });