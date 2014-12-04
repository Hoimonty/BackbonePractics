

define(['underscore', 'backbone', 'jquery_ui', 'text!templates/Forms/FormConfigTemplete.html', 'Repositories/FormRepository',  'views/Forms/Fields/FieldViewFactory'],
    function (_, Backbone, Jquery_UI, templete, FromRepository, FieldViewFactory) {
        var formConfigView = Backbone.View.extend({
            events: {
                'click #btnFieldSave': 'SaveFieldItem'
            },
            render: function (onRenderCompleted) {
                var self = this;
                this.$el.html(templete);
                FromRepository.GetAllowedFields(function (data) {
                    self.collection = data;
                    for (var i = 0; i < self.collection.models.length; i++) {
                        var mood = 'Caption';
                        var view = FieldViewFactory.GetView(self.collection.models[i], mood);
                        view.render(function ($viewNode) {
                            self.$('#listType').append($viewNode);
                        });
                    }
                });
                self.$("#listType>div").draggable({
                    appendTo: "body",
                    helper: "clone"
                });
                self.$("#right>div").droppable({
                    drop: function (event, ui) {
                        var type = ui.draggable.data('type');
                        var field = self.collection.where({ Type: type })
                        var view = FieldViewFactory.GetView(field[0], 'Configuration');
                        FromRepository.AddFields(type);
                        view.render(function ($viewNode) {
                            self.$('#sortable').append($viewNode);
                        });

                        $(".accordion").accordion({
                            collapsible: true
                        });
                    }
                });
                onRenderCompleted(this.$el);
            },
            SaveFieldItem: function (event) {
                var allCollection = FromRepository.AddFields("");
                FromRepository.SaveConfigureFormFields(allCollection);
            }
        });

        return formConfigView;
    })