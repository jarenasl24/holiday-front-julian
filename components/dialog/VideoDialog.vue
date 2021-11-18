<template>
  <v-dialog
    :value="value"
    max-width="600"
    class="border-radius-30 v-dialog-video"
    @input="close"
  >
    <div class="text-white bg-secondary border-radius-30 pa-4 pa-md-8">
      <div class="hover-pointer text-right">
        <v-icon color="white" size="50" @click="close">
          far fa-times-circle
        </v-icon>
      </div>
      <div class="py-8 px-4 px-md-8 py-md-16">
        <iframe
          src="https://www.youtube.com/embed/tf7r8TDpse4"
          title="YouTube video player"
          class="final-video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: 'VideoDialog',
  props: {
    value: {
      type: Boolean,
      default: false
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
.final-video{
  min-width: 450px;
  height: 450px;
}

@media(max-width: 720px){
  .final-video{
    width: 100%;
    min-width: 100%;
    height: 450px;
  }
}

@media(min-width: 720px){
  .final-video{
    min-width: 450px;
    height: 450px;
  }
}
</style>
