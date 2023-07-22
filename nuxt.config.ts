// https://nuxt.com/docs/api/configuration/nuxt-config
// import { createResolver } from '@nuxt/kit'

export default defineNuxtConfig({
  devtools: { enabled: true },
  // experimental: {
  //   inlineSSRStyles: false
  // },
  // vite: {
  //   ssr: {
  //     noExternal: ["vuetify"]
  //   }
  // },
  app: {
    head: {
      titleTemplate: '%s - KrashMello',
      title: 'Inicio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: 'KrashMello website' },
        { hid: 'twitter-title', property: 'twitter:title', content: 'Krashmello website' },
        {
          hid: 'og-desc',
          property: 'og:description',
          content: 'soy krashmello y esta es mi web',
        },
        {
          hid: 'twitter-description',
          property: 'twitter:description',
          content: 'soy krashmello y esta es mi web'
        },
        { hid: 'og-image', property: 'og:image', content: '/icon.png' },
        {
          hid: 'twitter-image',
          property: "twitter:image",
          content: '/icon.png'
        },
        {
          hid: 'twitter-card',
          property: 'twitter:card',
          content: 'app'
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: 'https://krashmello.github.io',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'soy krashmello y esta es mi web',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@vite-pwa/nuxt'
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  imports: {
    dirs: ['store']
  },
  css: ["vuetify/styles/main.sass", "~/assets/variables.scss"],

  typescript: {
    shim: false
  },
  build: { transpile: ["vuetify"] },
  googleFonts: {
    families: {
      Ubuntu: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    download: false,
    useStylesheet: true
  },
  pwa: {
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true,
      type: 'module'
    },
    workbox: {
      navigateFallback: '/',
    },
    manifest: {
      name: 'KrashMello App',
      short_name: 'KM App',
      theme_color: '#ECEFF4',
      background_color: '#ECEFF4',
      description: 'Un mundo donde podras saber mas de mi y sobre lo que hago, tambien donde encontras cosas de interez en la programacion.',
      icons: [
        // {
        //   src: 'pwa-192x192.png',
        //   sizes: '192x192',
        //   type: 'image/png',
        // },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        // {
        //   src: 'pwa-512x512.png',
        //   sizes: '512x512',
        //   type: 'image/png',
        //   purpose: 'any maskable',
        // },
      ],
    }
  }
})
