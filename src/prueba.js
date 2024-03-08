console.log("prueba");

const obtenerUsuarios = () => {
  fetch("https://randomuser.me/api/?results=20")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

// console.log("antes");
// // obtenerUsuarios();
// console.log("despues");

const getUsers = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/?results=20");
    const data = await res.json();
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUsers();
