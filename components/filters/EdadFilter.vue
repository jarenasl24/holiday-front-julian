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
  props: {
    value: {
      type: Object
    }
  },
  data () {
    return {
      edades: []
    }
  },
  async created () {
    this.edades = await this.$strapi.find('age-groups')
  },
  methods: {
    change (ageGroup) {
      this.$emit('change', ageGroup)
    }
  }
}
</script>

<style scoped>
</style>
