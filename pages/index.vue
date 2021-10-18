<template>
  <div>
    <!--<img
      src="/compact.png"
      class="hidden-sm-and-down"
      style="position: absolute;left: -35%;top: 10%;height: 50%;z-index: 0;">-->
    <v-container class="mb-10">
      <Header />
    </v-container>
    <div v-if="amountGifts">
      <BannerFilters />
      <v-row class="mb-10">
        <v-col v-for="product in products" :key="product.id" cols="12" md="4">
          <ProductCard :product="product" @click="() => addProduct(product)" />
        </v-col>
      </v-row>
    </div>
    <infinite-loading
      v-if="!(products.length <= 0)"
      spinner="waveDots"
      color="primary"
      @infinite="infiniteScroll"
    >
      <slot slot="no-more">
        <div class="text-primary">
          No hay mas productos
        </div>
        <div slot="no-results">
          <div class="text-primary">
            No hay mas productos
          </div>
        </div>
      </slot>
    </infinite-loading>
    <v-footer class="bg-secondary px-0">
      <Subcribe />
    </v-footer>
  </div>
</template>
<script>
import ProductCard from '../components/ProductCard'
import Subcribe from '../components/Subcribe'
import Header from '../components/home/Header'
import BannerFilters from '../components/home/BannerFilters'
import getProducts from '../api/products'

export default {
  components: { BannerFilters, Header, Subcribe, ProductCard },
  computed: {
    amountGifts () {
      return this.$store.getters.amountGifts
    },
    products () {
      return this.$store.getters['products/productos']
    }
  },
  methods: {
    infiniteScroll ($state) {
      getProducts(
        this.$strapi,
        this.$store.getters['filters/filters'],
        this.$store.getters['products/limit'],
        this.products.length
      ).then((response) => {
        if (response.length === 0) {
          $state.complete()
        } else {
          this.$store.commit('products/addProducts', response)
          $state.loaded()
        }
      })
    },
    addProduct (product) {
      this.$store.dispatch('wishList/addProduct', product)
    }
  }
}
</script>
<style>
.qa-input-email input::placeholder {
  background-color: white!important;
  opacity: 1;
}

.qa-input-email .v-label {
  background-color: white;
  opacity: 1;
}

.qa-input-email input,
.qa-input-email input{
  background-color: white!important;
}

.qa-input-email.v-text-field>.v-input__control>.v-input__slot:before {
  border-style: none;
}
</style>
