<template>
  <v-container>
    <v-row justify="center" class="mt-5">
      <v-col style="height: 384px" cols="12">
        <div class="titlele font-weight-black">MI NOMBRE ES JOEL</div>
        <div style="min-height: 56px">
          <v-scroll-x-transition>
            <div v-if="transitionItems" class="titlele-2 font-weight-black">
              un <span class="nord8--text"> {{ items[counter] }} </span>
            </div>
          </v-scroll-x-transition>
        </div>
        <p class="subtitle-h mt-3">
          Me gusta desarrollar herramientas para el uso y beneficios de muchos
        </p>
      </v-col>
    </v-row>
    <v-row class="mt-3">
      <v-col cols="12">
        <h1>
          <strong> Biografia </strong>
        </h1>
        <v-simple-table style="background-color: rgba(0, 0, 0, 0)">
          <template #default>
            <tbody>
              <tr v-for="(bio, i) in bioList" :key="i">
                <td class="nord0--text">
                  <strong> {{ bio.date }} </strong>
                </td>
                <td class="nord1--text">{{ bio.description }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row class="mt-3">
      <v-col cols="12">
        <h1>
          <strong> Amo </strong>
        </h1>
        <p>
          Desarrollar Aplicativos, Buscar Informacion, la Fotografia, Musica, el
          Arte
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: 'Inicio',
      items: [`Desarollador`, `Soñador`, `Humano`],
      bioList: [
        { date: '1994', description: 'Naci en Cabudare-Lara, Venezuela' },
        {
          date: '2019',
          description:
            'Culmino mi carrera de ingenieria en sistema en la Universidad Experimental Politecnica de las fuerzas Armadas (UNEFA)',
        },
        {
          date: '2019-2021',
          description:
            'Trabaje en la empreza Lacteos Los Andes como Desarrollador de Aplicaciones',
        },
        {
          date: '2022-presente',
          description:
            'Trabajo en la alcaldia de iribarren como Desarrollador de Aplicaciones',
        },
      ],
      counter: 0,
      transitionItems: true,
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  mounted() {
    setTimeout(() => {
      this.transitionItems = false
    }, 4500)
    setInterval(() => {
      this.transitionItems = true
      if (this.counter >= this.items.length - 1) this.counter = 0
      else this.counter++
      setTimeout(() => {
        this.transitionItems = false
      }, 4500)
    }, 5000)
  },
  methods: {
    timer() {
      this.counter++
    },
    $sanitize(html) {
      return html
    },
  },
}
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
