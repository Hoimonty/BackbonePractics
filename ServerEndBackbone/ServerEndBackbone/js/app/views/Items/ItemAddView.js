define(['underscore', 'backbone', 'Repositories/FormRepository', 'views/FormContents/FieldValue/FieldValueFactory', 'text!templates/Items/ItemAddViewTemplete.html', 'models/Forms/FieldValues/FieldValue'],
    function (_, Backbone, FromRepository, FieldValueFactory, templete, FieldValue) {
        var AddView = Backbone.View.extend({
            events: {
                'click #add': 'SaveItem'
            },
            render: function (onRenderCompleted) {
                var self = this;
                self.$el.html(templete);
                FromRepository.GetDefaultFormContent(new Date().getTime(), function (formContent) {
                    self.model = formContent;
                    self.model.FieldValues.each(function (fieldValue) {
                        var value = fieldValue.toJSON();

                        FromRepository.GetField(value.Id, value.FieldId, function (field) {
                            var view = FieldValueFactory.GetView(field.toJSON());
                            view.render(function ($viewNode) {
                                self.$('#addItems').append($viewNode);
                            });
                        });
                        });
                       
                    onRenderCompleted(self.$el);
                });
               

            },
            SaveItem: function (event) {
                var fieldValues=this.model.FieldValues.models;
                for (var i = 0; i < fieldValues.length; i++) {
                    var fieldID = fieldValues[i].attributes.FieldId;
                    var value = $("#" + fieldID).val();
                    if ($("#" + fieldID).hasClass('chkBox')) {
                        if ($("#" + fieldID).is(':checked'))
                        { value = "true" }
                        else
                            value = "false";

                    }
                    fieldValues[i].attributes.Value = value;
                }
                FromRepository.SaveFormContent(this.model.FieldValues, function () {
                });
                this.render();
            }
        });

        return AddView;
    })