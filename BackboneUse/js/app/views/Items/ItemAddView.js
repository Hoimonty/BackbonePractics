define(['underscore', 'backbone', 'Repositories/FormRepository', 'views/FormContents/FieldValue/FieldValueFactory', 'text!templates/Items/ItemAddViewTemplete.html', 'models/Forms/FieldValues/FieldValue'],
    function (_, Backbone, FromRepository, FieldValueFactory, templete, FieldValue) {
        var AddView = Backbone.View.extend({
            events: {
                'click #add': 'SaveItem'
            },
            render: function (onRenderCompleted) {
                var self = this;
                FromRepository.GetDefaultFormContent(new Date().getTime(), function (formContent) {
                    self.model = formContent;
                    self.model.AddFields.each(function (fieldValue) {
                        var view = FieldValueFactory.GetView(fieldValue);
                        view.render(function ($viewNode) {
                            self.$('#addItems').append($viewNode);
                        });
                    });
                    onRenderCompleted(this.$el);
                });
                //  var self = this;
                //  this.$el.html(templete);
                //  this.Collection = FromRepository.AddFields("");
                //for (var i = 0; i < this.Collection.length; i++) {
                //    var view = FieldValueFactory.GetView(this.Collection[i]);
                //      view.render(function ($viewNode) {
                //          self.$('#addItems').append($viewNode);
                //      });
                //  }

            },
            SaveItem: function (event) {
                FromRepository.SaveFormContent(this.model, function () {
                })
            }
        });

        return AddView;
    })