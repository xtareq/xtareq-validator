import { Validator } from "./Validator";

export const Validate =(rules:any,fields:any)=>{
    console.log(rules,fields)
    let errors:any = []
    const validator = new Validator(rules,fields)
    errors = validator.validate();
    console.log(errors);

    return errors
}

