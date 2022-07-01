import { defineConfig } from "vite";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  root: "./src",
  build: {
    manifest: true,
  },
  server: {
    hmr: {
      host: "localhost",
    },
  },
  logLevel: "info",
});
