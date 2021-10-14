<template>
  <div>
    <img
      src="/compact.png"
      class="hidden-sm-and-down"
      style="position: absolute;left: -35%;top: 10%;height: 50%;z-index: 0;">
    <v-container class="mb-10">
      <Header />
    </v-container>
    <div v-if="amountGifts">
      <BannerFilters />
      <v-row class="mb-10">
        <v-col cols="6" md="4">
          <ProductCard />
        </v-col>
        <v-col cols="6" md="4">
          <ProductCard />
        </v-col>
        <v-col cols="6" md="4">
          <ProductCard />
        </v-col>
        <v-col cols="6" md="4">
          <ProductCard />
        </v-col>
        <v-col cols="6" md="4">
          <ProductCard />
        </v-col>
        <v-col cols="6" md="4">
          <ProductCard />
        </v-col>
      </v-row>
    </div>
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
export default {
  components: { BannerFilters, Header, Subcribe, ProductCard },
  computed: {
    amountGifts () {
      return this.$store.getters.amountGifts
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
