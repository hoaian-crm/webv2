import { Box, Divider } from '@mui/material';
import { ActionMenu } from './components/ActionMenu';
import { ListCustomer } from './components/ListCustomer';
import { CustomerDetail } from './components/CustomerDetail';
import { useCustomer } from '@/hooks';
import { useMemo, useState } from 'react';

export * from './components/ActionMenu';
export * from './components/ListCustomer';
export * from './components/CustomerDetail';

export const CustomerPage = () => {

  const { customers } = useCustomer();
  const [selected, setSelected] = useState<string | number>();

  const customer = useMemo(() => {
    return customers.data?.result.find(customer => customer.id === selected);
  }, [selected])

  return <Box sx={{
    display: 'flex',
    borderRadius: 2,
    boxShadow: 1
  }}>
    <ActionMenu sx={{ padding: 2 }} />
    <Divider orientation='vertical' flexItem />
    <ListCustomer customers={customers.data?.result || []} onSelect={(e) => setSelected(e.toString())} />
    <CustomerDetail customer={customer} />
  </Box>
}
