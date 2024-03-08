import { createApp } from "vue";
import { createPinia } from "pinia";

import "./style.css";
import App from "./App.vue";
import route from "./router/router";

const pinia = createPinia();

createApp(App).use(pinia).use(route).mount("#app");
