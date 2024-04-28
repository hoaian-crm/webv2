import { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";

const meta: Meta<typeof Map> = {
  title: "Components",
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta;

export const MapStory: Story = {
  name: 'Map',
  render: () => <Box sx={{ width: '100vw', height: '100vh' }}>
  </Box>
}

export type Story = StoryObj<typeof meta>;
