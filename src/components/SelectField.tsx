import { Autocomplete, AutocompleteProps } from "@mui/material";
import { FormContext } from "./Form";
import { useContext } from "react";

type Props = {
  name?: string,
} & AutocompleteProps<{ label: string | React.ReactElement, value: string }, false, false, false>;

export const SelectField: React.FC<Props> = (props) => {

  const { onChange } = useContext(FormContext);

  return <Autocomplete
    onChange={(...params) => {
      if (props.onChange) {
        props.onChange(...params);
      }
      onChange(props.name || "", params[1]?.value);
    }}
    {...props} />
} 
