import { AppBar, Drawer } from "@/components"
import { DRAWER_WIDTH } from "@/constants";
import { Box, BoxProps, useMediaQuery, useTheme } from "@mui/material"
import { useState } from "react"
import { Outlet } from "react-router-dom";

export const Layout: React.FC<BoxProps> = (props) => {

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawer, setOpenDrawer] = useState(!mobile);

  return <Box
    width="100vw"
    {...props}
  >
    <Box
      sx={{
        width: `calc(100% - ${Number(openDrawer) * DRAWER_WIDTH}px)`,
        ml: `${Number(openDrawer) * DRAWER_WIDTH}px`,
      }}
    >
      <AppBar toggleOpenDrawer={() => setOpenDrawer(!openDrawer)} openDrawer={openDrawer} />
      <Outlet />
    </Box>
    <Drawer onClose={() => setOpenDrawer(false)} open={openDrawer} variant={mobile ? "temporary" : 'persistent'} />
  </Box >
}
