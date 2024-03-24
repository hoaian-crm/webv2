import { Components, Theme, createTheme } from "@mui/material";
import { MuiAppBar } from "./AppBar";
import { MuiIconButton } from './IconButton';
import { MuiButton } from './Button';
import { MuiTypography } from "./Typography";
import './theme.d'

export type ComponentTheme = Components<Omit<Theme, "components">>;

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5D87FF',
    },
    text: {
      primary: '#2A3547',
    }
  },
  components: {
    MuiAppBar,
    MuiIconButton,
    MuiButton,
    MuiTypography
  },
  typography: {
    fontFamily: "Plus Jakarta Sans"
  }
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
})


export default theme;
