define(['underscore', 'backbone'],
    function (_, Backbone) {

        var FieldValue = Backbone.Model.extend({
            default: {
                Id: 0,
                FieldId: 0,
                Value: null
            }
        });


        return FieldValue;

    })