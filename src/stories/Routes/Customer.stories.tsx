import { CustomerDetail, CustomerPage, ListCustomer } from "@/routes/customers";
import { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters, withRouter } from "storybook-addon-remix-react-router";
import { ActionMenu } from "@/routes/customers";
import { useCustomer } from "@/hooks";
import { useEffect, useState } from "react";
import { CustomerFaker } from "@/faker/customer";

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
  render: () => <CustomerPage />
}

export const ActionMenuStory: Story = {
  name: "Action Menu",
  render: () => <ActionMenu />
}

export const ListCustomerStory: Story = {
  name: "List Customer",
  render: () => {
    const { customers } = useCustomer();
    const [selected, setSelected] = useState<string | number | undefined>(undefined);

    useEffect(() => {
      if (!customers.isPending && (customers.data?.result.length || 0) > 0) {
        setSelected(customers.data?.result[0].id);
      }
    }, [customers.isPending])
    return <ListCustomer selected={selected} onSelect={(id) => setSelected(id.toString())} sx={{ width: 500 }} customers={customers.data?.result || []} />
  }
}

export const CustomerDetailStory: Story = {
  name: "Detail Customer",
  render: () => {
    const customer = CustomerFaker.one();
    return <CustomerDetail customer={customer} sx={{ borderWidth: 1, borderStyle: 'solid', borderColor: 'divider', width: 500 }} />
  }
}
