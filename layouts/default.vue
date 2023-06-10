<template>
  <v-app dark>
    <v-app-bar app color="grey lighten-5" prominent dark src="/portada.png">
      <template #img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(42, 127, 255,.6), rgba(26, 26, 26,.6)"
        ></v-img>
      </template>
      <v-btn text> KrashMello </v-btn>

      <v-spacer />
      <!-- <v-toolbar-title>KrashMello</v-toolbar-title> -->
      <!-- <v-img src="/logo1.png" max-height="120" max-width="114"></v-img> -->
      <v-spacer />
      <v-btn icon link href="https://twitter.com/Krashmello" target="blank">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon link href="https://github.com/KrashMello" target="blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn icon href="https://www.twitch.tv/krashmello" target="blank">
        <v-icon>mdi-twitch</v-icon>
      </v-btn>
      <template #extension>
        <v-tabs centered center-active>
          <v-tab to="/">Inicio</v-tab>
          <v-tab to="/aboutMe">Sobre mi</v-tab>
          <v-tab>Proyectos</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      test: {
        title: 'Test',
        to: '/test'
      },
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {}
}
</script>

<style>
/* .v-application--wrap > header {
  height: 20px !important;
} */
</style>
