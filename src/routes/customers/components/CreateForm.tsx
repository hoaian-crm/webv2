import { EmailField, Form, PhoneNumberField, RadioField, SubmitButton, TextField } from "@/components";
import Validator from "@/constants/validators";
import { Box, Button, Dialog, DialogTitle, ModalProps, Typography } from "@mui/material"

type Props = {

} & Omit<ModalProps, 'children'>;

export const CreateCustomerForm: React.FC<Props> = (props) => {
  return <Dialog {...props}>
    <DialogTitle>Create customer</DialogTitle>

    <Form onSubmit={(value) => {
      console.log("Submmited: ", value);
    }} sx={{ padding: 3, width: 500, display: 'flex', flexDirection: 'column', gap: 1 }}>

      <Typography variant="formLabel">Name: </Typography>
      <TextField name="name" placeholder="Alice" fullWidth validators={[Validator.required()]} />

      <Typography variant="formLabel">Email: </Typography>
      <EmailField name="email" placeholder="example@email.com" fullWidth />

      <Typography variant="formLabel">Gender: </Typography>
      <RadioField defaultValue="male" row name="gender" options={[
        {
          label: 'Male',
          value: 'male'
        },
        {
          label: 'Female',
          value: 'female'
        },
        {
          label: 'Order',
          value: 'order'
        },
      ]}
      />

      <Typography variant="formLabel">Phone Number: </Typography>
      <PhoneNumberField
        extensionField={{
          name: 'extension'
        }}
        inputField={{
          name: 'phone',
        }}
      />

      <Typography variant="formLabel">Date of birth: </Typography>
      <TextField name="dob" type="date" />
      <Box sx={{ display: 'flex', gap: 2, marginTop: 2, maxWidth: 150, marginLeft: 'auto', marginRight: 0 }}>
        <Button variant="contained" sx={{ flex: 1 }} color="error" size="medium">Close</Button>
        <SubmitButton sx={{ flex: 1 }}>Create</SubmitButton>
      </Box>
    </Form>
  </Dialog >
}
