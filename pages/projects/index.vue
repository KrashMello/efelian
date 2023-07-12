<template>
  <v-row>
    <v-col cols="12">
      <v-toolbar dense color="nord0" flat dark rounded>
        <v-app-title> Proyectos </v-app-title>
      </v-toolbar>
    </v-col>
    <v-col v-for="i in 2" :key="i" cols="10" offset="1" md="3">
      <project-card :title="i" />
    </v-col>
    <v-col cols="12">
      <v-toolbar dense color="nord0" dark flat rounded>
        <v-app-title> Trabajos </v-app-title>
      </v-toolbar>
    </v-col>
    <v-col v-for="i in 1" :key="i" cols="10" offset="1" md="3">
      <project-card :title="i" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Projects',
}
</script>
