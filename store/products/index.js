export const state = () => ({
  productos: [],
  limit: 50,
  start: 0
})

export const mutations = {
  setProductos (state, productos) {
    state.productos = productos
  },
  setStart (state, start) {
    state.start = start
  }
}

export const actions = {
  getProducts (context, filters) {
    this.$strapi.find('products').then((response) => {
      context.commit('setProductos', response)
      context.commit('setStart', context.getters.limit + 1)
      console.log(response)
    })
  }
}

export const getters = {
  productos: (state) => {
    return state.productos
  },
  limit: (state) => {
    return state.limit
  }
}
