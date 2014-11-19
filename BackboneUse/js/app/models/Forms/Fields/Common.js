define(['underscore', 'backbone'],
    function (_, Backbone) {
        var Common = Backbone.Model.extend({
            default: {
                Id: 0,
                Name: "",
                Description: "",
                test:""
            }
        });
        
        return Common;

    })