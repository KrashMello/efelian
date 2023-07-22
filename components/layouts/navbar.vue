<template>
  <v-app-bar flat color="background">
    <v-container fluid>
      <v-row justify="center">
        <v-col v-if="!$vuetify.display.mobile" cols="5" class="d-flex justify-space-evenly align-center">
          <v-btn v-for="(menu, i) in menuList" :key="i" :to="menu.to" color="textPrimary" text>
            {{ menu.title }}
          </v-btn>
        </v-col>
        <v-col v-else cols="5">
          <v-btn icon @click="layouts.setDrawer()">
            <v-icon> mdi-menu </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="1" class="d-flex justify-center align-center">
          <v-img src="/logo64x64.png" min-height="32" min-width="32" max-height="32" max-width="32" />
        </v-col>
        <v-col v-if="!$vuetify.display.mobile" cols="5" class="d-flex justify-end">
          <v-btn v-for="(item, i) in socialMedia" :key="i" :icon="item.icon" link color="textPrimary" :href="item.href"
            target="blank" />
        </v-col>
        <v-col v-else cols="5"></v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
let layouts = useLayoutsStore()
const { menuList, socialMedia } = layouts


</script>

