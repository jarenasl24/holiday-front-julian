import getProducts from '../../api/products'

export const state = () => ({
  productos: [],
  limit: 12
})

export const mutations = {
  setProductos (state, productos) {
    state.productos = productos
  },
  addProducts (state, productos) {
    productos.forEach(p => state.productos.push(p))
  }
}

export const actions = {
  aplicarFiltros (context, filters) {
    context.commit('setProductos', [])
    context.dispatch('getProducts', filters)
  },
  getProducts (context, filters) {
    context.commit('setCargando', true)
    getProducts(this.$strapi, filters, context.getters.limit, context.getters.productos.length).then((response) => {
      context.commit('addProducts', response)
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
