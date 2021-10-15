<template>
  <v-container>
    <div>
      <div class="hover-pointer text-right">
        <v-icon color="white" size="50" @click="closeFilters">
          mdi-close-circle-outline
        </v-icon>
      </div>
    </div>
    <div class="mx-6 my-4">
      <h1 class="text-primary font-weight-bold">
        Todos los filtros
      </h1>
      <v-divider class="border-color-primary" />
    </div>
    <div class="mx-6 my-10">
      <TitleFilter :expanded="precioExpanded" title="Precio" @change="()=>{ precioExpanded = !precioExpanded }" />
      <v-divider class="border-color-primary" />
      <div v-show="precioExpanded" class="my-10">
        <PriceFilter v-model="priceRange" @change="setPriceRange" />
      </div>
    </div>
    <div class="mx-6 mt-10">
      <TitleFilter :expanded="categoriaExpanded" title="Categoría del producto" @change="()=>{ categoriaExpanded = !categoriaExpanded }" />
      <v-divider class="border-color-primary" />
      <div v-show="categoriaExpanded" class="my-2">
        <CategoriasFilter v-model="categories" @add="addCategory" @remove="removeCategory" />
      </div>
    </div>
    <div class="mx-6 my-10">
      <TitleFilter :expanded="edadExpanded" title="Edad" @change="()=>{ edadExpanded = !edadExpanded }" />
      <v-divider class="border-color-primary" />
      <div v-show="edadExpanded" class="my-2">
        <EdadFilter v-model="ageGroup" @change="setAgeGroup" />
      </div>
    </div>
    <div
      class="bg-primary text-center text-secondary font-weight-bold text-uppercase py-2 mx-6 mt-10 filter-button hover-pointer font-size-16"
      @click="aplicarFiltros"
    >
      Aplicar filtros
    </div>
  </v-container>
</template>

<script>
import PriceFilter from './PriceFilter'
import TitleFilter from './TitleFilter'
import CategoriasFilter from './CategoriasFilter'
import EdadFilter from './EdadFilter'
export default {
  name: 'Filters',
  components: { EdadFilter, CategoriasFilter, TitleFilter, PriceFilter },
  data () {
    return {
      precioExpanded: true,
      categoriaExpanded: true,
      edadExpanded: true,
      priceRange: [0, 50],
      categories: [],
      ageGroup: null
    }
  },
  methods: {
    setPriceRange (priceRange) {
      this.priceRange = priceRange
    },
    setCategories (categories) {
      this.categories = categories
    },
    addCategory (categorie) {
      this.categories.push(categorie)
    },
    removeCategory (categorie) {
      this.categories = this.categories.filter(c => c.id !== categorie.id)
    },
    setAgeGroup (ageGroup) {
      this.ageGroup = ageGroup
    },
    async closeFilters () {
      this.setPriceRange([this.$store.getters['filters/minPrice'], this.$store.getters['filters/maxPrice']])
      this.categories = []
      this.$store.getters['filters/categories'].forEach(c => this.categories.push(c))
      console.log(this.categories)
      this.setAgeGroup(this.$store.getters['filters/ageGroup'])
      await this.$store.commit('setShowFilters', false)
    },
    aplicarFiltros () {
      this.$store.commit('filters/setMinPrice', this.range[0])
      this.$store.commit('filters/setMaxPrice', this.range[1])
      this.$store.commit('filters/setCategories', this.categories)
      this.$store.commit('filters/setAgeGroup', this.ageGroup)
      this.$store.dispatch('products/getProducts')
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/variables";

.v-expansion-panel::before {
  box-shadow: none;
}
.mdi-chevron-down::before {
  color: $primary-color !important;
}
.mdi-chevron-up::before {
  color: $primary-color !important;
}
.v-expansion-panel-header{
  border-color: $primary-color !important;
}

::-webkit-scrollbar {
  width: 0px;
}
</style>
