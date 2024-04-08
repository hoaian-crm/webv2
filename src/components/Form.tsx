import { Box, BoxProps } from "@mui/material"
import { createContext, useMemo, useState } from "react";
import _ from 'lodash';
import { set } from 'lodash/fp';

export type FormProps = BoxProps & {
  onSubmit: (values: any) => any;
};

export const FormContext = createContext<{
  values: any,
  errors: any,
  onChange: (name: string, value: any) => any;
  onError: (name: string, value: any) => any;
  isValid: boolean,
  validators: Record<string, () => void>;
  addValidator: (name: string, validator: () => void) => any,
  onSubmit: () => any;
}>({
  values: {},
  errors: {},
  onChange: () => { },
  onError: () => { },
  isValid: false,
  validators: {},
  addValidator: () => { },
  onSubmit: () => { },
});

export const Form: React.FC<FormProps> = (props) => {

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [validators, setValidators] = useState<Record<string, () => void>>({});

  console.log("errors is: ", errors);

  const onChange = (name: string, value: any) => {
    setValues(set(name, value, values));
  }
  const onError = (name: string, value: any) => {
    setErrors(set(name, value, errors))
  }

  const addValidator = (name: string, validator: () => void) => {
    setValidators(set(name, validator, validators));
  }

  const validate = () => {
    Object.keys(validators).map(name => {
      validators[name]();
    })
  }

  const isValid = useMemo(() => {
    return _.values(errors).filter(value => !!value).length === 0;
  }, [errors])

  const onSubmit = () => {
    validate();
    if (props.onSubmit && isValid) {
      props.onSubmit(values);
    }
  }


  return <FormContext.Provider
    value={{
      values,
      errors,
      onChange,
      onError,
      isValid,
      validators,
      addValidator,
      onSubmit
    }}>
    <Box component="form"
      {...props}
      onSubmit={onSubmit}
    />
  </FormContext.Provider>
}
