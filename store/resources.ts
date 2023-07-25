import { defineStore } from "pinia"
export const useResourceStore = defineStore('resources', {
  state: () => ({
    resources: [
      {
        slug: 'Curso de TypeScript Avanzado 1'.replace(/\s/g, "-"),
        title: 'Curso de TypeScript Avanzado #1',
        description: 'video donde podras aprender todo lo necesario para poder empezar a migrar tus proyectos a typescript sin miedos y remordimientos.',
        shortDescription: 'un curso practico donde podras aprender lo basico de typescript hasta algunas cosas avanzadas.',
        thumbnail: 'https://i.ytimg.com/vi/fUgxxhI_bvc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_bnSYv9pIADHrMN3DlmOvzsUgAA',
        resourceOption: {
          isVideo: true,
          src: 'https://www.youtube.com/embed/fUgxxhI_bvc'
        }
      },
      {
        slug: 'Curso de TypeScript Avanzado 2'.replace(/\s/g, "-"),
        title: 'Curso de TypeScript Avanzado #2',
        description: 'video donde podras aprender todo lo necesario para poder empezar a migrar tus proyectos a typescript sin miedos y remordimientos.',
        shortDescription: 'un curso practico donde podras aprender lo basico de typescript hasta algunas cosas avanzadas.',
        thumbnail: 'https://img.youtube.com/vi/L1ZSk-vPVKI/maxresdefault.jpg',
        resourceOption: {
          isVideo: true,
          src: 'https://www.youtube.com/embed/L1ZSk-vPVKI'
        }
      }
    ]
  }),
  getters: {
    getResources(state) {
      return state.resources.map((v) => {
        return {
          slug: v.slug,
          thumbnail: v.thumbnail,
          shortDescription: v.shortDescription,
          title: v.title
        }
      })
    },
  },
  actions: {
    getOneResource(resource_slug: string) {
      console.log(resource_slug)
      return this.resources.filter(v => v.slug === resource_slug).map((v: any) => {
        return {
          title: v?.title,
          description: v?.description,
          resourceOption: v?.resourceOption,
        }
      })[0]
    }
  },
})
