import { ThemeProvider } from "@emotion/react";
import type { Preview } from "@storybook/react";
import React from "react";
import { DynamicThemeProvider, MapButton } from '../src/components';
import "@fontsource/plus-jakarta-sans/200.css";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { withConsole } from "@storybook/addon-console";

const queryClient = new QueryClient();


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
  decorators: [
    (storyFn, context) => withConsole()(storyFn)(context),
    (Story) => {
      return (
        <QueryClientProvider client={queryClient}>
          <DynamicThemeProvider>
            <Story />
            <MapButton />
          </DynamicThemeProvider>
        </QueryClientProvider>
      )
    }]
};

export default preview;
