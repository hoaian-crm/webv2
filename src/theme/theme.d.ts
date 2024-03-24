import "@mui/material/Button"
import "@mui/material/Typography";

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
    link: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h7: true;
  }
}
