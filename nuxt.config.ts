// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      link: [{ rel: 'icon', href: 'mlmupc-logo.ico' }],
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_URL,
      webBaseUrl: process.env.WEB_URL,
    },
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
});
