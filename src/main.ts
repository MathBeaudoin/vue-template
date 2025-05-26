import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/router";
import { i18n } from "@/services/i18n/i18n";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import "@/assets/styles.css";
import { createHead } from "@unhead/vue/client";

const app = createApp(App);
app.use(createHead());
app.use(i18n);
app.use(createPinia().use(piniaPluginPersistedState));
app.use(router);

app.mount("#app");
