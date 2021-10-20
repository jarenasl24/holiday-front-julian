<template>
  <v-dialog
    :value="value"
    max-width="600"
    class="border-radius-30">
    <v-form
      ref="email-form"
      v-model="valid"
      class="text-white bg-white border-radius-30">
      <div class="text-white bg-secondary py-2 px-6">
        <v-icon color="white">fas fa-ellipsis-h</v-icon>
      </div>
      <div class="pa-4 bg-light-blue">
        <div class="border-color-blue border-solid-1 border-radius-10 py-2 px-4 display-flex bg-white">
          <p class="text-black pr-2 align-self-center">To: </p>
          <v-text-field
            v-model="to"
            color="black"
            type="email"
            :rules="rules"
            dense></v-text-field>
        </div>
      </div>
      <div class="py-8 px-8">
        <div class="px-8 py-10">
          <v-img src="/mail.png" />
          <h1 class="text-secondary font-size-24 font-weight-bold text-center">
            ¡Mira la lista de Deseos que árme para las fiestas!
          </h1>
          <div class="display-flex justify-center pt-4">
            <a
              :href="`https://buzondenavidad.com/${list.id}`"
              target="_blank"
              class="px-6 py-3 text-decoration-none text-secondary font-weight-bold text-center bg-primary border-radius-30 width-fit-content display-flex font-size-14">
              <div class="pr-2 pt-1">
                VE A VERLA
              </div>
              <v-icon color="secondary">
                fa-gifts
              </v-icon>
            </a>
          </div>
        </div>
        <v-divider />
        <div class="display-flex pt-6">
          <div class="border-color-black border-radius-10 border-solid-2 py-2 px-16 text-black hover-pointer" @click="sendEmail">Enviar</div>
          <v-spacer />
          <v-icon color="secondary" @click="close">far fa-trash-alt</v-icon>
        </div>
      </div>
    </v-form>
  </v-dialog>
</template>

<script>
export default {
  name: 'EmailDialog',
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
      to: null,
      valid: true,
      rules: [
        value => !!value || 'Debe escribir el email.',
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Ingrese un correo valido'
      ]
    }
  },
  methods: {
    sendEmail () {
      this.$refs['email-form'].validate()
      if (this.valid) {
        this.$strapi.create('mails', { email: this.to, link: 'https://buzondenavidad.com/list/' + this.list.id })
          .then((response) => {
            this.close()
            console.log(response)
          }).catch((error) => {
            console.log(error)
          })
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
