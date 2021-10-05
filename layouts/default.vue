<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      temporary
      width="30%"
    >
      <Filters />
    </v-navigation-drawer>
    <v-toolbar
      color="elevation-0 white"
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
        <v-row>
          <v-col>
            <ProductCard />
          </v-col>
          <v-col>
            <ProductCard />
          </v-col>
          <v-col>
            <ProductCard />
          </v-col>
        </v-row>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import ActionButton from '../components/ActionButton'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import Filters from '../components/Filters'
export default {
  components: { Filters, Footer, ProductCard, ActionButton },
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
