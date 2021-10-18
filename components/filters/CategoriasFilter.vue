<template>
  <div>
    <div v-if="categories.length === 0" class="text-center">
      <v-progress-circular
        class="justify-center"
        indeterminate
        color="primary"
      />
    </div>
    <v-checkbox
      v-for="category in categories"
      :key="category.id"
      :value="isSelected(category)"
      class="text-primary"
      color="primary"
      dense
      @change="() => change(category)"
    >
      <template #label>
        <div class="text-primary font-size-14">
          {{ category.name }}
        </div>
      </template>
    </v-checkbox>
  </div>
</template>

<script>
export default {
  name: 'CategoriasFilter',
  data () {
    return {
      categories: []
    }
  },
  computed: {
    value () {
      return this.$store.getters['filters/categories']
    }
  },
  async created () {
    this.categories = await this.$strapi.find('product-categories')
  },
  methods: {
    isSelected (category) {
      return this.value.filter(c => c.id === category.id).length > 0
    },
    change (category) {
      if (!this.isSelected(category)) {
        this.$store.commit('filters/addCategory', category)
      } else {
        this.$store.commit('filters/removeCategory', category)
      }
    }
  }
}
</script>

<style scoped>
</style>
