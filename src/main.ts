import { createApp } from "vue";
import App from "@/App.vue";
import { RoutingService } from "@/services/routing/routingService";
import { LanguageService } from "@/services/i18n/languageService";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import "@/assets/styles.css";
import { createHead } from "@unhead/vue/client";
import { ThemeService } from "@/services/themes/themeService";
import { I18nInstance } from "@/services/i18n/i18nInstance";
import { RouterInstance } from "@/services/routing/routerInstance";
import { ThemeInstance } from "@/services/themes/themeInstance";

const languageService = new LanguageService(new I18nInstance());
const routingService = new RoutingService(new RouterInstance());
const themeService = new ThemeService(new ThemeInstance());

const app = createApp(App);
app.use(createHead());
app.use(createPinia().use(piniaPluginPersistedState));
app.use(languageService.getI18nInstance().getRoot());
app.use(routingService.getRouterInstance().getRouter());

app.provide("languageService", languageService);
app.provide("routingService", routingService);
app.provide("themeService", themeService);

app.mount("#app");
