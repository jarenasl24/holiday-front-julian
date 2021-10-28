<template>
  <div class="d-flex text-no-wrap overflow-x-auto overflow-y-hidden">
    <FilterButton v-if="filters.ageGroup" :text="filters.ageGroup.name" @action="removeAgeFilter" />
    <FilterButton
      v-for="categorie in filters.categories"
      :key="categorie.id"
      :text="categorie.name"
      @action="() => removeCategoryFilter(categorie)">
    </FilterButton>
    <FilterButton v-if="showPriceRange" :text="'$ ' + filters.priceRange[0] + ' - $ ' + filters.priceRange[1]" @action="removePriceFilter" />
  </div>
</template>

<script>
import FilterButton from '../FilterButton'
import { MAX_PRICE } from '../../static/const'
export default {
  name: 'SelectedFilters',
  components: { FilterButton },
  computed: {
    filters () {
      return this.$store.getters['filters/filters']
    },
    showPriceRange () {
      return !(this.filters.priceRange[0] === 0 && this.filters.priceRange[1] === MAX_PRICE)
    }
  },
  methods: {
    removeAgeFilter () {
      this.$store.commit('filters/setAgeGroup', null)
      this.$store.dispatch('products/aplicarFiltros', this.$store.getters['filters/filters'])
    },
    removePriceFilter () {
      this.$store.commit('filters/setPriceRange', [0, MAX_PRICE])
      this.$store.dispatch('products/aplicarFiltros', this.$store.getters['filters/filters'])
    },
    removeCategoryFilter (category) {
      this.$store.commit('filters/removeCategory', category)
      this.$store.dispatch('products/aplicarFiltros', this.$store.getters['filters/filters'])
    }
  }
}
</script>

<style scoped>

</style>
