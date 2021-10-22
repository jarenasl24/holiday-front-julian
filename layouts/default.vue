<template>
  <v-app class="bg-secondary">
    <v-navigation-drawer
      v-if="width > 720"
      :value="showFilters"
      fixed
      app
      temporary
      width="500"
      class="pt-10 pl-12 pr-12 pb-4 secondary hidden-sm-and-down"
      @input="inputNavigator"
    >
      <Filters />
    </v-navigation-drawer>
    <v-dialog v-else v-model="showFilters" class="">
      <div class="bg-secondary">
        <Filters />
      </div>
    </v-dialog>
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
            <action-button text="Ver lista de regalos" icon="fa-gifts" @click="showList" />
          </v-badge>
          <v-toolbar-title />
        </v-toolbar>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer :absolute="true" />
  </v-app>
</template>

<script>
import ActionButton from '../components/ActionButton'
import Footer from '../components/Footer'
import Filters from '../components/filters/Filters'

export default {
  components: { Filters, Footer, ActionButton },
  mounted () {
    this.width = screen.width
    console.log(screen.width)
  },
  data () {
    return {
      drawer: false,
      fixed: false,
      width: 0,
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
      return this.$store.getters.showFilters
    }
  },
  methods: {
    async inputNavigator (state) {
      if (!state && this.$store.getters.showFilters) {
        console.log('acaas')
        await this.$store.commit('setShowFilters', false)
        await this.$store.dispatch('filters/setFilters', this.$store.getters['lastFilters/lastFilters'])
      }
    },
    showList () {
      const id = this.$store.getters['wishList/id']
      if (id) {
        this.$router.push('list/' + id)
      }
    }
  }
}
</script>
