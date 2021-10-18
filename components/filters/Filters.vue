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
        <PriceFilter />
      </div>
    </div>
    <div class="mx-6 mt-10">
      <TitleFilter :expanded="categoriaExpanded" title="Categoría del producto" @change="()=>{ categoriaExpanded = !categoriaExpanded }" />
      <v-divider class="border-color-primary" />
      <div v-show="categoriaExpanded" class="my-2">
        <CategoriasFilter />
      </div>
    </div>
    <div class="mx-6 my-10">
      <TitleFilter :expanded="edadExpanded" title="Edad" @change="()=>{ edadExpanded = !edadExpanded }" />
      <v-divider class="border-color-primary" />
      <div v-show="edadExpanded" class="my-2">
        <EdadFilter />
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
      edadExpanded: true
    }
  },
  methods: {
    async closeFilters () {
      await this.$store.commit('setShowFilters', false)
      await this.$store.dispatch('filters/setFilters', this.$store.getters['lastFilters/lastFilters'])
    },
    async aplicarFiltros () {
      await this.$store.dispatch('lastFilters/setLastFilters', this.$store.getters['filters/filters'])
      await this.$store.commit('setShowFilters', false)
      await this.$store.dispatch('products/aplicarFiltros', this.$store.getters['filters/filters'])
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
