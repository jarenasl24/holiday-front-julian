<template>
  <v-footer
    :absolute="absolute"
    app
    :class="`bg-${backgroundColor}`"
  >
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-divider :class="`border-color-${dividerColor}`" />
        </v-col>
        <v-col cols="12" md="4">
          <img src="/logo-WPR.svg" height="40">
        </v-col>
        <v-col cols="12" md="8" class="align-self-center">
          <v-row>
            <v-col cols="12" md="3" class="font-size-13 text-primary font-weight-bold text-left text-md-right">
              <a class="text-white">
                Política de privacidad
              </a>
            </v-col>
            <v-col cols="1" :class="`text-center text-${dividerColor} ma-0 hidden-sm-and-down`">
              |
            </v-col>
            <v-col cols="12" md="2"  class="font-size-13 text-primary font-weight-bold text-left">
              <a class="text-white">
                Término de uso
              </a>
            </v-col>
            <v-col cols="12" md="6"  class="font-size-13 text-primary text-left text-md-right">
              <a class="text-white">
                Copyright 2021 Wal-Mart Stores. All Rights Reserved.
              </a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    backgroundColor: {
      type: String,
      default: 'secondary'
    },
    dividerColor: {
      type: String,
      default: 'primary'
    },
    absolute: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
