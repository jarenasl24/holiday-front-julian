<template>
  <v-app class="bg-red">
    <div>
      <v-container>
        <v-toolbar
          color="elevation-0 bg-red"
        >
          <nuxt-link to="/">
            <img src="/logo-WPR.svg" height="35">
          </nuxt-link>
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
      <v-container class="mb-sm-180px mb-sm-10">
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
  },
  mounted () {
    const body = document.getElementsByTagName('body')
    const noscript = document.createElement('noscript')
    const iframe = document.createElement('iframe')
    iframe.setAttribute(
      'src',
      'https://www.googletagmanager.com/ns.html?id=GTM-5D8G27T'
    )
    iframe.setAttribute('height', 0)
    iframe.setAttribute('width', 0)
    iframe.setAttribute('style', 'display:none;visibility:hidden')
    noscript.appendChild(iframe)
    body[0].prepend(noscript)
  }
}
</script>

<style scoped>

</style>
