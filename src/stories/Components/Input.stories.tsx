import { Box, Input, TextField } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof meta>

export const InputStory: Story = {
  name: "Outline",
  render: () => {
    return <Box>
      <TextField variant="outlined" placeholder="Default input" size="small" />
    </Box>
  }
}
