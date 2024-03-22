import type { Meta, StoryObj } from '@storybook/react';
import { AppBar } from '@/components/index';

const meta: Meta<typeof AppBar> = {
  component: AppBar
}

export default meta;

type Story = StoryObj<typeof AppBar>;

export const Default: Story = {
  args: {}
}
