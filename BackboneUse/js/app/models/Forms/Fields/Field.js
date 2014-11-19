define(['underscore', 'backbone'],
    function (_, Backbone) {

        var Field = Backbone.Model.extend({
            default: {
                Id: 0,
                Name: "",
                Description: ""
            }
        });


        return Field;

    })