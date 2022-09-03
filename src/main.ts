import { createApp } from "vue";
import { createPinia } from "pinia";

import mainApp from "./app.vue";
import router from "./router";

import "@scss/main.scss";
import "@scss/var.scss";
import "@scss/colors.scss";

const app = createApp(mainApp);

app.use(createPinia());
app.use(router);

app.mount("#app");
