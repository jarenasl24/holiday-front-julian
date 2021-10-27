<template>
  <v-dialog
    :value="value"
    max-width="400"
    class="border-radius-30"
    @input="close"
  >
    <div class="text-white bg-secondary border-radius-30 py-8 px-8">
      <div class="hover-pointer text-right">
        <v-icon color="white" size="50" @click="close">
          far fa-times-circle
        </v-icon>
      </div>
      <div class="py-16 px-8">
        <h1 class="text-h5 font-weight-bold text-center">
          ¡Hubo un error al ingresar!
        </h1>
        <p class="text-h6 font-weight-regular text-white text-center mt-2">
          Intenta ingresar con {{ provider }}
        </p>
        <div class="mt-4">
          <div class="ma-4 text-center">
            <action-button
              text="Aceptar"
              border-color="primary"
              border-color-hover="primary"
              text-color="primary"
              text-color-hover="secondary"
              background-color="secondary"
              background-color-hover="primary"
              width="full-width"
              show-text-on-mobile
              @click="close"
            />
          </div>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import ActionButton from '../ActionButton'
export default {
  name: 'UserErrorDialog',
  components: { ActionButton },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    provider: {
      type: String,
      default: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>
