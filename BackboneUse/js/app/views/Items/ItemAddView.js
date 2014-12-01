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
                        var field = FromRepository.GetField(value.Id, value.FieldId);
                        var view = FieldValueFactory.GetView(field[0]);
                        view.render(function ($viewNode) {
                            self.$('#addItems').append($viewNode);
                        });
                    });
                    onRenderCompleted(self.$el);
                });
               

            },
            SaveItem: function (event) {
                FromRepository.SaveFormContent(this.model.FieldValues, function () {
                })
            }
        });

        return AddView;
    })