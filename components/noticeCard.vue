<template>
  <v-card :class="cardClass" color="light-blue lighten-4" class="rounded-xl">
    <v-list-item>
      <v-list-item-avatar tile size="75" class="rounded-tl-xl" color="grey">
        <v-img :src="imgSrc" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{ title }}
        </v-list-item-title>
        <v-list-item-subtitle class="accent--text">{{
          description
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>{{ createAt }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-spacer />
      <v-btn color="primary" text x-small :to="'/notice/' + title"> seguir leyendo</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'noticia numero 1',
    required: true,
  },
  imgSrc: {
    type: String,
    default: 'https://picsum.photos/id/11/500/300',
    required: true,
  },
  description: {
    type: String,
    default:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum consequuntur porro at, quisquam adipisci ut sunt saepe? Voluptatum dignissimos delectus, nihil alias numquam odio aut, consectetur nam sit, officiis voluptatem!',
    required: true,
  },
  createAt: {
    type: String,
    default: '2023-06-09 09:00:00',
    required: true,
  },
  cardClass: {
    type: String,
    default: '',
    required: false,
  },
})
</script>

