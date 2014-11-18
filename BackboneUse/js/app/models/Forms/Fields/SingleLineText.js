define(['underscore','backbone'],
    function (_,Backbone) {
        var SinglelineText = Backbone.Model.extend({
            default: {
                Id: 0,
                Name:"",
                Description: "",
                Mandatory: false
            }
        });
        return SinglelineText;

    })