define(['backbone', 'text!templates/FormContents/FieldValue/SingleLineTextValueTemplete.html'],
    function (Backbone, templete) {
        var SingleLineValueView = Backbone.View.extend({
         
            render: function (onRenderCompleted) {
                var self = this;
                this.setElement($(templete).find('#t_SingleLineText').tmpl());
                onRenderCompleted(this.$el);
            }
        });

        return SingleLineValueView;
    })