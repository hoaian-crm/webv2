import { TextFieldProps, TextField } from "./TextField";

export const TextAreaField: React.FC<TextFieldProps> = (props) => {
  return <TextField multiline {...props} />
}
