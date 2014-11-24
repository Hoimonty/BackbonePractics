define(['underscore', 'backbone', 'Repositories/FormRepository', 'views/FormContents/FieldValue/FieldValueFactory', 'text!templates/Items/ItemAddViewTemplete.html'],
    function (_, Backbone, FromRepository,FieldValueFactory,templete) {
        var AddView = Backbone.View.extend({
            events: {
                'click #add': 'SaveItem'
            },
            render: function (onRenderCompleted) {
                var self = this;
                this.$el.html(templete);
                var allCollection = FromRepository.AddAllowedFields("");
                for (var i = 0; i < allCollection.length; i++) {
                    var view = FieldValueFactory.GetView(allCollection[i]);
                    view.render(function ($viewNode) {
                        self.$('#addItems').append($viewNode);
                    });
                }
                onRenderCompleted(this.$el);
            },
            SaveItem: function (event) {
            
            }
        });

        return AddView;
    })