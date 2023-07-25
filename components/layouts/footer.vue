<template>
  <v-footer color="background" padless>
    <v-container fluid>
      <v-row justify="center">
        <v-col :cols="`${$vuetify.display.mobile ? '6' : '4'}`">
          <v-img class="" max-height="85" max-width="350"
            :src="`${$vuetify.theme.name === 'dark' ? '/full_logo_dark.png' : '/full_logo_light.png'}`" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col :cols="`${$vuetify.display.mobile ? '12' : '4'}`">
          <v-list dense bg-color="background">
            <v-list-item color="primary" v-for="(menu, i) in menuList" :key="i" rounded="xl" :to="menu.to">
              <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.display.mobile">
        <v-col cols="12" class="pa-0 d-flex justify-center">
          <v-btn v-for="(item, i) in socialMedia" :key="i" :icon="item.icon" link color="primary" :href="item.href"
            target="blank" class="mx-2" />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
const layout = useLayoutsStore()
const { menuList, socialMedia } = layout
</script>

