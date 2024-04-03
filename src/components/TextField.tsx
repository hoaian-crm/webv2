import Validator from "@/constants/validators";
import { TextFieldProps, TextField as MuiTextField } from "@mui/material"
import { useState } from "react";

type Props = {
  validators?: Array<Validator.ValidatorFn>;
} & TextFieldProps;

export const TextField: React.FC<Props> = (props) => {

  const [error, setError] = useState("");

  return <MuiTextField
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
      }
    }}
    onFocus={(e) => {
      if (props.onFocus) props.onFocus(e);
      setError("");
    }}
    {...props}
  />
}
