import { defineStore } from "pinia"
export const useLayoutsStore = defineStore('layouts', {
  state: () => ({
    drawer: false,
    menuList: [
      {
        title: 'Inicio',
        to: '/',
      },
      { title: 'Noticias', to: '/notices' },
      { title: 'Sobre mi', to: '/aboutMe' },
      {
        title: 'Proyectos',
        to: '/projects/',
      },
      {
        title: 'Recursos',
        to: '/resources/',
      }
    ],
    socialMedia: [
      {
        icon: 'mdi-twitter',
        href: 'https://twitter.com/Krashmello',
      },
      { icon: 'mdi-github', href: 'https://github.com/KrashMello' },
      { icon: 'mdi-twitch', href: 'https://www.twitch.tv/krashmello' },
    ],
  }),
  getters: {

  },
  actions: {
    setDrawer() {
      this.drawer = !this.drawer
    },

  },
})
