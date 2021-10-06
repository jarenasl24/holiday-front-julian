<template>
  <v-row class="hover-pointer" @click="onClick">
    <v-col cols="10">
      <h3 class="text-primary font-weight-bold">
        {{ title }}
      </h3>
    </v-col>
    <v-col cols="2">
      <v-icon v-if="expanded">mdi-chevron-up</v-icon>
      <v-icon v-else>mdi-chevron-down</v-icon>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TitleFilter',
  props: {
    expanded: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick () {
      this.$emit('change')
    }
  }
}
</script>

<style scoped>

</style>
