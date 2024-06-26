import Validator from "@/constants/validators";
import { TextFieldProps as MuiTextFieldProps, TextField as MuiTextField } from "@mui/material"
import { useContext, useEffect, useRef, useState } from "react";
import { FormContext } from "./Form";

export type TextFieldProps = {
  validators?: Array<Validator.ValidatorFn>;
} & MuiTextFieldProps;

export const TextField: React.FC<TextFieldProps> = (props) => {

  const { addValidator, onError, onChange } = useContext(FormContext);
  const [error, setError] = useState("");
  const ref = useRef<HTMLInputElement>();

  const onValidate = () => {
    let errorText: string = "";
    if (props.validators) {
      props.validators.map(validator => {
        if (!errorText) errorText = validator(ref?.current?.value);
      })
      setError(errorText)
      if (props.name) onError(props.name, errorText);
    }

    return !errorText;
  }

  useEffect(() => {
    if (props.validators && props.name) addValidator(props.name, onValidate)
  }, [props.validators])

  useEffect(() => {
    if (props.defaultValue && props.name) onChange(props.name, props.defaultValue);
  }, [props.defaultValue])

  return (
    <MuiTextField
      inputRef={ref}
      error={!!error}
      helperText={error}
      onFocus={(e) => {
        if (props.onFocus) props.onFocus(e);
        setError("");
        if (props.name) onError(props.name, "");
      }}
      onChange={(e) => {
        if (props.onChange) props.onChange(e);
        if (onChange && props.name) onChange(props.name, e.target.value);
      }}
      {...props}
    />
  )
}
