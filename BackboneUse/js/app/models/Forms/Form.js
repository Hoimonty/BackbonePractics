define(['underscore', 'backbone', 'models/Forms/FieldValues/FieldValueCollection'],
    function (_, Backbone, FieldCollection) {

        var Form = Backbone.Model.extend({
            default: {
                Id: 0,
                Fields: null
            },
            initialize: function () {
                Fields = new FieldCollection();
            },
            CreateDefaultFormContent: function () {
                var formContent = new formContent({ 'Id': new Date().getTime(), FormId: this.formId });
                this.Fields.each(function (field) {
                    formContent.FieldValues.add(field.CreateDefaultValue());
                });
                return formContent;
            }
        });


        return Form;

    })