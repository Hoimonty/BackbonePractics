define(['underscore', 'backbone', 'models/Forms/Fields/Field'],
   function (_, Backboone, Field) {
       var FieldCollection = Backbone.Collection.extend({
           model: Field
       });

       return FieldCollection;
   })