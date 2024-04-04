import { Box, TextFieldProps } from "@mui/material";
import React, { useState } from "react";
import { TextField } from "./TextField";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const PasswordField: React.FC<TextFieldProps> = (props) => {

  const [showPassword, setShowPassword] = useState(false);

  return <TextField
    InputProps={{
      endAdornment: <Box onClick={() => setShowPassword(!showPassword)}
        sx={{ display: 'flex', margin: 0, padding: 0, cursor: 'pointer', alignItems: 'center' }}
      >
        {showPassword ? <VisibilityOff sx={{ fontSize: 18 }} /> : <Visibility sx={{ fontSize: 18 }} />}
      </Box>
    }}
    {...props}
  />
}
