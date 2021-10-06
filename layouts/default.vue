<template>
  <v-app class="bg-secondary">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      temporary
      width="500"
      class="pt-10 pl-12 pr-12 pb-4 secondary"
    >
      <Filters />
    </v-navigation-drawer>
    <v-toolbar
      color="elevation-0 secondary"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <img src="/logo.png" height="50">
      <v-spacer />
      <v-badge
        color="red"
        dot
        bordered
        overlap
      >
        <action-button text="VER LA LISTA DE DESEOS" />
      </v-badge>
      <v-toolbar-title />
    </v-toolbar>
    <v-main>
      <v-container>
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
  }
}
</script>
