import { DRAWER_WIDTH } from '@/constants';
import { RouteItem, routes } from '@/routes';
import { CircleOutlined, KeyboardArrowDown, KeyboardArrowRight, SvgIconComponent } from '@mui/icons-material';
import { Box, Button, ButtonProps, DrawerProps, Drawer as MuiDrawer, Typography } from '@mui/material';
import { ReactElement, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type DrawerItem = {
  Icon?: SvgIconComponent;
  name?: string;
  active?: boolean;
  expand?: boolean;
  badge?: number | ReactElement;
};

export const Drawer: React.FC<DrawerProps> = (props) => {

  const location = useLocation();
  const navigate = useNavigate();

  const renderRoutes = useMemo(() => {
    let result: Array<ReactElement> = [];
    let group: string = "";
    routes.forEach(route => {
      if (!route.name) return;
      if (route.group && route.group !== group) {
        group = route.group;
        result.push(
          <Typography variant='body2' fontWeight={600} sx={{ marginTop: 5, marginBottom: 2, textAlign: 'left' }}>
            {group}
          </Typography>
        )
      }
      if (!route.children) {
        result.push(<DrawerItem item={{ ...route, active: location.pathname === route.path }} onClick={() => navigate(route.path!)} />)
      } else {
        result.push(
          <DrawerItem item={{ ...route, active: route.children.map(child => child.path).includes(location.pathname) }}>
            {route.children.map((route: RouteItem) => <DrawerItemChild item={{ ...route, active: location.pathname === route.path }} onClick={() => navigate(route.path!)} />)}
          </DrawerItem>
        )
      }
    });
    return result;
  }, [routes, location.pathname])

  return <MuiDrawer
    PaperProps={{
      sx: {
        width: DRAWER_WIDTH
      }
    }}
    {...props}>
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <img src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/logos/dark-logo.svg" />
      </Box>
      {renderRoutes}
    </Box>
  </MuiDrawer>
}

export type DrawerItemProps = {
  item: DrawerItem;
} & ButtonProps;


export const DrawerItem: React.FC<DrawerItemProps> = ({ item, ...props }) => {

  const [expand, setExpand] = useState(item.expand);

  return <>
    <Button
      variant={!item.active ? 'link' : 'contained'}
      color={item.active ? 'primary' : 'inherit'}
      disableElevation={true}
      sx={{ width: "100%", justifyContent: 'flex-start' }}
      onClick={(e) => {
        setExpand(!expand);
        if (props.onClick) props.onClick(e);
      }}
      {...props}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'flex-start', width: "100%" }}>
        {item.Icon && <item.Icon fontSize='small' />}
        <Typography variant="subtitle2">{item.name}</Typography>
        <Box sx={{ flex: 1 }} />
        {item.badge}
        {props.children && (expand ? <KeyboardArrowDown /> : <KeyboardArrowRight />)}
      </Box>
    </Button >
    {expand && props.children}
  </>
};

export const DrawerItemChild: React.FC<DrawerItemProps> = ({ item, ...props }) => {
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
