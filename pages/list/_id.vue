<template>
  <div>
    <v-row
      color="elevation-0"
      class="bg-red mb-8"
    >
      <v-col cols="12" md="6">
        <h1 class="font-weight-bold text-white font-size-40">
          Tu lista de deseos
        </h1>
      </v-col>
      <v-col cols="6" md="3">
        <div>
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
      </v-col>
      <v-col cols="6" md="3">
        <div class="ml-4">
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
      </v-col>
    </v-row>
    <v-row v-if="list" class="mb-10">
      <v-col v-for="product in list.products" :key="product.id" cols="12" md="4">
        <ProductCard :product="product" :selected="isSelectedProduct(product)" @click="() => {} " />
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
export default {
  components: { SaveDialog, ActionButton, SmsDialog, EmailDialog, ShareDialog },
  layout: 'redLayout',
  data () {
    return {
      list: null,
      showShare: false,
      showSave: false,
      showEmail: false,
      showSms: false
    }
  },
  async mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    try {
      const lists = await this.$strapi.find('wish-lists', {
        id: this.$route.params.id
      })
      this.list = lists[0]
    } catch (error) {
      this.error = error
    } finally {
      this.$nuxt.$loading.finish()
    }
  },
  methods: {
    isSelectedProduct (product) {
      return this.$store.getters['wishList/productos']
        .filter(p => p.id === product.id).length >= 1
    }
  }
}
</script>

<style scoped>

</style>
