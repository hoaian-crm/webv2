import { DeleteOutlineOutlined, PermContactCalendarOutlined, StarOutline } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"

export const ActionMenu = () => {
  return <Box sx={{ flexDirection: 'column', display: 'flex', gap: 1 }}>
    <Button variant="contained" size="large" sx={{ boxShadow: 1, marginBottom: 2 }}>Add New Contact</Button>
    <Button variant="link" color="inherit" sx={{ justifyContent: 'left', gap: 2 }}>
      <PermContactCalendarOutlined />
      <Typography variant="subtitle2">All Contacts</Typography>
    </Button>
    <Button variant="link" color="inherit" sx={{ justifyContent: 'left', gap: 2 }}>
      <StarOutline />
      <Typography variant="subtitle2">Starred</Typography>
    </Button>
    <Button variant="link" color="inherit" sx={{ justifyContent: 'left', gap: 2 }}>
      <DeleteOutlineOutlined />
      <Typography variant="subtitle2">Deleted</Typography>
    </Button>
  </Box>
}
