define(['underscore', 'backbone', 'models/Forms/Fields/Field'],
    function (_, Backbone,Field) {
        var Checkbox = Field.extend({
            default: {
                Type: 'Checkbox'
            }
        });
        return Checkbox;

    })