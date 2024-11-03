import baseConfig from "../../../shared/base-nuxt.config"
import { resolve } from "path"

export default {
  ...baseConfig,
  css: [
    ...baseConfig.css, // Load shared CSS first
    "./custom/custom-styles.scss", // Consistent relative path for client-specific CSS
  ],
  alias: {
    "@shared": resolve(__dirname, "../../../shared"),
  },
  runtimeConfig: {
    public: {
      BASE_API_URL: process.env.BASE_API_URL,
      CLIENT_API_KEY: process.env.CLIENT_API_KEY,
    },
  },
}
