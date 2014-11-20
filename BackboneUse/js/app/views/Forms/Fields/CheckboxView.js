define(['underscore', 'backbone', 'models/Forms/Fields/Checkbox', 'text!templates/Forms/FormTemplete.html', 'text!templates/Forms/TypeTemplete.html'],
    function (_, Backbone, CheckboxModel, FormTemplete, TypeListTemplete) {
        var CheckboxView = Backbone.View.extend({
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
                    var checkboxModel = new CheckboxModel();
                  
                    checkboxModel.Type = 'Checkbox';
                    $(this.$el).append($(FormTemplete).tmpl(checkboxModel));
                    onRenderCompleted(this.$el);
                }
              
               
            }
        });



        return CheckboxView;
    });