import { Avatar } from "@/components";
import { ICustomer } from "@/types";
import { DeleteOutline, EditOutlined, StarBorder } from "@mui/icons-material";
import { Box, BoxProps, Divider, Typography } from "@mui/material";


type Props = {
  customer?: ICustomer
} & BoxProps;
export const CustomerDetail: React.FC<Props> = (props) => {

  if (!props.customer) return null;

  return <Box {...props}>
    <Box sx={{ display: 'flex', gap: 1, padding: 2 }}>
      <Typography variant="h7">Contact Details</Typography>
      <Box sx={{ flex: 1 }} />
      <StarBorder fontSize="small" />
      <EditOutlined fontSize="small" />
      <DeleteOutline fontSize="small" />
    </Box>

    <Divider />

    <Box sx={{ display: 'flex', padding: 2, gap: 2 }}>
      <Avatar src={props.customer.avatar} alt={props.customer.name} sx={{ width: 70, height: 70 }} />
      <Box>
        <Typography variant="subtitle1" fontWeight={600}>{props.customer.name}</Typography>
        {/* <Typography variant="subtitle2" color="text.secondary">{props.customer.gender}</Typography> */}
        {/* <Typography variant="subtitle2" color="text.secondary">{props.customer.dob}</Typography> */}
        <Typography variant="subtitle2" color="text.secondary">Sales Manager</Typography>
        <Typography variant="subtitle2" color="text.secondary">Playground L.cd</Typography>
      </Box>
    </Box>

    {/* Phone Number + Email */}

    <Box sx={{ display: "flex", gap: 10, padding: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="caption" color="text.secondary">Phone number</Typography>
        <Typography variant="body2" fontWeight={500}>{props.customer.phone}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="caption" color="text.secondary">Email Address</Typography>
        <Typography variant="body2" fontWeight={500}>{props.customer.email}</Typography>
      </Box>
    </Box>

    {/* Address */}
    <Box sx={{ display: "flex", gap: 10, padding: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="caption" color="text.secondary">Address</Typography>
        <Typography variant="body2" fontWeight={500}>{props.customer.address?.metadata.name}</Typography>
      </Box>
    </Box>

    <Box sx={{ display: "flex", gap: 10, padding: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="caption" color="text.secondary">Notes</Typography>
        <Typography variant="body2">{props.customer.note}</Typography>
      </Box>
    </Box>
  </Box>
}
