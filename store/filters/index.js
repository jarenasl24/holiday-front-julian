export const state = () => ({
  priceRange: [0, 50],
  categories: [],
  ageGroup: null
})

export const mutations = {
  setPriceRange (state, payload) {
    state.priceRange = payload
  },
  addCategory (state, categorie) {
    state.categories.push(categorie)
  },
  removeCategory (state, categorie) {
    state.categories = state.categories.filter(c => c.id !== categorie.id)
  },
  setCategories (state, categories) {
    state.categories = []
    categories.forEach(c => state.categories.push(c))
  },
  setAgeGroup (state, ageGroup) {
    state.ageGroup = ageGroup
  }
}

export const actions = {
  setFilters (state, payload) {
    state.commit('setPriceRange', payload.priceRange)
    state.commit('setCategories', payload.categories)
    state.commit('setAgeGroup', payload.ageGroup)
  }
}

export const getters = {
  filters: (state) => {
    return state
  },
  priceRange: (state) => {
    return state.priceRange
  },
  categories: (state) => {
    return state.categories
  },
  ageGroup: (state) => {
    return state.ageGroup
  }
}
