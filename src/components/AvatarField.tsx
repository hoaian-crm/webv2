import { Button, ButtonProps } from '@mui/material';
import { useState } from 'react';
import { Avatar } from './Avatar';
import { useUpload } from '@/hooks';
import { useForm } from './Form';

type Props = {
  containerProps?: ButtonProps;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  alt: string;
  name: string;
};

export const AvatarField: React.FC<Props> = (props) => {

  const [selectedFile, setSelectedFile] = useState<File>(); // Preview avatar on input
  const { uploadAvatar } = useUpload();
  const { onChange } = useForm();


  return <Button
    component="label"
    sx={{
      padding: 1,
      margin: 0,
      minWidth: 'unset',
      borderRadius: 100,
      borderWidth: 1,
      borderColor: 'background.main',
      borderStyle: 'solid',
      width: '100%',
      height: '100%'
    }}
    {...props.containerProps}
  >
    <Avatar src={selectedFile ? URL.createObjectURL(selectedFile) : props.alt} sx={{ width: '100%', height: '100%' }} />
    <input type="file" onChange={async (e) => {
      if (e.target.files && e.target.files.length > 0) {
        const { publicUrl } = await uploadAvatar(e.target.files[0]);
        setSelectedFile(e.target.files[0]);
        onChange(props.name, publicUrl);
      }
    }} hidden {...props.inputProps} />
  </Button>
}
