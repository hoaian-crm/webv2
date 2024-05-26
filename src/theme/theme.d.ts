import "@mui/material/Button";
import "@mui/material/Typography";
import "@mui/material/styles/createPalette";

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
    link: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h7: true,
    formLabel: true,
    warning: true,
    error: true,
    info: true,
  }
}

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    active?: string;
    main?: string;
    warning?: string;
    error?: string;
  }

  interface TypeText {
    warning?: string;
    error?: string;
  }
}
