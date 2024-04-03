import { TextField } from "@/components";
import { Box, Input } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import Validator from "@/constants/validators";
import { VisibilityOff } from "@mui/icons-material";

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

      <TextField
        placeholder="Enter your password"
        label="Password Input"
        type="password"
        value="Hello youtube"
        InputProps={{
          endAdornment: <VisibilityOff fontSize="small" />
        }}
      />

      <TextField
        label="Phone Input"
        type="tel"
        placeholder="1-(444)-444-4445"
        validators={[
          Validator.isPhoneNumber(),
        ]}
      />

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
