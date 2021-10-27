<template>
  <div>
    <h1 class="text-white">Cargando usuario</h1>
  </div>
</template>
<script>
// import jwtDecode from 'jwt-decode'
export default {
  data () {
    return {
      provider: this.$route.params.provider,
      id_token: this.$route.query.id_token,
      access_token: this.$route.query.access_token,
      listUid: this.$cookies.get('listUid')
    }
  },
  mounted () {
    console.log('mounted')
    console.log(this.$route)
    console.log(this.listUid)
    try {
      this.$axios({
        method: 'GET',
        url: `https://buzondenavidad.com:1338/auth/${this.provider}/callback?access_token=${this.access_token}`
      })
        .then((res) => {
          console.log(res)
          const { user } = res.data
          if (this.listUid) {
            this.$strapi.find('wish-lists', { uid: this.listUid }).then(
              (result) => {
                if (result[0]) {
                  const list = result[0]
                  list.users.push(user)
                  this.$strapi.update('wish-list', list.id, list)
                }
              }
            )
          }
          this.$router.push(`/users/${user.id}`)
        }).catch((er) => {
          console.log(er)
          // const decoded = jwtDecode(this.id_token)
          // console.log('decoded', decoded)
          this.$router.push(`/?userError=true&provider=${this.provider === 'google' ? 'facebook' : 'google'}`)
        })
      // const { jwt, user } = res
      // store jwt and user object in localStorage
      // this.$auth.$storage.setUniversal('jwt', jwt)
      // this.$auth.$storage.setUniversal('user', { username: user.username, id: user.id, email: user.email })
    } catch (e) {
      console.log(e)
    }
    // this.$router.push(`/users/${user.id}`)
  }
}
</script>
<style lang="scss" scoped></style>
