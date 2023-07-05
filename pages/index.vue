<template>
  <v-row justify="center" class="mt-5">
    <v-col style="height: 384px" align-self="center" cols="12">
      <div class="titlele font-weight-black">hola Mundo!</div>
      <v-scroll-x-transition>
        <div
          v-if="transitionItems"
          class="titlele font-weight-black"
          v-html="$sanitize(items[counter])"
        ></div>
      </v-scroll-x-transition>
    </v-col>

    <v-col cols="12">
      <v-row>
        <v-hover v-model="card1Hover">
          <v-col :cols="card1Col" class="px-0">
            <v-card height="766" :class="{ 'on-hover': card1Hover }"
>
              <v-expand-x-transition>
                <div
                  v-if="!card1Hover"
                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
                  style="height: 100%"
                >
                  {{ card1Hover }}
                </div>
              </v-expand-x-transition>
            </v-card>
          </v-col>
        </v-hover>
        <v-hover v-model="card2Hover">
          <v-col :cols="card2Col" class="px-0">
            <v-card height="766" :class="{ 'on-hover': card2Hover }">
              <v-expand-x-transition>
                <div
                  v-if="!card2Hover"
                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
                  style="height: 100%"
                >
                  {{ card2Hover }}
                </div>
              </v-expand-x-transition>
            </v-card>
          </v-col>
        </v-hover>
        <v-hover v-model="card3Hover">
          <v-col :cols="card3Col" class="px-0">
            <v-card color="primary" height="766" :class="{ 'on-hover': card3Hover }">
              <v-expand-x-transition>
                <div
                  v-if="!card3Hover"
                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
                  style="height: 100%"
                >
                  {{ card3Hover }}
                </div>
              </v-expand-x-transition>
            </v-card>
          </v-col>
        </v-hover>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      card1Hover: false,
      card2Hover: false,
      card3Hover: false,
      card1Col: 4,
      card2Col: 4,
      card3Col: 4,
      title: 'Inicio',
      items: [
        `Mi nombre es <span class="primary--text">joel</span>`,
        `un <span class="primary--text">Desarollador</span>`,
        `un <span class="primary--text">Soñador</span>`,
        `un <span class="primary--text">humano</span>`
      ],
      counter: 0,
      transitionItems: false
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  watch: {
    card1Hover(val) {
      if (val) {
        this.card1Col = 6
        this.card2Col = 3
        this.card3Col = 3
      } else {
        this.card1Col = 4
        this.card2Col = 4
        this.card3Col = 4
      }
    },
    card2Hover(val) {
      if (val) {
        this.card1Col = 3
        this.card2Col = 6
        this.card3Col = 3
      } else {
        this.card1Col = 4
        this.card2Col = 4
        this.card3Col = 4
      }
    },
    card3Hover(val) {
      if (val) {
        this.card1Col = 3
        this.card2Col = 3
        this.card3Col = 6
      } else {
        this.card1Col = 4
        this.card2Col = 4
        this.card3Col = 4
      }
    }
  },
  mounted() {
    this.transitionItems = true
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
    }
  }
}
</script>
<style>
.titlele {
  font-size: 4em;
  letter-spacing: 0.2rem;
}
.v-card:not(.on-hover) { opacity: 0.6; }
.v-card { transition: opacity .4s ease-in-out; }


</style>
