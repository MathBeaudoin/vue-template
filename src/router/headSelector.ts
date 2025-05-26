import type { RouteRecordNameGeneric } from "vue-router";
import type { RouteHead, RouteNameValue } from "@/router/types";
import { RouteNames } from "@/router/constants";
import { MAPPED_ROUTES } from "@/router/routes";
import { $t } from "@/services/i18n/i18n";

export class HeadSelector {
    private isValidRouteName(name: any): boolean {
        return name !== undefined && Object.values(RouteNames).includes(name);
    }

    public select(name: RouteRecordNameGeneric): RouteHead {
        if (this.isValidRouteName(name)) {
            return MAPPED_ROUTES[name as RouteNameValue].head;
        } else {
            return MAPPED_ROUTES[RouteNames.HOME].head;
        }
    }

    public translate(head: RouteHead): RouteHead {
        return {
            title: $t(head.title),
            meta: [
                {
                    name: "description",
                    content: $t(head.meta[0].content),
                },
            ],
        };
    }
}
