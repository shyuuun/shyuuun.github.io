import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
 parameters: {
  backgrounds: {
   default: "dark",
   values: [
    { name: "dark", value: "#1e1e1e" },
    { name: "light", value: "#faf5ed" },
   ],
  },
 },
};

export default preview;
