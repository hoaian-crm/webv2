import { ComponentTheme } from ".";

export const MuiTextField: ComponentTheme["MuiTextField"] = {
  styleOverrides: {
    root: {
      InputProps: {
      },
      borderRadius: 10,
      backgroundColor: 'red'
    }
  }
}
