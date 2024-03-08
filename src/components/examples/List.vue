<template>
  <div>
    <h2>Listar Productos</h2>
    <h2>prueba 2</h2>
  </div>

  <div v-for="producto in productos">
    <p>Nombre Producto: {{ producto.nombre }}</p>
    <p>Precio Producto: {{ producto.precio }}</p>
    <p>Contador Producto: {{ producto.contador }}</p>
    <hr />
  </div>
  <!-- <pre>{{ productos }}</pre> -->
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProductStore } from "../../store/ProductStore";

const productStore = useProductStore();
const { incrementContProduct } = productStore;

const { nombre, precio, contador, productos } = storeToRefs(productStore);

// const props = defineProps(["productos"]);
// console.log(props.productos);
</script>

<style scoped></style>
../../store/ProductStore
