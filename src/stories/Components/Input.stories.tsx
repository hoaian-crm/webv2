import { MapField, PasswordField, PhoneNumberField, SelectField, TextAreaField, TextField } from "@/components";
import { Box, Input, Typography } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import Validator from "@/constants/validators";
import { RadioField } from "@/components/RadioField";
import { AvatarField } from "@/components/AvatarField";

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
    return <Box sx={{
      display: "flex",
      flexDirection: 'column',
      gap: 2
    }}>

      <TextField
        placeholder="Enter some text"
        label="Text Input"
        type="text"
      />

      <TextField
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        validators={[
          Validator.isEmail(),
        ]}
      />

      <PasswordField
        placeholder="Enter your password"
        label="Password"
        type="password"
        value="Hello youtube"
      />

      <PhoneNumberField
        extensionField={{
          label: 'Extension'
        }}
        inputField={{
          placeholder: 'Phone Number',
          label: "Phone number"
        }}
      />

      <SelectField
        name="animals"
        renderInput={(params) => <TextField label="Animals" {...params} />}
        options={[
          {
            label: "Cat",
            value: "cat",
          },
          {
            label: "Dog",
            value: "dog",
          },
          {
            label: "Chicken",
            value: "chicken",
          },
          {
            label: "Fish",
            value: "fish",
          },
          {
            label: "Shark",
            value: "shark",
          },
        ]}
      />

      <TextAreaField label="Some text ..." rows={5} />
    </Box>
  }
}

export const RadioStory: Story = {
  name: "Radio",
  render: () => <RadioField
    row
    options={[
      {
        label: "Female",
        value: "female"
      },
      {
        label: "Male",
        value: "male"
      },
      {
        label: "Order",
        value: "order"
      },
    ]
    } />
}

export const MapInputStory: Story = {
  name: "Map",
  render: () =>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="h7">Location</Typography>
      <MapField sx={{ width: 300 }} />
    </Box>

}

export const AvatarStory: Story = {
  name: "Avatar",
  render: () => {
    return <Box>
      <AvatarField alt={""} name={""} />
    </Box>
  }
}
