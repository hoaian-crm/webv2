import { ComponentTheme } from ".";
import "@fontsource/plus-jakarta-sans/200.css";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";

export const MuiTypography: ComponentTheme["MuiTypography"] = {
  variants: [{
    props: {
      variant: 'h7'
    },
    style: {
      fontSize: '1rem'
    }
  }]
}
