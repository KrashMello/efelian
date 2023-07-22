import { defineStore } from "pinia"
export const useHomeStore = defineStore('home', {
  state: () => ({
    items: [`Desarollador`, `Soñador`, `Ser Humano`],
    bioList: [
      { date: '1994', description: 'Nací en Cabudare Edo. Lara, Venezuela' },
      {
        date: '2019',
        description:
          'Culminó mi carrera de ingeniería en sistema en la Universidad Experimental Politécnica de las fuerzas Armadas (UNEFA)',
      },
      {
        date: '2019-2021',
        description:
          'Trabaje en la empresa Lácteos Los Andes como Desarrollador de Aplicaciones',
      },
      {
        date: '2022-presente',
        description:
          'Trabajo en la Alcaldía de Iribarren como Desarrollador de Aplicaciones',
      },
    ],
    counter: 0,
    transitionItems: true,
  }),
  getters: {
  },
  actions: {
    setTimer() {
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
    }
  },
})
