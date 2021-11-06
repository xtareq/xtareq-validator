"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validate = void 0;
var Validator_1 = require("./Validator");
var Validate = function (rules, fields) {
    var errors = [];
    var validator = new Validator_1.Validator(rules, fields);
    errors = validator.validate();
    // console.log(errors);
    return errors;
};
exports.Validate = Validate;
//# sourceMappingURL=index.js.map