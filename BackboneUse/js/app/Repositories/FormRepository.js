/// <reference path="../models/Forms/Fields/Field.js" />
define([
    'underscore', 'backbone', 'models/Forms/Fields/Field', 'models/Forms/Fields/FieldCollection'],
    function (_, Backboone, Field, FieldCollection) {

        var fieldCollectionList = new FieldCollection();
        fieldCollectionList.add(new Field({ 'Id': 1, 'Type': 'SingleLineText' }));
        fieldCollectionList.add(new Field({ 'Id': 3, 'Type': 'Checkbox' }));
        fieldCollectionList.add(new Field({ 'Id': 2, 'Type': 'Number' }));

        var FormRepository = {
            GetAllowedFields: function (onSuccess) {
                onSuccess(fieldCollectionList);
            }
        }

        return FormRepository;
    });