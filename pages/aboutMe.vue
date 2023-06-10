<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card elevation="3">
          <v-img
            class="card-about-me"
            src="https://wallpaperaccess.com/full/770382.jpg"
          >
            <v-list-item>
              <v-list-item-content>
                <v-card-title primary-title class="primary--text">
                  Un poquito sobre mi
                </v-card-title>
                <v-card-text>
                  Hola mundo, mi nombre es joel nacido en venezuela tengo
                  actualmente {{ new Date().getFullYear() - 1994 }} años de edad
                  y soy un desarrollador en crecimiento que trata de dar lo
                  mejor de si dia a dia, con muchos proyectos en mente por hacer
                  y con muchas ganas de darlo todo por cumplir mis sueños, bueno
                  aca te estare contando poco a poco sobre mi asi puedes
                  conocerme un poco mejor.
                </v-card-text>
              </v-list-item-content>
              <v-list-item-avatar tile size="200" color="grey">
                <!-- <v-img :src="imgSrc" /> -->
              </v-list-item-avatar>
            </v-list-item>
            <V-divider class="my-5" />
            <v-list-item>
              <v-list-item-avatar tile size="200" color="grey">
                <!-- <v-img :src="imgSrc" /> -->
              </v-list-item-avatar>
              <v-list-item-content>
                <v-card-title primary-title> Que es KrashMello </v-card-title>
                <v-card-text>
                  <p>
                    algunas personas que eh conocido me han preguntado alguna
                    vez que es krashmello o por que elegi ese nombre y la
                    realidad no es otra que un nombre surgido de las iniciales
                    KM que estan en el logo, un dia se me vino a la cabeza el
                    diseño y de alli empeze a buscar combinaciones para el
                    nombre de alli sale.
                  </p>
                  <p>
                    krashmello es una iniciativa de un proyecto que se divide en
                    varias faces y no un nombre como tal, una de las faces es
                    poder ayudar al mundo un poco con mis codigos y tambien
                    mostrarme a mi mismo de lo que soy capaz de lograr, aun
                    faltan faces por cumplir pero a medida se vayan cumpliendo
                    ire actualizando.
                  </p>
                </v-card-text>
              </v-list-item-content>
            </v-list-item>
            <V-divider class="my-5" />
            <v-list-item>
              <v-list-item-content>
                <v-card-title primary-title class="primary--text">
                  Lo que me apaciona
                </v-card-title>
                <v-card-text>
                  me gusta mucho jugar video juegos, aprender cosas nuevas todos
                  los dias, el comportamiento humano, diseñar aunque en esto no
                  soy tan bueno creo en realidad que mi parte creativa del
                  cerebro no funciona tan bien jajaja tambien me gusta
                  programar, aunque esto es realmente un amor odio ya que
                  siempre me gusta ponerme retos muy grandes pero al ver que son
                  demasiado para una persona y que es necesario un equipo de
                  trabajo me abruma ya que no cuento con ello.
                </v-card-text>
              </v-list-item-content>
              <v-list-item-avatar tile size="200" color="grey">
                <!-- <v-img :src="imgSrc" /> -->
              </v-list-item-avatar>
            </v-list-item>
            <V-divider class="my-5" />
            <v-list-item>
              <v-list-item-avatar tile size="200" color="grey">
                <!-- <v-img :src="imgSrc" /> -->
              </v-list-item-avatar>
              <v-list-item-content>
                <v-card-title primary-title> Habilidades </v-card-title>
                <v-card-text>
                  <p>
                    en el mundo del desarrollo, creo tener lo que hace falta
                    para poder empezar esto es la logica ya que creo que sin
                    esta no se podria programar en ningun lenguaje.
                  </p>
                  <v-row>
                    <v-col cols="12" md="6">
                      <table-skill :title="front.title" :list="front.list" />
                    </v-col>
                    <v-col cols="12" md="6">
                      <table-skill :title="back.title" :list="back.list" />
                    </v-col>
                    <v-col cols="12" md="12">
                      <table-skill :title="bd.title" :list="bd.list" />
                    </v-col>
                  </v-row>
                  <p class="mt-5">
                    y bueno por aqui tambien puedes ir a mi github y ver cositas
                    que eh hecho anteriormente.
                  </p>
                </v-card-text>
              </v-list-item-content>
            </v-list-item>
            <V-divider class="my-5" />
            <v-list-item>
              <v-list-item-content>
                <v-card-title primary-title class="primary--text">
                  una noche de fantasia
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio in corporis pariatur alias, dolore aperiam soluta hic
                  dicta laudantium deserunt architecto inventore corrupti
                  dolorem quis nobis facere, repellendus dolorum amet! Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                  pariatur ad ipsum ipsa consequatur blanditiis obcaecati, iure
                  optio eos voluptatum, necessitatibus vitae quia nostrum
                  suscipit in facilis quos accusamus amet.
                </v-card-text>
              </v-list-item-content>
              <v-list-item-avatar tile size="200" color="grey">
                <!-- <v-img :src="imgSrc" /> -->
              </v-list-item-avatar>
            </v-list-item>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutMePage',
  data() {
    return {
      front: {
        title: 'Front End',
        list: [
          {
            name: 'Nuxtjs',
            value: 9
          },
          {
            name: 'React',
            value: 4
          },
          {
            name: 'HTML',
            value: 10
          },
          {
            name: 'CSS',
            value: 5
          }
        ]
      },
      back: {
        title: 'Back End',
        list: [
          {
            name: 'Nodejs ts/js',
            value: 9
          },
          {
            name: 'Laravel',
            value: 7
          },
          {
            name: 'Php',
            value: 7
          },
          {
            name: 'Python',
            value: 4
          }
        ]
      },
      bd: {
        title: 'Base de Datos',
        list: [
          {
            name: 'Maria DB / MYSQL',
            value: 7
          },
          {
            name: 'Postgre SQL',
            value: 7
          }
        ]
      }
    }
  }
}
</script>
<style>
.card-about-me > .v-image__image {
  opacity: 0.1;
}
</style>
