
define(['underscore', 'backbone', 'models/Forms/Fields/SingleLineText', 'text!templates/Forms/FormTemplete.html'],
    function (_, Backbone, SingleLineTextModel, FormTemplete) {
        var SingleLineTextView = Backbone.View.extend({
            render: function () {
                this.$el.empty();
                this.$el.append($(FormTemplete).tmpl(SingleLineTextModel));
            }
        });



        return SingleLineTextView;
    });