import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from "vuetify/components";
import * as directives from "vuetify/directives"

export default defineNuxtPlugin(app => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
    },
    theme: {
      defaultTheme: "light",
      themes: {
        dark: {
          dark: true,
          colors: {
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
          }
        },
        light: {
          dark: false,
          colors: {
            primary: '#3B4252',
            secondary: '#88C0D0',
            accent: '#D8DEE9',
            info: '#EBCB8B',
            warning: '#D08770',
            error: '#BF616A',
            success: '#A3BE8C',
            backgroundToolbar: '#2E3440',
            backgroundCard: '#3B4252',
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
          }
        },
      }
    }
  })
  app.vueApp.use(vuetify)
})
