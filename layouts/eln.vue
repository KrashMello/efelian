<template>
  <v-app dark>
    <v-app-bar app color="grey lighten-5" prominent dark src="/portada.png">
      <template #img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(42, 127, 255,.6), rgba(26, 26, 26,.6)"
        ></v-img>
      </template>
      <v-btn text> Elumian </v-btn>

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
        <v-tabs centered center-active slider-color="primary">
          <v-tab to="/">Inicio</v-tab>
          <v-tab to="/aboutMe">Sobre mi</v-tab>
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <v-btn text class="align-self-center" v-bind="attrs" v-on="on">
                Proyectos
                <v-icon> mdi-menu-down </v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item> elumian </v-list-item>
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
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import colors from 'vuetify/es5/util/colors'
export default {
  mounted() {
    this.$vuetify.theme.dark = true
    this.$vuetify.theme.themes.dark = {
      primary: '#ffaaff',
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3,
      background: colors.white
    }
  }
}
</script>

<style lang="scss" scoped></style>
