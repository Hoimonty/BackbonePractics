define(['underscore', 'backbone', 'models/Forms/Fields/Field'],
    function (_, Backbone,Field) {
        var Number = Field.extend({
            default: {
                Mandatory: false,
                Type: 'Number'
            }
        });
        return Number;

    })