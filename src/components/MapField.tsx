import { CloseOutlined } from "@mui/icons-material";
import { Box, IconButton, Menu, MenuItem, MenuList, Popper, TextField, TextFieldProps, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MapGL from '@goongmaps/goong-map-react';
import { useAddress } from "@/hooks/useAddress";

export type MapFieldProps = TextFieldProps & {};


const API_KEY = "DRUQLTSYdzyGzqy9WT7zbQzMflrlhoQJBxZkQeHd";

export const MapField: React.FC<TextFieldProps> = (props) => {

  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);

  const { query, setInput } = useAddress();

  const [zoom, setZoom] = useState(14);

  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
  });

  const toogleMap = (e: any) => {
    if (anchor) setAnchor(null);
    else setAnchor(e.currentTarget);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setViewport({
        ...viewport,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    })
  }, [])

  return <>
    <TextField
      {...props}
      onFocus={toogleMap}
      onBlur={toogleMap}
      onChange={(e) => setInput(e.target.value)}
    />

    <Popper
      open={open}
      anchorEl={anchor}
      disablePortal
      placement="right-start"
      sx={{
        boxShadow: 5,
        borderRadius: 2,
        overflow: 'hidden'
      }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
      }}>
        <Typography variant="h7" sx={{ marginLeft: 2 }}>Map</Typography>
        <IconButton onClick={toogleMap}>
          <CloseOutlined />
        </IconButton>
      </Box>
      <MapGL
        {...viewport}
        zoom={zoom}
        goongApiAccessToken={API_KEY}
        width={400}
        height={400}
        onViewportChange={(nextViewPort: any) => {
          setViewport({
            longitude: nextViewPort.longitude,
            latitude: nextViewPort.latitude
          })
          setZoom(nextViewPort.zoom);
        }}
      >
      </MapGL>
    </Popper>

    <Popper
      open={open}
      anchorEl={anchor}
      placement="bottom"
      sx={{
        backgroundColor: 'background.primary',
        boxShadow: 1,
        width: (anchor?.clientWidth || 5) - 5,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
      }}
    >
      <MenuList>
        <MenuItem>Hello world</MenuItem>
      </MenuList>
    </Popper >
  </>
}
