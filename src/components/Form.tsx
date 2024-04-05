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
  isValid: boolean
}>({
  values: {},
  errors: {},
  onChange: () => { },
  onError: () => { },
  isValid: false
});

export const Form: React.FC<FormProps> = (props) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = (name: string, value: any) => {
    setValues(_.set(values, name, value));
  }

  const onError = (name: string, value: any) => {
    const data = set(name, value, errors);
    setErrors(data);
  }

  const isValid = useMemo(() => {
    return _.values(errors).filter(value => !!value).length === 0;
  }, [errors])


  return <FormContext.Provider
    value={{
      values,
      errors,
      onChange,
      onError,
      isValid
    }}>
    <Box component="form"
      {...props}
      onSubmit={() => {
        if (props.onSubmit && isValid) {
          props.onSubmit(values);
        }
      }}
    />
  </FormContext.Provider>
}
