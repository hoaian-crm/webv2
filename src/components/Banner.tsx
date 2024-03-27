import { Box, BoxProps, Typography } from "@mui/material"

type Props = {
  title?: string;
  subTitle?: string;
} & BoxProps;

export const Banner: React.FC<Props> = (props) => {
  return <Box
    {...props}
    sx={{
      backgroundColor: 'background.active',
      display: 'flex',
      padding: 2,
      paddingX: 4,
      alignItems: 'center',
      overflowY: 'hidden',
      maxHeight: "100px",
      borderRadius: 5,
      ...props.sx
    }}
  >
    <Box>
      <Typography variant="h6">{props.title}</Typography>
      <Typography variant="subtitle1" fontWeight={500} color="text.secondary">{props.subTitle}</Typography>
    </Box>
    <Box sx={{ flex: 1 }} />
    <img src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/breadcrumb/ChatBc.png" style={{ marginTop: 80 }} />
  </Box>
}
