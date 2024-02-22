import { installGlobals } from "@remix-run/node";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { vitePlugin as remix } from "@vercel/remix-run-dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    remix({
      ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.scss", "**/*.css.map"],
    }),
    tsconfigPaths(),
    vanillaExtractPlugin(),
  ],
});
