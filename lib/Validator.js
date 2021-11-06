"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var Validator = /** @class */ (function () {
    function Validator(fields, values) {
        this._fields = fields;
        this._values = values;
        this.errors = [];
    }
    Validator.prototype.setFields = function (fields) {
        this._fields = fields;
    };
    Validator.prototype.setValues = function (values) {
        this._values = values;
    };
    Validator.prototype.validate = function () {
        var values = this._values;
        var errors = this.errors;
        this._fields.forEach(function (field) {
            var fieldName = field.split(":")[0];
            var rules = field.split(":").length > 2
                ? field.replace(fieldName + ":", "")
                : field.split(":")[1];
            var optional = fieldName.includes("!", fieldName.length - 2);
            var hasValue = false;
            if (optional) {
                fieldName = fieldName.slice(0, -1);
                if (values.hasOwnProperty(fieldName) && values[fieldName] !== "") {
                    hasValue = true;
                }
            }
            else {
                if (!values.hasOwnProperty(fieldName) || values[fieldName] === "") {
                    errors.push(fieldName + " is required!");
                }
                else {
                    hasValue = true;
                }
            }
            if (rules) {
                rules.split(",").forEach(function (rule) {
                    var ruleName = rule.split("=")[0];
                    var ruleValue = rule.split("=")[1];
                    if (hasValue) {
                        switch (ruleName) {
                            case "pattern":
                                if (!new RegExp(ruleValue).test(values[fieldName]))
                                    errors.push("Invalid " + fieldName);
                                break;
                            case "type":
                                if (!(ruleValue == "email" && values[fieldName].includes("@")))
                                    errors.push("Please enter a valid email!");
                                break;
                            case "match":
                                if (values[fieldName] !== values[ruleValue])
                                    errors.push(fieldName + " doesn't match with " + ruleValue + ".");
                                break;
                            case "min":
                                if (values[fieldName].length < ruleValue)
                                    errors.push(fieldName +
                                        " must be at least >=" +
                                        ruleValue +
                                        " character.");
                                break;
                            case "max":
                                if (values[fieldName].length > ruleValue)
                                    errors.push(fieldName +
                                        " must be at least <=" +
                                        ruleValue +
                                        " character.");
                                break;
                        }
                    }
                });
            }
        });
        return this.errors;
    };
    return Validator;
}());
exports.Validator = Validator;
//# sourceMappingURL=Validator.js.map