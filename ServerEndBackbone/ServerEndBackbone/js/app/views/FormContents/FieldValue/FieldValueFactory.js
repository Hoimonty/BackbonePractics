define([
    'underscore', 'backbone', 'views/FormContents/FieldValue/SingleLineTextValueView', 'views/FormContents/FieldValue/CheckboxValueView', 'views/FormContents/FieldValue/NumberValueView'],
    function (_, Backboone, SingleLineTextView, CheckboxView, NumberView) {

        var FieldValueViewFactory = {
            GetView: function (model, mood) {
                var Model = model;
             
                var params = JSON.stringify(model);
                if (Model.Type == 'SingleLineText') {
                    return new SingleLineTextView({ model: Model });
                }
                else if (Model.Type == 'Number') {
                    return new NumberView({ model: Model });
                }
                else if (Model.Type == 'Checkbox') {
                    return new CheckboxView({ model: Model });
                }
            }
        }

        return FieldValueViewFactory;
    });