<template>
  <v-app dark>
    <layout-navbar />
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      color="nord0"
      @input="changeDrawer"
    >
      <v-list nav dense dark>
        <v-list-item-group>
          <v-list-item
            color="nord7"
            v-for="(menu, i) in menuList"
            :key="i"
            :to="menu.to"
          >
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="pb-0">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <layout-footer />
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'DefaultLayout',
  computed: {
    ...mapGetters({ drawer: 'getDrawer', menuList: 'getMenuList' }),
  },
  mounted() {
    this.$vuetify.theme.dark = false
  },
  methods: {
    ...mapMutations({ changeDrawer: 'setDrawer' }),
  },
}
</script>

<style>
/* .v-application--wrap > header {
  height: 20px !important;
} */
</style>
