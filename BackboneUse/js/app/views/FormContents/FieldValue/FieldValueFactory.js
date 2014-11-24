define([
    'views/FormContents/FieldValue/SingleLineTextValueView', 'views/FormContents/FieldValue/CheckboxValueView', 'views/FormContents/FieldValue/NumberValueView'],
    function (SingleLineTextView, CheckboxView, NumberView) {

        var FieldValueViewFactory = {
            GetView: function (model, mood) {
                if (model.Type == 'SingleLineText') {
                    return new SingleLineTextView({ model: model, mood: mood });
                }
                else if (model.Type == 'Number') {
                    return new NumberView({ model: model, mood: mood });
                }
                else if (model.Type == 'Checkbox') {
                    return new CheckboxView({ model: model, mood: mood });
                }
            }
        }

        return FieldValueViewFactory;
    });