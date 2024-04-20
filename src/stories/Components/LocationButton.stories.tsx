
import { LocationButton } from "@/components";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LocationButton> = {
  title: 'Components',
  component: LocationButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LocationButtonStory: Story = {
  name: "Location Button",
  render: () => <LocationButton placeId="iAGTdqWm7DlHtHAZqXaHx37RPS2iZYv3dY4xKL5eoZJ3iVpWsQKS3i6PeGl1oOmVVqdeOQBdWpRy0J8wvnRKiGumzlO-aIf8c7dBVZe7l_5yZ1IBoY1xl4elWiRqXAHDX" name="Location" />
}
