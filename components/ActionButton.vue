<template>
  <v-btn
    rounded
    outlined
    color="primary"
    dark
    :class="`btn p-4 ${hover ? 'hover' : '' }`"
    @mouseenter="()=>hover=true"
    @mouseleave="()=>hover=false"
  >
    <div class="mr-2">{{ text }}</div>
    <v-icon
      right
      dark
      large
      :class="`icon ${hover ? 'icon-hover' : '' }`">mdi-domain</v-icon>
  </v-btn>
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
