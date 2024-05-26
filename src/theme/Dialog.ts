import { ComponentTheme } from ".";

export const MuiDialogTitle: ComponentTheme["MuiDialogTitle"] = {
  styleOverrides: {
    root: {
      fontSize: 17,
      fontWeight: 500
    }
  },
  variants: [{
    props: {
      variant: 'warning'
    },
    style: ({ theme }) => ({
      backgroundColor: theme.palette.background.warning,
      color: theme.palette.text.warning,
      fontSize: 17,
      fontWeight: 500,
      fontFamily: "Plus Jakarta Sans"
    }),
  }]
}
