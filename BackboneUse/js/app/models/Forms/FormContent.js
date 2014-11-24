define(['underscore', 'backbone', 'models/Forms/FieldValues/FieldValueCollection'],
    function (_, Backbone, FieldValueCollection) {

        var FormContent = Backbone.Model.extend({
            default: {
                Id: 0,
                FormId: 0,
                FieldValues: null
            },
            initialize: function () {
                FieldValues = new FieldValueCollection();
            }
        });


        return FormContent;

    })