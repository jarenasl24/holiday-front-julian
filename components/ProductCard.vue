<template>
  <v-card outlined max-width="100%" :class="`card rouned-15 ${selectedTemp? 'card-activate' : ''}`">
    <v-card-title>
      <v-carousel
        v-if="!selectedTemp"
        v-model="model"
        style="border-radius: 5px;"
        hide-delimiters
      >
        <v-carousel-item
          v-for="image in product.images"
          :key="image.id"
        >
          <v-sheet
            color="white"
            height="100%"
            tile
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="text-h2">
                <img :src="image.url" alt="" class="full-width">
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-img
        v-else
        src="/Grupo 52.png" />
    </v-card-title>
    <v-card-text>
      <div class="font-size-price text-black font-weight-bold mb-2">
        $ {{ product.reduced_price }} <span class="text-decoration-line-through font-weight-regular sup">
          $ {{ product.price }}
        </span>
      </div>
      <div class="font-weight-bold text-black font-size-description">{{ product.name }}</div>
      <div class="text-black font-size-description">{{ product.description }}</div>
    </v-card-text>
    <v-card-actions class="mt-0">
      <div
        :class="`text-secondary font-weight-bold text-uppercase border-button px-3 py-2 bg-white hover-pointer min-width-180 text-center ${selectedTemp ? 'bg-primary' : ''}`"
        @click="click"
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
    },
    product: {
      type: Object
    }
  },
  data: () => ({
    model: 0,
    selectedTemp: false
  }),
  methods: {
    click () {
      this.$emit('click')
    }
  }
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
