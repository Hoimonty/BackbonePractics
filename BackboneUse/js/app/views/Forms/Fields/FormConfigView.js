/// <reference path="FieldViewFactory.js" />

define(['underscore', 'backbone', 'jquery_ui', 'text!templates/Forms/FormConfigTemplete.html', 'Repositories/FormRepository', 'text!templates/Forms/TypeTemplete.html', 'views/Forms/Fields/FieldViewFactory', 'models/Forms/Fields/Field'],
    function (_, Backbone, Jquery_UI, templete, FromRepository, TypeListTemplete, FieldViewFactory, Field) {
        var formConfigView = Backbone.View.extend({

            render: function () {
                var self = this;
                this.$el.html(templete);
                FromRepository.GetAllowedFields(function (data) {
                    self.collection = data;
                    for (var i = 0; i < self.collection.models.length; i++) {
                        var mood='Caption';
                        
                        var view = FieldViewFactory.GetView(self.collection.models[i], mood, '#listType');
                        view.render(function ($viewNode) {

                           
                        });
                      //  self.$el.find('#listType').append($(TypeListTemplete).tmpl(self.collection.models[i].attributes));
                    }
                });
                $("#listType li").draggable({
                    appendTo: "body",
                    helper: "clone"
                });
                $("#right ul").droppable({
                    drop: function (event, ui) {
                      //  alert(ui.helper.attributes);
                       // $(this).find(".placeholder").remove();
                        var type = ui.draggable.text();
                        var field = new Field({ 'Type': type });
                        var view = FieldViewFactory.GetView(field, 'Configuration', '#sortable');
                        view.render(function ($viewNode) {


                        });
                     //   $("<li class='ui-widget-content'></li>").html(ui.draggable.html()).appendTo(this);
                        $(".accordion").accordion({
                            collapsible: true
                        });
                    }
                });
               
            }
        });

        return formConfigView;
    })