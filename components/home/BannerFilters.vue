<template>
  <v-row>
    <v-col cols="8">
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
        <v-col>
          filtro activo 1
        </v-col>
        <v-col>
          filtro activo 2
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="4" />
    <v-col cols="12">
      <v-divider class="border-color-primary" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BannerFilters',
  methods: {
    showFilters () {
      this.$store.commit('showFilters')
    }
  }
}
</script>

<style scoped>

</style>
