// cwa-monorepo/clients/vercel-project-1/client-1/nuxt.config.ts
import { defineNuxtConfig } from "nuxt/config";
import baseConfig from "../../../shared/base-nuxt.config";
import { resolve } from "path";

export default defineNuxtConfig({
  ...baseConfig,
  alias: {
    "@shared": resolve(__dirname, "../../../shared"),
  },
  runtimeConfig: {
    public: {
      BASE_API_URL: process.env.BASE_API_URL,
      CLIENT_API_KEY: process.env.CLIENT_API_KEY,
    },
  },
});
