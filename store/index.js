export const state = () => ({
  showFilters: false,
  amountGifts: null
})

export const mutations = {
  setShowFilters (state, show) {
    state.showFilters = show
  },
  setAmountGifts (state, amount) {
    state.amountGifts = amount
  }
}

export const actions = {
}

export const getters = {
  showFilters: (state) => {
    return state.showFilters
  },
  amountGifts: (state) => {
    return state.amountGifts
  }
}
