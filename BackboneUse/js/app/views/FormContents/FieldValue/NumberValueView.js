define(['backbone', 'text!templates/FormContents/FieldValue/NumberValueTemplete.html', 'Repositories/FormRepository'],
    function (Backbone, templete, FromRepository) {
        var NumberValueView = Backbone.View.extend({
            events: {
                'change .txtNumber': 'SaveItemValue'
            },
            render: function (onRenderCompleted) {
                var self = this;
                this.setElement($(templete).find('#t_Number').tmpl(this.model));
                onRenderCompleted(this.$el);
            },
            SaveItemValue: function (event) {
                var fieldId = this.model.Id;
                var value = $("#" + fieldId).val();
              
                var fieldValue = FromRepository.SaveFieldValue(fieldId, value);
            }
        });

        return NumberValueView;
})