import { ProfileButton, ProfileMenuItem, ProfilePopup } from "@/components";
import { AccountBoxTwoTone } from "@mui/icons-material";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Components/Profile",
  parameters: {
    layout: 'centered'
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const ProfileButtonStory: Story = {
  name: "Profile Button",
  render: () => {
    return <ProfileButton />
  }
}

export const ProfilePopupStory: Story = {
  name: "Profile Popup",
  render: () => {
    return <ProfilePopup open={true} />
  }
}

export const ProfileMenuItemStory: Story = {
  name: "Profile Menu Item",
  render: () => {
    return <ProfileMenuItem
      icon={AccountBoxTwoTone}
      title="My Profile"
      subtitle="Account Settings"
    />
  }
}
