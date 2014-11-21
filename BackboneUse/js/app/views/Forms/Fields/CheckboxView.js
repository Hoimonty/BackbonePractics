define(['underscore', 'backbone', 'models/Forms/Fields/Checkbox', 'text!templates/Forms/Fields/CheckboxViewTemplete.html'],
    function (_, Backbone, CheckboxModel, Templete) {
        var CheckboxView = Backbone.View.extend({
            initialize: function (options) {
                this.mood = options.mood;
            },
            Template: {
                Caption: $(Templete).find('#_t_Caption'),
                Configuration: $(Templete).find('#_t_Configuration'),
            },
            render: function (onRenderCompleted) {
                this.setElement(GetTemplate.apply(this).tmpl(this.model.toJSON()));
                onRenderCompleted(this.$el);
            }
        });

        function GetTemplate() {
            if (this.mood == 'Caption')
            {
                return this.Template.Caption;
            }
            if (this.mood = 'Configuration')
            {
                return this.Template.Configuration;
            }
        }

        return CheckboxView;
    });