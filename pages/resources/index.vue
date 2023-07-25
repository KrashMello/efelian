<template>
  <v-row justify="center" class="mb-10">
    <v-col cols="12" md="8" class="mt-16 mb-5">
      <h1 v-text="'Recursos practicos que te ayudaran a iniciar en el desarrollo web'"
        :class="`text-h3 text-primary font-weight-bold ${$vuetify.display.mobile ? 'text-start' : 'text-center'}`"
        style="line-height: 3.2rem;" />
    </v-col>
    <v-col cols="12" md="8" class="mt-0 mb-16">
      <h1
        v-text="'Empieza aprende con estos recursos, aprende y pon a prueba tus habilidades, todo al alcance de tus manos.'"
        :class="`text-subtitle-1 text-accent  text-center`" style="line-height: 1.5rem;" />
    </v-col>
    <v-col cols="12" md="8">
      <v-card rounded="xl" color="backgroundCard">
        <v-container>
          <v-row>
            <resources-card v-for="(resource, i) in resources" :key="i" :to="resource.slug" :title="resource.title"
              :description="resource.description" :thumbnail="resource.thumbnail" />
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
const resources = useResourceStore().getResources
</script>
