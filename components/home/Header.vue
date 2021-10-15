<template>
  <v-row class="hero-header" style="max-width: 1200px">
    <v-col cols="12" md="8" class="pa-0 hidden-md-and-up">
      <img src="/Group 51@2x.png" class="full-width" />
    </v-col>
    <v-col cols="12" md="4" class="pa-0 text-white align-self-center">
      <p class="font-size-20 mb-4">Navidad en Wallmart</p>
      <h1 class="font-size-60 line-height-normal mb-0">¡Arma tu lista de deseos!</h1>
      <h3 class="font-size-24 mb-6">¿Cuantos regalos quieres en tu lista?</h3>
      <v-row class="ma-0 border-color-primary border-radius-30 border-solid-2 bg-white">
        <v-col cols="8" class="pa-0">
          <v-text-field
            id="fieldEmail"
            v-model="cantidad"
            label="CANTIDAD DE REGALOS"
            color="black"
            class="js-cm-email-input qa-input-email full-width fill-height px-4 mb-0 pb-0 pt-1 font-size-12"
            maxlength="200"
            required="true"
            type="number"
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="4" class="pa-0 border-top-right-radius-15 border-bottom-right-radius-15 bg-primary">
          <button
            @click="setAmountGifts"
            class="text-secondary py-3 text-uppercase font-weight-bold full-width font-size-12 bg-primary border-radius-30">
            <div class="display-flex place-content-center">
              <div class="pr-2 align-self-center">
                Comenzar
              </div>
              <v-icon color="secondary">
                fa-gifts
              </v-icon>
            </div>
          </button>
        </v-col>
      </v-row>
      <p class="font-size-16">*Ingresa solo números</p>
    </v-col>
    <v-col cols="12" md="8" class="pa-0 hidden-sm-and-down">
      <img src="/header.png" class="full-width" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      cantidad: null
    }
  },
  computed: {
    amountGifts () {
      return this.$store.getters.amountGifts
    }
  },
  methods: {
    setAmountGifts () {
      this.$store.commit('setAmountGifts', this.cantidad)
    }
  }
}
</script>

<style scoped>

</style>
