import { defineStore } from "pinia";
import type { Locale, Theme } from "@stores/user/types";

export const useUserSessionStore = defineStore("userSessionStore", {
    state: () => ({
        theme: "dark" as Theme,
        locale: "fr" as Locale,
    }),

    actions: {
        isAuthenticated() {
            return true;
        }
    },

    persist: true
});
