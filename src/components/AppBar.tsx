import { Box, IconButton, AppBar as MaterialAppBar, Toolbar } from "@mui/material";
import { MenuOutlined, Search } from '@mui/icons-material';

export const AppBar = () => {
  return <Box>
    <MaterialAppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" aria-label="menu">
          <MenuOutlined />
        </IconButton>
        <IconButton size="large" edge="start">
          <Search />
        </IconButton>
      </Toolbar>
    </MaterialAppBar>
  </Box>
}
