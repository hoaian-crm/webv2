import { Button, ButtonProps } from "@mui/material";
import { FormContext } from "./Form";
import { useContext } from "react";

export const SubmitButton: React.FC<ButtonProps> = (props) => {

  const { isValid, onSubmit } = useContext(FormContext);

  return <Button disabled={!isValid} variant="contained" size="medium" onClick={onSubmit} {...props} />
}
