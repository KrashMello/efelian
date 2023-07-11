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
          <v-col cols="12">
            <v-card color="nord1" class="rounded-xl">
              <v-list-item>
                <v-list-item-avatar tile size="75" color="grey">
                  <v-img src="https://picsum.photos/500/300?random" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="text-Subtitle-2 nord7--text mb-1">
                    👨‍🦽 ayer se cayo pedrito 👨‍🦽
                  </v-list-item-title>
                  <v-list-item-subtitle class="nord8--text"
                    >seguir leyendo</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card class="rounded-xl">
              <v-list-item>
                <v-list-item-avatar tile size="75" color="grey">
                  <v-img src="https://picsum.photos/500/300?random" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="text-Subtitle-2 mb-1">
                    🎾 buena jornada para nadal
                  </v-list-item-title>
                  <v-list-item-subtitle class="primary--text"
                    >seguir leyendo</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card class="rounded-xl">
              <v-list-item>
                <v-list-item-avatar tile size="75" color="grey">
                  <v-img src="https://picsum.photos/500/300?random" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="text-Subtitle-2 mb-1">
                    🍒las cerezas estan baratas
                  </v-list-item-title>
                  <v-list-item-subtitle class="primary--text"
                    >seguir leyendo</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card class="rounded-xl">
              <v-list-item>
                <v-list-item-avatar tile size="75" color="grey">
                  <v-img src="https://picsum.photos/500/300?random" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="text-Subtitle-2 mb-1">
                    👨‍🦽 ayer se cayo pedrito 👨‍🦽
                  </v-list-item-title>
                  <v-list-item-subtitle class="primary--text"
                    >seguir leyendo</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>
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
    // this.$axios.get('/').then((resp) => {
    //   this.notices = resp.data.notices
    // })
  },
}
</script>
