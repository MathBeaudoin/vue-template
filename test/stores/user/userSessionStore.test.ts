import { expect, test, describe, beforeEach } from "vitest";
import { useUserSessionStore } from "@/stores/user/userSessionStore";
import { createPinia, setActivePinia } from "pinia";

describe("stores/userSessionStore", () => {
    const getStoreInstance = () => {
        return useUserSessionStore();
    };

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test("whenCheckingNewUserState_thenIsNotAuthenticated", () => {
        const store = getStoreInstance();

        expect(store.isAuthenticated()).toBeFalsy();
    });

    test("isDarkTheme should behave properly", () => {
        const store = getStoreInstance();

        store.theme = "light";
        expect(store.isDarkTheme()).toBeFalsy();

        store.theme = "dark";
        expect(store.isDarkTheme()).toBeTruthy();
    });

    test("default theme should be light", () => {
        const store = getStoreInstance();
        expect(store.isDarkTheme()).toBeFalsy();
    });

    test("changing theme should switch to opposing theme", () => {
        const store = getStoreInstance();

        const firstTheme = store.theme;
        store.changeTheme();
        expect(store.theme).not.toBe(firstTheme);

        const secondTheme = store.theme;
        store.changeTheme();
        expect(store.theme).not.toBe(secondTheme);

        expect(firstTheme).not.toBe(secondTheme);
    });
});
