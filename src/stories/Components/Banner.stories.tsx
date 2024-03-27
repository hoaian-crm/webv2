import { Banner } from "@/components";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Banner> = {
  title: "Components",
  component: Banner,
  parameters: {
    layout: 'centered'
  }
};


export default meta;
type Story = StoryObj<typeof meta>;
export const BannerStory: Story = {
  name: "Banner",
  render: () => <Banner title="Customer Application" subTitle="Home • Contact Application" sx={{
    width: 1400,
    borderRadius: 3
  }} />
}
