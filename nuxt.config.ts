// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      link: [{ rel: 'icon', href: 'mlmupc-logo.ico' }],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  nitro: {
    preset: 'static',
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
      webBaseUrl: process.env.NUXT_PUBLIC_SITE_URL || import.meta.url,
    },
  },
  plugins: ['~/plugins/api.ts'],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
});
