import { defineStore } from "pinia";
import type { SupportedThemeLabel } from "@/services/themes/types";
import type { SupportedLanguage, SupportedLocale } from "@/services/i18n/types";
import { LanguageService } from "@/services/i18n/languageService";

export const useUserSessionStore = defineStore("userSessionStore", {
    state: () => ({
        theme: "light" as SupportedThemeLabel,
        locale: "en" as SupportedLocale,
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
            const localeOrError = LanguageService.selectLanguage(newLanguage);
            if (localeOrError instanceof Error) {
                return;
            }

            this.locale = localeOrError;
        },

        refreshSession(): void {},
    },

    persist: true,
});
