define([
    'backbone',
    'models/Forms/Fields/Number',
    'text!templates/Forms/Fields/NumberViewTemplate.html'],
    function (Backbone, NumberModel, Templete) {

        var NumberView = Backbone.View.extend({
            Template: {
                Caption: $(Templete).find('#_t_Caption'),
                Configuration: $(Templete).find('#_t_Configuration'),
            },
            initialize: function (options) {
                this.mood = options.mood;
            },
            render: function (onRenderCompleted) {
                this.setElement(GetTemplate.apply(this).tmpl(this.model.toJSON()));
                onRenderCompleted(this.$el);
            }
        });

        function GetTemplate() {
            if (this.mood == 'Caption') {
                return this.Template.Caption;
            }
            if (this.mood == 'Configuration') {
                return this.Template.Configuration;
            }
        }

        return NumberView;
    });