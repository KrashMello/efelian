<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="text-h3">{{ id }}</h1>
      </v-col>
      <v-col cols="12">
        <v-img src="https://picsum.photos/1440/900?random"></v-img>
      </v-col>
      <v-col cols="12">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui
          recusandae quia, odit incidunt iusto nam distinctio porro placeat
          quasi quo voluptatibus atque in sed ad odio quibusdam provident
          voluptatum.
        </p>
        <h1 class="text-h5 mt-5">la polemica de este titulo recidual</h1>
        <v-divider class="my-5" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui
          recusandae quia, odit incidunt iusto nam distinctio porro placeat
          quasi quo voluptatibus atque in sed ad odio quibusdam provident
          voluptatum.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NoticeIDPage',
  asyncData({ params }) {
    const id = params.id // When calling /abc the slug will be "abc"
    return { id }
  },
  head() {
    return { title: this.id }
  },
}
</script>

<style lang="scss" scoped></style>
