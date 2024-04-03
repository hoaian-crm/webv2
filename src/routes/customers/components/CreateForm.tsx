import { Dialog, DialogTitle, FormControl, InputLabel, ModalProps, TextField } from "@mui/material"

type Props = {

} & Omit<ModalProps, 'children'>;

export const CreateCustomerForm: React.FC<Props> = (props) => {
  return <Dialog {...props}>
    <DialogTitle>Create customer</DialogTitle>

    <FormControl sx={{ padding: 2 }}>
      <InputLabel>Customer Name</InputLabel>
      <TextField placeholder="Customer name" id="customer-name" variant="outlined" />
    </FormControl>
  </Dialog >
}
