<template>
  <v-app-bar app flat fixed color="background">
    <v-container fluid>
      <v-row justify="center">
        <v-col
          v-if="!$vuetify.breakpoint.mobile"
          cols="5"
          class="d-flex justify-space-evenly align-center"
        >
          <v-btn
            v-for="(menu, i) in menuList"
            :key="i"
            :to="menu.to"
            color="textPrimary"
            text
          >
            {{ menu.title }}
          </v-btn>
        </v-col>
        <v-col v-else cols="5">
          <v-btn icon @click.stop="changeDrawer(!drawer)">
            <v-icon> mdi-menu </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="1" class="d-flex justify-center align-center">
          <v-img src="./logo64x64.png" max-height="32" max-width="32" />
        </v-col>
        <v-col
          v-if="!$vuetify.breakpoint.mobile"
          cols="5"
          class="d-flex justify-end"
        >
          <v-btn
            v-for="(item, i) in socialMedia"
            :key="i"
            icon
            link
            color="textPrimary"
            :href="item.href"
            target="blank"
          >
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
        </v-col>
        <v-col v-else cols="5"></v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'NavbarLayout',
  data: () => {
    return {
      title: 'KrashMello',
    }
  },
  computed: {
    ...mapGetters({
      drawer: 'getDrawer',
      menuList: 'getMenuList',
      socialMedia: 'getSocialMedia',
    }),
  },
  methods: {
    ...mapMutations({ changeDrawer: 'setDrawer' }),
  },
}
</script>
