<template>
  <v-container>
    <btn>Close</btn>
    <h1 class="text-center">Todos los filtros</h1>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Precio</v-expansion-panel-header>
        <v-expansion-panel-content>
          Filtro precio
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Categoría del producto</v-expansion-panel-header>
        <v-expansion-panel-content>
          Filtro categoria
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Edad</v-expansion-panel-header>
        <v-expansion-panel-content>
          Filtro edad
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-btn>Aplicar filtros</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Filters'
}
</script>

<style scoped>
.v-expansion-panel::before {
  box-shadow: none;
}
</style>
