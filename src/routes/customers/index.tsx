import { Box, Divider } from '@mui/material';
import { ActionMenu } from './components/ActionMenu';
import { ListCustomer } from './components/ListCustomer';
import { CustomerDetail } from './components/CustomerDetail';
import { useCustomers } from '@/hooks';
import { useEffect, useMemo, useState } from 'react';
import { Banner, MapField } from '@/components';

export * from './components/ActionMenu';
export * from './components/ListCustomer';
export * from './components/CustomerDetail';
export * from './components/CreateForm.tsx';

export const CustomerPage = () => {

  const [selected, setSelected] = useState<string | number>();
  const [tabIndex, setTabIndex] = useState(0);

  const { data } = useCustomers({
    limit: 100,
    keyword: '',
    offset: 0,
    isDeleted: tabIndex === 2 ? 'true' : 'false'
  });

  useEffect(() => {
    if (!selected && (data?.result.length || 0) > 0) setSelected(data?.result[0].id);
  }, [selected, data?.result])

  const customer = useMemo(() => {
    return data?.result.find(customer => customer.id === selected) || data?.result[0];
  }, [selected])

  return <Box
    sx={{
      width: '90%',
      marginX: 'auto',
      marginTop: 2,
      padding: 2,
    }}>
    <Banner title='Customer Application' subTitle='Home • Contact Application' />
    <Box sx={{
      display: 'flex',
      borderRadius: 2,
      boxShadow: 2,
      marginTop: 5,
      width: "100%"
    }}>
      <ActionMenu sx={{ padding: 1, minWidth: '200px' }} onTabChange={(index) => setTabIndex(index)} tabIndex={tabIndex} />
      <Divider orientation='vertical' flexItem />
      <ListCustomer
        customers={data?.result || []}
        onSelectCustomer={(e) => setSelected(e)}
        selected={selected}
        sx={{ overflowY: "auto", minWidth: "300px", maxHeight: "600px" }}
      />
      <Divider orientation='vertical' flexItem />
      <CustomerDetail customer={customer} sx={{ width: '100%' }} />
    </Box>
  </Box>
  return <MapField />
}
