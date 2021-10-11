<template>
  <v-row>
    <v-col cols="5">
      <form class="js-cm-form" id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="2BE4EF332AA2E32596E38B640E9056194739F4760152CFCA8CADDEBDA88E6B765061BB27CDCDE2C65FC4FBEE56CCB5CC3283EF340E2E1E986EBBB917BFCBB016">
        <v-row class="ma-0 border-color-primary border-radius-30 border-solid-2 bg-white">
          <v-col cols="8" class="pa-0">
            <v-text-field
              id="fieldEmail"
              label="TU EMAIL AQUÍ"
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
          </v-col>
          <v-col cols="4" class="pa-0 border-top-right-radius-15 border-bottom-right-radius-15 bg-primary">
            <button type="submit" class="text-secondary pr-8 pl-7 py-3 text-uppercase font-weight-bold full-width font-size-12">Subscribete</button>
          </v-col>
        </v-row>
      </form>
      <script type="text/javascript" src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></script>
    </v-col>
    <v-col cols="3" class="text-right">
    </v-col>
    <v-col cols="4" class="text-right align-self-center">
      <div class="text-white font-weight-bold">
        Síguenos
        <v-icon>mdi-facebook</v-icon>
        <v-icon>mdi-youtube</v-icon>
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

</style>
