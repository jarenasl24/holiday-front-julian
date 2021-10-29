export const state = () => ({
  id: null,
  uid: null,
  productos: []
})

export const mutations = {
  setId (state, id) {
    state.id = id
  },
  setUid (state, uid) {
    state.uid = uid
  },
  addProduct (state, product) {
    state.productos.push(product)
  },
  removeProduct (state, product) {
    state.productos = state.productos.filter(p => p.id !== product.id)
  }
}

export const actions = {
  addProduct (context, product) {
    const id = context.getters.id
    if (id === null) {
      this.$strapi.create('wish-lists', { products: [product] })
        .then((result) => {
          context.commit('setUid', result.uid)
          context.commit('setId', result.id)
          context.commit('addProduct', product)
        })
    } else {
      const products = context.getters.products.map(p => p)
      products.push(product)
      this.$strapi.update('wish-lists', id, { products })
        .then((result) => {
          // console.log(result)
          context.commit('addProduct', product)
        })
    }
  },
  removeProduct (context, product) {
    const id = context.getters.id
    const products = context.getters.products.filter(p => p.id !== product.id)
    this.$strapi.update('wish-lists', id, { products })
      .then((result) => {
        context.commit('removeProduct', product)
      })
  }
}

export const getters = {
  id: (state) => {
    return state.id
  },
  uid: (state) => {
    return state.uid
  },
  products: (state) => {
    return state.productos
  }
}
