<template>
  <v-card :to="`notices/${id}`" color="backgroundCard" class="rounded-xl">
    <v-container>
      <v-row>
        <v-col v-if="!$vuetify.display.mobile" cols="4">
          <v-avatar v-if="!$vuetify.display.mobile" class="pt-8 ml-5" width="100%" rounded="0">
            <v-img v-if="!$vuetify.display.mobile" :src="imgSrc" />
          </v-avatar>
        </v-col>
        <v-col :cols="`${!$vuetify.display.mobile ? '8' : '12'}`">
          <v-card-title class="text-Subtitle-2 accent--text mb-1">
            {{ title }}
          </v-card-title>
          <v-card-subtitle class="secondary--text">
            seguir leyendo
          </v-card-subtitle>
        </v-col>
      </v-row>
    </v-container>

  </v-card>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    default: '1',
  },
  title: {
    type: String,
    default: 'Short Card',
  },
  imgSrc: {
    type: String,
    default: 'https://picsum.photos/500/300?random',
  },
})
</script>
