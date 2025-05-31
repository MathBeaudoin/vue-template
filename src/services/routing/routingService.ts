import { RouterInstance } from "@/services/routing/routerInstance";

export class RoutingService {
    private static router = new RouterInstance();

    public static getRouterInstance(): RouterInstance {
        return this.router;
    }
}
