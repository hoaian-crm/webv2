import { AvatarProps, Avatar as MuiAvatar } from "@mui/material";
import { createAvatar } from '@dicebear/core';
import { initials } from "@dicebear/collection";

export const Avatar: React.FC<AvatarProps> = (props) => {
  return <MuiAvatar {...props} src={props.src ? props.src : createAvatar(initials, {
    seed: props.alt
  }).toDataUriSync()}
    alt={createAvatar(initials, {
      seed: props.alt
    }).toDataUriSync()} />
}
