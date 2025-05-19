import { defineStore } from "pinia";
import type { Locale, Theme } from "@stores/user/types";

export const useUserSessionStore = defineStore("userSessionStore", {
    state: () => ({
        theme: "dark" as Theme,
        locale: "en" as Locale,
    }),

    actions: {
        isAuthenticated() {
            return false;
        },

        refreshSession() {},
    },

    persist: true,
});
