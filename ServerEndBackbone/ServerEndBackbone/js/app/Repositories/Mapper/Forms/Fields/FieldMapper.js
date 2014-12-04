define([
    'jquery', 'backbone', 'models/Forms/Fields/Field', 'models/Forms/Fields/FieldCollection'],
    function ($, Backbone, Field, FieldCollection) {


        function MapToModel(contract) {
            return new Field(contract);
        }

        function MapToCollection(contracts) {
            var fieldCollection = new FieldCollection();
            $.each(contracts, function (index, contract) {
                fieldCollection.add(MapToModel(contract));
            });
            return fieldCollection;
        }
      

        return {
            MapToModel: MapToModel,
            MapToCollection: MapToCollection,
          
        };
    })