define(['underscore', 'backbone', 'Repositories/FormRepository', 'views/FormContents/FieldValue/FieldValueFactory', 'text!templates/Items/ItemAddViewTemplete.html','models/Forms/FieldValues/FieldValue'],
    function (_, Backbone, FromRepository,FieldValueFactory,templete,FieldValue) {
        var AddView = Backbone.View.extend({
            events: {
                'click #add': 'SaveItem'
            },
            render: function (onRenderCompleted) {
                var self = this;
                this.$el.html(templete);
                this.Collection = FromRepository.AddFields("");
              for (var i = 0; i < this.Collection.length; i++) {
                  var view = FieldValueFactory.GetView(this.Collection[i]);
                    view.render(function ($viewNode) {
                        self.$('#addItems').append($viewNode);
                    });
                }
                onRenderCompleted(this.$el);
            },
            SaveItem: function (event) {
                var fieldCollection;
                for (var j = 0; j < this.Collection.length; j++) {
                    var fieldId = this.Collection[j].Id;
                    var value = self.$("#" + this.Collection[j].Id).val();
                     fieldCollection=FromRepository.SaveFormContent(fieldId, value);

                }
                FromRepository.SaveForm(fieldCollection);
            }
        });

        return AddView;
    })