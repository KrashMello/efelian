<template>
  <v-app dark>
    <v-app-bar
      app
      absolute="false"
      color="grey lighten-5"
      prominent
      dark
      src="/portada.png"
    >
      <template #img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(42, 127, 255,.3), rgba(26, 26, 26,.3)"
        />
      </template>
      <v-btn text> {{ title }} </v-btn>

      <v-spacer />
      <!-- <v-toolbar-title>KrashMello</v-toolbar-title> -->
      <!-- <v-img src="/logo1.png" max-height="120" max-width="114"></v-img> -->
      <v-spacer />
      <v-btn
        v-for="(item, i) in socialMedia"
        :key="i"
        icon
        link
        :href="item.href"
        target="blank"
      >
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
      <template #extension>
        <!-- eslint-disable vue/no-use-v-if-with-v-for -->
        <v-tabs centered center-active slider-color="primary">
          <v-tab
            v-for="(menu, i) in menuList"
            v-if="!menu.list"
            :key="i"
            :to="menu.to"
            >{{ menu.title }}</v-tab
          >
          <v-menu v-else offset-y>
            <template #activator="{ on, attrs }">
              <v-btn text class="align-self-center" v-bind="attrs" v-on="on">
                {{ menu.title }}
                <v-icon> mdi-menu-down </v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(subMenu, j) in menu.listItems"
                :key="j"
                :to="subMenu.to"
              >
                {{ subMenu.title }}
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app absolute="false">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'krashmello',
      socialMedia: [
        {
          icon: 'mdi-twitter',
          href: 'https://twitter.com/Krashmello'
        },
        { icon: 'mdi-github', href: 'https://github.com/KrashMello' },
        { icon: 'mdi-twitch', href: 'https://www.twitch.tv/krashmello' }
      ],
      menuList: [
        {
          list: false,
          title: 'Inicio',
          to: '/'
        },
        { list: false, title: 'Noticias', to: '/notices' },
        { list: false, title: 'Sobre mi', to: '/aboutMe' },
        {
          list: true,
          title: 'proyectos',
          listItems: [{ title: 'elumian', to: '/projects/elumian' }]
        }
      ]
    }
  },
  mounted() {
    this.$vuetify.theme.dark = false
  },
  methods: {}
}
</script>

<style>
/* .v-application--wrap > header {
  height: 20px !important;
} */
</style>
