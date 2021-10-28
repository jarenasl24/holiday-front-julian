<template>
  <List :list="list" :user="user" @removeProduct="(product) => { removeProduct(product) }" />
</template>

<script>
import List from '../../components/list/List'
export default {
  name: 'Index',
  components: { List },
  layout: 'redLayout',
  data () {
    return {
      listUid: this.$cookies.get('listUid'),
      list: null,
      user: this.$cookies.get('user')
    }
  },
  async mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    try {
      const lists = await this.$strapi.find('wish-lists', {
        uid: this.listUid
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
