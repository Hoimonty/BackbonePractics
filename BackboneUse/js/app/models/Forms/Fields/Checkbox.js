define(['underscore', 'backbone'],
    function (_, Backbone) {
        var Checkbox = Backbone.Model.extend({
            default: {
                Id: 0,
                Name:"",
                Description: ""
              
            }
        });
        return Checkbox;

    })