<template>
  <v-container>
    <v-row justify="center" class="mt-5">
      <v-col cols="12">
        <h1 class="titlele text-primary font-weight-black" v-text="'MI NOMBRE ES JOEL'" />
        <div style="min-height: 56px">
          <v-scroll-x-transition>
            <h3 v-show="homeData.transitionItems" class="titlele-2 text-primary font-weight-black"
              style="font-size:30px;">
              un <span :class="`${$vuetify.theme.name === 'dark' ? 'text-accent' : 'text-secondary'}`"> {{
                homeData.items[homeData.counter] }} </span>
            </h3>
          </v-scroll-x-transition>
        </div>
        <p :class="`subtitle-h mt-3 ${$vuetify.theme.name === 'dark' ? 'text-secondary' : 'text-primary'}`">
          Me gusta desarrollar herramientas para el uso y beneficios de muchos
        </p>
      </v-col>
    </v-row>
    <v-row class="mt-3">
      <v-col cols="12">
        <h1 :class="`${$vuetify.theme.name === 'dark' ? 'text-primary' : 'text-secondary'}`">
          <strong> Bíografia </strong>
        </h1>
        <v-table style="background-color: rgba(0, 0, 0, 0)">
          <tbody>
            <tr v-for="(bio, i) in homeData.bioList" :key="i">
              <td class="text-accent font-weight-black">
                <strong> {{ bio.date }} </strong>
              </td>
              <td class="text-accent">{{ bio.description }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <v-row class="mt-3">
      <v-col cols="12">
        <h1 :class="`${$vuetify.theme.name === 'dark' ? 'text-primary' : 'text-secondary'}`">
          <strong> Lo que Amo </strong>
        </h1>
        <p class="text-accent">
          Desarrollar Aplicativos, Buscar Información, la Fotografía, Música y
          el Arte
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const homeData = useHomeStore()
homeData.setTimer()
useHead({
  title: 'Inicio',
  meta: [
    { hid: 'description', name: 'description', content: 'KrashMello website' },
    { hid: 'og-title', property: 'og:title', content: 'Inicio - KrashMello' },
    {
      hid: 'og-desc',
      property: 'og:description',
      content: 'KrashMello website',
    },

  ],
  // bodyAttrs: {
  //   class: 'test'
  // },
  // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>
<style>
.titlele {
  font-size: 3rem;
  letter-spacing: 0.2rem;
}

.titlele-2 {
  font-size: 2.3rem;
  letter-spacing: 0.2rem;
}

.subtitle-h {
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  max-width: 20em;
}
</style>
