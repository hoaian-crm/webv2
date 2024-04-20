import { Avatar, Editable, EmailField, Form, LocationButton, MapField, PhoneNumberField, SubmitButton } from "@/components";
import { ICustomer } from "@/types";
import { DeleteOutline, EditOutlined, SaveRounded, StarBorder } from "@mui/icons-material";
import { Box, BoxProps, Button, Divider, IconButton, TextField, Typography } from "@mui/material";
import moment from 'moment';
import { useState } from "react";


type Props = {
  customer?: ICustomer
} & BoxProps;
export const CustomerDetail: React.FC<Props> = (props) => {

  const [editing, setEditing] = useState(false);

  if (!props.customer) return null;

  const onSave = () => {
    setEditing(false);
  }

  return <Form
    key={props.customer.id}
    onSubmit={(values) => {
      console.log("Submited: ", values);
    }} {...props}>
    <Box sx={{ display: 'flex', gap: 1, padding: 2, alignItems: 'center' }}>
      <Typography variant="h7">Contact Details</Typography>
      <Box sx={{ flex: 1 }} />
      <IconButton>
        <StarBorder fontSize="small" />
      </IconButton>
      <IconButton onClick={() => setEditing(!editing)}>
        <EditOutlined fontSize="small" />
      </IconButton>
      <IconButton>
        <DeleteOutline fontSize="small" />
      </IconButton>
    </Box>

    <Divider />

    <Box sx={{ display: 'flex', padding: 2, gap: 2 }}>
      <Avatar src={props.customer.avatar} alt={props.customer.name} sx={{ width: 70, height: 70 }} />
      <Box>
        <Typography variant="subtitle1" fontWeight={600}>{props.customer.name}</Typography>
        <Typography variant="subtitle2" color="text.secondary">Date of birth</Typography>
        <Editable input={<TextField name="dob" type="date" defaultValue={props.customer.dob} size="small" />} editing={editing}>
          <Typography variant="subtitle2" color="text.secondary">{moment(props.customer.dob).format('DD/MM/YYYY')}</Typography>
        </Editable>
      </Box>
    </Box>

    {/* Phone Number + Email */}

    <Box sx={{ display: "flex", gap: 10, padding: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="caption" color="text.secondary">Phone number</Typography>
        <Editable editing={editing}
          input={<PhoneNumberField
            inputField={{ name: 'phone', defaultValue: props.customer.phone, size: 'small' }}
            extensionField={{ name: 'extension', defaultValue: props.customer.extension, size: 'small' }} />}
        >
          <Typography variant="body2" fontWeight={500}>({props.customer.extension}) {props.customer.phone}</Typography>
        </Editable>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="caption" color="text.secondary">Email Address</Typography>
        <Editable editing={editing}
          input={<EmailField type="email" name="email" size="small" defaultValue={props.customer.email} />}
        >
          <Typography variant="body2" fontWeight={500}>{props.customer.email}</Typography>
        </Editable>
      </Box>
    </Box>

    {/* Address */}
    <Box sx={{ display: "flex", gap: 10, padding: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="caption" color="text.secondary">Address</Typography>
        <Box sx={{ display: "flex" }}>
          <Editable editing={editing}
            input={<MapField name="placeId" sx={{ minWidth: '300px' }} />}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" fontWeight={500} textAlign="center">{props.customer.address?.metadata.name}</Typography>
              <LocationButton placeId={props.customer.address?.metadata.place_id || ""} />
            </Box>
          </Editable>
        </Box>
      </Box>
    </Box>

    <Box sx={{ display: "flex", gap: 10, padding: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="caption" color="text.secondary">Notes</Typography>
        <Editable
          editing={editing}
          input={<TextField multiline name="note" rows={3} sx={{ minWidth: 300 }} defaultValue={props.customer.note} />}
        >
          <Typography variant="body2">{props.customer.note}</Typography>
        </Editable>
      </Box>
    </Box>
    {editing &&
      <Box sx={{ padding: 2, display: 'flex', gap: 2, maxWidth: 300 }}>
        <Button color="error" variant="contained" sx={{ flex: 1 }} onClick={() => setEditing(false)}>Cancel</Button>
        <SubmitButton sx={{ flex: 1 }}>Save</SubmitButton >
      </Box>
    }
  </Form>
}
