export const state = () => ({
  priceRange: [0, 50],
  categories: [],
  ageGroup: null
})

export const mutations = {
  setPriceRange (state, payload) {
    state.priceRange = payload
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
  setLastFilters (state, payload) {
    state.commit('setPriceRange', payload.priceRange)
    state.commit('setCategories', payload.categories)
    state.commit('setAgeGroup', payload.ageGroup)
  }
}

export const getters = {
  lastFilters: (state) => {
    return state
  }
}
