/// <reference path="SingleLineText.js" />
define(['underscore', 'backbone', 'models/Forms/Fields/Field'],
    function (_, Backbone, Field) {

        var SinglelineText = Field.extend({
            default: {
                Mandatory: false,
                Type: 'SingleLine'
            }
        });

        return SinglelineText;

    })