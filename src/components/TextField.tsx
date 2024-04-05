import Validator from "@/constants/validators";
import { TextFieldProps as MuiTextFieldProps, TextField as MuiTextField } from "@mui/material"
import { useState } from "react";
import { FormContext } from "./Form";

export type TextFieldProps = {
  validators?: Array<Validator.ValidatorFn>;
} & MuiTextFieldProps;

export const TextField: React.FC<TextFieldProps> = (props) => {

  const [error, setError] = useState("");

  return <FormContext.Consumer>
    {({ onError }) => (
      <MuiTextField
        error={!!error}
        helperText={error}
        onBlur={(e) => {
          if (props.onBlur) props.onBlur(e);
          if (props.validators) {
            let errorText: string = "";
            props.validators.map(validator => {
              errorText = validator(e.target.value);
            })
            setError(errorText)
            onError(props.name || "", errorText);
          }
        }}
        onFocus={(e) => {
          if (props.onFocus) props.onFocus(e);
          setError("");
        }}
        {...props}
      />
    )}
  </FormContext.Consumer>
}
