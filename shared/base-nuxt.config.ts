// cwa-monorepo/shared/base-nuxt.config.ts
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: true, // Enable SSR as default
  css: [
    "@shared/styles/global.scss", // Global CSS applied to all clients
  ],
  components: true,
});
