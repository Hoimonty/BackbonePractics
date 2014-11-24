define(['underscore', 'backbone', 'text!templates/FormContents/FormContentViewTemplete.html'],
    function (_, Backbone, templete) {
        var formConfigView = Backbone.View.extend({

            render: function (onRenderCompleted) {
                var self = this;
                this.$el.html(templete);
                onRenderCompleted(this.$el);
            }
        });

        return formConfigView;
    })