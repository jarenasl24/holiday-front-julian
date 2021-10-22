<template>
  <v-btn
    class="border-solid-3 font-weight-bold text-uppercase border-button hover-pointer text-center py-6 px-6"
    :class="`${width} ${hover ? ` border-color-${borderColorHover} text-${textColorHover} bg-${backgroundColorHover}`
      : ` border-color-${borderColor} text-${textColor} bg-${backgroundColor}`}`"
    depressed
    @mouseenter="() => hover = true"
    @mouseleave="() => hover = false"
    @click="click"
  >
    <v-row class="ma-0 pa-0">
      <v-col
        :cols="icon ? 10 : 12"
        class="align-self-end ma-0 pr-4 py-0 pl-0"
        :class="`${showTextOnMobile ? '' : 'hidden-sm-and-down'}`"
      >
        <div>{{ text }}</div>
      </v-col>
      <v-col v-if="icon" cols="2" class="align-self-center ma-0 pa-0">
        <v-icon v-if="!hover" :color="textColor" medium>
          {{ icon }}
        </v-icon>
        <v-icon v-if="hover" :color="textColorHover" medium>
          {{ icon }}
        </v-icon>
      </v-col>
    </v-row>
  </v-btn>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String
    },
    icon: {
      type: String
    },
    borderColor: {
      type: String,
      default: 'white'
    },
    borderColorHover: {
      type: String,
      default: 'primary'
    },
    backgroundColor: {
      type: String,
      default: 'secondary'
    },
    backgroundColorHover: {
      type: String,
      default: 'primary'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    textColorHover: {
      type: String,
      default: 'secondary'
    },
    width: {
      type: String,
      default: ''
    },
    showTextOnMobile: {
      type: Boolean,
      default: false
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
