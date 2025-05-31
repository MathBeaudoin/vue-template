import { createRouter, createWebHistory } from "vue-router";
import { MAPPED_ROUTES } from "@/router/routes";
import { RouteNames } from "@/router/constants.ts";
import { useUserSessionStore } from "@/stores/user/userSessionStore";
import type { RouteNameValue } from "@/router/types";
import { routeShouldBeAccessible } from "@/router/util";
import type { SupportedLocale } from "@/services/i18n/types";

/**
 * Router of the Vue 3 application. Handles authorization and redirections.
 */
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(/*to, from, savedPosition*/) {
        return { top: 0 };
    },

    // Alias path should exist for all supported languages, and all default paths
    // should be for the same language.
    routes: [
        {
            path: MAPPED_ROUTES[RouteNames.HOME].path.en,
            alias: [MAPPED_ROUTES[RouteNames.HOME].path.fr],
            name: MAPPED_ROUTES[RouteNames.HOME].name,
            component: () => import("@/pages/Home.vue"),
            beforeEnter: [],
        },
        {
            path: MAPPED_ROUTES[RouteNames.ABOUT].path.en,
            alias: [MAPPED_ROUTES[RouteNames.ABOUT].path.fr],
            name: MAPPED_ROUTES[RouteNames.ABOUT].name,
            component: () => import("@/pages/About.vue"),
            beforeEnter: [],
        },
        {
            path: MAPPED_ROUTES[RouteNames.NOT_FOUND].path.en,
            alias: [MAPPED_ROUTES[RouteNames.NOT_FOUND].path.fr],
            name: MAPPED_ROUTES[RouteNames.NOT_FOUND].name,
            component: () => import("@/pages/NotFound.vue"),
            beforeEnter: [],
        },
        {
            path: "/:catchAll(.*)",
            redirect: { name: MAPPED_ROUTES[RouteNames.HOME].name },
        },
    ],
});

router.beforeEach(async (to, _ /*from*/, next) => {
    const userSessionStore = useUserSessionStore();
    const routeInfo = MAPPED_ROUTES[to.name as RouteNameValue];
    const locale: SupportedLocale = userSessionStore.locale;

    // Redirects to localized home if authentication requirements are not met
    const routeRequiresAuthentication = routeInfo.requiresAuth;
    const routeHiddenOnAuthentication = routeInfo.hideOnAuth;
    if (
        !routeShouldBeAccessible(
            userSessionStore.isAuthenticated(),
            routeRequiresAuthentication,
            routeHiddenOnAuthentication,
        )
    ) {
        return next({ path: MAPPED_ROUTES[RouteNames.HOME].path[locale], replace: true });
    }

    // Redirects to localized path if user settings and path are incoherent
    const expectedPath = routeInfo.path[locale];
    if (to.path !== expectedPath) {
        return next({ path: expectedPath, replace: true });
    }

    return next();
});

export default router;
