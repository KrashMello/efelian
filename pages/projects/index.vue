<template>
  <v-row>
    <v-col cols="12">
      <v-toolbar dense color="backgroundToolbar" title="Proyectos" dark rounded />
    </v-col>
    <v-col v-for="(project, i) in projects" :key="i" cols="10" offset="1" md="3">
      <project-card :title="project?.title" />
    </v-col>
    <v-col cols="12">
      <v-toolbar dense color="backgroundToolbar" dark rounded title="Trabajos" />
    </v-col>
    <v-col v-for="(work, i) in works" :key="i" cols="10" offset="1" md="3">
      <project-card :title="work?.title" />
    </v-col>
  </v-row>
</template>

<script setup>
let projects = []
let works = []
useHead({
  title: 'Proyectos',
  meta: [
    { hid: 'description', name: 'description', content: 'Mis proyectos y trabajos' },
    { hid: 'og-title', property: 'og:title', content: 'Proyectos - KrashMello' },
    {
      hid: 'og-desc',
      property: 'og:description',
      content: 'Mis proyectos y trabajos',
    },

  ],
  // bodyAttrs: {
  //   class: 'test'
  // },
  // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>

