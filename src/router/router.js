import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/examples/Home.vue";
import List from "../components/examples/List.vue";
import Form from "../components/examples/Form.vue";
import Counter from "../components/examples/Counter.vue";
import UserForm from "../components/UserForm.vue";
import UserList from "../components/UserList.vue";
import Api from "../components/Api.vue";

const routes = [
  {
    path: "/",
    component: UserList,
  },
  {
    path: "/form",
    component: UserForm,
  },
  {
    path: "/form/:id", //:viene cualquier cosa
    component: UserForm,
  },
  {
    path: "/api", //:viene cualquier cosa
    component: Api,
  },
  // {
  //   path: "/",
  //   component: Home,
  // },
  // {
  //   path: "/form",
  //   component: Form,
  // },
  // {
  //   path: "/list",
  //   component: List,
  // },
  // {
  //   path: "/counter",
  //   component: Counter,
  // },
];

const route = createRouter({
  history: createWebHistory(),
  routes,
});

export default route;
