<template>
  <v-card
    outlined
    max-width="100%"
    max-height="550"
    :class="`card px-4 rouned-15`">
    <v-card-title>
      <div class="full-width d-flex justify-end">
        <div
          class="text-white border-radius-30 px-4 py-2 font-size-12"
          :style="`background-color: ${getAgeGroupColor(ageGroups)}`">
          {{ageGroups ? ageGroups[0].name: ''}}
        </div>
      </div>
      <v-carousel
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
      <div
        :style="`height: ${nombreHeight}`"
        class="d-flex place-items-center font-weight-bold text-black font-size-description min-height50"
        @click="setShowNombreTooltip">
        {{ name }}
      </div>
      <v-tooltip
        v-model="showNombreTooltip"
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <div
            v-bind="attrs"
            v-on="on" >
          </div>
        </template>
        <div>{{product.name}}</div>
      </v-tooltip>
      <v-row>
        <v-col
          cols="10"
          :style="`height: ${descriptionHeight}`"
          class="d-flex place-items-center text-black font-size-description"
          @mouseenter="showDescripcionTooltip=true"
          @mouseleave="showDescripcionTooltip=false">{{ description }}</v-col>
        <v-col cols="2"><img src="/info-tooltip.svg" width="20" @click="setShowDescripcionTooltip" /></v-col>
      </v-row>
      <v-tooltip
        v-model="showDescripcionTooltip"
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <div
            v-bind="attrs"
            v-on="on" >
          </div>
        </template>
        <div>{{product.description}}</div>
      </v-tooltip>
    </v-card-text>
    <v-card-actions class="mt-0">
      <div
        class="text-secondary font-weight-bold text-uppercase border-button px-8 py-2
        bg-white hover-pointer text-center"
        @click="click"
      >
        <v-row>
          <v-col cols="12">
            <v-icon color="secondary">fas fa-trash-alt</v-icon>
          </v-col>
        </v-row>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProductCardList',
  props: {
    product: {
      type: Object
    }
  },
  async mounted () {
    if (!this.ageGroups) {
      const p = await this.$strapi.findOne('products', this.product.id)
      this.ageGroups = p.age_groups
    }
  },
  data () {
    return {
      model: 0,
      ageGroups: this.product.age_groups,
      imageHeight: 250,
      nombreHeight: '50px',
      descriptionHeight: '50px',
      textLenghtNombre: 50,
      textLenghtDescription: 50,
      showNombreTooltip: false,
      showDescripcionTooltip: false
    }
  },
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
    getAgeGroupColor () {
      if (this.ageGroups) {
        if (this.ageGroups[0].color) {
          const color = JSON.parse(this.ageGroups[0].color)
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
