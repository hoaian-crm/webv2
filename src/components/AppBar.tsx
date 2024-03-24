import { Box, Button, IconButton, AppBar as MaterialAppBar, Toolbar, Typography } from "@mui/material";
import { MenuOutlined, Search } from '@mui/icons-material';
import { ThemeButton } from "./ThemeButton";
import { ProfileButton } from "./Profile";

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
        <Button size="large" variant="link">
          <Typography>Apps</Typography>
        </Button>
        <Button size="large" variant="link">
          <Typography>Chat</Typography>
        </Button>
        <Button size="large" variant="link">
          <Typography>Calendar</Typography>
        </Button>
        <Button size="large" variant="link">
          <Typography>Email</Typography>
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <ThemeButton />
        <ProfileButton />
      </Toolbar>
    </MaterialAppBar>
  </Box>
}
