define(['underscore', 'backbone', 'text!templates/FormContents/FieldValue/CheckboxValueTemplete.html'],
    function (_, Backbone, templete) {
        var CheckboxValueView = Backbone.View.extend({

            render: function (onRenderCompleted) {
                var self = this;
                this.setElement($(templete).find('#t_checkbox').tmpl());
                onRenderCompleted(this.$el);
            }
        });

        return CheckboxValueView;
    })