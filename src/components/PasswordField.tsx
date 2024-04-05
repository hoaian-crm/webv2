import { Box } from "@mui/material";
import React, { useState } from "react";
import { TextField, TextFieldProps } from "./TextField";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const PasswordField: React.FC<TextFieldProps> = (props) => {

  const [showPassword, setShowPassword] = useState(false);

  return <TextField
    type={showPassword ? 'text' : 'password'}
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
