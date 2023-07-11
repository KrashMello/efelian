import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const defaultState = {
  drawer: false,
  menuList: [
    {
      title: 'Inicio',
      to: '/',
    },
    { title: 'Noticias', to: '/notices' },
    { title: 'Sobre mi', to: '/aboutMe' },
    {
      title: 'proyectos',
      to: '/projects/',
    },
  ],
  socialMedia: [
    {
      icon: 'mdi-twitter',
      href: 'https://twitter.com/Krashmello',
    },
    { icon: 'mdi-github', href: 'https://github.com/KrashMello' },
    { icon: 'mdi-twitch', href: 'https://www.twitch.tv/krashmello' },
  ],
}

const inBrowser = typeof window !== 'undefined'
// if in browser, use pre-fetched state injected by SSR
const state =
  inBrowser && window.__INITIAL_STATE__
    ? window.__INITIAL_STATE__.page
    : defaultState

export default {
  state,
  actions,
  mutations,
  getters,
}
