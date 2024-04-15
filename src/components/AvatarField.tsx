import { Button, ButtonProps, InputProps } from '@mui/material';

type Props = {
  containerProps: ButtonProps;
  inputProps: React.HTMLProps<HTMLInputElement>;
  alt: string;
};

export const AvatarField: React.FC<Props> = (props) => {

  return <Button component="label" sx={{ backgroundColor: 'red', width: 40, height: 40, borderRadius: 10 }} {...props.containerProps}>


    <input type="file" hidden {...props.inputProps} />
  </Button>
}
