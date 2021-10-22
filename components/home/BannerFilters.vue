<template>
  <v-row>
    <v-col cols="6" md="9">
      <v-row>
        <v-col cols="12" md="2">
          <action-button
            text="filtros"
            icon="fa-sliders-h"
            border-color="primary"
            border-color-hover="primary"
            text-color="primary"
            text-color-hover="secondary"
            background-color="secondary"
            background-color-hover="primary"
            show-text-on-mobile
            @click="showFilters"
          />
        </v-col>
        <v-col cols="12" md="10" class="hidden-sm-and-down">
          <div class="d-flex text-no-wrap overflow-x-auto overflow-y-hidden">
            <FilterButton v-if="filters.ageGroup" :text="filters.ageGroup.name" @action="removeAgeFilter" />
            <FilterButton
              v-for="categorie in filters.categories"
              :key="categorie.id"
              :text="categorie.name"
              @action="() => removeCategoryFilter(categorie)">
            </FilterButton>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="6" md="3" class="align-self-center">
      <div class="text-primary text-right">
        <span class="font-weight-bold">
          Ordenar por <span class="hidden-sm-and-down">|</span>
        </span>
        <span class="hidden-sm-and-down">{{ order }}</span>
        <v-icon color="primary">fa-chevron-down</v-icon>
      </div>
    </v-col>
    <v-col cols="12">
      <v-divider class="border-color-primary" />
    </v-col>
  </v-row>
</template>

<script>
import ActionButton from '../ActionButton'
import FilterButton from '../FilterButton'
export default {
  name: 'BannerFilters',
  components: { FilterButton, ActionButton },
  computed: {
    order () {
      return 'Precio: bajo a alto'
    },
    filters () {
      return this.$store.getters['filters/filters']
    }
  },
  methods: {
    showFilters () {
      this.$store.commit('setShowFilters', true)
      this.$store.dispatch('lastFilters/setLastFilters', this.$store.getters['filters/filters'])
    },
    removeAgeFilter () {
      this.$store.commit('filters/setAgeGroup', null)
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
