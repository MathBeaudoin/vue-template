import { expect, test, describe } from "vitest";
import { routeShouldBeAccessible } from "@/router/util";

describe("router/util", () => {
    test("whenRouteRequiresAuth_andIsHiddenOnAuth_thenErrorIsReturned", () => {
        const userIsAuthenticated = true;
        const routeRequiresAuthentication = true;
        const routeHiddenOnAuthentication = true;

        expect(
            routeShouldBeAccessible(userIsAuthenticated, routeRequiresAuthentication, routeHiddenOnAuthentication),
        ).toBeInstanceOf(Error);
    });

    test("whenRouteRequiresAuth_andUserIsAuth_thenShouldBeAccessible", () => {
        const userIsAuthenticated = true;
        const routeRequiresAuthentication = true;
        const routeHiddenOnAuthentication = false;

        expect(
            routeShouldBeAccessible(userIsAuthenticated, routeRequiresAuthentication, routeHiddenOnAuthentication),
        ).toBeTruthy();
    });

    test("whenRouteDoesNotRequiresAuth_andUserIsAuth_thenShouldBeAccessible", () => {
        const userIsAuthenticated = true;
        const routeRequiresAuthentication = false;
        const routeHiddenOnAuthentication = false;

        expect(
            routeShouldBeAccessible(userIsAuthenticated, routeRequiresAuthentication, routeHiddenOnAuthentication),
        ).toBeTruthy();
    });

    test("whenRouteDoesNotRequiresAuth_andUserIsNotAuth_thenShouldBeAccessible", () => {
        const userIsAuthenticated = false;
        const routeRequiresAuthentication = false;
        const routeHiddenOnAuthentication = false;

        expect(
            routeShouldBeAccessible(userIsAuthenticated, routeRequiresAuthentication, routeHiddenOnAuthentication),
        ).toBeTruthy();
    });

    test("whenRouteRequiresAuth_andUserIsNotAuth_thenShouldNotBeAccessible", () => {
        const userIsAuthenticated = false;
        const routeRequiresAuthentication = true;
        const routeHiddenOnAuthentication = false;

        expect(
            routeShouldBeAccessible(userIsAuthenticated, routeRequiresAuthentication, routeHiddenOnAuthentication),
        ).toBeFalsy();
    });

    test("whenRouteIsHiddenOnAuth_andUserIsAuth_thenShouldNotBeAccessible", () => {
        const userIsAuthenticated = true;
        const routeRequiresAuthentication = false;
        const routeHiddenOnAuthentication = true;

        expect(
            routeShouldBeAccessible(userIsAuthenticated, routeRequiresAuthentication, routeHiddenOnAuthentication),
        ).toBeFalsy();
    });

    test("whenRouteIsHiddenOnAuth_andUserIsNotAuth_thenShouldBeAccessible", () => {
        const userIsAuthenticated = false;
        const routeRequiresAuthentication = false;
        const routeHiddenOnAuthentication = true;

        expect(
            routeShouldBeAccessible(userIsAuthenticated, routeRequiresAuthentication, routeHiddenOnAuthentication),
        ).toBeTruthy();
    });
});
