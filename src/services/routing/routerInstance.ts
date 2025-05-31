import { createRouter, createWebHistory, type RouteLocationRaw, type Router } from "vue-router";
import { MAPPED_ROUTES } from "@/services/routing/routes";
import { RouteNames } from "@/services/routing/constants";
import type { RouteInfo, RouteNameValue } from "@/services/routing/types";
import type { SupportedLocale } from "@/services/i18n/types";
import { useUserSessionStore } from "@/stores/user/userSessionStore";

export class RouterInstance {
    private router: Router;

    constructor() {
        this.router = createRouter({
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

        this.router.beforeEach(async (to, _ /*from*/, next) => {
            const routeInfo = MAPPED_ROUTES[to.name as RouteNameValue];

            // Redirects to localized home if authentication requirements are not met
            if (
                !this.routeRespectAuthRequirements(
                    this.getUserSessionStore().isAuthenticated(),
                    routeInfo.requiresAuth,
                    routeInfo.hideOnAuth,
                )
            ) {
                return next(this.generateInvalidAuthRequirementsPath());
            }

            // Redirects to localized path if user settings and path are incoherent
            if (!this.routeRespectsLocale(routeInfo, to.path)) {
                const route = this.generateInvalidLocalizationRoute(routeInfo);
                return next(route);
            }

            return next();
        });
    }

    private getUserSessionStore() {
        return useUserSessionStore();
    }

    public getRouter(): Router {
        return this.router;
    }

    public generateInvalidAuthRequirementsPath(): RouteLocationRaw | Error {
        const locale: SupportedLocale = this.getUserSessionStore().locale;
        const path = MAPPED_ROUTES[RouteNames.HOME].path[locale];
        if (path === undefined) {
            // TODO: Invalid locale or corrupted routes
            return new Error();
        }

        return {
            path: path,
            replace: true,
        };
    }

    public generateInvalidLocalizationRoute(routeInfo: RouteInfo): RouteLocationRaw | Error {
        const locale: SupportedLocale = this.getUserSessionStore().locale;
        const path = routeInfo.path[locale];
        if (path === undefined) {
            // TODO: Invalid locale or corrupted routeInfo
            return new Error();
        }

        return {
            path: path,
            replace: true,
        };
    }

    public routeRespectsLocale(routeInfo: RouteInfo, path: string): boolean | Error {
        const locale: SupportedLocale = this.getUserSessionStore().locale;
        const expectedPath = routeInfo.path[locale];
        if (expectedPath === undefined) {
            // TODO: Invalid locale or corrupted routeInfo
            return new Error();
        }

        if (path !== expectedPath) {
            return false;
        }

        return true;
    }

    public routeRespectAuthRequirements(
        userIsAuthenticated: boolean,
        routeRequiresAuthentication: boolean,
        routeHiddenOnAuthentication: boolean,
    ): boolean | Error {
        if (routeRequiresAuthentication && routeHiddenOnAuthentication) {
            // TOOD: Case should not exist
            return new Error();
        }

        if (routeRequiresAuthentication && !userIsAuthenticated) {
            return false;
        }

        if (routeHiddenOnAuthentication && userIsAuthenticated) {
            return false;
        }

        return true;
    }
}
