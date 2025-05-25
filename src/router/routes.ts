import type { GroupedRoutes, MappedRoutes, RouteInfo } from "@router/types";
import { RouteNames, RoutePaths, RouteGroupes } from "@router/constants";
import { $t } from "@i18n/i18n";

/**
 * The following types exist to facilitate the lookup of route info from its
 * name only. They SHOULD NOT be used in a use-case where you need to group
 * routes.
 */
export const MAPPED_ROUTES: MappedRoutes = {
    [RouteNames.HOME]: {
        name: RouteNames.HOME,
        path: RoutePaths.HOME,
        displayedName: $t("navigation.home.displayed_name"),
        requiresAuth: false,
        hideOnAuth: false,
        addToSiteMap: true,
        head: {
            title: $t("navigation.home.head_title"),
            meta: [
                {
                    name: "description",
                    content: $t("navigation.home.meta"),
                },
            ],
        },
    },
    [RouteNames.ABOUT]: {
        name: RouteNames.ABOUT,
        path: RoutePaths.ABOUT,
        displayedName: $t("navigation.about.displayed_name"),
        requiresAuth: false,
        hideOnAuth: false,
        addToSiteMap: true,
        head: {
            title: $t("navigation.about.head_title"),
            meta: [
                {
                    name: "description",
                    content: $t("navigation.about.meta"),
                },
            ],
        },
    },
    [RouteNames.NOT_FOUND]: {
        name: RouteNames.NOT_FOUND,
        path: RoutePaths.NOT_FOUND,
        displayedName: $t("navigation.not_found.displayed_name"),
        requiresAuth: false,
        hideOnAuth: false,
        addToSiteMap: false,
        head: {
            title: $t("navigation.not_found.head_title"),
            meta: [
                {
                    name: "description",
                    content: $t("navigation.not_found.meta"),
                },
            ],
        },
    },
} as const;

/**
 * The following types exist to facilitate the display of grouped routes. They
 * SHOULD NOT be used in a use-case where you need to lookup a route from a
 * name only.
 */
export const GROUPED_ROUTES: GroupedRoutes = {
    [RouteGroupes.GENERAL]: {
        [RouteNames.HOME]: MAPPED_ROUTES[RouteNames.HOME],
        [RouteNames.ABOUT]: MAPPED_ROUTES[RouteNames.ABOUT],
    },
    [RouteGroupes.ORPHAN]: {
        [RouteNames.NOT_FOUND]: MAPPED_ROUTES[RouteNames.NOT_FOUND],
    },
} as const;

/**
 * Core routes to be displayed in the AppBar / its associated drawer on mobile.
 */
export const CoreRoutes: RouteInfo[] = [MAPPED_ROUTES[RouteNames.HOME], MAPPED_ROUTES[RouteNames.ABOUT]] as const;
