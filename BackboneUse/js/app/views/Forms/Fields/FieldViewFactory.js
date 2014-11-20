
define([
    'views/Forms/Fields/SingleLineTextView', 'views/Forms/Fields/CheckboxView', 'views/Forms/Fields/NumberView'],
    function (SingleLineTextView, CheckboxView, NumberView) {

        var FieldViewFactory = {
            GetView: function (model,mood,el) {
                if (model.get('Type') == 'SingleLineText') {
                    return new SingleLineTextView({ model: model, mood: mood,el:el });
                }
                else if (model.get('Type') == 'Number') {
                    return new NumberView({ model: model, mood: mood, el: el });
                }
                else if (model.get('Type') == 'Checkbox')
                {
                    return new CheckboxView({ model: model, mood: mood, el: el });
                }

            }
        }

        return FieldViewFactory;
    });