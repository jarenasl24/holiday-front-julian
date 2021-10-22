<template>
  <div
    class="d-flex mx-1 py-3 px-3
           border-radius-30 border-solid-2 border-color-white
           text-secondary bg-white font-weight-bold
           text-uppercase font-size-14">
    <div class="mr-2">{{ text }}</div>
    <v-icon @click="action" color="secondary" dense>fas fa-times</v-icon>
  </div>
</template>

<script>
export default {
  name: 'FilterButton',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    action () {
      this.$emit('action')
    }
  }
}
</script>

<style scoped>

</style>
