<template>
  <v-col>
    <v-card flat rounded="xl" style="background-color:rgba(0 ,0, 0, 0)" :to="`/resources/${to}`">
      <v-container class="pa-1">
        <v-row>
          <v-col cols="12" class="pb-1">
            <v-img :src="props.thumbnail" cover :max-height="`${$vuetify.display.mobile ? 215 : 400}`" min-width="100%"
              class="rounded-xl" style="border: solid 1px accent" />
          </v-col>
          <v-col cols="12" class="py-1 px-4">
            <h1 v-text="props.title" class="text-accent text-subtitle-1 font-weight-bold py-1 px-0"
              :style="`${$vuetify.display.mobile ? 'font-size: 14px !important; line-height: normal !important' : ''}`" />
          </v-col>
          <v-col cols="12" class="py-1 pr-5 mb-6 mx-1 ">
            <p v-text="props.description" class="text-accent text-justify text-subtitle-2 font-weight-regular"
              style="line-height: normal !important;" />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-col>
</template>
<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    default: `${'Curso de TypeScript Avanzado'.replace(/\s/g, "-")}`
  },
  title: {
    type: String,
    default: 'Curso de TypeScript Avanzado'
  },
  description: {
    type: String,
    default: 'un curso practico donde podras aprender lo basico de typescript hasta algunas cosas avanzadas.'
  },
  thumbnail: {
    type: String,
    default: 'https://i.ytimg.com/vi/fUgxxhI_bvc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_bnSYv9pIADHrMN3DlmOvzsUgAA'
  }
}); 
</script>
