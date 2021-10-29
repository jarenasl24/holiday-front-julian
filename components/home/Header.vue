<template>
  <v-row style="max-width: 1200px">
    <v-col cols="12" md="8" class="pa-0 hidden-md-and-up">
      <img src="/img-holliday-rev.png" class="full-width" />
    </v-col>
    <v-col cols="12" md="4" class="pa-0 text-white align-self-center">
      <p class="font-size-20 mb-4">Navidades en Walmart</p>
      <h1 class="font-size-60 line-height-normal mb-0">¡Crea tu lista de regalos!</h1>
      <h3 class="font-size-24 mb-6">¿Cuántos regalos quieres en tu lista?</h3>
      <p class="text-white font-size-12 mb-0 ml-4">CANTIDAD DE REGALOS</p>
      <div class="ma-0 d-flex border-color-primary border-radius-30 border-solid-2 bg-white">
        <div class="w-60p">
          <v-select
            id="fieldCantidad"
            v-model="cantidad"
            :items="cantidades"
            color="black"
            class="cantidad-select full-width fill-height px-4 mb-0 pb-0 pt-1 font-size-12"
            required="true"
            dense
          ></v-select>
        </div>
        <div class="pa-0 border-top-right-radius-30 border-bottom-right-radius-30 bg-primary w-40p">
          <button
            @click="setAmountGifts"
            class="text-secondary py-3 text-uppercase font-weight-bold width-101p font-size-12 bg-primary border-radius-30">
            <div class="display-flex place-content-center">
              <div class="pr-2 align-self-center ">
                Comenzar
              </div>
              <v-icon color="secondary">
                fa-gifts
              </v-icon>
            </div>
          </button>
        </div>
      </div>
    </v-col>
    <v-col cols="12" md="8" class="pa-0 hidden-sm-and-down">
      <img src="/img-holliday-rev.png" class="full-width" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      cantidad: null,
      cantidades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    }
  },
  computed: {
    amountGifts () {
      return this.$store.getters.amountGifts
    },
    labelCantidad () {
      return this.cantidad !== null ? '' : 'CANTIDAD DE REGALOS'
    }
  },
  methods: {
    async setAmountGifts () {
      await this.$store.commit('setAmountGifts', this.cantidad)
      const filtros = await this.$store.getters['filters/filters']
      await this.$store.dispatch('products/aplicarFiltros', filtros)
      // document.getElementById('products').scrollIntoView(false)
      // window.scrollTo(0, document.body.scrollHeight)
    }
  }
}
</script>

<style scoped>
@media (max-width: 720px) {
  .hero-header{
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
  }

  .font-size-20{
    font-size: 15px;
  }

  .font-size-60{
    font-size: 40px;
  }

  .font-size-24{
    font-size: 18px;
  }

  .theme--light.v-text-field:not(.v-input--has-state):hover > .v-input__control > .v-input__slot:before {
    border-color: white !important;
    border-style: none !important;
  }
  .v-text-field > .v-input__control > .v-input__slot:before, .v-text-field > .v-input__control > .v-input__slot:after{
    border-color: white !important;
  }
  .v-text-field__details{
    display: none !important;
  }
}
</style>
