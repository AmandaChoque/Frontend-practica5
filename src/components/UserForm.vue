<template>
  <div>
    <h1>Formulario Usuarios</h1>
    <form>
      <div class="formulario">
        <div>
          <label>Nombre: </label>
          <input type="text" v-model="formUser.nombre" />
        </div>
        <div>
          <label>Edad: </label>
          <input type="text" v-model="formUser.edad" />
        </div>
        <div>
          <label>Imagen: </label>
          <input type="text" v-model="formUser.imagen" />
        </div>
      </div>
      <div v-if="idUser">
        <button @click.prevent="handleEdit(formUser)">Editar</button>
        <button @click.prevent="handleCancelar">Cancelar</button>
      </div>
      <div class="button" v-else>
        <button @click.prevent="handleSubmit">Sutmit</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../store/UserStore";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const userStore = useUserStore();
const { users } = storeToRefs(userStore);
const { agregarUser, editarUser } = userStore;
const router = useRouter();
const route = useRoute();

// console.log(router);

console.log(route);
const idUser = route.params.id;

onMounted(() => {
  //si estoy en el editar si existe
  if (idUser) {
    console.log(idUser);
    const actualUser = users.value.find((user) => user.id === idUser);
    console.log(actualUser);
    formUser.value = {
      nombre: actualUser.nombre,
      edad: actualUser.edad,
      imagen: actualUser.imagen,
    };
  }
});

const formUser = ref({
  nombre: "",
  edad: "",
  imagen: "",
});

function handleSubmit() {
  agregarUser(formUser.value);
  reset();
  router.push("/");
}

function reset() {
  formUser.value = { nombre: "", edad: "", imagen: "" };
}

function handleEdit(use) {
  console.log("hanbleEdit");
  console.log("editarUser(use);");
  use["id"] = idUser;

  console.log(use);
  editarUser(use);
  router.push("/");
}
function handleCancelar() {
  router.push("/");
}
</script>

<style scoped>
.formulario {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>
