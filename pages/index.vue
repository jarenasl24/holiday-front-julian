<template>
  <div>
    <v-row>
      <v-col cols="8">
        <v-row>
          <v-col cols="3">
            <action-button text="filtros" @click="showFilters"></action-button>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">

      </v-col>
    </v-row>
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
    <v-footer class="bg-secondary px-0">
      <Subcribe />
    </v-footer>
  </div>
</template>
<script>
import ProductCard from '../components/ProductCard'
import Subcribe from '../components/Subcribe'
import ActionButton from '../components/ActionButton'
export default {
  components: { ActionButton, Subcribe, ProductCard },
  methods: {
    showFilters () {
      console.log('aca')
      this.$store.commit('showFilters')
    }
  }
}
</script>
<style>
.qa-input-email input::placeholder {
  background-color: white!important;
  opacity: 1;
}

.qa-input-email .v-label {
  background-color: white;
  opacity: 1;
}

.qa-input-email input,
.qa-input-email input{
  background-color: white!important;
}

.qa-input-email.v-text-field>.v-input__control>.v-input__slot:before {
  border-style: none;
}
</style>
