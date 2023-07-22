<template>
  <NuxtLayout name="error">
    <v-container>
      <v-row justify="center">
        <v-col cols="5">
          <h1 class="text-h1 font-weight-black text-center" v-text="'404'" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="text-h6 text-center" cols="5">
          Pagina no encontrada
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="3">
          <v-btn v-text="'Volver atras'" variant="outlined" block color="primary" to="/" />
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>
<script>
export default {
  methods: {
  }
}
</script>

<style scoped>
.button {
  padding: 4px 6px;
  margin: 10px 0px;
  background: black;
  color: white;
}
</style>
