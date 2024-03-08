<template>
  <div>
    <h1>Lista de Usuarios</h1>
    <template v-if="users.length > 0">
      <div v-for="user in users">
        <p>Nombre: {{ user.nombre }}</p>
        <p>Edad: {{ user.edad }}</p>
        <img :src="user.imagen" width="80" height="80" :alt="user.nombre" />

        <button @click="handleEdit(user.id)">Editar</button>
        <button @click="hadleDelete(user.id)">Eliminar</button>
        <hr />
      </div>
    </template>

    <p v-else>No exite usuariosc comiense agregandolos</p>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../store/UserStore";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();
const { users } = storeToRefs(userStore);
const { eliminarUser } = userStore;

function hadleDelete(id) {
  eliminarUser(id);
}
function handleEdit(id) {
  router.push(`/form/${id}`);
}
</script>

<style lang="scss" scoped></style>
