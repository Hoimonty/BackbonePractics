/// <reference path="../Items/ItemListView.js" />
define(['underscore', 'backbone', 'text!templates/FormContents/FormContentViewTemplete.html', 'views/Items/ItemListView'],
    function (_, Backbone, templete,ItemListView) {
        var formConfigView = Backbone.View.extend({

            render: function (onRenderCompleted) {
                var self = this;
                this.$el.html(templete);
                onRenderCompleted(this.$el);
                var formTable = new ItemListView();
                formTable.render(function ($viewNode) {
                    $('#header').append($viewNode);
                });
            }
        });

        return formConfigView;
    })