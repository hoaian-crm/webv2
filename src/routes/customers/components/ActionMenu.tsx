import { DeleteOutlineOutlined, PermContactCalendarOutlined, StarOutline } from "@mui/icons-material"
import { Button, List, ListItem, ListItemProps, ListProps, Typography } from "@mui/material"
import { useState } from "react";
import { CreateCustomerForm } from "./CreateForm";

type Props = {
  tabIndex?: number;
  onTabChange?: (index: number) => void;
} & ListProps;

export const ActionMenu: React.FC<Props> = ({ tabIndex = 0, ...props }) => {

  const [customerForm, setCustomerForm] = useState(false);

  return <List {...props}>
    <ListItem>
      <Button
        variant="contained"
        sx={{ boxShadow: 1, marginBottom: 2, borderRadius: 2, width: "100%" }}
        disableElevation={true}
        onClick={() => setCustomerForm(true)}
      >
        Create Contact
      </Button>
    </ListItem>

    <TabItem
      Icon={PermContactCalendarOutlined}
      name="Contacts"
      active={tabIndex === 0}
      onClick={() => {
        if (props.onTabChange) props.onTabChange(0)
      }}
    />

    <TabItem
      Icon={StarOutline}
      name="Starred"
      active={tabIndex === 1}
      onClick={() => {
        if (props.onTabChange) props.onTabChange(1)
      }}
    />

    <TabItem
      Icon={DeleteOutlineOutlined}
      name="Deleted"
      active={tabIndex === 2}
      onClick={() => {
        if (props.onTabChange) props.onTabChange(2)
      }}
    />

    <CreateCustomerForm open={customerForm} onClose={() => setCustomerForm(false)} />
  </List>
}

const TabItem: React.FC<ListItemProps & {
  name: string;
  Icon: React.FC<any>,
  active?: boolean
}> = ({ name, Icon, active = false, ...props }) => {

  return <ListItem {...props}>
    <Button variant="link" color={active ? 'primary' : 'inherit'} sx={{ justifyContent: 'left', gap: 1, width: "100%" }}>
      <Icon fontSize="small" />
      <Typography variant="subtitle2">{name}</Typography>
    </Button>
  </ListItem>
}
