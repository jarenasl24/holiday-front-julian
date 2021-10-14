export const state = () => ({
  filters: false,
  amountGifts: null
})

export const mutations = {
  showFilters (state) {
    state.filters = true
  },
  hideFilters (state) {
    state.filters = false
  },
  setAmountGifts (state, amount) {
    state.amountGifts = amount
  }
}

export const actions = {
}

export const getters = {
  filters: (state) => {
    return state.filters
  },
  amountGifts: (state) => {
    return state.amountGifts
  }
}
