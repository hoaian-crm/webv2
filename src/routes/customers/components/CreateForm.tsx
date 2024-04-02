import { Dialog, DialogTitle, ModalProps } from "@mui/material"

type Props = {

} & Omit<ModalProps, 'children'>;

export const CreateCustomerForm: React.FC<Props> = (props) => {
  return <Dialog {...props}>
    <DialogTitle>Create customer</DialogTitle>
  </Dialog >
}
