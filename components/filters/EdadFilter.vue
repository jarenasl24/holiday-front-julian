<template>
  <div>
    <div class="text-center" v-if="edades.length === 0">
      <v-progress-circular
        class="justify-center"
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
    <v-radio-group v-else v-model="radioGroup">
      <v-radio
        v-for="edad in edades"
        :key="edad.id"
        :value="edad"
        class="text-primary"
        color="primary"
      >
        <template v-slot:label>
          <div class="text-primary font-size-14">{{ edad.name }}</div>
        </template>
      </v-radio>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: 'EdadFilter',
  async created () {
    const edades = await this.$strapi.find('age-groups')
    this.edades = edades
  },
  data () {
    return {
      edades: [],
      radioGroup: 1
    }
  }
}
</script>

<style scoped>
.i.mdi.mdi-radiobox-blank {
  color: #F6BC37 !important;
}
</style>
