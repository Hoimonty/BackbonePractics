define(['underscore', 'backbone', 'Repositories/FormRepository', 'text!templates/Items/ItemListViewTemplete.html'],
    function (_, Backbone, FromRepository, templete) {
        var ItemListView = Backbone.View.extend({
            tagName: 'tr',
            render: function (onRenderCompleted) {
                var self = this;
                var field = FromRepository.AddFields("");
                for (var k = 0; k < field.length; k++) {
                    var fieldvalue = this.model;
                    for (var e = 0; e < fieldvalue.FieldValues.length; e++) {
                        if (fieldvalue.FieldValues[e].FieldId == field[k].Id)
                        { this.$el.append($(templete).find('#ItemList').tmpl(fieldvalue.FieldValues[e])); }
                    }
                }
                //For all List
                    //var fieldvalue = this.model;
                    //for (var e = 0; e < fieldvalue.FieldValues.length; e++) {
                        
                    //    this.$el.append($(templete).find('#ItemList').tmpl(fieldvalue.FieldValues[e])); 
                    //}
                
                var ID=this.model.toJSON().Id;
                this.$el.append($(templete).find('#ItemEdit').tmpl({ Id: ID }));
                onRenderCompleted(this.$el);
            }
        });

        return ItemListView;
    })