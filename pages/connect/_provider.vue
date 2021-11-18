<template>
  <div>
    <p class="text-white text-hclassName5">Guardando lista</p>
    <v-progress-linear indeterminate>
    </v-progress-linear>
  </div>
</template>
<script>
export default {
  layout: 'redLayout',
  data () {
    return {
      provider: this.$route.params.provider,
      id_token: this.$route.query.id_token,
      access_token: this.$route.query.access_token,
      listUid: this.$cookies.get('listUid')
    }
  },
  async mounted () {
    // console.log('mounted')
    // console.log(this.$route)
    // console.log(this.listUid)
    this.$nuxt.setLayout('redLayout')
    try {
      const result = await this.$axios({
        method: 'GET',
        url: `https://buzondenavidad.com:1338/auth/${this.provider}/callback?access_token=${this.access_token}`
      })
      const { user, jwt } = result.data
      this.$cookies.set('user', user)
      this.$cookies.set('jwt', jwt)
      // console.log(user)
      // console.log(jwt)
      // console.log(this.listUid)
      if (this.listUid) {
        const wishLists = await this.$strapi.find('wish-lists', { uid: this.listUid })
        // console.log(wishLists)
        user.wish_list = wishLists[0]
        // console.log(user.wish_list)
        await this.$axios.put(`https://buzondenavidad.com:1338/users/${user.id}`, user,
        // const response = await this.$axios.put(`http://localhost:1337/users/${user.id}`, user,
          {
            headers: {
              Authorization: `Bearer ${jwt}`
            }
          })
        // console.log(response)

        window.location = 'https://buzondenavidad.com/user'
      } else {
        window.location = 'https://buzondenavidad.com/'
      }
    } catch (e) {
      // console.log(e)
      window.location = `https://buzondenavidad.com/?userError=true&provider=${this.provider === 'google' ? 'facebook' : 'google'}`
    }
  }
}
</script>
<style lang="scss" scoped></style>
