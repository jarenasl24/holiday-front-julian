<template>
  <div class="text-primary text-right">
    <v-select :value="sortSelected" :items="sortOptions" @change="setSortSelected">
      <slot slot="selection">
        <div class="font-weight-bold text-primary full-width text-right text-no-wrap">
          Ordenar por <span class="hidden-sm-and-down">|</span>
          <span class="font-weight-regular hidden-sm-and-down text-primary mr-1">{{ sortSelected }}</span>
        </div>
      </slot>
      <template v-slot:append>
        <v-icon color="primary">fa-chevron-down</v-icon>
      </template>
    </v-select>
  </div>
</template>

<script>
import { NOMBRE_A_Z, NOMBRE_Z_A, PRECIO_MAYOR_MENOR, PRECIO_MENOR_MAYOR } from '../../static/const'
export default {
  name: 'SortFilter',
  data () {
    return {
      sortOptions: [NOMBRE_A_Z, NOMBRE_Z_A, PRECIO_MENOR_MAYOR, PRECIO_MAYOR_MENOR]
    }
  },
  computed: {
    sortSelected () {
      return this.$store.getters['filters/sort']
    }
  },
  methods: {
    setSortSelected (value) {
      this.$store.commit('filters/setSort', value)
      this.$store.dispatch('products/aplicarFiltros', this.$store.getters['filters/filters'])
    }
  }
}
</script>

<style scoped>

</style>
