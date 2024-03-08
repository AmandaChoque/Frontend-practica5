import { defineStore } from "pinia";
import { ref } from "vue";

// defineStore
// ref
export const useUserStore = defineStore("user", () => {
  const users = ref([
    {
      id: "1",
      nombre: "maria",
      edad: "19",
      imagen:
        "https://w7.pngwing.com/pngs/265/856/png-transparent-luffy-smiling.png",
    },
    {
      id: "2",
      nombre: "jose",
      edad: "20",
      imagen:
        "https://laverdadnoticias.com/__export/1600724494569/sites/laverdad/img/2020/09/21/l_death_note_personaje.jpg_423682103.jpg",
    },
    {
      id: "3",
      nombre: "ana",
      edad: "21",
      imagen:
        "https://w7.pngwing.com/pngs/265/856/png-transparent-luffy-smiling.png",
    },
  ]);

  const user = ref({
    nombre: "luffy",
    edad: "5",
    imagen:
      "https://w7.pngwing.com/pngs/265/856/png-transparent-luffy-smiling.png",
  });

  function agregarUser(user) {
    console.log("usuarios nuevo");
    user.id = generateId();
    users.value = [user, ...users.value];
  }
  function generateId() {
    const timestamp = Date.now().toString(16);
    const aleatorio = Math.random().toString(16).slice(2, 6);
    return timestamp + "-" + aleatorio;
  }
  function eliminarUser(id) {
    users.value = users.value.filter((user) => id !== user.id);
    console.log(users.value);
  }
  function editarUser(userNuevo) {
    users.value = users.value.map((user) =>
      userNuevo.id === user.id ? (user = userNuevo) : user
    );
  }
  return { users, user, agregarUser, eliminarUser, editarUser };
});
