<template>
  <div>
    <img
      src="/background-confeti-list.png"
      class="hidden-sm-and-down"
      style="position: absolute;left: -20%;top: 10%;height: 80%;z-index: 0;" />
    <img
      src="/background-confeti-list.png"
      class="hidden-sm-and-down"
      style="position: absolute;right: -20%;top: 10%;height: 80%;z-index: 0;" />
    <v-row
      color="elevation-0"
      class="bg-red mb-8"
    >
      <v-col cols="12" md="6" class="align-self-center">
        <p v-if="user" class="font-weight-bold text-white font-size-40 text-h5">
          {{ `Lista de deseos de ${user.username}` }}
        </p>
        <p v-else class="font-weight-bold text-white font-size-40 text-h5">
          Tu lista de deseos
        </p>
      </v-col>
      <v-col cols="12" md="6">
        <div class="d-flex justify-center justify-md-end">
          <div class="mr-1 mr-md-2">
            <action-button
              text="Compartir"
              icon="fa-share-alt"
              border-color="primary"
              border-color-hover="primary"
              text-color="primary"
              text-color-hover="secondary"
              background-color="red"
              background-color-hover="primary"
              show-text-on-mobile
              @click="showShare = true"
            />
          </div>
          <div class="ml-1 ml-md-2">
            <action-button
              text="Guardar"
              icon="fa-bookmark"
              border-color="primary"
              border-color-hover="primary"
              text-color="primary"
              text-color-hover="secondary"
              background-color="red"
              background-color-hover="primary"
              show-text-on-mobile
              @click="showSave = true"
            />
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row v-if="list" class="mb-16">
      <v-carousel
        v-model="carousel"
        style="border-radius: 5px;"
        hide-delimiters
        height="550"
        :show-arrows="productsDivided.length > 1"
        class="hidden-sm-and-down"
      >
        <v-carousel-item
          v-for="(products, index) in productsDivided"
          :key="index"
        >
          <v-row>
            <v-col v-for="product in products" :key="product.id" cols="12" md="4">
              <ProductCardList :product="product" @click="() => { deleteProduct(product) }" />
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
      <v-col v-for="product in list.products" :key="product.id" cols="12" md="4" class="hidden-md-and-up">
        <ProductCardList :product="product" @click="() => { deleteProduct(product) }" />
      </v-col>
    </v-row>
    <ShareDialog
      v-if="list"
      v-model="showShare"
      :list="list"
      @showEmail="showEmail=true"
      @showSms="showSms=true"
      @close="showShare = false" />
    <EmailDialog v-if="list" v-model="showEmail" :list="list" @close="showEmail = false" />
    <SmsDialog v-if="list" v-model="showSms" :list="list" @close="showSms = false" />
    <SaveDialog
      v-if="list"
      v-model="showSave"
      :list="list"
      @close="showSave = false" />
  </div>
</template>

<script>
import ShareDialog from '../../components/dialog/ShareDialog'
import EmailDialog from '../../components/dialog/EmailDialog'
import SmsDialog from '../../components/dialog/SmsDialog'
import ActionButton from '../../components/ActionButton'
import SaveDialog from '../../components/dialog/SaveDialog'
import ProductCardList from '../../components/ProductCardList'
export default {
  components: { ProductCardList, SaveDialog, ActionButton, SmsDialog, EmailDialog, ShareDialog },
  props: {
    list: {
      type: Object,
      default: null
    },
    user: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      showShare: false,
      showSave: false,
      showEmail: false,
      showSms: false,
      carousel: 0
    }
  },
  computed: {
    productsDivided () {
      const products = []
      if (this.list) {
        let aux = []
        this.list.products.forEach((product, index) => {
          aux.push(product)
          if (index % 3 === 2 || index === (this.list.products.length - 1)) {
            const aux2 = aux.map(p => p)
            products.push(aux2)
            aux = []
          }
        })
      }
      return products
    }
  },
  methods: {
    isSelectedProduct (product) {
      return this.$store.getters['wishList/products']
        .filter(p => p.id === product.id).length >= 1
    },
    deleteProduct (product) {
      this.$emit('removeProduct', product)
    }
  }
}
</script>

<style scoped>
</style>
