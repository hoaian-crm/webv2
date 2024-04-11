import { Box, MenuItem, TextFieldProps } from "@mui/material";
import { TextField } from './TextField';
import Validator from "@/constants/validators";

type PhoneNumberFieldProps = {
  extensionField?: TextFieldProps,
  inputField?: TextFieldProps
}


export const PhoneNumberField: React.FC<PhoneNumberFieldProps> = (props) => {
  return <Box sx={{ width: '100%', display: 'flex' }}>
    <TextField
      select
      sx={{
        minWidth: '130px',
        ".MuiOutlinedInput-notchedOutline": {
          borderRightWidth: 0,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        },
      }}
      InputProps={{
        sx: {
          backgroundColor: 'background.main',
        }
      }}
      defaultValue="+84"
      {...props.extensionField}
    >
      <MenuItem value="+84">
        VN (+84)
      </MenuItem>
    </TextField>
    <TextField
      fullWidth
      InputProps={{
        sx: {
          ".MuiOutlinedInput-notchedOutline": {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
        }
      }}
      validators={[
        Validator.isPhoneNumber()
      ]}
      {...props.inputField}
    />
  </Box>
}
