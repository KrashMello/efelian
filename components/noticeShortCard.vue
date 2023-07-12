<template>
  <v-card color="nord1" class="rounded-xl">
    <div class="d-flex flex-no-wrap" style="justify-content: start">
      <v-avatar
        v-if="!$vuetify.breakpoint.mobile"
        class="pt-8 ml-5"
        size="75"
        width="90"
        rounded="0"
      >
        <v-img v-if="!$vuetify.breakpoint.mobile" :src="imgSrc" />
      </v-avatar>
      <div>
        <v-card-title class="text-Subtitle-2 nord4--text mb-1">
          {{ title }}
        </v-card-title>
        <v-card-subtitle class="nord8--text">seguir leyendo</v-card-subtitle>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'NoticeShortCard',
  props: {
    title: {
      type: String,
      default: 'Short Card',
    },
    imgSrc: {
      type: String,
      default: 'https://picsum.photos/500/300?random',
    },
  },
}
</script>

<style lang="scss" scoped></style>
