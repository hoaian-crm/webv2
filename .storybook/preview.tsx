import { ThemeProvider } from "@emotion/react";
import type { Preview } from "@storybook/react";
import theme from '../src/theme';
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(Story) => {
    console.log("hello")
    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  }]
};

export default preview;
