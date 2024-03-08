import { defineStore } from "pinia";
import { ref } from "vue";
export const useCounterStore = defineStore("counter", () => {
  const count = ref(7);
  function incremet() {
    count.value++;
  }
  function incremetX(incrementa) {
    count.value = count.value + incrementa;
  }
  return { count, incremet, incremetX };
});
