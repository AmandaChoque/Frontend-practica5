<template>
  <!-- <RouterLink to="/">Home</RouterLink>
  <br />
  <RouterLink to="/form">Formularios</RouterLink>
  <br />
  <RouterLink to="/list">List</RouterLink>
  <br />
  <RouterLink to="/counter">Counter</RouterLink>
  <router-view></router-view> -->
  <Navigation />
  <RouterView></RouterView>
</template>

<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";
import Navigation from "./components/Navigation.vue";
const productos = ref([{ nombre: "aaaaa", cantidad: "2", precio: 30 }]);
console.log(productos.value);
</script>

<style scoped></style>
