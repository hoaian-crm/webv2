import type { Meta, StoryObj } from '@storybook/react';
import { AppBar } from '@/components/index';

const meta: Meta<typeof AppBar> = {
  title: "Components",
  component: AppBar
}

export default meta;

type Story = StoryObj<typeof AppBar>;

export const AppBarStory: Story = {
  name: 'App Bar'
}
