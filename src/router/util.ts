export function routeShouldBeAccessible(
    userIsAuthenticated: boolean,
    routeRequiresAuthentication: boolean,
    routeHiddenOnAuthentication: boolean,
): boolean | Error {
    if (routeRequiresAuthentication && routeHiddenOnAuthentication) {
        // TOOD: Case should not exist
        return new Error();
    }

    if (routeRequiresAuthentication && !userIsAuthenticated) {
        return false;
    }

    if (routeHiddenOnAuthentication && userIsAuthenticated) {
        return false;
    }

    return true;
}
