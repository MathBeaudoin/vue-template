import { expect, test, describe, beforeEach, vi } from "vitest";
import { useUserSessionStore } from "@/stores/user/userSessionStore";
import { createPinia, setActivePinia } from "pinia";
import { LanguageService } from "@/services/i18n/languageService";
import { ThemeService } from "@/services/themes/themeService";

describe("stores/userSessionStore", () => {
    const ANY_SUPPORTED_LANGUAGE: any = {
        locale: "any_locale",
    };
    const ANY_SUPPORTED_THEME: any = {
        label: "any_theme",
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

    test("whenChangingLanguage_thenLanguageServiceSelectsNewLanguage", () => {
        const store = getStoreInstance();
        const languageServiceSpy = vi.spyOn(LanguageService, "selectLanguage");

        store.changeLanguage(ANY_SUPPORTED_LANGUAGE);

        expect(languageServiceSpy).toHaveBeenCalledExactlyOnceWith(ANY_SUPPORTED_LANGUAGE);
    });

    test("whenChangingLanguage_thenLocaleIsUpdated", () => {
        const store = getStoreInstance();
        vi.spyOn(LanguageService, "isValidLanguage").mockReturnValue(true);

        store.changeLanguage(ANY_SUPPORTED_LANGUAGE);
        const locale = store.locale;

        expect(locale).toBe(ANY_SUPPORTED_LANGUAGE.locale);
    });

    test("givenErrorOnLanguageService_whenChangingLanguage_thenLocaleIsNotModified", () => {
        const store = getStoreInstance();

        store.changeLanguage(ANY_SUPPORTED_LANGUAGE);
        const locale = store.locale;

        expect(locale).not.toBe(ANY_SUPPORTED_LANGUAGE.locale);
    });

    test("whenChangingTheme_thenThemeServiceSelectsNewTheme", () => {
        const store = getStoreInstance();
        const themeServiceSpy = vi.spyOn(ThemeService, "selectTheme");

        store.changeTheme(ANY_SUPPORTED_THEME);

        expect(themeServiceSpy).toHaveBeenCalledExactlyOnceWith(ANY_SUPPORTED_THEME);
    });

    test("whenChangingTheme_thenThemeIsUpdated", () => {
        const store = getStoreInstance();
        vi.spyOn(ThemeService, "isValidTheme").mockReturnValue(true);

        store.changeTheme(ANY_SUPPORTED_THEME);
        const theme = store.theme;

        expect(theme).toBe(ANY_SUPPORTED_THEME.label);
    });

    test("givenErrorOnThemeService_whenChangingTheme_thenThemeIsNotModified", () => {
        const store = getStoreInstance();

        store.changeTheme(ANY_SUPPORTED_THEME);
        const theme = store.theme;

        expect(theme).not.toBe(ANY_SUPPORTED_THEME.theme);
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
        expect(store.theme).toBe("light");
    });

    test("whenRefreshingUserSession_thenSelectsThemeAndLanguage", () => {
        const languageServiceSpy = vi.spyOn(LanguageService, "selectLanguage");
        const themeServiceSpy = vi.spyOn(ThemeService, "selectTheme");
        const store = getStoreInstance();

        store.refreshSession();

        expect(languageServiceSpy).toHaveBeenCalledOnce();
        expect(themeServiceSpy).toHaveBeenCalledOnce();
    });
});
