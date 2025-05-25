import { RouteNames, RoutePaths } from "@router/constants";

export type RouteNameValue = (typeof RouteNames)[keyof typeof RouteNames];

export type RoutePathValue = (typeof RoutePaths)[keyof typeof RoutePaths];

export type RouteHead = {
    title: string;
    meta: [
        {
            name: string;
            content: string;
        },
    ];
};

export type RouteInfo = {
    name: RouteNameValue;
    path: RoutePathValue;
    head: RouteHead;
    requiresAuth: boolean;
    hideOnAuth: boolean;
    addToSiteMap: boolean;
};

export type MappedRoutes = {
    [K in RouteNameValue]: RouteInfo;
};

/**
 * One-to-one correspondance with RouteNames
 */
type GeneralRoutes = "home" | "about";

/**
 * One-to-one correspondance with RouteNames
 */
type OrphanRoutes = "not_found";

/**
 * One-to-one correspondance with RouteGroups
 */
type RoutesByGroup = {
    general: GeneralRoutes;
    orphan: OrphanRoutes;
};

export type GroupedRoutes = {
    [G in keyof RoutesByGroup]: {
        [K in RoutesByGroup[G]]: RouteInfo;
    };
};
