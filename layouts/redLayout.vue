<template>
  <v-app class="bg-red">
    <div>
      <v-container>
        <v-toolbar
          color="elevation-0 bg-red"
        >
          <img src="/logo-WPR.svg" height="35">
          <v-spacer />
          <!--<v-badge
            color="primary"
            dot
            overlap
          >
            <action-button text="VER LA LISTA DE DESEOS" icon="fa-gifts" backgroundColor="red" />
          </v-badge>-->
          <v-toolbar-title />
        </v-toolbar>
      </v-container>
      <v-container class="mb-sm-180px">
        <Nuxt />
      </v-container>
    </div>
    <Footer background-color="red" dividerColor="white" absolute />
  </v-app>
</template>

<script>
// import ActionButton from '../components/ActionButton'
import Footer from '../components/Footer'
export default {
  name: 'redLayout',
  components: {
    Footer
    // , ActionButton
  }
}
</script>

<style scoped>

</style>
