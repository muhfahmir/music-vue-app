import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/base.css";
import "./assets/main.css";

// validatio with veevalidate
import VeeValidatePlugin from "./includes/validation";

const app = createApp(App);

// register plugin
app.use(createPinia());
app.use(router);
app.use(VeeValidatePlugin);

app.mount("#app");
