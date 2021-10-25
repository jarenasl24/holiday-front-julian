<template>
  <v-dialog
    :value="value"
    max-width="600"
    class="border-radius-30">
    <v-form
      ref="sms-form"
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
        <div class="text-black pb-4">
          ¡Querido Santa, esta es mi lista de regalos!
          <a :href="'https://buzondenavidad.com/list/' + this.list.uid" target="_blank">{{'https://buzondenavidad.com/list/' + this.list.uid}}</a>
        </div>
        <v-divider />
        <div class="display-flex pt-6">
          <div class="border-color-black border-radius-10 border-solid-2 py-2 px-16 text-black hover-pointer" @click="send">Enviar</div>
          <v-spacer />
          <v-icon color="secondary" @click="close">far fa-trash-alt</v-icon>
        </div>
      </div>
    </v-form>
  </v-dialog>
</template>

<script>
export default {
  name: 'SmsDialog',
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
        value => !!value || 'Debe escribir el teléfono.'
      ]
    }
  },
  methods: {
    send () {
      this.$refs['sms-form'].validate()
      if (this.valid) {
        this.$strapi.create('sms', { phone: this.to, link: 'https://buzondenavidad.com/list/' + this.list.uid })
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
