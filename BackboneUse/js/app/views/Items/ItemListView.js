define(['underscore', 'backbone', 'Repositories/FormRepository', 'text!templates/Items/ItemListViewTemplete.html'],
    function (_, Backbone, FromRepository,templete) {
        var ItemListView = Backbone.View.extend({
          tagName:'tr',
            render: function (onRenderCompleted) {
                var self = this;
                var field = FromRepository.AddFields("");
                for (var i = 0; i < field.length; i++) {
                    this.$el.append($(templete).find('#ItemHeader').tmpl(field[i]));
                }
                this.Collection = FromRepository.GetFieldValueCollection();
                var s = FromRepository.GetFieldValueCollection();
                for (var i = 0; i < this.Collection.length; i++) {
                    var field = FromRepository.AddFields("").where({ Id: this.Collection[i].FieldId })
                   
                }
                onRenderCompleted(this.$el);
            }
        });

        return ItemListView;
    })