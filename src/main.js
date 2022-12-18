import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// validatio with veevalidate
import VeeValidatePlugin from "./includes/validation";
// backend using firebase db
import { auth } from "./includes/firebase";
// add icon with vdirective
import Icon from "./directives/icon";
// inter
import i18n from "./includes/i18n";
// create service worker use workbox
import { registerSW } from "virtual:pwa-register";
// register global component
import GlobalComponents from "./includes/_globals";

import "./assets/base.css";
import "./assets/main.css";

registerSW({
  immediate: true,
});

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    // register plugin
    app.use(createPinia());
    app.use(router);
    app.use(VeeValidatePlugin);
    app.use(i18n);
    app.use(GlobalComponents);
    app.directive("icon", Icon);

    app.mount("#app");
  }
});
