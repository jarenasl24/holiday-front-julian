<template>
  <v-dialog
    :value="value"
    max-width="400"
    class="border-radius-30"
    @input="close"
  >
    <div class="text-white bg-secondary border-radius-30 pa-4 pa-md-8">
      <div class="hover-pointer text-right">
        <v-icon color="white" size="50" @click="close">
          far fa-times-circle
        </v-icon>
      </div>
      <div class="py-8 px-4 px-md-6 py-md-16">
        <h1 class="text-h5 font-weight-bold text-center">
          ¡Guarda tu lista de regalos!
        </h1>
        <div class="ma-md-4 ma-4">
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
              width="w-80p w-sm-100p"
              show-text-on-mobile
              @click="googleSignIn"
            />
          </div>
          <div class="ma-md-4 ma-4 text-center">
            <action-button
              text="FACEBOOK"
              icon="fab fa-facebook-f"
              border-color="primary"
              border-color-hover="primary"
              text-color="primary"
              text-color-hover="secondary"
              background-color="secondary"
              background-color-hover="primary"
              width="w-80p w-sm-100p"
              show-text-on-mobile
              @click="facebookSignIn"
            />
          </div>
          <v-form ref="terms-form" v-model="valid" class="d-flex mt-10 text-center justify-center">
            <v-radio-group v-model="terminos" :rules="termRules" class="place-content-center my-0">
              <v-radio value="acepta" color="primary" class=""/>
            </v-radio-group>
            <div class="text-primary mt-2">Acepta <a href="https://walmartpr.com/terminos-de-uso/" target="_blank" class="text-decoration-underline">términos y condiciones</a></div>
          </v-form>
          <p v-show="terminos===null && showValid" class="text-white font-size-12">Debes aceptar terminos y condiciones</p>
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
      terminos: null,
      termRules: [v => !!v || ''],
      valid: true,
      showValid: false
    }
  },
  methods: {
    googleSignIn () {
      if (this.$refs['terms-form'].validate()) {
        this.$cookies.set('listUid', this.list.uid)
        window.open('https://buzondenavidad.com:1338/connect/google')
      } else {
        this.showValid = true
      }
    },
    facebookSignIn () {
      if (this.$refs['terms-form'].validate()) {
        window.open('https://buzondenavidad.com:1338/connect/facebook')
      } else {
        this.showValid = true
      }
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>
