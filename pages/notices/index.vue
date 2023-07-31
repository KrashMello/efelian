<template>
  <v-row>
    <v-col cols="12" sm="6" md="8">
      <notice-card v-for="(item, i) in notices" :key="i" :title="item.title" :card-class="item.class"
        :description="item.description" :img-src="item.imgSrc" :create-at="item.createAt" />
    </v-col>
    <v-col cols="12" sm="6" md="4" v-if="resaltNotice.length > 0">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-toolbar color="backgroundToolbar" dark rounded="">
              <v-toolbar-title class="secondary--text">
                Noticias Destacadas
              </v-toolbar-title>
            </v-toolbar>
          </v-col>
          <v-col v-for="(notice, i) in resaltNotice" :key="i" cols="12">
            <notice-short-card :title="notice.title" :imgSrc="notice.imgSrc" />
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup>
const notices = []
const resaltNotice = []

</script>

