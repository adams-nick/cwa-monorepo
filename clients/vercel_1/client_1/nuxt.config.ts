// cwa-monorepo/clients/vercel-project-1/client-1/nuxt.config.ts
import { defineNuxtConfig } from "nuxt/config";
import baseConfig from "../../../shared/base-nuxt.config"; // Relative path to base config
import { resolve } from "path";

export default defineNuxtConfig({
  ...baseConfig,
  alias: {
    "@shared": resolve(__dirname, "../../../shared"), // Adjust path if necessary
  },
  // Add any client-specific configurations here if needed
});
