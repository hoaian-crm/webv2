import { Box, BoxProps } from "@mui/material"
import { createContext, useContext, useMemo, useState } from "react";
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
  validators: Record<string, () => boolean>;
  addValidator: (name: string, validator: () => boolean) => void,
  onSubmit: () => any;
}>({
  values: {},
  errors: {},
  onChange: () => { },
  onError: () => { },
  isValid: false,
  validators: {},
  addValidator: () => { return true },
  onSubmit: () => { },
});

export const useForm = () => useContext(FormContext);

export const Form: React.FC<FormProps> = (props) => {

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [validators, setValidators] = useState<Record<string, () => boolean>>({});

  const onChange = (name: string, value: any) => {
    setValues((values) => set(name, value, values));
  }
  const onError = (name: string, value: any) => {
    setErrors((errors) => set(name, value, errors))
  }

  const addValidator = (name: string, validator: () => boolean) => {
    setValidators((validators) => set(name, validator, validators));
  }

  const validate = () => {
    let valid = false;
    Object.keys(validators).map(name => {
      const result = validators[name]();
      if (result) valid = true;
    })

    return valid;
  }

  const isValid = useMemo(() => {
    return _.values(errors).filter(value => !!value).length === 0;
  }, [errors])

  const onSubmit = () => {
    if (props.onSubmit && validate()) {
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
