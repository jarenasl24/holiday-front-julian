<template>
  <v-card outlined max-width="100%" :class="`card rouned-15 ${selectedTemp? 'card-activate' : ''}`">
    <v-card-title>
      <v-carousel
        v-model="model"
        style="border-radius: 5px;"
        height="300"
        hide-delimiters
      >
        <v-carousel-item
          v-for="(color, i) in colors"
          :key="color"
        >
          <v-sheet
            :color="color"
            height="100%"
            tile
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="text-h2">
                Slide {{ i + 1 }}
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card-title>
    <v-card-text>
      <div class="font-size-price text-black font-weight-bold mb-2">
        $ 9,65 <span class="text-decoration-line-through font-weight-regular sup">
          $ 13,2
        </span>
      </div>
      <div class="font-weight-bold text-black font-size-description">Really RAD Robots</div>
      <div class="text-black font-size-description">Prankob - Electronic Remote Control Pranking Robot</div>
    </v-card-text>
    <v-card-actions class="mt-0">
      <div
        :class="`text-secondary font-weight-bold text-uppercase border-button px-3 py-2 bg-white hover-pointer min-width-180 text-center ${selectedTemp ? 'bg-primary' : ''}`"
        @click="() => selectedTemp = !selectedTemp"
      >
        <v-row>
          <v-col cols="8">
            <div>{{ selectedTemp? 'Agregado': 'Agregar' }}</div>
          </v-col>
          <v-col cols="4">
            <v-icon v-if="!selectedTemp" color="secondary">fa-plus-circle</v-icon>
            <v-icon v-if="selectedTemp" color="secondary">fa-check-circle</v-icon>
          </v-col>
        </v-row>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    model: 0,
    selectedTemp: false,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange'
    ]
  })
}
</script>

<style lang="scss">
  @import "assets/variables.scss";

  .card{
    border-radius: 15px !important;
  }

  .card-activate{
    background-color: $primary-color !important;
  }

  .sup{
    position: relative;
    top: -0.5em;
    font-size: 60%;
  }
</style>
