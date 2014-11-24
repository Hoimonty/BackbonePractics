define(['underscore', 'backbone', 'models/Forms/Fields/FieldCollection'],
    function (_, Backbone, FieldCollection) {

        var Form = Backbone.Model.extend({
            default: {
                Id: 0,
                Fields: null
            },
            initialize: function () {
                Fields = new FieldCollection();
            }
        });


        return Form;

    })