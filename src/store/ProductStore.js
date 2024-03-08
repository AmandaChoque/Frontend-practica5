import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
  const nombre = ref("lapto");
  const precio = ref(0);
  const contador = ref(0);

  const productos = ref([
    {
      nombre: "pc",
      precio: 100,
      contador: 2,
    },
    {
      nombre: "cocina",
      precio: 95,
      contador: 1,
    },
    {
      nombre: "lapto i",
      precio: 2000,
      contador: 1,
    },
  ]);

  function incrementContProduct() {
    contador.value++;
  }

  return { nombre, precio, contador, incrementContProduct, productos };
});
