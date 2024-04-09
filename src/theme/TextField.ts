import { ComponentTheme } from ".";

export const MuiTextField: ComponentTheme["MuiTextField"] = {
  styleOverrides: {
    root: {
      ".MuiOutlinedInput-notchedOutline": {
        borderRadius: 8
      }
    },
  },
  defaultProps: {
    variant: 'outlined',
    size: 'small',
  }
}
