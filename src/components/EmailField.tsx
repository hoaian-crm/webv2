import Validator from "@/constants/validators";
import { TextField, TextFieldProps } from "./TextField";

export const EmailField: React.FC<TextFieldProps> = (props) => {
  return <TextField
    type="email"
    validators={[
      Validator.isEmail()
    ]}
    {...props}
  />
}

