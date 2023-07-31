<template>
  <v-row class="mb-10">
    <v-col cols="12">
      <v-btn color="primary" dark density="comfortable" rounded icon="mdi-arrow-left" @click="router.back()" />
    </v-col>
    <v-col cols="12" class="mt-8 mb-6">
      <h1 v-text="resource.title" class="text-center" />
    </v-col>
    <v-col cols="12">
      <iframe width="100%" :height="`${$vuetify.display.mobile ? 220 : 720}`" :src="resource.resourceOption.src"
        :title="resource.title" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen />
    </v-col>
    <v-col cols="12">
      <h3 v-text="resource.description" class="text-primary text-justify text-subtitle-1" style="line-height: normal;" />
    </v-col>
  </v-row>
</template>
<script setup>
const router = useRouter()
const route = useRoute()
const { slug } = route.params
const { getOneResource } = useResourceStore()
const resource = getOneResource(slug)
</script>
