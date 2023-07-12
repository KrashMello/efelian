<template>
  <v-row>
    <v-col cols="12" sm="6" md="8">
      <notice-card
        v-for="(item, i) in notices"
        :key="i"
        :title="item.title"
        :card-class="item.class"
        :description="item.description"
        :img-src="item.imgSrc"
        :create-at="item.createAt"
      />
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-toolbar color="nord0" dark rounded="">
              <v-toolbar-title class="nord7--text">
                Noticias Destacadas
              </v-toolbar-title>
            </v-toolbar>
          </v-col>
          <v-col v-for="i in 4" :key="i" cols="12">
            <notice-short-card
              :title="`noticia n° ${i}`"
              imgSrc="https://picsum.photos/500/300?random"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: 'Noticias',
      notices: [],
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  mounted() {
    this.$axios.get('/').then((resp) => {
      this.notices = resp.data.notices
    })
  },
}
</script>
