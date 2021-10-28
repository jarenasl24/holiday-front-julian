<template>
  <div>
    <div class="text-center text-primary font-weight-bold">
      $ {{ minSelected }} - $ {{ maxSelected }}{{ maxSelected === max ? '+' : '' }}
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
        $ {{ min }}
      </v-col>
      <v-col class="ma-0 text-center" cols="4">
        $ {{ max / 2 }}
      </v-col>
      <v-col class="ma-0 text-right" cols="4">
        $ {{ max }}+
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { MAX_PRICE } from '../../static/const'

export default {
  name: 'PriceFilter',
  data () {
    return {
      min: 0,
      max: MAX_PRICE
    }
  },
  computed: {
    value () {
      return this.$store.getters['filters/priceRange']
    },
    minSelected () {
      if (this.value && this.value[0]) {
        return this.value[0]
      } else {
        return this.min
      }
    },
    maxSelected () {
      if (this.value && this.value[1]) {
        return this.value[1]
      } else {
        return this.max
      }
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
