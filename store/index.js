export const state = () => ({
  filters: false
})

export const mutations = {
  showFilters (state) {
    state.filters = true
  },
  hideFilters (state) {
    state.filters = false
  }
}

export const actions = {
  hideFilters (state) {
    state.filters = false
  }
}

export const getters = {
  filters: (state) => {
    return state.filters
  }
}
