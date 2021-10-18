<template>
  <div>
    <v-toolbar
      color="elevation-0"
      class="bg-red mb-8"
    >
      <h1 class="font-weight-bold text-white font-size-40">
        Tu lista de deseos
      </h1>
      <v-spacer />
      <div>
        <action-button
          text="Compartir"
          icon="fa-share-alt"
          border-color="primary"
          border-color-hover="primary"
          text-color="primary"
          text-color-hover="secondary"
          background-color="red"
          background-color-hover="primary"
          @click="showShared"
        />
      </div>
      <div class="ml-4">
        <action-button
          text="Guardar"
          icon="fa-bookmark"
          border-color="primary"
          border-color-hover="primary"
          text-color="primary"
          text-color-hover="secondary"
          background-color="red"
          background-color-hover="primary"
          @click="showSave"
        />
      </div>
    </v-toolbar>
    <v-row v-if="list" class="mb-10">
      <v-col v-for="product in list.products" :key="product.id" cols="12" md="4">
        <ProductCard :product="product" @click="() => {} " />
      </v-col>
    </v-row>
    <v-dialog
      v-model="shared"
      max-width="400"
      class="border-radius-30"
    >
      <div class="text-white bg-secondary border-radius-30 py-8 px-8">
        <div class="hover-pointer text-right">
          <v-icon color="white" size="50" @click="closeShared">
            far fa-times-circle
          </v-icon>
        </div>
        <div class="py-16 px-8">
          <h1 class="text-h5 font-weight-bold text-center">
            ¡Comparte Tu Lista de Deseos!
          </h1>
          <div class="mt-4">
            <v-divider class="border-color-primary mb-10" />
            <div class="ma-4 text-center">
              <action-button
                text="Whatsapp"
                icon="fab fa-whatsapp"
                border-color="primary"
                border-color-hover="primary"
                text-color="primary"
                text-color-hover="secondary"
                background-color="secondary"
                background-color-hover="primary"
                @click="showSave"
              />
            </div>
            <div class="ma-4 text-center">
              <action-button
                text="Messenger"
                icon="fab fa-facebook-messenger"
                border-color="primary"
                border-color-hover="primary"
                text-color="primary"
                text-color-hover="secondary"
                background-color="secondary"
                background-color-hover="primary"
                @click="showSave"
              />
            </div>
            <div class="ma-4 text-center">
              <action-button
                text="Email"
                icon="fa-envelope"
                border-color="primary"
                border-color-hover="primary"
                text-color="primary"
                text-color-hover="secondary"
                background-color="secondary"
                background-color-hover="primary"
                @click="sendEmail"
              />
            </div>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  layout: 'redLayout',
  data () {
    return {
      list: null,
      shared: false,
      save: false
    }
  },
  async mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    try {
      const lists = await this.$strapi.find('wish-lists', {
        id: this.$route.params.id
      })
      this.list = lists[0]
    } catch (error) {
      this.error = error
    } finally {
      this.$nuxt.$loading.finish()
    }
  },
  methods: {
    showShared () {
      this.shared = true
    },
    closeShared () {
      this.shared = false
    },
    showSave () {
      this.save = true
    },
    sendEmail () {
      // Authenticate with API Key
      /** const auth = { apiKey: 'EWpqenSx+bTJgpuk+XGzh+XRtsGic1kw6aXOyLtgMsXZ5Mhrfff/HeDegx7tykHojBkacywKviD8UPI0dEUfsAvSVBZtbUaUAa1ADOWmfChWpOICgLHPssEXbWwKei3qKPBjaOOM9rDwN0ed/UYL7Q==' }
      const api = createsend(auth)

      // Create a details object
      const details = {}

      // Add the unique identifier for the smart email
      details.smartEmailID = '2a1cf918-c15a-4926-a1ad-d756d32d7e9c'

      // Add the 'To' email address
      details.to = 'Intaface Services <julian.arenas@ddblatinapr.com>'

      // Add mail merge variables
      details.data = {
        variableName: 'variableNameTestValue',
        1: '1TestValue'
      }

      // Send the smart email(and provide a callback function that takes an error and a response parameter)
      api.transactional.sendSmartEmail(details, function (err, res) {
        if (err) {
          console.log(err)
        } else {
          console.log(res)
        }
      }) **/
      this.$strapi.create('mail', { mail: 'julian.arenas@ddblatinapr.com' })
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')
      myHeaders.append('Access-Control-Allow-Origin', 'origin-list')
      myHeaders.append('Authorization', 'Basic RVdwcWVuU3grYlRKZ3B1aytYR3poK1hSdHNHaWMxa3c2YVhPeUx0Z01zWFo1TWhyZmZmL0hlRGVneDd0eWtIb2pCa2FjeXdLdmlEOFVQSTBkRVVmc0F2U1ZCWnRiVWFVQWExQURPV21mQ2hXcE9JQ2dMSFBzc0VYYld3S2VpM3FLUEJqYU9PTTlyRHdOMGVkL1VZTDdRPT06Lg==')

      const raw = JSON.stringify({
        To: [
          'Freddy Llano <freddy.llano@ddblatinapr.com>',
          'Julián Arenas <julian.arenas@ddblatinapr.com>',
          'Santiago Roman <santiago.roman@ddblatinapr.com>',
          'Sergio Pinto <sergio.ortiz@ddblatinapr.com>'
        ],
        Data: {
          1: 'Lista de deseos',
          variableName: 'Listica'
        },
        ConsentToTrack: 'yes'
      })
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: 'no-cors'
      }

      fetch('https://api.createsend.com/api/v3.2/transactional/smartemail/2a1cf918-c15a-4926-a1ad-d756d32d7e9c/send', requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>

</style>
