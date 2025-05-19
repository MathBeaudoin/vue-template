import { RouteNames, RoutePaths } from "@router/constants";

export type RouteNameValue = (typeof RouteNames)[keyof typeof RouteNames];

export type RoutePathValue = (typeof RoutePaths)[keyof typeof RoutePaths]

export type RouteHead = {
    title: string;
    meta: [
        {
            name: string;
            content: string;
        }
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

export type AllRoutes = {
    [K in RouteNameValue]: RouteInfo;
};