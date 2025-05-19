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
            title: "Site name - Description",
            meta: [
                {
                    name: "description",
                    content: "Add short description here."
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
            title: "Site name - Description",
            meta: [
                {
                    name: "description",
                    content: "Add short description here."
                }
            ]
        }
    },
};

export class HeadSelector {
    private isValidRouteName(name: any): boolean {
        return name !== undefined && Object.values(RouteNames).includes(name);
    }

    public select(name: RouteRecordNameGeneric): RouteHead {
        if (this.isValidRouteName(name)) {
            return ROUTES[name as RouteNameValue].head;
        } else {
            return ROUTES[RouteNames.HOME].head;
        }
    }
}
