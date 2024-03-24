import { ThemeButton } from "@/components";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ThemeButton> = {
  title: 'Components',
  component: ThemeButton
}

type Story = StoryObj<typeof meta>;

export default meta;

export const ThemeButtonStory: Story = {
  name: "Theme Button",
}
