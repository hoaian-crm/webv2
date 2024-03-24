import theme, { darkTheme } from "@/theme";
import { DarkMode } from "@mui/icons-material";
import LightMode from "@mui/icons-material/LightMode";
import { IconButton, IconButtonProps, ThemeProvider, useTheme } from "@mui/material"
import React, { useContext, useEffect, useMemo, useState } from "react";

export const ThemeButton: React.FC<IconButtonProps> = (props) => {

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return <IconButton {...props} onClick={() => colorMode.toggleColorMode()}>
    {theme.palette.mode === 'light' ? <LightMode color="primary" /> : <DarkMode color="primary" />}
  </IconButton>
}

export const ColorModeContext = React.createContext({
  toggleColorMode: () => { }
})

export const DynamicThemeProvider: React.FC<{ children: React.ReactNode }> = (props) => {

  const [mode, setMode] = useState(localStorage['mode'] === 'dark' ? 'dark' : 'light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  useEffect(() => {
    localStorage['mode'] = mode;
  }, [mode])

  const appTheme = useMemo(() => mode === 'light' ? theme : darkTheme, [mode]);

  return <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={appTheme}>
      {props.children}
    </ThemeProvider>
  </ColorModeContext.Provider>
}

