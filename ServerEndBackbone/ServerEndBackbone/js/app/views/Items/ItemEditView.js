define(['underscore', 'backbone', 'Repositories/FormRepository', 'views/FormContents/FieldValue/FieldValueFactory', 'text!templates/Items/ItemAddViewTemplete.html', 'models/Forms/FieldValues/FieldValue'],
    function (_, Backbone, FromRepository, FieldValueFactory, templete, FieldValue) {
        var AddView = Backbone.View.extend({
            events: {
                'click #add': 'SaveItem'
            },
            initialize: function (options) {
                
                this.options.key = options.key;
                var getFieldContent = FromRepository.GetFieldValueCollection();
                var value = getFieldContent[options.key];
                this.model = value;
            },
            render: function (onRenderCompleted) {
                var self = this;
                self.$el.html(templete);
                for (var i = 0; i < self.model.FieldValues.length; i++) {
                    FromRepository.GetField(self.model.FieldValues[i].Id, self.model.FieldValues[i].FieldId, function (field) {
                        var view = FieldValueFactory.GetView(field.toJSON());
                        view.render(function ($viewNode) {
                            self.$('#addItems').append($viewNode);
                            self.$("#" + self.model.FieldValues[i].FieldId).val(self.model.FieldValues[i].Value);
                            if (self.model.FieldValues[i].Value == "true") {
                                self.$("#" + self.model.FieldValues[i].FieldId).attr('checked', true);
                            }
                        });
                    });
                }
                onRenderCompleted(self.$el);
            },
            SaveItem: function (event) {
                var fieldValues = this.model.FieldValues;
                for (var i = 0; i < fieldValues.length; i++) {
                    var fieldID = fieldValues[i].FieldId;
                    var value = $("#" + fieldID).val();
                    if ($("#" + fieldID).hasClass('chkBox')) {
                        if ($("#" + fieldID).is(':checked'))
                        { value = "true" }
                        else
                            value = "false";

                    }
                    fieldValues[i].Value = value;
                }
                FromRepository.UpdateFormContent(this.model.FieldValues, this.options.key);
                this.render();
            }
        });

        return AddView;
    })