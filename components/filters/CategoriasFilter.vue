<template>
  <div>
    <div class="text-center" v-if="categories.length === 0">
      <v-progress-circular
        class="justify-center"
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
    <v-radio-group v-else v-model="radioGroup">
      <v-radio
        v-for="category in categories"
        :key="category.id"
        :value="category"
        class="text-primary"
        color="primary"
      >
        <template v-slot:label>
          <div class="text-primary font-size-14">{{ category.name }}</div>
        </template>
      </v-radio>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: 'CategoriasFilter',
  async created () {
    const categories = await this.$strapi.find('product-categories')
    this.categories = categories
  },
  data () {
    return {
      categories: [],
      radioGroup: 1
    }
  }
}
</script>

<style scoped>
.v-radio .v-icon--selection-controls__input .mdi{
  color: #F6BC37 !important;
}
</style>
