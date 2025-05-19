import type { AllRoutes, RouteHead, RouteNameValue } from "@router/types";
import { RouteNames, RoutePaths } from "@router/constants";
import type { RouteRecordNameGeneric } from "vue-router";

export const ROUTES: AllRoutes = {
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
                    content: "Add a short description here for the home page."
                }
            ]
        }
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
                    content: "Add a short description here for the not found page."
                }
            ]
        }
    },
};
