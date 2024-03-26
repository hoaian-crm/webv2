import { DeleteOutlineOutlined, PermContactCalendarOutlined, StarOutline } from "@mui/icons-material"
import { Button, List, ListItem, ListProps, Typography } from "@mui/material"

type Props = {

} & ListProps;

export const ActionMenu: React.FC<Props> = (props) => {
  return <List {...props}>
    <ListItem>
      <Button variant="contained" size="large" sx={{ boxShadow: 1, marginBottom: 2, borderRadius: 2 }} disableElevation={true}>Add New Contact</Button>
    </ListItem>

    <ListItem>
      <Button variant="link" color="inherit" sx={{ justifyContent: 'left', gap: 2 }}>
        <PermContactCalendarOutlined fontSize="small" />
        <Typography variant="subtitle2">All Contacts</Typography>
      </Button>
    </ListItem>

    <ListItem>
      <Button variant="link" color="inherit" sx={{ justifyContent: 'left', gap: 2 }}>
        <StarOutline fontSize="small" />
        <Typography variant="subtitle2">Starred</Typography>
      </Button>
    </ListItem>

    <ListItem>
      <Button variant="link" color="inherit" sx={{ justifyContent: 'left', gap: 2 }}>
        <DeleteOutlineOutlined fontSize="small" />
        <Typography variant="subtitle2">Deleted</Typography>
      </Button>
    </ListItem>
  </List>
}
