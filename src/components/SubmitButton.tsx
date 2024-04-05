import { Button, ButtonProps } from "@mui/material";
import { FormContext } from "./Form";

export const SubmitButton: React.FC<ButtonProps> = (props) => {
  return <FormContext.Consumer>
    {({ isValid }) => <Button disabled={!isValid} {...props} />}
  </FormContext.Consumer>

}
