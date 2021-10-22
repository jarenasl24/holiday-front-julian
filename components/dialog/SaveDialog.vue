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
          ¡Guarda tu lista de regalos!
        </h1>
        <div class="mt-4">
          <v-divider class="border-color-primary mb-10" />
          <div class="ma-4 text-center">
            <action-button
              text="GOOGLE"
              icon="fab fa-google"
              border-color="primary"
              border-color-hover="primary"
              text-color="primary"
              text-color-hover="secondary"
              background-color="secondary"
              background-color-hover="primary"
              width="w-80p"
              show-text-on-mobile
              @click="sendWhatsapp"
            />
          </div>
          <div class="ma-4 text-center">
            <action-button
              text="FACEBOOK"
              icon="fab fa-facebook-f"
              border-color="primary"
              border-color-hover="primary"
              text-color="primary"
              text-color-hover="secondary"
              background-color="secondary"
              background-color-hover="primary"
              width="w-80p"
              show-text-on-mobile
              @click="sendMessenger"
            />
          </div>
          <div class="mt-10 text-center">
            <v-radio v-model="terminos" color="primary" class="place-content-center">
              <slot slot="label">
                <div class="text-primary">Acepta <a href="https://walmartpr.com/terminos-de-uso/" target="_blank" class="text-decoration-underline">términos y condiciones</a></div>
              </slot>
            </v-radio>
          </div>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import ActionButton from '../ActionButton'
export default {
  name: 'SaveDialog',
  components: { ActionButton },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    list: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      terminos: false
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
