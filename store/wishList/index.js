export const state = () => ({
  id: null,
  productos: []
})

export const mutations = {
  setId (state, id) {
    state.id = id
  },
  addProduct (state, product) {
    state.productos.push(product)
  }
}

export const actions = {
  addProduct (context, product) {
    console.log('aca')
    console.log(product)
    const id = context.getters.id
    if (id === null) {
      console.log('aca2')
      this.$strapi.create('wish-lists', { products: [product] })
        .then((result) => {
          context.commit('setId', result.id)
          context.commit('addProduct', product)
        })
    } else {
      console.log('idNO')
      const products = context.getters.productos.map(p => p)
      products.push(product)
      this.$strapi.update('wish-lists', id, { products })
        .then((result) => {
          console.log(result)
          context.commit('addProduct', product)
        })
    }
  }
}

export const getters = {
  id: (state) => {
    return state.id
  },
  productos: (state) => {
    return state.productos
  }
}
