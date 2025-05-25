import { defineStore } from "pinia";
import { i18n } from "@/i18n/i18n";
import type { Locale, Theme } from "@/stores/user/types";

export const useUserSessionStore = defineStore("userSessionStore", {
    state: () => ({
        theme: "light" as Theme,
        locale: "en" as Locale,
    }),

    actions: {
        isAuthenticated() {
            return false;
        },

        isDarkTheme() {
            return this.theme === "dark";
        },

        changeTheme() {
            if (this.isDarkTheme()) {
                this.theme = "light";
            } else {
                this.theme = "dark";
            }
        },

        changeLocale() {
            if (this.locale === "fr") {
                this.locale = "en";
            } else {
                this.locale = "fr";
            }

            i18n.global.locale.value = this.locale;
        },

        refreshSession() {},
    },

    persist: true,
});
