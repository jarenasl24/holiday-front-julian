<template>
  <v-card
    outlined
    max-width="100%"
    max-height="550"
    :class="`card px-4 rouned-15 ${selected? 'card-activate' : ''}`">
    <v-card-title>
      <div class="full-width d-flex justify-end">
        <div class="bg-green text-white border-radius-30 px-4 py-2 font-size-12">
          {{product.age_groups ? product.age_groups[0].name: ''}}
        </div>
      </div>
      <v-carousel
        v-if="!selected"
        v-model="model"
        style="border-radius: 5px;"
        hide-delimiters
        :show-arrows="product.images.length > 1"
        :height="imageHeight"
      >
        <v-carousel-item
          v-for="image in product.images"
          :key="image.id"
        >
          <div class="d-flex justify-center">
            <img :src="image.url" alt="" :height="imageHeight">
          </div>
        </v-carousel-item>
      </v-carousel>
      <div v-show="selected" class="full-width d-flex justify-center">
        <img
          v-show="selected"
          :height="imageHeight"
          width="235"
          src="/Grupo 52.png" />
      </div>
    </v-card-title>
    <v-card-text>
      <div style="height: 40px; margin-top: -40px">
        <div
          v-if="productIsRollback"
           class="border-radius-30 border-solid-1 border-color-chip d-inline py-1 px-4 text-uppercase text-chip font-size-11">Rollback</div>
      </div>
      <div class="font-size-price text-black font-weight-bold mb-2">
        {{ product.reduced_price ? '$ ' + product.reduced_price : '$ ' + product.price }}
        <span class="text-decoration-line-through font-weight-regular sup">
          {{ product.reduced_price ? '$ ' + product.price : '' }}
        </span>
      </div>
      <div :style="`height: ${nombreHeight}`" class="d-flex place-items-center font-weight-bold text-black font-size-description min-height50">
        {{ name }}
      </div>
      <div :style="`height: ${descriptionHeight}`" class="d-flex place-items-center text-black font-size-description">{{ description }}</div>
    </v-card-text>
    <v-card-actions class="mt-0">
      <div
        :class="`text-secondary font-weight-bold text-uppercase border-button px-3 py-2
        bg-white hover-pointer min-width-180 text-center
        ${selected ? 'bg-primary' : ''}`"
        @click="click"
      >
        <v-row>
          <v-col cols="8">
            <div>{{ selected? 'Agregado': 'Agregar' }}</div>
          </v-col>
          <v-col cols="4">
            <v-icon v-if="!selected" color="secondary">fa-plus-circle</v-icon>
            <v-icon v-if="selected" color="secondary">fa-check-circle</v-icon>
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
    imageHeight: 250,
    nombreHeight: '30px',
    descriptionHeight: '30px',
    textLenght: 80
  }),
  computed: {
    productIsRollback () {
      console.log(this.product)
      return this.product.reduced_price
    },
    name () {
      return this.product.name.length > this.textLenght ? `${this.product.name.substr(0, this.textLenght)}...` : this.product.name
    },
    description () {
      return this.product.description.length > this.textLenght ? `${this.product.description.substr(0, this.textLenght)}...` : this.product.description
    }
  },
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
