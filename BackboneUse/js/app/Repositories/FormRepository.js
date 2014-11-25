/// <reference path="../models/Forms/FieldValues/FieldValueCollection.js" />
/// <reference path="../models/Forms/FieldValues/FieldValue.js" />
/// <reference path="../models/Forms/Form.js" />
/// <reference path="../models/Forms/Fields/Field.js" />
define([
    'underscore', 'backbone', 'models/Forms/Fields/Field', 'models/Forms/Fields/FieldCollection', 'models/Forms/FieldValues/FieldValue', 'models/Forms/FieldValues/FieldValueCollection', 'models/Forms/Form'],
    function (_, Backboone, Field, FieldCollection, FieldValue, FieldValueCollection, Form) {

        var _Forms = {};
        var _FormContents = {};
       // var 
        var addedFieldCollectionList = new FieldCollection();
        var fieldCollectionList = new FieldCollection();
        var fieldValueCollection = new FieldValueCollection();
        fieldCollectionList.add(new Field({ 'Id': 1, 'Type': 'SingleLineText' }));
        fieldCollectionList.add(new Field({ 'Id': 3, 'Type': 'Checkbox' }));
        fieldCollectionList.add(new Field({ 'Id': 2, 'Type': 'Number' }));

        var FormRepository = {
            GetAllowedFields: function (onSuccess) {
                onSuccess(fieldCollectionList);
            },
            SaveForm: function (fieldCollection, onSuccess) {
                var id = new Date().getTime();
                var form = new Form({Id:id, Fields: fieldCollection})
                _Forms[form.Id] = form;

            },
            GetDefaultFormContent: function (formId, onSuccess) {
                form = _Forms[formId];
                onSuccess(form, form.CreateDefaultFormContent());
            },
            SaveFormContent: function (fieldID,fieldValue) {
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
                return fieldValueCollection.toJSON();
            }
        }



        return FormRepository;
    });