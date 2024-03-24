import { Drawer, DrawerItem, DrawerItemChild } from "@/components";
import { GroupOutlined, Notifications, PhoneEnabledOutlined } from "@mui/icons-material";
import { Badge, Box } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: 'centered'
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const DrawerStory: Story = {
  name: 'Drawer',
  render: () => <Drawer open={true} />
}

export const DrawerItemStory: Story = {
  name: "Drawer Item",
  render: () => {
    const [index, setIndex] = useState(0);
    const [expand, setExpand] = useState(false);
    return <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <DrawerItem
        item={{
          Icon: GroupOutlined, active: index === 0,
          name: "Users"
        }}
        onClick={() => setIndex(0)}
      />
      <DrawerItem
        item={{
          name: "Contact",
          Icon: PhoneEnabledOutlined,
          active: index === 1
        }}
        onClick={() => setIndex(1)}
      />

      <DrawerItem
        item={{
          name: "Users",
          Icon: GroupOutlined,
          active: index === 5 || index === 6,
          expand: expand
        }}
        onClick={() => setExpand(!expand)}
      >
        <DrawerItemChild item={{
          active: index === 5,
          name: "Contact",
          Icon: PhoneEnabledOutlined,
        }}
          onClick={() => setIndex(5)}
        />
        <DrawerItemChild item={{
          active: index === 6,
          name: "Contact",
          Icon: PhoneEnabledOutlined,
        }}
          onClick={() => setIndex(6)}
        />
      </DrawerItem>

      <DrawerItem item={{
        active: index === 7,
        name: "Notification",
        Icon: Notifications,
        badge: <Badge color="primary" badgeContent={10} />
      }}>hello</DrawerItem>
    </Box>
  }
}
