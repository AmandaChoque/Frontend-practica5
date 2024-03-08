<template>
  <div>
    <h2>Formulario</h2>
  </div>
  <form>
    <div>
      <label>Nombre: </label>
      <input v-model="formProduct.nombre" type="text" />
    </div>
    <div>
      <label>Cantidad: </label>
      <input v-model="formProduct.cantidad" type="text" />
    </div>
    <div>
      <label>Precio: </label>
      <input v-model="formProduct.precio" type="number" />
    </div>
    <button>Agregar</button>
  </form>
  <p>Counter: {{ count }}</p>
  <button @click="incremet">+1</button>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../../store/CounterStore";

const counterStore = useCounterStore();

const { count } = storeToRefs(counterStore);
const { incremet } = counterStore;

const formProduct = {
  nombre: "eeee",
  cantidad: "qqqq",
  precio: 0,
};
</script>

<style lang="scss" scoped></style>
../../store/CounterStore
