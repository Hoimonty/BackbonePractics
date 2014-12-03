define(['backbone', 'text!templates/FormContents/FieldValue/SingleLineTextValueTemplete.html', 'Repositories/FormRepository'],
    function (Backbone, templete, FromRepository) {
        var SingleLineValueView = Backbone.View.extend({
            render: function (onRenderCompleted) {  
                var self = this;
                this.setElement($(templete).find('#t_SingleLineText').tmpl(this.model));
                onRenderCompleted(this.$el);
            }
        });

        return SingleLineValueView;
    })