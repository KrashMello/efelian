<template>
  <v-app>
    <layouts-navbar />
    <v-navigation-drawer v-model="layout.drawer" temporary
      :color="`${$vuetify.theme.name === 'dark' ? 'background' : 'accent'}`">
      <v-list nav dense>
        <v-list-item :color="`${$vuetify.theme.name === 'dark' ? 'primary' : 'secondary'}`" v-for="(menu, i) in menuList"
          :key="i" rounded="xl" :to="menu.to">
          <v-list-item-title>
            {{ menu.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="pb-0">
      <v-container fluid>
        <NuxtPage />
      </v-container>
    </v-main>
    <layouts-footer />
  </v-app>
</template>

<script setup>

const layout = useLayoutsStore()
const { menuList } = layout

</script>

