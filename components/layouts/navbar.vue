<template>
  <v-app-bar flat color="background">
    <v-container fluid>
      <v-row justify="center">
        <v-col v-if="!$vuetify.display.mobile" cols="5" class="d-flex justify-space-evenly align-center">
          <v-btn v-for="(menu, i) in menuList" :key="i" :to="menu.to" color="primary" text="true">
            {{ menu.title }}
          </v-btn>
        </v-col>
        <v-col v-else cols="5" class="d-flex align-center">
          <v-btn icon color="primary" @click="setDrawer">
            <v-icon> mdi-menu </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="1" class="d-flex justify-center align-center">
          <v-img :src="`${$vuetify.theme.name === 'dark' ? '/logo64x64_dark.png' : '/logo64x64_light.png'}`"
            min-height="32" min-width="32" max-height="32" max-width="32" />

        </v-col>
        <v-col v-if="!$vuetify.display.mobile" cols="5" class="d-flex justify-end align-center">
          <v-btn v-for="(item, i) in socialMedia" :key="i" :icon="item.icon" link color="textPrimary" :href="item.href"
            target="blank" />
          <v-btn @click="changeDarkMode" color="primary"
            :icon="`${darkMode ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny'}`" />
        </v-col>
        <v-col v-else cols="5" class="d-flex justify-end align-center">
          <v-btn @click="changeDarkMode" color="primary"
            :icon="`${darkMode ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny'}`" />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import nuxtStorage from 'nuxt-storage';
let darkMode = ref(false)
let layouts = useLayoutsStore()
const { menuList, socialMedia, setDrawer, } = layouts
const theme = useTheme()

function changeDarkMode() {
  darkMode.value = !darkMode.value;
}
watch(darkMode, async (val) => {
  theme.global.name.value = val ? 'dark' : 'light'
  if (val)
    nuxtStorage.localStorage.setData('theme', 'dark');
  else
    nuxtStorage.localStorage.setData('theme', 'light');
})

onMounted(() => {
  if (nuxtStorage.localStorage.getData('theme'))
    darkMode.value = nuxtStorage.localStorage.getData('theme') === 'dark' ? true : false
})
</script>

