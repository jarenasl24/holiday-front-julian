<template>
  <ListComponent :list="list" @removeProduct="(product) => { removeProduct(product) }" />
</template>

<script>
import ListComponent from '../../components/ListComponent'
export default {
  components: { ListComponent },
  layout: 'redLayout',
  data () {
    return {
      list: null
    }
  },
  async mounted () {
    this.$nuxt.setLayout('redLayout')
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    try {
      const lists = await this.$strapi.find('wish-lists', {
        uid: this.$route.params.uid
      })
      this.list = lists[0]
    } catch (error) {
      this.error = error
    } finally {
      this.$nuxt.$loading.finish()
    }
  },
  methods: {
    removeProduct (product) {
      this.list.products = this.list.products.filter(p => p.id !== product.id)
      this.$strapi.update('wish-lists', this.list.id, this.list)
    }
  }
}
</script>

<style scoped>
</style>
