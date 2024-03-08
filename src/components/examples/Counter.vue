<template>
  <div>
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <button @click="incremet">+1</button>
    <button @click="incremetX(3)">+3</button>
    <button @click="incremetX(5)">+5</button>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../../store/CounterStore";

const counterStore = useCounterStore();

const { count } = storeToRefs(counterStore);
const { incremet, incremetX } = counterStore;
</script>

<style lang="scss" scoped></style>
../../store/CounterStore
