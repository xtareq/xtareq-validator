"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const Validator_1 = require("./Validator");
const validate = (rules, fields) => {
    let errors = [];
    const validator = new Validator_1.Validator(rules, fields);
    errors = validator.validate();
    // console.log(errors);
    return errors;
};
exports.validate = validate;
//# sourceMappingURL=index.js.map