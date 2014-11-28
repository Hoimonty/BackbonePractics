define(['underscore', 'backbone', 'models/Forms/FieldValues/FieldValueCollection', 'models/Forms/FormContent'],
    function (_, Backbone, FieldCollection, FormContent) {

        var Form = Backbone.Model.extend({
            default: {
                Id: 0,
                Fields: null
            },
            initialize: function () {
                Fields = new FieldCollection();
            },
            CreateDefaultFormContent: function () {
                var formContent = new FormContent({ 'Id': new Date().getTime(), FormId: this.Id });
                this.Fields.each(function (field) {
                    formContent.FieldValues.add(field.CreateDefaultValue());
                });
                return formContent;
            }
        });


        return Form;

    })