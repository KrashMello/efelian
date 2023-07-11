// import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - KrashMello',
    title: 'Inicio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-title', property: 'og:title', content: 'KrashMello website' },
      {
        hid: 'og-desc',
        property: 'og:description',
        content: 'soy krashmello y esta es mi web',
      },
      { hid: 'og-image', property: 'og:image', content: '/icon.png' },
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: "http://localhost:5000/",
    baseURL: 'https://enfelia-back.onrender.com/',
    proxyHeaders: false,
    credentials: false,
    // proxy: true,
  },
  // proxy: {
  //   "/api/": {
  //     target: "https://enfelia-back.onrender.com/",
  //     pathRewrite: { "^/api/": "" },
  //     changeOrigin: true,
  //   },
  //   // '/api2/': 'http://api.another-website.com'
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      options: {
        customProperties: true,
      },
      dark: false,
      themes: {
        dark: {
          primary: '#88C0D0',
          textPrimary: '#434C5E',
          textAccent: '#4C566A',
          accent: '#5E81AC',
          secondary: '#81A1C1',
          info: '#EBCB8B',
          warning: '#D08770',
          error: '#BF616A',
          success: '#A3BE8C',
          background: '#2E3440',
          nord0: '#2E3440',
          nord1: '#3B4252',
          nord2: '#434C5E',
          nord3: '#4C566A',
          nord4: '#D8DEE9',
          nord5: '#E5E9F0',
          nord6: '#ECEFF4',
          nord7: '#8FBCBB',
          nord8: '#88C0D0',
          nord9: '#81A1C1',
          nord10: '#5E81AC',
          nord11: '#BF616A',
          nord12: '#D08770',
          nord13: '#EBCB8B',
          nord14: '#A3BE8C',
          nord15: '#B48EAD',
        },
        light: {
          primary: '#88C0D0',
          textPrimary: '#434C5E',
          textAccent: '#4C566A',
          accent: '#D8DEE9',
          secondary: '#81A1C1',
          info: '#EBCB8B',
          warning: '#D08770',
          error: '#BF616A',
          success: '#A3BE8C',
          background: '#ECEFF4',
          nord0: '#2E3440',
          nord1: '#3B4252',
          nord2: '#434C5E',
          nord3: '#4C566A',
          nord4: '#D8DEE9',
          nord5: '#E5E9F0',
          nord6: '#ECEFF4',
          nord7: '#8FBCBB',
          nord8: '#88C0D0',
          nord9: '#81A1C1',
          nord10: '#5E81AC',
          nord11: '#BF616A',
          nord12: '#D08770',
          nord13: '#EBCB8B',
          nord14: '#A3BE8C',
          nord15: '#B48EAD',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // server: {
  //   host: '130.11.0.50',
  //   port: 3000,
  // },
}
