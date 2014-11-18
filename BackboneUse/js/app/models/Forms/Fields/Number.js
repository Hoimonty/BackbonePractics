define(['underscore', 'backbone'],
    function (_, Backbone) {
        var Number = Backbone.Model.extend({
            default: {
                Id: 0,
                Name: "",
                Description: "",
                Mandatory: false

            }
        });
        return Number;

    })