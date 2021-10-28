<template>
  <v-row>
    <v-col cols="6" md="8">
      <v-row>
        <v-col cols="12" md="3">
          <action-button
            text="filtros"
            icon="fa-sliders-h"
            border-color="primary"
            border-color-hover="primary"
            text-color="primary"
            text-color-hover="secondary"
            background-color="secondary"
            background-color-hover="primary"
            width="w-150px"
            show-text-on-mobile
            @click="showFilters"
          />
        </v-col>
        <v-col cols="12" md="9" class="hidden-sm-and-down">
          <SelectedFilters />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="6" md="4" class="align-self-center">
      <SortFilter />
    </v-col>
    <v-col cols="12">
      <v-divider class="border-color-primary" />
    </v-col>
    <v-col cols="12" class="hidden-md-and-up">
      <SelectedFilters />
    </v-col>
  </v-row>
</template>

<script>
import ActionButton from '../ActionButton'
import SelectedFilters from '../filters/SelectedFilters'
import SortFilter from '../filters/SortFilter'
export default {
  name: 'BannerFilters',
  components: { SortFilter, SelectedFilters, ActionButton },
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
