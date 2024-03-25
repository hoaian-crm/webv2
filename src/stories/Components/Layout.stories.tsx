import { Layout } from "@/routes/layout";
import { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters, withRouter } from "storybook-addon-remix-react-router";

const meta: Meta<typeof Layout> = {
  title: 'Components',
  component: Layout,
  decorators: [withRouter],
  parameters: {
    // layout: 'centered',
    reactRouter: reactRouterParameters({
      location: {},
      routing: {
        path: '/dashboard/ads'
      }
    }),
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LayoutStory: Story = {
  name: "Layout",
}
