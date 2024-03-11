import type { Meta, StoryObj } from '@storybook/react';
import { Header } from "../../routes/layout/components/header.tsx";

const meta: Meta<typeof Header> = {
  component: Header
}

export default meta;

type Story = StoryObj<typeof Header>;

export const Full: Story = {
  args: {}
}
