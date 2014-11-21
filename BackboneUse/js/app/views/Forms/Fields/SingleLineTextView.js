
define(['underscore', 'backbone', 'models/Forms/Fields/SingleLineText', 'text!templates/Forms/Fields/SingleLineTextViewTemplete.html'],
    function (_, Backbone, SingleLineTextModel, Templete) {
        var SingleLineTextView = Backbone.View.extend({
            initialize: function (options) {
                this.mood = options.mood;
            },
            Templete: {
                Caption: $(Templete).find('#_t_Caption'),
                Configuration: $(Templete).find('#_t_Configuration')
            },
            render: function (onRenderCompleted) {
                this.setElement(GetTemplete.apply(this).tmpl(this.model.attributes));
                onRenderCompleted(this.$el);
            }
        });

        function GetTemplete() {
            if (this.mood == 'Caption') {
                return this.Templete.Caption;
            }
            if (this.mood == 'Configuration')
                return this.Templete.Configuration;
        }

        return SingleLineTextView;
    });