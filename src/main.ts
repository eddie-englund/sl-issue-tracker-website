import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@scss/main.scss";
import "@scss/var.scss";
import "@scss/colors.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
