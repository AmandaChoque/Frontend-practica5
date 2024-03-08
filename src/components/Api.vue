<template>
  <!-- <h1 style="color: red">Mi primer titulo editado en CSS</h1>
  <link rel="stylesheet" type="text/css" href="estilo.css" />
  <p>
    La Universidad Corporativa UNID le da la bienvenida al centro de
    capacitación tecnológico más didáctico en el rubro de la seguridad
    electrónica, redes y ...
  </p> -->

  <div class="cards">
    <div>
      <h1>Api</h1>
    </div>
    <!-- <div class="card">
      <div class="card-img">
        <img
          class="img-user"
          src="https://laverdadnoticias.com/__export/1600724494569/sites/laverdad/img/2020/09/21/l_death_note_personaje.jpg_423682103.jpg"
          alt="L"
        />
      </div>
      <div class="card-body">
        <p>Amanda</p>
        <p>amanda@gmail.com</p>
      </div>
    </div> -->

    <!-- IMPRIMO LOS USUARIOS -->

    <div class="card" v-for="res in users.results">
      <div class="card-body">
        <div class="card-img">
          <img
            class="img-user"
            :src="res.picture.large"
            :alt="res.name.first"
          />
        </div>
      </div>
      <div class="informacion">
        <p class="informacion-texto">
          <span style="font-weight: bold">Nombre: </span>{{ res.name.first }}
          {{ res.name.last }}
        </p>
        <p class="informacion-texto">
          <span style="font-weight: bold">Correo: </span>{{ res.email }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const users = ref([]);
onMounted(() => {
  const getUsers = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=20");
      const result = await response.json();
      console.log(result);
      console.log("Apiiiiiiiiiiii");
      users.value = result;
      console.log(users.value);
      // const nombre = result.results[0].name.first;
      console.log("Apiiiiiiiiiiiii");
      console.log(nombre);
    } catch (error) {
      console.log(error);
    }
  };

  getUsers();
});
</script>

<style scoped>
.cards {
  background-color: rgb(66, 202, 157);
  justify-content: center;
  justify-content: center; /* Centra horizontalmente las tarjetas */
  align-items: center; /* Centra verticalmente las tarjetas */
}
.card {
  background: rgb(255, 223, 143);
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2.5px solid rgb(110, 97, 42); /*tamaño, stilo, color */

  border-radius: 1rem;
  flex-wrap: wrap;
  margin: 5px;
  padding: 5px;
  margin-right: 10px;
  float: left;
}

.card-img {
  overflow: hidden;
}

.img-user {
  width: 100px;
  height: 100px;
  border-radius: 50%; /* Hace que el contenedor sea circular */
  border: 1px solid rgb(75, 75, 167);
  display: flex;
  padding: 3px;
}

.card-body {
  font-size: 1rem;
}
.informacion {
  border: 1.8px solid rgb(175, 72, 144);
  font-size: 12px;
  padding: 5px;
  margin: 10px;
  width: 85%;
  border-radius: 0.5rem;
}
.informacion-texto {
  margin: 0.5px;
}
h1 {
  text-align: center;
}
</style>
