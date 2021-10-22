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
          ¡Tu Lista de Deseos está completa!
        </h1>
        <v-img src="/mail.png" />
        <div class="mt-4">
          <div class="ma-4 text-center">
            <action-button
              text="Ve a verla"
              border-color="primary"
              border-color-hover="primary"
              text-color="primary"
              text-color-hover="secondary"
              background-color="secondary"
              background-color-hover="primary"
              width="full-width"
              show-text-on-mobile
              @click="showList"
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
  name: 'ListCompleteDialog',
  components: { ActionButton },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showList () {
      const id = this.$store.getters['wishList/id']
      if (id) {
        this.$router.push('list/' + id)
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
