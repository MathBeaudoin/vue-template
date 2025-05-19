import { createApp } from "vue";
import App from "@/App.vue";
import router from "@router/router";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import { createHead } from '@unhead/vue/client'

const app = createApp(App);
app.use(createHead());
app.use(createPinia().use(piniaPluginPersistedState));
app.use(router);

app.mount("#app");