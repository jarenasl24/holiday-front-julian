<template>
  <div>
    <div v-if="edades.length === 0" class="text-center">
      <v-progress-circular
        class="justify-center"
        indeterminate
        color="primary"
      />
    </div>
    <v-radio-group v-else :value="value" @change="change">
      <v-radio
        v-for="edad in edades"
        :key="edad.id"
        :value="edad"
        class="text-primary"
        color="primary"
      >
        <template #label>
          <div class="text-primary font-size-14">
            {{ edad.name }}
          </div>
        </template>
      </v-radio>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: 'EdadFilter',
  data () {
    return {
      edades: []
    }
  },
  computed: {
    value () {
      return this.$store.getters['filters/ageGroup']
    }
  },
  async created () {
    this.edades = await this.$strapi.find('age-groups')
  },
  methods: {
    change (ageGroup) {
      this.$store.commit('filters/setAgeGroup', ageGroup)
    }
  }
}
</script>

<style scoped>
</style>
