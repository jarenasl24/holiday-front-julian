import getProducts from '../../api/products'

export const state = () => ({
  productos: [],
  cargando: false,
  limit: 3,
  start: 0
})

export const mutations = {
  setProductos (state, productos) {
    state.productos = productos
  },
  addProducts (state, productos) {
    productos.forEach(p => state.productos.push(p))
  },
  setCargando (state, cargando) {
    state.cargando = cargando
  },
  setStart (state, start) {
    state.start = start
  }
}

export const actions = {
  aplicarFiltros (context, filters) {
    console.log(context)
    console.log(filters)
    context.commit('setProductos', [])
    context.dispatch('getProducts', filters)
  },
  getProducts (context, filters) {
    context.commit('setCargando', true)
    getProducts(this.$strapi, filters, context.getters.limit, context.getters.productos.length).then((response) => {
      context.commit('addProducts', response)
      context.commit('setCargando', false)
      // context.commit('setStart', context.getters.limit + 1)
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
  },
  start: (state) => {
    return state.start
  },
  cargando: (state) => {
    return state.cargando
  }
}
