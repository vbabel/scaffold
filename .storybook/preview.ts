import type { Preview } from "@storybook/react-vite";
import { allModes } from "../.storybook/modes";

import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chromatic: {
      //🔶 Test each story for ArticleCard in two modes
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    backgrounds: {
      options: {
        // 👇 Default options
        dark: { name: "Dark", value: "#333" },
        light: { name: "Light", value: "#F7F9F2" },
        // 👇 Add your own
        maroon: { name: "Maroon", value: "#400" },
      },
    },
  },
};

export default preview;
