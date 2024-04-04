import { PasswordField, PhoneNumberField, TextField } from "@/components";
import { Box, Input } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import Validator from "@/constants/validators";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof meta>

export const InputStory: Story = {
  name: "Default",
  render: () => {
    return <Box sx={{ display: "flex", flexDirection: 'column', gap: 2 }}>

      <TextField
        placeholder="Enter some thing"
        label="Default"
        helperText="Must be have more than 8 character"
      />

      <TextField
        placeholder="Enter some thing"
        helperText="Must be have more than 8 character"
        label="Error"
        error
      />

      <TextField
        placeholder="Enter some thing"
        label="Disabled"
        disabled={true}
      />
    </Box>
  }
}

export const InputTypeStory: Story = {
  name: "Types",
  render: () => {
    return <Box sx={{ display: "flex", flexDirection: 'column', gap: 2 }}>

      <TextField
        placeholder="Enter some text"
        label="Text Input"
        type="text"
      />

      <PasswordField
        placeholder="Enter your password"
        label="Password Input"
        type="password"
        value="Hello youtube"
      />

      <PhoneNumberField label="Phone number" placeholder='Enter phone number' />

      <TextField
        label="Email Input"
        type="email"
        placeholder="example@gmail.com"
        validators={[
          Validator.isEmail(),
        ]}
      />

    </Box>
  }
}
