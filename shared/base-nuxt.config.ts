export default {
  ssr: true,
  css: ["@shared/styles/global.scss"],
  components: true,
  runtimeConfig: {
    public: {
      BASE_API_URL: "https://default-api.com", // Default fallback
    },
  },
}
