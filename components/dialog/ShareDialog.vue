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
      <div class="py-8 px-4 px-md-8 py-md-16">
        <h1 class="text-h5 font-weight-bold text-center">
          ¡Comparte tu lista de regalos!
        </h1>
        <div class="mt-4">
          <v-divider class="border-color-primary mb-10" />
          <div class="ma-md-4 ma-4 text-center">
            <action-button
              text="Whatsapp"
              icon="fab fa-whatsapp"
              border-color="primary"
              border-color-hover="primary"
              text-color="primary"
              text-color-hover="secondary"
              background-color="secondary"
              background-color-hover="primary"
              width="w-80p w-sm-100p"
              show-text-on-mobile
              @click="sendWhatsapp"
            />
          </div>
          <div class="ma-md-4 ma-4 text-center">
            <action-button
              text="Messenger"
              icon="fab fa-facebook-messenger"
              border-color="primary"
              border-color-hover="primary"
              text-color="primary"
              text-color-hover="secondary"
              background-color="secondary"
              background-color-hover="primary"
              width="w-80p w-sm-100p"
              show-text-on-mobile
              @click="sendMessenger"
            />
          </div>
          <div class="ma-md-4 ma-4 text-center">
            <action-button
              text="Email"
              icon="fa-envelope"
              border-color="primary"
              border-color-hover="primary"
              text-color="primary"
              text-color-hover="secondary"
              background-color="secondary"
              background-color-hover="primary"
              width="w-80p w-sm-100p"
              show-text-on-mobile
              @click="openEmail"
            />
          </div>
          <div class="ma-md-4 ma-4 text-center">
            <action-button
              text="SMS"
              icon="fa-comments"
              border-color="primary"
              border-color-hover="primary"
              text-color="primary"
              text-color-hover="secondary"
              background-color="secondary"
              background-color-hover="primary"
              width="w-80p w-sm-100p"
              show-text-on-mobile
              @click="openSms"
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
  name: 'ShareDialog',
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
      showEmail: false
    }
  },
  methods: {
    sendWhatsapp () {
      window.open('https://api.whatsapp.com/send?text=' + 'Querido Santa, esta es mi lista de regalos: https://buzondenavidad.com/list/' + this.list.uid, '_blank')
    },
    sendMessenger () {
      window.open(`https://www.facebook.com/dialog/send?app_id=136647370349323&link=${'https://buzondenavidad.com/list/' + this.list.uid}&redirect_uri=${'https://buzondenavidad.com/list/' + this.list.uid}`, '_blank')
    },
    openEmail () {
      this.$emit('showEmail')
      this.$emit('close')
    },
    openSms () {
      this.$emit('showSms')
      this.$emit('close')
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>
