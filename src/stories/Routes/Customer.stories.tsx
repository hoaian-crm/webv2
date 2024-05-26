import { CustomerDetail, CustomerPage, ListCustomer, CreateCustomerForm, ConfirmDeleteCustomer } from "@/routes/customers";
import { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters, withRouter } from "storybook-addon-remix-react-router";
import { ActionMenu } from "@/routes/customers";
import { useEffect, useState } from "react";
import { CustomerFaker } from "@/faker/customer";
import { useCustomers } from "@/hooks";

const meta: Meta<typeof CustomerPage> = {
  title: "Routes/Customers",
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
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
    const { data, isPending } = useCustomers({
      limit: 100,
      offset: 0,
      keyword: "",
    });
    const [selected, setSelected] = useState<string | number | undefined>(undefined);

    useEffect(() => {
      if (!isPending && (data?.result.length || 0) > 0) {
        setSelected(data?.result[0].id);
      }
    }, [isPending])
    return <ListCustomer selected={selected} onSelect={(id) => setSelected(id.toString())} sx={{ width: 500 }} customers={data?.result || []} />
  }
}

export const CustomerDetailStory: Story = {
  name: "Detail Customer",
  render: () => {
    const customer = CustomerFaker.one();
    return <CustomerDetail customer={customer} sx={{ borderWidth: 1, borderStyle: 'solid', borderColor: 'divider', width: 500 }} />
  }
}

export const CreateCustomerFormStory: Story = {
  name: "Create Customer",
  render: () => {
    return <CreateCustomerForm open={true} />
  }
}

export const ConfirmDeleteStory: Story = {
  name: "Confirm Delete",
  render: () => {
    return <ConfirmDeleteCustomer open={true} data={CustomerFaker.one()} />
  }
}
