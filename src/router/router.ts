import { createRouter, createWebHistory } from "vue-router";
import { MAPPED_ROUTES } from "@router/routes";
import { RouteNames } from "@router/constants.ts";
import { useUserSessionStore } from "@stores/user/userSessionStore";
import type { RouteNameValue } from "./types";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(/*to, from, savedPosition*/) {
        return { top: 0 };
    },
    routes: [
        {
            path: MAPPED_ROUTES[RouteNames.HOME].path,
            name: MAPPED_ROUTES[RouteNames.HOME].name,
            component: () => import("@pages/Home.vue"),
            beforeEnter: [],
        },
        {
            path: MAPPED_ROUTES[RouteNames.ABOUT].path,
            name: MAPPED_ROUTES[RouteNames.ABOUT].name,
            component: () => import("@pages/About.vue"),
            beforeEnter: [],
        },
        {
            path: MAPPED_ROUTES[RouteNames.NOT_FOUND].path,
            name: MAPPED_ROUTES[RouteNames.NOT_FOUND].name,
            component: () => import("@pages/NotFound.vue"),
            beforeEnter: [],
        },
        {
            path: "/:catchAll(.*)",
            redirect: MAPPED_ROUTES[RouteNames.NOT_FOUND].path,
        },
    ],
});

router.beforeEach(async (to, _ /*from*/, next) => {
    const isAuth = useUserSessionStore().isAuthenticated();
    const toRoute = MAPPED_ROUTES[to.name as RouteNameValue];

    // User needs to be authenticated
    if (toRoute.requiresAuth && !isAuth) {
        return next({ name: RouteNames.HOME });
    }

    // User needs to not be authenticated
    if (toRoute.hideOnAuth && isAuth) {
        return next({ name: RouteNames.HOME });
    }

    return next();
});

export default router;
