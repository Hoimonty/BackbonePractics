define(['underscore', 'backbone', 'models/Forms/Fields/FieldCollection', 'models/Forms/FormContent', 'models/Forms/FieldValues/FieldValue'],
    function (_, Backbone, FieldCollection, FormContent, FieldValue) {

        var Form = Backbone.Model.extend({
            default: {
                Id: 0,
                Fields: null
            },
            initialize: function () {
                this.Fields = new FieldCollection();
            },
            CreateDefaultFormContent: function (form) {
                var formContent = new FormContent({ 'Id': new Date().getTime(), 'FormId': form.get('Id') });
                // this.Fields.each(function (field) {
                //  formContent.FieldValues.add(field.CreateDefaultValue());
                //  });

                for (var i = 0; i < form.Fields.length; i++) {
                    formContent.FieldValues.add(new FieldValue({ 'Id': new Date().getTime(), 'FieldId': form.Fields[i].Id, 'Value': '' }));
                }
                return formContent;
            }
        });


        return Form;

    })