import { Validator } from "./Validator";

export const validate = (rules:any,fields:any)=>{
    let errors:any = []
    const validator = new Validator(rules,fields)
    errors = validator.validate();
    // console.log(errors);

    return errors
}