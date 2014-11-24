define(['backbone', 'text!templates/FormContents/FieldValue/NumberValueTemplete.html'],
    function (Backbone, templete) {
        var NumberValueView = Backbone.View.extend({

            render: function (onRenderCompleted) {
                var self = this;
                this.setElement($(templete).find('#t_Number').tmpl());
                onRenderCompleted(this.$el);
            }
        });

        return NumberValueView;
})