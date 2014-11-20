
define(['underscore', 'backbone', 'models/Forms/Fields/SingleLineText', 'text!templates/Forms/FormTemplete.html', 'text!templates/Forms/TypeTemplete.html'],
    function (_, Backbone, SingleLineTextModel, FormTemplete, TypeListTemplete) {
        var SingleLineTextView = Backbone.View.extend({
            initialize: function (options) {
                this.mood = options.mood;
            },
            render: function (onRenderCompleted) {
                if (this.mood == 'Caption') {
                    $(this.$el).append($(TypeListTemplete).tmpl(this.model.attributes));
                    onRenderCompleted(this.$el);
                }
               // this.$el.empty();
                //  $('#listType').append($(TypeListTemplete).tmpl(this.model.attributes));
                if (this.mood == 'Configuration') {
                    var singleLineTextModel = new SingleLineTextModel();
                    singleLineTextModel.Type = 'Single Line';
                    $(this.$el).append($(FormTemplete).tmpl(singleLineTextModel));
                    onRenderCompleted(this.$el);
                }
            }
        });



        return SingleLineTextView;
    });