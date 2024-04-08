import validator from "validator"

namespace Validator {

  export type ValidatorFn = (value: any) => string;
  export type ValidatorDecorator = (message?: string, ...params: Array<any>) => ValidatorFn;

  export const required: ValidatorDecorator = function(message: string = "You must enter value for this field") {
    return (value: any) => {
      return !value ? message : ""
    }
  } satisfies ValidatorDecorator

  export const isEmail: ValidatorDecorator = function(message: string = "You must enter an email address") {
    return (value: string) => {
      return !validator.isEmail(value) ? message : ""
    }
  } satisfies ValidatorDecorator

  export const isPhoneNumber = function(message: string = "You must enter an phone number") {
    return (value: string) => {
      return !validator.isMobilePhone(value, 'vi-VN') ? message : "";
    }
  } satisfies ValidatorDecorator

  export const minLength = function(message: string = "", length: number) {
    if (!message) message = `Must be have more than ${length} characters`;
    return (value: string | undefined) => {
      return value && (value.length < length) ? message : ""
    }
  } satisfies ValidatorDecorator
}

export default Validator
