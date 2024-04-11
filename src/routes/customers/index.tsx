import { Box, Divider } from '@mui/material';
import { ActionMenu } from './components/ActionMenu';
import { ListCustomer } from './components/ListCustomer';
import { CustomerDetail } from './components/CustomerDetail';
import { useCustomer } from '@/hooks';
import { useEffect, useMemo, useState } from 'react';
import { Banner, MapField } from '@/components';

export * from './components/ActionMenu';
export * from './components/ListCustomer';
export * from './components/CustomerDetail';
export * from './components/CreateForm.tsx';

export const CustomerPage = () => {

  const { customers } = useCustomer();
  const [selected, setSelected] = useState<string | number>();

  const customer = useMemo(() => {
    return customers.data?.result.find(customer => customer.id === selected) || customers.data?.result[0];
  }, [selected])

  useEffect(() => {
    if (!selected && (customers.data?.result.length || 0) > 0) setSelected(customers.data?.result[0].id);
  }, [selected, customers.data?.result])

  // return <Box sx={{
  //   maxWidth: 1400,
  //   marginX: 'auto',
  //   marginTop: 2,
  //   padding: 2,
  // }}>
  //   <Banner title='Customer Application' subTitle='Home • Contact Application' />
  //   <Box sx={{
  //     display: 'flex',
  //     borderRadius: 2,
  //     boxShadow: 2,
  //     marginTop: 5,
  //   }}>
  //     <ActionMenu sx={{ padding: 2, minWidth: 250 }} />
  //     <Divider orientation='vertical' flexItem />
  //     <ListCustomer
  //       customers={customers.data?.result || []}
  //       onSelectCustomer={(e) => setSelected(e)}
  //       selected={selected}
  //       sx={{ overflowY: "auto", width: "100%", maxHeight: "600px" }}
  //     />
  //     <Divider orientation='vertical' flexItem />
  //     <CustomerDetail customer={customer} />
  //   </Box>
  // </Box>
  return <MapField />
}
