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
    if (props.validators) {
      let errorText: string = "";
      props.validators.map(validator => {
        if (!errorText) errorText = validator(ref?.current?.value);
      })
      console.log("error Text is: ", props.name, errorText);
      setError(errorText)
      onError(props.name || "", errorText);
    }
  }

  useEffect(() => {
    if (props.validators) addValidator(props.name || "", onValidate)
  }, [props.validators])

  return (
    <MuiTextField
      inputRef={ref}
      error={!!error}
      helperText={error}
      onFocus={(e) => {
        if (props.onFocus) props.onFocus(e);
        setError("");
        onError(props.name || "", "");
      }}
      onChange={(e) => {
        if (props.onChange) props.onChange(e);
        if (onChange) onChange(props.name || "", e.target.value);
      }}
      {...props}
    />
  )
}
