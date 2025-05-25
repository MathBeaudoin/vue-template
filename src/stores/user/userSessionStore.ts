import { defineStore } from "pinia";
import type { Theme } from "@/stores/user/types";
import type { SupportedLanguage, SupportedLocale } from "@/i18n/types";
import { LanguageHandler } from "@/i18n/languageHandler";

export const useUserSessionStore = defineStore("userSessionStore", {
    state: () => ({
        theme: "light" as Theme,
        locale: "en" as SupportedLocale,
        languageHandler: new LanguageHandler(),
    }),

    actions: {
        isAuthenticated(): boolean {
            return false;
        },

        isDarkTheme(): boolean {
            return this.theme === "dark";
        },

        changeTheme(): void {
            if (this.isDarkTheme()) {
                this.theme = "light";
            } else {
                this.theme = "dark";
            }
        },

        changeLanguage(newLanguage: SupportedLanguage<any>): void {
            const localeOrError = this.languageHandler.select(newLanguage);
            if (localeOrError instanceof Error) {
                return;
            }

            this.locale = localeOrError;
        },

        refreshSession(): void {},
    },

    persist: true,
});
