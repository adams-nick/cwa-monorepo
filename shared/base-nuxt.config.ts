// cwa-monorepo/shared/base-nuxt.config.ts
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: true, // Enable SSR as default
  css: [],
  components: true,
});
