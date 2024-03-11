import { Meta, StoryObj } from '@storybook/react';

export const Example = () => {
  return <h1>Hello</h1>
}

const meta: Meta<typeof Example> = {
  component: Example
};

type Story = StoryObj<typeof Example>;
export default meta;
