import { CircleOutlined, KeyboardArrowRight, SvgIconComponent } from '@mui/icons-material';
import { Box, Button, ButtonProps, DrawerProps, Drawer as MuiDrawer, Typography } from '@mui/material';
import { ReactElement } from 'react';

export type DrawerItem = {
  Icon?: SvgIconComponent;
  name: string;
  active?: boolean;
  expand?: boolean;
  href?: string;
  badge?: number | ReactElement;
};

export const Drawer: React.FC<DrawerProps> = (props) => {
  return <MuiDrawer
    variant="permanent"
    {...props}>
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <img src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/logos/dark-logo.svg" />
      </Box>
    </Box>
  </MuiDrawer>
}

export type DrawerItemProps = {
  item: DrawerItem;
} & ButtonProps;


export const DrawerItem: React.FC<DrawerItemProps> = ({ item, ...props }) => {

  return <>
    <Button
      variant={!item.active ? 'link' : 'contained'}
      color={item.active ? 'primary' : 'inherit'}
      disableElevation={true}
      sx={{ width: "100%", justifyContent: 'flex-start' }}
      {...props}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'flex-start' }}>
        {item.Icon && <item.Icon />}
        <Typography variant="subtitle1">{item.name}</Typography>
        <Box sx={{ flex: 1 }} />
        {item.badge}
        {props.children && <KeyboardArrowRight />}
      </Box>
    </Button >
    {item.expand && props.children}
  </>
};

export const DrawerItemChild: React.FC<DrawerItemProps> = ({ item, ...props }) => {
  console.log("Item is: ", item);
  return <Button
    variant='link'
    color={item.active ? 'primary' : 'inherit'}
    sx={{
      justifyContent: 'flex-start',
      width: "100%",
    }} {...props}>
    <Box sx={{ display: "flex", alignItems: 'center', gap: 2, justifyContent: 'flex-start' }}>
      <CircleOutlined sx={{ fontSize: 10, width: 24 }} />
      <Typography variant="subtitle2">{item.name}</Typography>
    </Box>
  </Button>
}
