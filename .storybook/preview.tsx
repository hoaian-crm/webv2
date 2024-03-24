import { ThemeProvider } from "@emotion/react";
import type { Preview } from "@storybook/react";
import React from "react";
import { DynamicThemeProvider } from '../src/components';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen'
  },
  decorators: [(Story) => {
    return (
      <DynamicThemeProvider>
        <Story />
      </DynamicThemeProvider>
    )
  }]
};

export default preview;
