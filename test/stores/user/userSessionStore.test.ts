import { expect, test, describe, beforeEach, vi } from "vitest";
import { useUserSessionStore } from "@/stores/user/userSessionStore";
import { createPinia, setActivePinia } from "pinia";

describe("stores/userSessionStore", () => {
    const ANY_SUPPORTED_LANGUAGE: any = {
        locale: "any_locale",
    };

    const getStoreInstance = () => {
        return useUserSessionStore();
    };

    beforeEach(() => {
        setActivePinia(createPinia());
        vi.restoreAllMocks();
    });

    test("whenCheckingDefaultUserState_thenIsNotAuthenticated", () => {
        const store = getStoreInstance();

        expect(store.isAuthenticated()).toBeFalsy();
    });

    test("whenCheckingThemeIsDark_thenBasesResponseOnCurrentTheme", () => {
        const store = getStoreInstance();

        store.theme = "light";
        expect(store.isDarkTheme()).toBeFalsy();

        store.theme = "dark";
        expect(store.isDarkTheme()).toBeTruthy();
    });

    test("whenCheckingDefaultTheme_thenIsLight", () => {
        const store = getStoreInstance();
        expect(store.isDarkTheme()).toBeFalsy();
    });

    test("whenChangingTheme_thenShouldSwitchToOpposingTheme", () => {
        const store = getStoreInstance();

        const firstTheme = store.theme;
        store.changeTheme();
        expect(store.theme).not.toBe(firstTheme);

        const secondTheme = store.theme;
        store.changeTheme();
        expect(store.theme).not.toBe(secondTheme);

        expect(firstTheme).not.toBe(secondTheme);
    });

    test("whenChangingLanguage_thenLanguageHandlerSelectsNewLanguage", () => {
        const store = getStoreInstance();

        const languageHandlerSpy = vi.spyOn(store.languageHandler, "select");

        store.changeLanguage(ANY_SUPPORTED_LANGUAGE);

        expect(languageHandlerSpy).toHaveBeenCalledExactlyOnceWith(ANY_SUPPORTED_LANGUAGE);
    });

    test("whenChangingLanguage_thenLocaleIsUpdated", () => {
        const store = getStoreInstance();
        vi.spyOn(store.languageHandler, "isValidLanguage").mockReturnValue(true);

        store.changeLanguage(ANY_SUPPORTED_LANGUAGE);
        const locale = store.locale;

        expect(locale).toBe(ANY_SUPPORTED_LANGUAGE.locale);
    });

    test("givenErrorOnLanguageHandler_whenChangingLanguage_thenLocaleIsNotModified", () => {
        const store = getStoreInstance();

        store.changeLanguage(ANY_SUPPORTED_LANGUAGE);
        const locale = store.locale;

        expect(locale).not.toBe(ANY_SUPPORTED_LANGUAGE.locale);
    });
});
