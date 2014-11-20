
define([
    'views/Forms/Fields/SingleLineTextView', 'views/Forms/Fields/CheckboxView', 'views/Forms/Fields/NumberView'],
    function (SingleLineTextView, CheckboxView, NumberView) {

        var FieldViewFactory = {
            GetView: function (model) {
                if (model.get('Type') == 'SingleLineText') {
                    return new SingleLineTextView({ model: model });
                }
                else if (model.get('Type') == 'Number') {
                    return new NumberView({ model: model });
                }
                else if (model.get('Type') == 'Checkbox')
                {
                    return new CheckboxView({ model: model });
                }

            }
        }

        return FieldViewFactory;
    });