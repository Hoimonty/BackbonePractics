/// <reference path="../../../Repositories/FormRepository.js" />
define(['underscore', 'backbone', 'jquery_ui', 'text!templates/Forms/FormConfigTemplete.html', 'Repositories/FormRepository', 'text!templates/Forms/TypeTemplete.html'],
    function (_,Backbone,Jquery_UI,templete,FromRepository,TypeListTemplete) {
        var formConfigView = Backbone.View.extend({

            render: function () {
                var self = this;
                this.$el.html(templete);
                FromRepository.GetAllowedFields(function (data) {
                    self.collection = data;
                    for (var i = 0; i < self.collection.models.length; i++) {
                        var view = FieldViewFactory.GetView(self.collection.models[i]);
                        view.render(function ($viewNode) {

                        });
                        self.$el.find('#listType').append($(TypeListTemplete).tmpl(self.collection.models[i].attributes));
                    }
                });
                $("#listType li").draggable({
                    appendTo: "body",
                    helper: "clone"
                });
                $("#right ol").droppable({
                    drop: function (event, ui) {
                        $(this).find(".placeholder").remove();
                        $("<li></li>").text(ui.draggable.text()).appendTo(this);
                    }
                });
            }
        });

        return formConfigView;
    })