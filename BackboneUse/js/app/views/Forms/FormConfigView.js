

define(['underscore', 'backbone', 'jquery_ui', 'text!templates/Forms/FormConfigTemplete.html', 'Repositories/FormRepository', 'text!templates/Forms/TypeTemplete.html', 'views/Forms/Fields/FieldViewFactory', 'models/Forms/Fields/Field'],
    function (_, Backbone, Jquery_UI, templete, FromRepository, TypeListTemplete, FieldViewFactory, Field) {
        var formConfigView = Backbone.View.extend({

            render: function () {
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
                $("#listType>div").draggable({
                    appendTo: "body",
                    helper: "clone"
                });
                $("#right ul").droppable({
                    drop: function (event, ui) {
                        var type = ui.draggable.data('type');
                        var field = self.collection.where({ Type: type })
                        var view = FieldViewFactory.GetView(field[0], 'Configuration');
                        view.render(function ($viewNode) {
                            self.$('#sortable').append($viewNode);
                        });

                        $(".accordion").accordion({
                            collapsible: true
                        });
                       
                    }
                });

            }
        });

        return formConfigView;
    })