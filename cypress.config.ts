import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "d98jup",

  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
