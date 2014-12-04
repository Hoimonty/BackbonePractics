define([
    'underscore', 'backbone', 'models/Forms/Fields/Field', 'models/Forms/Fields/FieldCollection', 'models/Forms/FieldValues/FieldValue', 'models/Forms/FieldValues/FieldValueCollection', 'models/Forms/Form', 'models/Forms/FormContent', 'Repositories/Mapper/Forms/Fields/FieldMapper'],
    function (_, Backboone, Field, FieldCollection, FieldValue, FieldValueCollection, Form,FormContent,FieldMapper) {

        var _Forms = {};
        var _FormContents = {};
        var addedFieldCollectionList = new FieldCollection();
        //var fieldCollectionList = new FieldCollection();
        var fieldValueCollection = new FieldValueCollection();
        var FormRepository = {
            GetAllowedFields: function (onSuccess) {
                $.ajax({
                    url: "/Home/GetFieldCollections",
                    async: false,
                    success: function (result) {
                        var fieldMapper = FieldMapper.MapToCollection(result);
                        onSuccess(fieldMapper);
                    }
                });
            },
            GetField: function (formId, fieldId, onSuccess) {
                $.ajax({
                    url: "/Home/GetConfigureFields",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({ Id: fieldId.toString() }),
                    async: false,
                    success: function (result) {
                        var fieldMapper = FieldMapper.MapToModel(result);
                        onSuccess(fieldMapper);
                    }
                   
                });
               
               // var field = addedFieldCollectionList.where({ Id: fieldId });
              //  return field;
            },
            SaveForm: function (fieldCollection, onSuccess) {
                var id = new Date().getTime();
                var form = new Form({Id:id, Fields: fieldCollection})
                _Forms[form.Id] = form;

            },
            GetDefaultFormContent: function (formId, onSuccess) {
                var form = new Form({ 'Id': formId });
                form.Fields = addedFieldCollectionList.toJSON();
                onSuccess(form.CreateDefaultFormContent(form));
            },
            SaveFormContent: function (Content) {
                var FormId = new Date().getTime();
                var formContent = new FormContent({ 'Id': new Date().getTime(), 'FormId': FormId });
                formContent.FieldValues = Content.toJSON();
                _FormContents[FormId] = formContent;
                fieldValueCollection = new FieldValueCollection();
            },
            SaveFieldValue: function (fieldID, fieldValue) {
                fieldValueCollection.add(new FieldValue({ 'Id': new Date().getTime(), 'FieldId': fieldID, 'Value': fieldValue }));
                return fieldValueCollection.toJSON();
            },
            AddFields: function (fields) {
                if (fields != "") {
                    var ID = new Date().getTime();
                    addedFieldCollectionList.add(new Field({ 'Id': ID, 'Type': fields }));
                }
                return addedFieldCollectionList.toJSON();
            },
            GetFieldValueCollection: function () {
                return _FormContents;
            },
            UpdateFormContent: function (fieldValues,key) {
                _FormContents[key].FieldValues = fieldValues;
            },
            SaveConfigureFormFields: function (Fields) {
                $.ajax({
                    url: "/Home/AddConfigureFormFields",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({ formFields: Fields }),
                    async: false,
                    success: function (result) {
                        alert(result);
                    }
                });
            }


        }
        return FormRepository;
    });