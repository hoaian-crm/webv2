import { Components, Theme, createTheme } from "@mui/material";
import { MuiAppBar } from "./AppBar";
import { MuiIconButton } from './IconButton';
import { MuiButton } from './Button';
import { MuiTypography } from "./Typography";
import { MuiDialogTitle } from './Dialog';
import { MuiTextField } from './TextField';
import { MuiFormHelperText } from './HelperText';
import { MuiInputLabel } from './InputLabel';
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
      warning: '#FFAE1F',
    },
    background: {
      main: "#EAEFF4",
      active: '#EBF3FE',
      warning: '#FEF5E5'
    }
  },
  components: {
    MuiAppBar,
    MuiIconButton,
    MuiButton,
    MuiTypography,
    MuiDialogTitle,
    MuiTextField,
    MuiInputLabel,
    MuiFormHelperText,
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
