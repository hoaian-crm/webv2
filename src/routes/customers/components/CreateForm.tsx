import { AvatarField, EmailField, Form, MapField, PhoneNumberField, RadioField, SubmitButton, TextField } from "@/components";
import Validator from "@/constants/validators";
import { useCustomerAction } from "@/hooks";
import { Box, Button, Dialog, DialogTitle, ModalProps, Typography } from "@mui/material"

type Props = {

} & Omit<ModalProps, 'children'>;

export const CreateCustomerForm: React.FC<Props> = (props) => {

  const { create } = useCustomerAction();

  return <Dialog {...props}>
    <DialogTitle>Create customer</DialogTitle>

    <Form
      onSubmit={async (value) => {
        await create.mutateAsync(value);
        if (props.onClose) props.onClose({}, 'backdropClick')
      }}
      sx={{ padding: 2, paddingTop: 0, width: 500, display: 'flex', flexDirection: 'column', gap: 1 }}>

      <Box
        sx={{
          marginX: 'auto',
          width: 100,
          height: 100,
          marginTop: 0
        }}>
        <AvatarField
          name="avatar"
          alt="A"
        />
      </Box>

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
      ]} />

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

      <Typography variant="formLabel">Address: </Typography>
      <MapField name="placeId" validators={[Validator.required()]} />

      <Typography variant="formLabel">Note: </Typography>
      <TextField multiline name="note" rows={3} />

      <Box sx={{ display: 'flex', gap: 2, marginTop: 2, maxWidth: 150, marginLeft: 'auto', marginRight: 0 }}>
        <Button variant="contained" sx={{ flex: 1 }} onClick={() => {
          if (props.onClose) props.onClose({}, 'backdropClick')
        }} color="error" size="medium">Close</Button>
        <SubmitButton sx={{ flex: 1 }}>Create</SubmitButton>
      </Box>
    </Form>
  </Dialog >
}
