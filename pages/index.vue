<template>
  <div>
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
    <v-footer class="bg-secondary">
      <v-row>
        <v-col cols="8">
          <div class="hover-pointer">
            <v-text-field label="TU EMAIL AQUI"></v-text-field>
            <span class="text-uppercase">Subscríbete</span>
          </div>
        </v-col>
        <v-col cols="4" class="text-right">
          <div class="text-white font-weight-bold">
            Síguenos
            <v-icon>mdi-facebook</v-icon>
            <v-icon>mdi-youtube</v-icon>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>
<script>
import ProductCard from '../components/ProductCard'
export default {
  components: { ProductCard }
}
</script>
