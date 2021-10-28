<template>
  <v-card
    outlined
    max-width="100%"
    max-height="550"
    :class="`card px-4 round-15 ${selected? 'card-activate' : ''}`"
  >
    <v-card-title>
      <div class="full-width d-flex justify-end">
        <div
          class="text-white border-radius-30 px-4 py-2 font-size-12"
          :style="`background-color: ${getAgeGroupColor(product)}`"
        >
          {{ product.age_groups ? product.age_groups[0].name: '' }}
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
    <v-card-text class="pb-0">
      <div style="height: 40px; margin-top: -40px">
        <div
          v-if="productIsRollback"
          class="border-radius-30 border-solid-1 border-color-chip d-inline py-1 px-4 text-uppercase text-chip font-size-11">
          Rollback
        </div>
      </div>
      <div class="font-size-price text-black font-weight-bold mb-2">
        {{ product.reduced_price ? '$ ' + product.reduced_price : '$ ' + product.price }}
        <span class="text-decoration-line-through font-weight-regular sup">
          {{ product.reduced_price ? '$ ' + product.price : '' }}
        </span>
      </div>
      <div
        :style="`min-height: ${nombreHeight}`"
        class="d-flex place-items-center font-weight-bold text-black font-size-description min-height50"
        @click="setShowNombreTooltip"
      >
        {{ name }}
      </div>
      <v-tooltip
        v-model="showNombreTooltip"
        bottom
      >
        <template #activator="{ on, attrs }">
          <div
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <div>{{ product.name }}</div>
      </v-tooltip>
      <div
        class="d-flex justify-space-between"
        :style="`min-height: ${descriptionHeight}`">
        <p
          class="align-self-center text-black font-size-description lines-2"
          @mouseenter="showDescripcionTooltip=true"
          @mouseleave="showDescripcionTooltip=false">{{ product.description }}</p>
        <v-spacer />
        <div class="align-self-center">
          <img src="/info-tooltip.svg" width="20" alt="tooltip" @click="setShowDescripcionTooltip" >
        </div>
      </div>
      <v-tooltip
        v-model="showDescripcionTooltip"
        bottom
      >
        <template #activator="{ on, attrs }">
          <div
            v-bind="attrs"
            v-on="on" >
          </div>
        </template>
        <div>
          {{ product.description }}
        </div>
      </v-tooltip>
    </v-card-text>
    <v-card-actions class="mt-0 mb-1">
      <div
        v-if="product.inStock"
        :class="`text-secondary font-weight-bold text-uppercase border-button px-3 py-2
        bg-white hover-pointer min-width-180 text-center
        ${selected ? 'bg-primary' : ''}`"
        @click="click"
      >
        <v-row>
          <v-col cols="9">
            <p class="mb-0">{{ selected? 'Agregado': 'Agregar' }}</p>
          </v-col>
          <v-col cols="3">
            <v-icon v-if="!selected" color="secondary">
              fa-plus-circle
            </v-icon>
            <v-icon v-if="selected" color="secondary">
              fa-check-circle
            </v-icon>
          </v-col>
        </v-row>
      </div>
      <div
        v-else
        :class="`text-red font-weight-bold text-uppercase border-color-red border-radius-30 border-solid-3 px-3 py-2
        bg-white min-width-180 text-center
        ${selected ? 'bg-primary' : ''}`"
      >
        <v-row>
          <v-col cols="12">
            <div>No disponible</div>
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
    nombreHeight: '50px',
    descriptionHeight: '50px',
    textLenghtNombre: 50,
    textLenghtDescription: 50,
    showNombreTooltip: false,
    showDescripcionTooltip: false
  }),
  computed: {
    productIsRollback () {
      console.log(this.product)
      return this.product.reduced_price
    },
    name () {
      return this.product.name.length > this.textLenghtNombre ? `${this.product.name.substr(0, this.textLenghtNombre)}...` : this.product.name
    },
    description () {
      return this.product.description.length > this.textLenghtDescription ? `${this.product.description.substr(0, this.textLenghtDescription)}...` : this.product.description
    }
  },
  methods: {
    getAgeGroupColor (product) {
      if (product.age_groups) {
        if (product.age_groups[0].color) {
          const color = JSON.parse(product.age_groups[0].color)
          return color.hex
        }
      }
      return '#FFFFFF'
    },
    async setShowNombreTooltip () {
      this.showNombreTooltip = true
      await new Promise(resolve => setTimeout(resolve, 2000))
      this.showNombreTooltip = false
    },
    async setShowDescripcionTooltip () {
      this.showDescripcionTooltip = true
      await new Promise(resolve => setTimeout(resolve, 2000))
      this.showDescripcionTooltip = false
    },
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
