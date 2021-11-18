<template>
  <div class="margin-mobile">
    <!--<img
      src="/compact.png"
      class="hidden-sm-and-down"
      style="position: absolute;left: -35%;top: 10%;height: 50%;z-index: 0;">-->
    <v-row class="mt-10 mb-5" >
      <v-col cols="12">
        <iframe
          src="https://video.eko.com/MZgvxD/embed"
          title="Guirito"
          style="width: 100%; height: 500px;border: 0; "
          allowfullscreen
          allow="autoplay; fullscreen;">
        </iframe>
      </v-col>
    </v-row>
    <v-container class="mb-10 d-flex justify-center">
      <Header />
    </v-container>
    <div v-if="amountGifts">
      <div id="bannerFilters" ref="bannerFilters">
        <BannerFilters />
      </div>
      <v-row id="products" ref="products" class="mb-10" :style="`${products.length === 0 ? 'width: 1000px' : '' }`">
        <v-col v-for="product in products" :key="product.id" cols="12" md="4">
          <ProductCard :product="product" :selected="isSelectedProduct(product)" @click="() => setProduct(product)" />
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
        </div>
      </slot>
      <slot slot="no-results">
        <div class="text-primary">
        </div>
      </slot>
    </infinite-loading>
    <ListCompleteDialog v-model="showListCompleted" @close="alertCompletedShowed = true" />
    <v-footer class="bg-secondary px-0">
      <Subcribe />
    </v-footer>
    <UserErrorDialog v-model="showUserErrorDialog" :provider="providerUser" @close="showUserErrorDialog = false" />
  </div>
</template>
<script>
import ProductCard from '../components/ProductCard'
import Subcribe from '../components/Subcribe'
import Header from '../components/home/Header'
import BannerFilters from '../components/home/BannerFilters'
import getProducts from '../api/products'
import ListCompleteDialog from '../components/dialog/ListCompleteDialog'
import UserErrorDialog from '../components/dialog/UserErrorDialog'

export default {
  components: { UserErrorDialog, ListCompleteDialog, BannerFilters, Header, Subcribe, ProductCard },
  layout: 'default',
  data () {
    return {
      alertCompletedShowed: false,
      showUserErrorDialog: Boolean(this.$route.query.userError),
      providerUser: this.$route.query.provider,
      scrollTo: 0
    }
  },
  computed: {
    amountGifts () {
      return this.$store.getters.amountGifts
    },
    products () {
      return this.$store.getters['products/productos']
    },
    showListCompleted () {
      return this.$store.getters['wishList/products'].length === this.$store.getters.amountGifts && !this.alertCompletedShowed
    }
  },
  mounted () {
    this.$nuxt.setLayout('default')
    const hash = this.$route.hash
    if (hash) {
      const el = document.querySelector(hash)
      el && el.scrollIntoView()
    }
    // const ekoPlayer = new this.$EkoPlayer('#myContainer')
    // ekoPlayer.load('MZgvxD')
    // ekoPlayer.invoke('audio.play', 'ping')
  },
  watch: {
    products () {
      console.log('cambiaron los productos')
      if (this.scrollTo === 1) {
        // window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight)
        // this.$refs.products.$el.scrollIntoView({ behavior: 'smooth' }
        // const top = this.$refs.products.scrollIntoView()
        // window.scrollTo(0, top)
        this.$nextTick(() => {
          this.$refs.bannerFilters.scrollIntoView()
          // this.$refs.bannerFilters.scrollIntoView()
        })
        this.scrollTo++
      }
      if (this.scrollTo === 0) {
        this.scrollTo = this.scrollTo + 1
      }
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
    isSelectedProduct (product) {
      return this.$store.getters['wishList/products']
        .filter(p => p.id === product.id).length >= 1
    },
    setProduct (product) {
      if (this.isSelectedProduct(product)) {
        this.removeProduct(product)
      } else {
        this.addProduct(product)
      }
    },
    addProduct (product) {
      this.$store.dispatch('wishList/addProduct', product)
    },
    removeProduct (product) {
      this.$store.dispatch('wishList/removeProduct', product)
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

@media (max-width: 960px) {
  .margin-mobile{
    margin: 20px !important;
  }
}
</style>
