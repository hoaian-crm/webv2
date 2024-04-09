import { EmailField, Form, PasswordField, SelectField, SubmitButton, TextField } from "@/components";
import Validator from "@/constants/validators";
import { Typography } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Form> = {
  component: Form,
  title: "Components",
  parameters: {
    layout: 'centered'
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const FromStory: Story = {
  name: "Form",
  render: () => {
    return <Form
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        gap: 2,
        padding: 2,
        boxShadow: '1',
        borderRadius: 2
      }}
      onSubmit={(values) => {
        console.log("values is: ", values);
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>Example Form</Typography>

      <EmailField
        label="Email"
        placeholder="example@gmail.com"
        name="email"
      />

      <PasswordField label="Password" placeholder="strongtext" validators={
        [Validator.required(), Validator.minLength("", 8)]
      } name="password" />

      <SelectField
        renderInput={(params) => <TextField
          label="Animals"
          {...params}
        />}
        name="animal"
        options={[
          { label: "Dog", value: 'dog' },
          { label: "Cat", value: 'cat' },
          { label: "Kitchen", value: 'kitchen' }
        ]}
      />

      <SubmitButton>
        Submit
      </SubmitButton>
    </Form>
  }
}
