import { FormControlLabel, Radio, RadioGroup, RadioGroupProps } from "@mui/material"
import { useContext, useEffect } from "react";
import { FormContext } from "./Form";

type Props = {
  options: Array<{ label: string, value: string }>;
} & RadioGroupProps

export const RadioField: React.FC<Props> = (props) => {

  const { onChange } = useContext(FormContext);

  useEffect(() => {
    if (props.defaultValue && props.name) onChange(props.name, props.defaultValue);
  }, [props.defaultValue])

  return <RadioGroup {...props} onChange={(e, value) => {
    if (props.onChange) props.onChange(e, value);
    if (props.name) onChange(props.name, value);
  }}>
    {props.options.map((option, index) => {
      return <FormControlLabel value={option.value} label={option.label} key={index} control={<Radio size="small" />} />
    })}
  </RadioGroup>
}
