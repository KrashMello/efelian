<template>
  <VitePwaManifest />
  <NuxtLayout />
</template>
<script setup lang="ts">
import { useTheme } from 'vuetify'
import nuxtStorage from 'nuxt-storage';

const theme = useTheme()

onMounted(() => {
  if (nuxtStorage.localStorage.getData('theme')) {
    theme.global.name.value = nuxtStorage.localStorage.getData('theme')
  }
})

</script>
