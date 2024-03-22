import { ComponentTheme } from ".";

export const MuiIconButton: ComponentTheme["MuiIconButton"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.primary
    })
  }
}
