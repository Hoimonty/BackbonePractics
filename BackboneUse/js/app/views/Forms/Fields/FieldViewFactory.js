
define([
    'SingleLineTextView', 'CheckboxView', 'NumberView'],
    function (SingleLineTextView, CheckboxView, NumberView) {

        var FieldViewFactory = {
            GetView: function (model) {
                if (model.get('Type') == 'SingleLineText') {
                    return new SingleLineTextView();
                }
                else if (model.get('Type') == 'Number') {
                    return new NumberView();
                }
                else if (model.get('Type') == 'Checkbox')
                {
                    return new CheckboxView();
                }

            }
        }

        return FormRepository;
    });