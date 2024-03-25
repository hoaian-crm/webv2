import { CustomerPage } from "@/routes/customers";
import { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters, withRouter } from "storybook-addon-remix-react-router";
import { ActionMenu } from "@/routes/customers";

const meta: Meta<typeof CustomerPage> = {
  title: "Routes/Customers",
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({
      location: {},
      routing: {
        path: '/customers'
      }
    }),
  },
  component: CustomerPage
}

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomerPageStory: Story = {
  name: 'Page',
}

export const ActionMenuStory: Story = {
  name: "Action Menu",
  render: () => <ActionMenu />
}
