import { Box, MenuItem, TextFieldProps } from "@mui/material";
import { TextField } from './TextField';

export const PhoneNumberField: React.FC<TextFieldProps> = (props) => {
  return <Box>
    <TextField
      size="small"
      select
      sx={{
        ".MuiOutlinedInput-notchedOutline": {
          borderRightWidth: 0,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        },
        backgroundColor: 'background.main'
      }}
      defaultValue="+84"
      label="Ext"
    >
      <MenuItem value="+84">
        VN (+84)
      </MenuItem>
    </TextField>
    <TextField
      InputProps={{
        sx: {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderLeftWidth: 0,
        }
      }}
      {...props}
    />
  </Box>
}
