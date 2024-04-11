import { Meta, StoryObj } from "@storybook/react";
import MapGL from '@goongmaps/goong-map-react';
import { useEffect, useState } from "react";

const meta: Meta<typeof Map> = {
  title: "Components",
}

export default meta;

const API_KEY = "DRUQLTSYdzyGzqy9WT7zbQzMflrlhoQJBxZkQeHd";
export const MapStory: Story = {
  name: 'Map',
  render: () => {
    const [zoom, setZoom] = useState(8);
    const [viewPort, setViewPort] = useState({
      latitude: 0,
      longitude: 0
    });

    useEffect(() => {

    })


    return <MapGL
      {...viewPort}
      zoom={zoom}
      goongApiAccessToken={API_KEY}
      width="100vw"
      height="100vh"
      onViewportChange={(e: any) => {
        setZoom(e.zoom);
        setViewPort({
          longitude: e.longitude,
          latitude: e.latitude,
        })
      }}
    />
  }
}

export type Story = StoryObj<typeof meta>;
