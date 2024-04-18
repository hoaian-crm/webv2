import { Avatar, Button, ButtonProps } from '@mui/material';

type Props = {
  containerProps: ButtonProps;
  inputProps: React.HTMLProps<HTMLInputElement>;
  alt: string;
};

export const AvatarField: React.FC<Props> = (props) => {

  return <Button
    component="label"
    sx={{
      padding: 1,
      margin: 0,
      minWidth: 'unset',
      borderRadius: 100
    }}
    {...props.containerProps}
  >
    <Avatar />
    <input type="file" hidden {...props.inputProps} />
  </Button>
}
