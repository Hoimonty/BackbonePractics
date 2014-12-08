define(['underscore', 'backbone', 'text!templates/FormContents/FormContentViewTemplete.html', 'views/Items/ItemListView', 'views/Items/ItemListDetailView', 'Repositories/FormRepository', 'views/Items/ItemEditView'],
    function (_, Backbone, templete, ItemListView, ItemListDetailView, FromRepository,ItemEditView) {
        var formConfigView = Backbone.View.extend({
            events: {
                'click .delete': 'DeleteItem'
            },
            render: function (onRenderCompleted) {
                var self = this;
                this.$el.html(templete);
                onRenderCompleted(this.$el);
                var formTable = new ItemListView();
                formTable.render(function ($viewNode) {
                    self.$('#header').append($viewNode);
                });
                var getFieldContent = FromRepository.GetFieldValueCollection();
                for (var key in getFieldContent) {
                    var formTableDetail = new ItemListDetailView({ model: getFieldContent[key] });
                    formTableDetail.render(function ($viewNode) {
                        self.$('#body').append($viewNode);
                    });
                }
            },
            DeleteItem: function (event)
            {
                var Id = $(event.currentTarget).data('id');
                FromRepository.DeleteFormContent(Id);
            }

        });

        return formConfigView;
    })