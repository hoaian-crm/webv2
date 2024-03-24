import { useProfile } from "@/hooks/useProfile";
import { AccountBoxTwoTone, InboxTwoTone, ListAltTwoTone, SvgIconComponent } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, Popover, PopoverProps, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";

export const ProfileButton = () => {
  const { profile } = useProfile();
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);

  const id = 'profile-popup';
  const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
    setAnchor(e.currentTarget);
  }

  const handleClose = () => {
    setOpen(false);
    setAnchor(null);
  }

  return <div>
    <Button onClick={handleOpen} aria-describedby={id}>
      <Avatar src={profile?.avatar} sx={{ cursor: 'pointer' }} />
    </Button>
    <ProfilePopup
      open={open}
      id={id}
      anchorEl={anchor}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={handleClose}
    />
  </div>
}

export const ProfilePopup: React.FC<PopoverProps> = (props) => {

  const { profile } = useProfile();

  return <Popover PaperProps={{
    sx: {
      borderRadius: 2,
      boxShadow: 2,
    }
  }} {...props}>
    <Box sx={{
      padding: 3
    }}>
      <Typography variant="subtitle1" fontWeight={600}>User Profile</Typography>
      <Box sx={{ display: 'flex', marginTop: 2 }}>
        <Avatar src={profile?.avatar} sx={{ width: 70, height: 70 }} />
        <Box sx={{ marginLeft: 1 }}>
          <Typography variant="subtitle2" fontWeight={500}>{profile?.displayName}</Typography>
          <Typography variant="subtitle2" color="text.secondary" fontWeight={500}>{profile?.role}</Typography>
          <Typography variant="subtitle2" color="text.secondary" fontWeight={500}>{profile?.email}</Typography>
        </Box>
      </Box>
      <Divider sx={{ marginY: 2 }} />
      <Box sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
        <ProfileMenuItem icon={AccountBoxTwoTone} title="My Profile" subtitle="Account Settings" />
        <ProfileMenuItem icon={InboxTwoTone} title="My Inbox" subtitle="Messages & Email" />
        <ProfileMenuItem icon={ListAltTwoTone} title="My Task" subtitle="To-do and Daily Tasks" />
      </Box>

      <Button variant="outlined" sx={{ marginTop: 2, width: "100%", borderRadius: 2 }}>
        Log Out
      </Button>
    </Box>
  </Popover>
}

export const ProfileMenuItem: React.FC<{
  icon: SvgIconComponent,
  title: string,
  subtitle: string,
}> = (props) => {
  return <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
    <props.icon
      fontSize="large"
      sx={{ backgroundColor: '#F6F9FC', padding: 1, borderRadius: 2 }}
      color="primary"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginLeft: 2 }}>
      <Typography variant="subtitle2" fontWeight={600} sx={{ ":hover": { color: 'primary.main' } }}>
        {props.title}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        {props.subtitle}
      </Typography>
    </Box>
  </Box>
}
