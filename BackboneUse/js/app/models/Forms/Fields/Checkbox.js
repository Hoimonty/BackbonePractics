define(['underscore', 'backbone', 'models/Forms/Fields/Field'],
    function (_, Backbone,Field) {
        var Checkbox = Field.extend({
            default: {
                Type: 'Checkbox'
            },
            CreateDefaultValue: function () {
                return new CheckboxFieldValue({
                    Id: new Date().getTime(),
                    FieldId: this.Id
                });
            }
        });
        return Checkbox;

    })