<template>
  <v-row>
    <v-col cols="9">
      <v-row>
        <v-col cols="3">
          <action-button
            text="filtros"
            icon="fa-sliders-h"
            border-color="primary"
            border-color-hover="primary"
            text-color="primary"
            text-color-hover="secondary"
            background-color="secondary"
            background-color-hover="primary"
            @click="showFilters"
          />
        </v-col>
        <v-col cols="6">
          filtro activo 1
        </v-col>
        <v-col cols="3">
          aca
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="3" class="align-self-end">
      <div class="text-primary">
        <span class="font-weight-bold">
          Ordenar por |
        </span>
        {{ order }}
        <v-icon color="primary">fa-chevron-down</v-icon>
      </div>
    </v-col>
    <v-col cols="12">
      <v-divider class="border-color-primary" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BannerFilters',
  computed: {
    order () {
      return 'Precio: bajo a alto'
    }
  },
  methods: {
    showFilters () {
      this.$store.commit('setShowFilters', true)
      this.$store.dispatch('lastFilters/setLastFilters', this.$store.getters['filters/filters'])
    }
  }
}
</script>

<style scoped>

</style>
