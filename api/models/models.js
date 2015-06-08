///<reference path="../interfaces/interfaces.ts"/>
var data;
(function (data) {
    var models;
    (function (models) {
        var Contact = (function () {
            function Contact() {
            }
            Contact.prototype.getFullName = function () {
                //TODO: Iterate over array of middle names.
                return this.lastName + ', ' + this.firstName;
            };
            return Contact;
        })();
        models.Contact = Contact;
        var Matter = (function () {
            function Matter() {
            }
            return Matter;
        })();
        models.Matter = Matter;
    })(models = data.models || (data.models = {}));
})(data || (data = {}));
