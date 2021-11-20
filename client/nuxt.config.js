export default {
  // Disable Server Side rendering
  // ssr: false,
  // Disable Server Side rendering for specific page
  // serverMiddleware: ["~/middleware/render"],
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: 'client',
    titleTemplate: "Passioncorners: %s",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "~/plugins/forwardCookie"
    "~/plugins/persistedState.client.js",
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/dotenv",
  ],
  css: ["~/assets/sass/main.scss"],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/toast", "cookie-universal-nuxt"],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: {
    color: "#808CF9",
    height: "3px",
  },
  // router: {
  //   prefetchLinks: false,
  // },
};
