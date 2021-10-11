<template>
  <div
    class="border-solid-2 font-weight-bold text-uppercase border-button px-4 hover-pointer text-center"
    :class="`${hover? 'border-color-primary text-secondary bg-primary': 'bg-secondary border-color-white text-white'}`"
    @mouseenter="() => hover = true"
    @mouseleave="() => hover = false"
    @click="click"
  >
    <v-row class="py-2">
      <v-col cols="10" class="align-self-center">
        <div>{{ text }}</div>
      </v-col>
      <v-col cols="2">
        <v-icon v-if="!hover" color="white">mdi-gift</v-icon>
        <v-icon v-if="hover" color="secondary">mdi-gift-outline</v-icon>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String
    }
  },
  data () {
    return {
      hover: false
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
@import "assets/variables.scss";

.btn{
  background-color: white;
  font-size: 12px;
}

.hover{
  background-color: $primary-color;
  color: white !important;
  border-color: $primary-color;
}

.icon{
  color: $primary-color !important;
}

.icon-hover{
  color: white !important;
}
</style>
