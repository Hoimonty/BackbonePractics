/// <reference path="../models/Forms/Fields/Field.js" />
define([
    'underscore', 'backbone', 'models/Forms/Fields/Field', 'models/Forms/Fields/FieldCollection'],
    function (_, Backboone, Field, FieldCollection) {

        var _Forms = {};
        var _FormContents = {};

        var addedFieldCollectionList = new FieldCollection();
        var fieldCollectionList = new FieldCollection();
        fieldCollectionList.add(new Field({ 'Id': 1, 'Type': 'SingleLineText' }));
        fieldCollectionList.add(new Field({ 'Id': 3, 'Type': 'Checkbox' }));
        fieldCollectionList.add(new Field({ 'Id': 2, 'Type': 'Number' }));

        var FormRepository = {
            GetAllowedFields: function (onSuccess) {
                onSuccess(fieldCollectionList);
            },
            SaveForm: function (fieldCollection) {
                var form = new Form()
                _Forms[form.Id] = form;
            },
            GetDefaultFormContent: function (formId) {
                form = _Forms[formId];
                new FormContent();
            },
            SaveFormContent: function (formContent) {
            },
            AddAllowedFields: function (fields) {
                if (fields != "") {
                    var ID = new Date();
                    addedFieldCollectionList.add(new Field({ 'Id': ID, 'Type': fields }));
                }
                return addedFieldCollectionList.toJSON();
            }
        }



        return FormRepository;
    });