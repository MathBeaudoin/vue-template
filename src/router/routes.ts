import type { GroupedRoutes, MappedRoutes } from "@router/types";
import { RouteNames, RoutePaths, RouteGroupes } from "@router/constants";

/**
 * The following types exist to facilitate the lookup of route info from its
 * name only. They SHOULD NOT be used in a use-case where you need to group 
 * routes.
 */
export const MAPPED_ROUTES: MappedRoutes = {
    [RouteNames.HOME]: {
        name: RouteNames.HOME,
        path: RoutePaths.HOME,
        requiresAuth: false,
        hideOnAuth: false,
        addToSiteMap: true,
        head: {
            title: "Vue Template - Home Page Description",
            meta: [
                {
                    name: "description",
                    content: "Add a short description here for the home page.",
                },
            ],
        },
    },
    [RouteNames.NOT_FOUND]: {
        name: RouteNames.NOT_FOUND,
        path: RoutePaths.NOT_FOUND,
        requiresAuth: false,
        hideOnAuth: false,
        addToSiteMap: false,
        head: {
            title: "Vue Template - Not Found Description",
            meta: [
                {
                    name: "description",
                    content: "Add a short description here for the not found page.",
                },
            ],
        },
    },
}

/**
 * The following types exist to facilitate the display of grouped routes. They
 * SHOULD NOT be used in a use-case where you need to lookup a route from a 
 * name only.
 */
export const GROUPED_ROUTES: GroupedRoutes = {
    [RouteGroupes.GENERAL]: {
        [RouteNames.HOME]: MAPPED_ROUTES[RouteNames.HOME]
    },
    [RouteGroupes.ORPHAN]: {
        [RouteNames.NOT_FOUND]: MAPPED_ROUTES[RouteNames.NOT_FOUND]
    },
};
