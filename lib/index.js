"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validate = void 0;
const Validator_1 = require("./Validator");
const Validate = (rules, fields) => {
    let errors = [];
    const validator = new Validator_1.Validator(rules, fields);
    errors = validator.validate();
    return errors;
};
exports.Validate = Validate;
//# sourceMappingURL=index.js.map