import { Avatar } from "@/components";
import { ICustomer } from "@/types";
import { SearchOutlined } from "@mui/icons-material";
import { Box, Button, InputAdornment, List, ListItem, ListProps, TextField, Typography } from "@mui/material";

type Props = {
  selected?: number | string,
  onSelectCustomer?: (index: number | number) => void,
  customers: Array<ICustomer>;
} & ListProps;


export const ListCustomer: React.FC<Props> = ({ customers = [], ...props }) => {

  return <List {...props}>

    <ListItem>
      <TextField placeholder="Search" sx={{ width: "100%" }} variant="outlined" size="small" InputProps={{
        sx: {
          borderColor: 'divider',
          borderRadius: 2,
          paddingX: 2
        },
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlined sx={{ color: "text.primary" }} />
          </InputAdornment>
        )
      }} />
    </ListItem>

    {customers.map((customer) => (
      <ListItem key={customer.id} sx={{ padding: 0 }}>
        <Button
          size="large"
          sx={{
            display: 'flex', gap: 2,
            // borderRadius: 2,
            width: "100%",
            justifyContent: 'flex-start',
            color: 'inherit',
            backgroundColor: props.selected === customer.id ? 'background.active' : 'inherit',
            ":hover": {
              color: 'primary.main'
            },
            padding: 1,
            paddingX: 2
          }}
          onClick={() => {
            if (props.onSelectCustomer) {
              props.onSelectCustomer(+customer.id);
            }
          }}
        >
          <Avatar src={customer.avatar} alt={customer.name} />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            textAlign: 'left',
          }}>
            <Typography variant="body2" fontWeight={600}>{customer.name}</Typography>
            <Typography variant="caption" >{customer.email}</Typography>
          </Box>
        </Button>
      </ListItem>)
    )}
  </List>
}
