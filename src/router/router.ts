import { createRouter, createWebHistory } from "vue-router";
import { ROUTES } from "@router/routes";
import { RouteNames } from "@router/constants.ts";
import { useUserSessionStore } from "@stores/user/userSessionStore";
import type { RouteNameValue } from "./types";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
    routes: [
        {
            path: ROUTES[RouteNames.HOME].path,
            name: ROUTES[RouteNames.HOME].name,
            component: () => import("@pages/Home.vue"),
            beforeEnter: []
        },
        {
            path: ROUTES[RouteNames.NOT_FOUND].path,
            name: ROUTES[RouteNames.NOT_FOUND].name,
            component: () => import("@pages/NotFound.vue"),
            beforeEnter: []
        },
        {
            path: "/:catchAll(.*)",
            redirect: ROUTES[RouteNames.NOT_FOUND].path
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    const isAuth = useUserSessionStore().isAuthenticated();
    const toRoute = ROUTES[to.name as RouteNameValue];

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
