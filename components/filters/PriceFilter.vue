<template>
  <div>
    <div class="text-center text-primary font-weight-bold">$ {{range[0]}} - $ {{range[1]}}{{range[1] === 50 ? '+' : '' }}</div>
    <v-range-slider
      v-model="range"
      :max="max"
      :min="min"
      class="align-center"
      thumb-color="primary"
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
      max: 50,
      range: [10, 30]
    }
  }
}
</script>

<style scoped>
.mt--40{
  margin-top: -40px !important;
}
</style>
