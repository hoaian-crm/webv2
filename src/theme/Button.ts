import { ComponentTheme } from '.';

export const MuiButton: ComponentTheme["MuiButton"] = {
  styleOverrides: {
    root: {
      textTransform: 'none',
      outline: 'none'
    }
  },
  variants: [
    {
      props: {
        variant: 'link'
      },
      style: ({ theme }) => ({
        color: theme.palette.text.primary,
        ":hover": {
          color: theme.palette.primary.main,
          backgroundColor: "#F1F3FF"
        }
      })
    },
    {
      props: {
        variant: 'link',
        color: 'primary',
      },
      style: ({ theme }) => ({
        color: theme.palette.primary.main
      })
    },
  ],
}
