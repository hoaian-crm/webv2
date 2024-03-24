import { Box, Button } from "@mui/material";
import { Meta } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components",
  component: Button,
}

export default meta;

type Story = typeof meta;

export const Buttons: Story = {
  render: () => <Box display="flex" sx={{ gap: 2 }}>
    <Button variant="contained">Contained Button</Button>
    <Button variant="text">Text Button</Button>
    <Button variant="outlined">Outlined Button</Button>
    <Button variant="link">Link Button</Button>
  </Box >
}
