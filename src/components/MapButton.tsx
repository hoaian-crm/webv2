import { useMap } from "@/hooks";
import { CropFree, HorizontalRule, LocationOn, MapOutlined } from "@mui/icons-material";
import { Box, Fab, FabProps, IconButton, Popper, Tooltip, Typography } from "@mui/material";
import Map, { Marker } from '@goongmaps/goong-map-react';
import { GOONG_MAP_API_KEY } from "@/constants";
import { useEffect, useState, useRef } from "react";

export const MapButton: React.FC<FabProps> = (props) => {

  const {
    width,
    height,
    longitude,
    latitude,
    zoom,
    changeViewPort,
    toggleExpand,
    markers,
    addMarker
  } = useMap();

  const { anchor, setAnchor, open, toogleOpen } = useMap();
  const buttonRef = useRef<any>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      changeViewPort({ longitude: position.coords.longitude, latitude: position.coords.latitude, zoom: 14 })
      addMarker({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
        color: 'error',
        name: 'Your Position'
      })
    })
  }, [])

  useEffect(() => {
    if (buttonRef.current) setAnchor(buttonRef.current);
  }, [buttonRef])

  return <>
    <Fab
      color='primary'
      sx={{
        bottom: '3rem',
        right: '3rem',
        position: 'absolute',
        opacity: open ? 0 : 1,
        zIndex: 3000,
      }} {...props}
      onClick={toogleOpen}
      ref={buttonRef}
    >
      <MapOutlined />
    </Fab >

    <Popper
      open={open}
      anchorEl={anchor} placement="left-start"
      sx={{
        boxShadow: 2,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        zIndex: 3000
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 1,
        }}
      >
        <Typography>
          Relation C's Map
        </Typography>

        <Box sx={{ flex: 1 }}></Box>
        <IconButton onClick={toogleOpen}>
          <HorizontalRule />
        </IconButton>
        <IconButton onClick={toggleExpand}>
          <CropFree />
        </IconButton>
      </Box>
      <Map
        goongApiAccessToken={GOONG_MAP_API_KEY}
        width={width}
        height={height}
        longitude={longitude}
        latitude={latitude}
        zoom={zoom}
        onViewportChange={(e: any) => changeViewPort(e)}
      >
        {markers.map((marker) => {
          return <Marker key={marker.name} longitude={marker.longitude} latitude={marker.latitude}>
            <Tooltip title={marker.name}>
              <LocationOn color={marker.color} />
            </Tooltip>
          </Marker>
        })}
      </Map>
    </Popper>
  </>
}
