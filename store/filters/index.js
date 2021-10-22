import { NOMBRE_A_Z } from '../../static/const'

export const state = () => ({
  priceRange: [0, 50],
  categories: [],
  ageGroup: null,
  sort: NOMBRE_A_Z
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
  },
  setSort (state, sort) {
    state.sort = sort
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
  },
  sort: (state) => {
    return state.sort
  }
}
