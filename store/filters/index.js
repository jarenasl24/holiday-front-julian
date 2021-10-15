export const state = () => ({
  minPrice: 0,
  maxPrice: 50,
  categories: [],
  ageGroup: null
})

export const mutations = {
  setMinPrice (state, payload) {
    state.minPrice = payload
  },
  setMaxPrice (state, payload) {
    state.maxPrice = payload
  },
  setCategories (state, categories) {
    state.categories = categories
  },
  setAgeGroup (state, ageGroup) {
    state.ageGroup = ageGroup
  }
}

export const actions = {
}

export const getters = {
  minPrice: (state) => {
    return state.minPrice
  },
  maxPrice: (state) => {
    return state.maxPrice
  },
  categories: (state) => {
    return state.categories
  },
  ageGroup: (state) => {
    return state.ageGroup
  }
}
