import { ComponentTheme } from ".";

export const MuiTypography: ComponentTheme["MuiTypography"] = {
  variants: [{
    props: {
      variant: 'h7'
    },
    style: {
      fontSize: '1rem',
      fontFamily: 'Plus Jakarta Sans',
      fontWeight: 600,
    }
  }, {
    props: {
      variant: 'formLabel'
    },
    style: {
      fontSize: '0.875rem',
      fontFamily: 'Plus Jakarta Sans',
      fontWeight: 600,
      marinTop: '10px'
    }
  }
  ]
}
