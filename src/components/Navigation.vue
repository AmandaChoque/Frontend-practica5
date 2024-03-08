<template>
  <nav class="nav">
    <img
      class="img"
      src="https://wegotthiscovered.com/wp-content/uploads/2023/02/deathnote3.jpg"
      alt="N"
    />
    <h1 class="title">Users App</h1>

    <div class="routes">
      <RouterLink
        class="route"
        v-for="userRoute in userRoutes"
        :to="userRoute.to"
      >
        {{ userRoute.text }}
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";

const userRoutes = [
  {
    to: "/",
    text: "Lista",
  },
  {
    to: "/form",
    text: "Formulario",
  },
  {
    to: "/api",
    text: "Api",
  },
];
</script>

<style scoped>
.title {
  color: rebeccapurple;
}
.nav {
  display: flex;
  justify-content: space-between; /*alinear horizontal*/
  align-items: center; /*alinear verticalmente*/
  background-color: rgb(240, 239, 237);
}
.routes {
  display: flex;
  gap: 1rem;
  padding: 1%;
  margin-right: 10px;
}
.route {
  color: rgb(40, 80, 114);
  text-decoration: none;
  cursor: pointer;
}
.img {
  height: 90px;
  width: 90px;
  border-radius: 10%;
  border: 1.6px solid rgb(115, 81, 194);
  margin: 0.5rem;
}
</style>
