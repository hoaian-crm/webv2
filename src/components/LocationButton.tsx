import { useMap } from "@/hooks";
import { LocationOn } from "@mui/icons-material";
import { IconButton, IconButtonProps } from "@mui/material"

export type LocationButtonProps = {
  name?: string;
  placeId: string;
} & IconButtonProps;
export const LocationButton: React.FC<LocationButtonProps> = ({ name, placeId, ...props }) => {

  const { viewPlaceId } = useMap();

  return <IconButton
    onClick={(e) => {
      if (props.onClick) props.onClick(e);
      viewPlaceId(placeId);
    }}
    {...props}
  >
    <LocationOn color="primary" />
  </IconButton>
}
