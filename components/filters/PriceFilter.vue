<template>
  <div>
    <div class="text-center text-primary font-weight-bold">
      $ {{ value[0] }} - $ {{ value[1] }}{{ value[1] === 50 ? '+' : '' }}
    </div>
    <v-range-slider
      :value="value"
      :max="max"
      :min="min"
      class="align-center"
      thumb-color="primary"
      @change="setPriceRange"
    >
      <template #thumb-label="props">
        {{ props.value }}
      </template>
    </v-range-slider>
    <v-row class="mt--40 mb-0 ml-0 mr-0 text-primary font-size-14">
      <v-col class="ma-0 text-left" cols="4">
        $ 0
      </v-col>
      <v-col class="ma-0 text-center" cols="4">
        $ 25
      </v-col>
      <v-col class="ma-0 text-right" cols="4">
        $ 50+
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'PriceFilter',
  data () {
    return {
      min: 0,
      max: 50
    }
  },
  computed: {
    value () {
      return this.$store.getters['filters/priceRange']
    }
  },
  methods: {
    setPriceRange (priceRange) {
      this.$store.commit('filters/setPriceRange', priceRange)
    }
  }
}
</script>

<style scoped>
.mt--40{
  margin-top: -40px !important;
}
</style>
