define(['underscore', 'backbone', 'models/Forms/FieldValues/FieldValue'],
   function (_, Backboone, FieldValue) {
       var FieldValueCollection = Backbone.Collection.extend({
           model: FieldValue
       });

       return FieldValueCollection;
   })