define(['backbone', 'text!templates/FormContents/FieldValue/NumberValueTemplete.html', 'Repositories/FormRepository'],
    function (Backbone, templete, FromRepository) {
        var NumberValueView = Backbone.View.extend({
         
            render: function (onRenderCompleted) {
                var self = this;
                this.setElement($(templete).find('#t_Number').tmpl(this.model));
                onRenderCompleted(this.$el);
            }
        });

        return NumberValueView;
})