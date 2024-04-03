import { ComponentTheme } from ".";

export const MuiTextField: ComponentTheme["MuiTextField"] = {
  styleOverrides: {
    root: {
    },
  },
  defaultProps: {
    variant: 'outlined',
    size: 'small',
    InputProps: {
      sx: {
        borderRadius: 2,
      }
    },
    InputLabelProps: {
      shrink: true,
      sx: {
        fontSize: 16,
        fontWeight: 600,
        color: 'text.primary'
      }
    }
  }
}
