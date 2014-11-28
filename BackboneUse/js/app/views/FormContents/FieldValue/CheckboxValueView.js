define(['underscore', 'backbone', 'text!templates/FormContents/FieldValue/CheckboxValueTemplete.html', 'Repositories/FormRepository'],
    function (_, Backbone, templete, FromRepository) {
        var CheckboxValueView = Backbone.View.extend({
            events: {
                'click .chkBox': 'SaveItemValue'
            },
            render: function (onRenderCompleted) {
                var self = this;
                this.setElement($(templete).find('#t_checkbox').tmpl(this.model));
                onRenderCompleted(this.$el);
            },
            SaveItemValue: function (event) {
                var fieldId = this.model.Id;
                var value = "";
                if ($("#" + fieldId).is(':checked'))
                { value = "true" } 
                else
                { value = "false" }
                var fieldValue = FromRepository.SaveFieldValue(fieldId, value);
            }
        });

        return CheckboxValueView;
    })