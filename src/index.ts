import { Validator } from "./Validator";

export const Validate = (rules:any,fields:any)=>{
    let errors:any = []
    const validator = new Validator(rules,fields)
    errors = validator.validate();
    // console.log(errors);

    return errors
}

