<template>
  <v-container>
    <div>
      <div class="hover-pointer text-right"><v-icon color="white" size="50">mdi-close-circle-outline</v-icon></div>
    </div>
    <div class="mx-6 my-4">
      <h1 class="text-primary font-weight-bold">Todos los filtros</h1>
      <v-divider class="border-color-primary"></v-divider>
    </div>
    <div class="mx-6 my-10">
      <TitleFilter :expanded="precioExpanded" title="Precio" @change="()=>{ precioExpanded = !precioExpanded }"></TitleFilter>
      <v-divider class="border-color-primary" />
      <div v-if="precioExpanded" class="my-10">
        <PriceFilter />
      </div>
    </div>
    <div class="mx-6 mt-10">
      <TitleFilter :expanded="categoriaExpanded" title="Categoría del producto" @change="()=>{ categoriaExpanded = !categoriaExpanded }"></TitleFilter>
      <v-divider class="border-color-primary" />
      <div v-if="categoriaExpanded" class="my-2">
        <CategoriasFilter />
      </div>
    </div>
    <div class="mx-6 my-10">
      <TitleFilter :expanded="edadExpanded" title="Edad" @change="()=>{ edadExpanded = !edadExpanded }"></TitleFilter>
      <v-divider class="border-color-primary" />
      <div v-if="edadExpanded" class="my-2">
        <EdadFilter />
      </div>
    </div>
    <div class="bg-primary text-center text-secondary font-weight-bold text-uppercase py-2 mx-6 mt-10 filter-button hover-pointer font-size-16">Aplicar filtros</div>
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
