<template>
  <v-row>
    <v-col cols="12" md="5">
      <form class="js-cm-form" id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="2BE4EF332AA2E32596E38B640E9056194739F4760152CFCA8CADDEBDA88E6B765061BB27CDCDE2C65FC4FBEE56CCB5CC3283EF340E2E1E986EBBB917BFCBB016">
        <div class="ma-0 d-flex border-color-primary border-radius-30 border-solid-2 bg-white">
          <div class="w-60p">
            <v-text-field
              id="fieldEmail"
              label="Ingresa tu email"
              hide-details="auto"
              autocomplete="Email"
              aria-label="Email"
              color="black"
              class="js-cm-email-input qa-input-email full-width fill-height px-4 mb-0 pb-0 pt-1 font-size-12"
              maxlength="200"
              name="cm-jythmd-jythmd"
              required=""
              type="email"
              dense
            ></v-text-field>
            <!--<input
              autocomplete="Email"
              aria-label="Email"
              class="js-cm-email-input qa-input-email full-width fill-height"
              id="fieldEmail"
              maxlength="200"
              name="cm-jythmd-jythmd"
              required=""
              type="email"
            >-->
          </div>
          <div class="pa-0 border-top-right-radius-30 border-bottom-right-radius-30 bg-primary w-40p">
            <button type="submit" class="text-secondary pr-8 pl-7 py-3 text-uppercase font-weight-bold width-101p font-size-12">Subscríbete</button>
          </div>
        </div>
      </form>
      <script type="text/javascript" src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></script>
    </v-col>
    <v-col cols="12" md="3" class="text-right hidden-sm-and-down">
    </v-col>
    <v-col cols="12" md="4" class="siguenos align-self-center">
      <div class="text-white font-weight-bold">
        Síguenos
        <a href="https://www.facebook.com/Walmartpr/" target="_blank" class="ml-2"><v-icon x-large>$vuetify.icons.value.facebook</v-icon></a>
        <a href="https://www.youtube.com/user/WalmartPuertoRico" target="_blank" class="ml-2"><v-icon x-large>$vuetify.icons.value.youtube</v-icon></a>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Subcribe'
}
</script>

<style scoped>
.siguenos{
  text-align: right;
}

@media (max-width: 960px) {
  .siguenos{
    text-align: left;
  }
}
</style>
