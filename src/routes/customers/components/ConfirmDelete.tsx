import { useCustomerAction } from "@/hooks"
import { ICustomer } from "@/types";
import { ModalProps, Dialog, DialogTitle, Typography, Box, Button } from "@mui/material"

export type Props = {
  data: ICustomer
} & Omit<ModalProps, 'children'>;
export const ConfirmDeleteCustomer: React.FC<Props> = (props) => {

  const { remove } = useCustomerAction();

  return <Dialog {...props}>
    <DialogTitle variant="warning">
      Delete Customer
    </DialogTitle>

    <Box padding={3} paddingY={2} width={300} textAlign="center">
      <Typography variant="body2">
        Do you want to delete <Typography component="span" variant="subtitle2" fontWeight={700}>{props.data.name}</Typography> from your customers
      </Typography>
      <Typography variant="subtitle2" color="text.primary">
        NOTE: You can find it in deleted tab
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, marginTop: 2, marginX: 'auto' }}>

        <Button variant="contained" sx={{ flex: 1 }} onClick={() => {
          remove.mutate({
            ids: [props.data.id]
          });
          if (props.onClose) props.onClose({}, 'backdropClick')
        }} color="warning" size="medium">Delete</Button>
      </Box>

    </Box>
  </Dialog>
}
