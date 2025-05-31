import { RouterInstance } from "@/services/routing/routerInstance";
import type { RouteInfo } from "@/services/routing/types";

export class RoutingService {
    private static router = new RouterInstance();

    /**
     * Should ONLY be used to create the Vue application
     */
    public static getRouterInstance(): RouterInstance {
        return this.router;
    }

    public static routeIsAccessible(userIsAuthenticated: boolean, routeInfo: RouteInfo): boolean | Error {
        return this.router.routeRespectAuthRequirements(
            userIsAuthenticated,
            routeInfo.requiresAuth,
            routeInfo.hideOnAuth,
        );
    }
}
