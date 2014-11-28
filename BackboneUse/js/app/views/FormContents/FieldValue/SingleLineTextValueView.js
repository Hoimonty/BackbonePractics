define(['backbone', 'text!templates/FormContents/FieldValue/SingleLineTextValueTemplete.html', 'Repositories/FormRepository'],
    function (Backbone, templete, FromRepository) {
        var SingleLineValueView = Backbone.View.extend({
            events: {
                'change .txtSingleLine': 'SaveItemValue'
            },
            render: function (onRenderCompleted) {  
                var self = this;
                this.setElement($(templete).find('#t_SingleLineText').tmpl(this.model));
                onRenderCompleted(this.$el);
            },
            SaveItemValue: function () {
                var fieldId = this.model.Id;
                var value = $("#" + fieldId).val();

                var fieldValue = FromRepository.SaveFieldValue(fieldId, value);
            }
        });

        return SingleLineValueView;
    })