define([
    'jqeury', 'backbone', 'models/Forms/Fields/Field', 'models/Forms/Fields/FieldCollection'],
    function ($, Backbone, Field, FieldCollection) {


        function MapToModel(contract) {
        }

        function MapToModels(contracts) {
            var fieldCollection = new FieldCollection();
            
        }

        return {
            MapToMode: MapToModel
        };
    })