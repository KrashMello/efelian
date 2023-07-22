<template>
  <v-card color="rgba(0,0,0,0)" flat :to="to">
    <v-img class="white--text align-end rounded-xl" height="9em" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
    </v-img>
    <p class="text-h6 primary--text text-center mb-0 mt-3">{{ title }}</p>
    <v-card-text class="primary--text text-justify">
      <div>
        {{ description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'project card',
  },
  description: {
    type: String,
    default:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
  },
  to: {
    type: String,
    default: '/',
  },

})
</script>

<style lang="scss" scoped></style>
