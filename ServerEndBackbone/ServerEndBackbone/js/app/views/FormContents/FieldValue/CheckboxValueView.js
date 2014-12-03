define(['underscore', 'backbone', 'text!templates/FormContents/FieldValue/CheckboxValueTemplete.html', 'Repositories/FormRepository'],
    function (_, Backbone, templete, FromRepository) {
        var CheckboxValueView = Backbone.View.extend({
            render: function (onRenderCompleted) {
                var self = this;
                this.setElement($(templete).find('#t_checkbox').tmpl(this.model));
                onRenderCompleted(this.$el);
            }
          
        });

        return CheckboxValueView;
    })