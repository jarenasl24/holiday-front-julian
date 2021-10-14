<template>
  <v-app class="bg-secondary">
    <v-navigation-drawer
      :value="showFilters"
      fixed
      app
      temporary
      width="500"
      class="pt-10 pl-12 pr-12 pb-4 secondary"
      @input="inputNavigator"
    >
      <Filters />
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <v-toolbar
          color="elevation-0 secondary"
        >
          <img src="/logo-WPR.svg" height="35">
          <v-spacer />
          <v-badge
            color="red"
            dot
            overlap
          >
            <action-button text="VER LA LISTA DE DESEOS" icon="fa-gifts" />
          </v-badge>
          <v-toolbar-title />
        </v-toolbar>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import ActionButton from '../components/ActionButton'
import Footer from '../components/Footer'
import Filters from '../components/filters/Filters'

export default {
  components: { Filters, Footer, ActionButton },
  data () {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'Vuetify.js'
    }
  },
  computed: {
    showFilters () {
      return this.$store.getters.filters
    }
  },
  methods: {
    inputNavigator (state) {
      if (!state) {
        this.$store.commit('hideFilters')
      }
    }
  }
}
</script>
