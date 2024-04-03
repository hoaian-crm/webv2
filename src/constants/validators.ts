import validator from "validator"

namespace Validator {

  export type ValidatorFn = (value: any) => string;
  export type ValidatorDecorator = (message?: string) => ValidatorFn;

  export const required: ValidatorDecorator = (message: string = "You must enter value for this field") => {
    return (value: any) => {
      return !value ? message : ""
    }
  }

  export const isEmail: ValidatorDecorator = (message: string = "You must enter an email address") => {
    return (value: string) => {
      return !validator.isEmail(value) ? message : ""
    }
  }

  export const isPhoneNumber: ValidatorDecorator = (message: string = "You must enter an phone numbner") => {
    return (value: string) => {
      return !validator.isMobilePhone(value, 'vi-VN') ? message : "";
    }
  }
}

export default Validator
