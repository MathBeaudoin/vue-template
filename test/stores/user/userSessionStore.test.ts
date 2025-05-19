import { expect, test, describe, vi, beforeEach } from "vitest";
import { useUserSessionStore } from "@stores/user/userSessionStore";
import { createPinia, setActivePinia } from "pinia";

describe("userSessionStore", () => {
    const getStoreInstance = () => {
        return useUserSessionStore();
    };

    beforeEach(() => {
        setActivePinia(createPinia());
    })

    test("whenCheckingNewUserState_thenIsNotAuthenticated", () => {
        const store = getStoreInstance();

        expect(store.isAuthenticated()).toBeFalsy();
    })
})